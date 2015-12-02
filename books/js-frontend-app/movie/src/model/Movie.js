function Movie(slots) {
  this.movieId = slots.movieId;
  this.title = slots.title;
  this.releaseDate = slots.releaseDate;
}

Movie.instances = {};

Movie.add = function(slots) {
  var movie = new Movie(slots);
  Movie.instances[slots.movieId] = movie;
  console.log('Movie ' + slots.movieId + ' created!');
};

Movie.update = function(slots) {
  var movie = Movie.instances[slots.movieId];
  if (movie.title !== slots.title) {
    movie.title = slots.title
  }
  if (movie.releaseDate !== slots.releaseDate) {
    movie.releaseDate = slots.releaseDate;
  }
  console.log('Movie ' + slots.movieId + ' modified!');
};

Movie.delete = function(movieId) {
  if (Movie.instances[movieId]) {
    console.log('Movie ' + movieId + ' deleted!');
    delete Movie.instances[movieId];
  } else {
    console.log('There is no movie with ID ' + movieId + ' in the database');
  }
};

Movie.loadAll = function() {
  var key = '';
  var keys = [];
  var moviesString = '';
  var movies = {};

  try {
    if (localStorage['movies']) {
      moviesString = localStorage['movies'];
    }
  } catch (e) {
    alert('Error when reading from Local Storage\n' + e);
  }

  if (moviesString) {
    movies = JSON.parse(moviesString);
    keys = Object.keys(movies);
    console.log(keys.length + ' books loaded.');
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      Movie.instances[key] = Movie.convertRow2Obj(movies[key]);
    }
  }
};

Movie.saveAll = function() {
 var moviesString = '';
 var error = false;
 var nmrOfMovies = Object.keys(Movie.instances).length;

 try {
  moviesString = JSON.stringify(Movie.instances);
  localStorage['movies'] = moviesString;
 } catch (e) {
  alert('Error when writing to Local Storage\n' + e);
  error = true;
 }

 if (!error) {
  console.log(nmrOfMovies + ' movies saved.');
 }
};

Movie.clearData = function() {
  if (confirm('Do you really want to delete all movie data?')) {
    localStorage['movies'] = '{}';
  }
};

// Convert row to object
Movie.convertRow2Obj = function(movieRow) {
  var movie = new Movie(movieRow);
  return movie;
};

Movie.createTestData = function() {
  Movie.instances["1"] = new Movie({
    movieId: "1",
    title: "Pulp Fiction",
    releaseDate: new Date('1994-05-12'),
  });

  Movie.instances["2"] = new Movie({
    movieId: "2",
    title: "Star Wars",
    releaseDate: new Date('1977-05-25'),
  });

  Movie.instances["3"] = new Movie({
    movieId:"3",
    title: "Casablanca",
    releaseDate: new Date('1943-01-23'),
  });

  Movie.instances["4"] = new Movie({
    movieId:"4",
    title: "The Godfather",
    releaseDate: new Date('1972-03-15'),
  });

  Movie.saveAll();
};
