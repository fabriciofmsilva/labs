var friends = ['Luci', 'Samira', 'Juliano'];
var newFriends = 'Alicia';

friends.push(newFriends);

// friends
// ['Luci', 'Samira', 'Juliano', 'Alicia']

var exFriend = friends.pop();

// friends
// ['Luci', 'Samira', 'Juliano']

// [].pop();
// undefined

var coolPeople = ['Devin', 'Jeremy', 'Glenn', 'Brett', 'Steve'];

coolPeople.indexOf('Devin')
// > 0

coolPeople.indexOf('devin');
// > -1

var friends = ['Luci', 'Samira', 'Juliano'];

var friendsAsObj = friends.map(function(name) {
  return {
    name: name
  };
});

var friends = ['Luci', 'Samira', 'Juliano'];

friends.reduce(function(longestName, friend) {
  longestName = longestName || '';

  if (friend.length > longestName.length) {
    longestName = friend;
  }

  return longestName;
});

// > 'Juliano'

var authors = [
  { name: 'Spencer H.', sections: ['Business'] },
  { name: 'John C.', sections: ['Movies'] },
  { name: 'Rob J.', sections: ['Weather', 'Sports'] },
  { name: 'Josh F.', sections: ['Sports'] },
  { name: 'Megan M.', sections: ['World'] },
];

var sportsAuthors = [];
for (var i = 0; i < authors.length; i++) {
  if (authors[i].sections.indexOf('Sports')) {
    sportsAuthors.push(authors[i].name);
  }
}

sportsAuthors = authors.filter(function(author) {
  return author.sections.indexOf('Sports') >= 0;
}).map(function(sportsAuthor) {
  return sportsAuthor.name;
});

// sportsAuthors;
// > ['Rob J.', 'Josh F.']
