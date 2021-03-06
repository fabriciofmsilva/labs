spawn(function *() {
  try {
    // 'yield' effectively does an async wait,
    // returning the result of the promise
    let story = yield getJSON('story.json');
    addHtmlToPage(story.heading);

    // Map our array of chapter urls to
    // an array of chapter json promises.
    // This makes sure they all download parallel.
    let chapterPromises = story.chapterUrls.map(getJSON);

    for(let chapterPromise of chapterPromises) {
      // Wait for each chapter to be ready, then add it to the page
      let chapter = yield chapterPromise;
      addHtmlToPage(chapter.html);
    }

    addTextToPage('All done');
  } catch(err) {
    // try/catch just works, rejected promises are thrown here
    addTextToPage('Argh, broken: ' + err.message);
  }
  document.querySelector('.spinner').style.display = 'none';
});
