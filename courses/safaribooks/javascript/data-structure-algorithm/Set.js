var categories = new Set();
categories.add('Sports');
categories.add('Weather');
categories.add('Sports');

// > Set {'Sports', 'Weather'}

var coords = new Set();
coords.add({x: 10, y: 15});
coords.add({x: 20, y: 16});
coords.add({x: 30, y: 23});
coords.add({x: 40, y: 108});

coords.delete({x: 40, y: 108});
// > false

coords.forEach(function(point) {
  if (point.y > 20) {
    coords.delete(point);
    // > true
  }
});

var someSet = new Set();
for (var i = 0; i < i < 100; i++) {
  someSet.add(i);
}

someSet.length;
// > 100

someSet.clear();
someSet.length;
// > 0

var dates = new Set();
dates.add('2015-08-21');
dates.add('2015-08-06');
dates.add('2015-08-13');

datas.has('2015-09-08');
// > false

datas.has('2015-08-06');
// > true

var colors = new Set();
colors.add('red');
colors.add('blue');
colors.add('green');
colors.add('blue');
colors.add('red');

// Manually iterating
var itr = colors.values();
for (var c = itr.next(); !c.done; c = itr.next()) {
  console.log(c.value);
}

// Learning on for..of loop
for (var c of colors) {
  console.log(c);
}

colors.forEach(function(value, key, set) {
  console.log(value);
});

/**
 * @param {number} articleId
 * @param {Array} tags
 */
function saveArticle(articleId, tags) {
  var uniqueTags = new Set();

  tags.forEach(function(tag) {
    uniqueTags.add(tag);
  });

  uniqueTags.forEach(function(tag) {
    var tagId = saveTag(tag);
    addTagToArticle(articleId, tagId);
  });
}






















