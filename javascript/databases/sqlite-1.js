(function() {
  var localDB = null;

  function onInit() {
    if(window.openDatabase) {
      initDB();
    } else {
      console.error('Error: the browser doesn\'t support SQL Database');
    }
  }

  function initDB() {
    var db = {
      shortName: 'myDB',
      version: '1.0',
      displayName: 'My DB',
      maxSize: 2 * 1024 * 1024, // In bytes
    };

    createDB(db);
    createTable({
      name: 'contacts',
      params: [
        'id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT',
        'nome VARCHAR NOT NULL',
        'idade VARCHAR NOT NULL',
      ],
    });
    add();
  }

  function createDB(db) {
    localDB = window.openDatabase(db.shortName, db.version, db.displayName, db.maxSize);
    console.info('Database created!');
  }

  function createTable(table) {
    if(table === undefined) {
      console.warn('Table is empty');
      return false;
    }
    if(typeof table.name !== 'string') {
      console.warn('Name is not a `String`');
      return false;
    }

    var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + table.params.join(", ") + ');';
    localDB.transaction(function(transaction) {
      transaction.executeSql(
        query,
        [],
        function(transaction, result) {
          console.info('Table ' + table.name + ' created!');
          console.info('Rows Affected: ', result.rowsAffected, result);
        },
        function(transaction, error) {
          console.warn(transaction, error);
          console.warn('Table ' + table.name + ' not created!');
        }
      );
    });
  }

  function add() {
    var query = 'INSERT INTO contacts (nome, idade) VALUES (?, ?);';
    localDB.transaction(function(transaction) {
      transaction.executeSql(
        query,
        ['John Doe', 30],
        function(transaction, result) {
          console.info('Add!');
          console.info('Rows Affected: ', result.rowsAffected, result);
        },
        function(transaction, error) {
          console.warn(transaction, error);
          console.warn('Error');
        }
      );
    });
  }

  onInit();
})();

