function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if(req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error('Network Error'));
    };

    // Make the request
    req.send();
  });
}

get('story.json').then(function(response) {
  console.log('Success!', response);
}, function(error) {
  console.error('Failed!', error);
});

/**
 * Chaining
 */
get('story.json').then(function(response) {
  console.log('Success!', response);
});

get('story.json').then(function(response) {
  return JSON.parse(response);
}).then(function(response) {
  console.log('Yey JSON!', response);
});

get('story.json').then(JSON.parse).then(function(response) {
  console.log('Yey JSON!', response);
});

function getJSON(url) {
  return get(url).then(JSON.parse);
}

getJSON('story.json').then(function(story) {
  return getJSON(story.chapterUrls[0]);
}).then(function(chapter1) {
  console.log('Get chapter 1!', chapter1);
});

// Queuing asynchronous actions

var storyPromise;

function getChapter(i) {
  storyPromise = storyPromise || getJSON('story.json');

  return storyPromise.then(function(story) {
    return getJSON(story.chapterUrls[i]);
  });
}

// and using it is simple:
getChapter(0).then(function(chapter) {
  console.log(chapter);
  return getChapter(1);
}).then(function(chapter) {
  console.log(chapter);
});

// Error handling
get('story.json').then(function(response) {
  console.log('Success!', response);
}).catch(function(error) {
  console.log('Failed!', error);
});


get('story.json').then(function(response) {
  console.log('Success!', response);
}).then(undefined, function(error) {
  console.log('Failed!', error);
});

asyncThing1().then(function() {
  return asyncThing2();
}).then(function() {
  return asyncThing3();
}).catch(function(err) {
  return asyncRecovery1();
}).then(function() {
  return asyncThing4();
}, function(err) {
  return asyncRecovery2();
}).catch(function(err) {
  console.log("Don't worry about it");
}).then(function() {
  console.log("All done!");
});

// JavaScript exceptions and promises
var jsonPromise = new Promise(function(resolve, reject) {
  // JSON.parse throws an error if you feed ir some
  // invalid JSON, so this implicity rejects:
  resolve(JSON.parse('This ain\'t JSON'));
});

jsonPromise.then(function(data) {
  // This never happens:
  console.log('It worked!', data);
}).catch(function(err) {
  // Insted, this happers:
  console.log('It failed!', err);
});

get('/').then(JSON.parse).then(function() {
  // This never happers, '/' is an HTML page, not JSON
  // so JSON.parse throws
  console.log('It worked!', data);
}).catch(function(err) {
  // Instead, this happens:
  console.log('It failed!', err);
});

// Error handling in practice
getJSON('story.json').then(function(story) {
  return getJSON(story.chapterUrls[0]);
}).then(function(chapter1) {
  addHtmlToPage(chapter1.html);
}).catch(function() {
  addTextToPage('Failed to show chapter');
}).then(function() {
  document.querySelector('.spinner').style.display = 'none';
});

try {
  var story = getJSONSync('story.json');
  var chapter1 = getJSONSync(story.chapterUrls[0]);
  addHtmlToPage(chapter1.html);
} catch(e) {
  addTextToPage('Failed to show chapter');
}

document.querySelector('.spinner').style.display = 'none';

function getJSON(url) {
  return get(url).then(JSON.parse).catch(function(err) {
    console.log('getJSON failed for', url, err);
    throw err;
  });
}

// Parallelism and sequencing - Getting the best of both

try {
  var story = getJSONSync('story.json');
  addHtmlToPage(story.heading);

  story.chapterUrls.forEach(function(chapterUrl) {
    var chapter = getJSONSync(chapterUrl);
    addHtmlToPage(chapter.html);
  });

  addTextToPage('All done');
} catch(err) {
  addTextToPage('Argh, broken: ' + err.message);
}

document.querySelector('.spinner').style.display = 'none';

getJSON('story.json').then(function(story) {
  addHtmlToPage(story.heading);

  // TODO: for each url in story.chapterUrls, fetch & display
}).then(function() {
  // And we're all done!
  addTextToPage('All done');
}).catch(function(err) {
  // Catch any error that happened along the way
  addTextToPage('Argh, broken: ' + err.message);
}).then(function() {
  // Always hide the spinner
  document.querySelector('.spinner').style.display = 'none';
});

// But how can we loop through the chapter urls and fetch them in order?
// This doesn't work:

story.chapterUrls.forEach(function(chapterUrl) {
  // Fetch chapter
  getJSON(chapterUrl).then(function(chapter) {
    // and add it to the page
    addHtmlToPage(chapter.html);
  });
});


// Creating a sequence

// Start off with a promise that always resolves
var sequence = Promise.resolve();

// Loop through our chapter urls
story.chapterUrls.forEach(function(chapterUrl) {
  // Add these actions to the end of the sequence
  sequence = sequence.then(function() {
    return getJSON(chapterUrl);
  }).then(function(chapter) {
    addHtmlToPage(chapter.html);
  });
});

// Loop through our chapter urls
story.chapterUrls.reduce(function(sequence, chapterUrl) {
  // Add these actions to the end of the sequence
  return sequence.then(function() {
    return getJSON(chapter);
  }).then(function(chapter) {
    addHtmlToPage(chapter.html);
  });
}, Promise.resolve());


// Put it all together

getJSON('story.json').then(function(story) {
  addHtmlToPage(story.heading);

  return story.chapterUrls.reduce(function(sequence, chapterUrl) {
    // Once the last chapter's promise is done...
    return sequence.then(function() {
      // ...fetch the next chapter
      return getJSON(chapterUrl);
    }).then(function(chapter) {
      // and add it to the page
      addHtmlToPage(chapter.html);
    });
  }, Promise.resolve());
}).then(function() {
  // And we're all done!
  addTextToPage('All done');
}).catch(function(err) {
  // Catch any error that happened along the way
  addTextToPage('Argh, broken: ' + err.message);
}).then(function() {
  // Always hide the spinner
  document.querySelector('.spinner').style.display = 'none';
});

// Promise.all

Promise.all(arrayOfPromises).then(function(arrayOfResults) {
  // ...
});

getJSON('story.json').then(function(story) {
  addHtmlToPage(story.heading);

  // Take an array of promises and wait on them all
  return Promise.all(
    // Map our array of chapter urls to
    // and array of chapter json promises
    story.chapterUrls.map(getJSON);
  );
}).then(function(chapters) {
  // Now we have the chapters jsons in order! Loop through...
  chapters.forEach(function(chapter) {
    // ...and add to the page
    addTextToPage(chapter.html);
  });
  addTextToPage('All done');
}).catch(function(err) {
  // catch any error that happened so far
  addTextToPage('Argh, broken: ' + err.message);
}).then(function() {
  document.querySelector('.spinner').style.display = 'none';
});


getJSON('story.json').then(function(story) {
  addHtmlToPage(story.heading);

  // Map our array of chapter urls to
  // an array of chapter json promises.
  // This makes sure they all download parallel.
  return story.chapterUrls.map(getJSON)
    .reduce(function(sequence, chapterPromise) {
      // Use reduce to chain the promises together,
      // adding content to the page for each chapter
      return sequence.then(function() {
        // Wait for everithing in the sequence so far,
        // then wait for this chapter to arrive.
        return chapterPromise;
      }).then(function(chapter) {
        addHtmlToPage(chapter.html);
      });
    }, Promise.resolve());
}).then(function() {
  addTextToPage('All done');
}).catch(function(err) {
  // catch any error that happened along the way
  addTextToPage('Argh, broken: ' + err.message);
}).then(function() {
  document.querySelector('.spinner').style.display = 'none';
});

















