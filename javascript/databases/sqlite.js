if(window.openDatabase) {
  console.log('Browser supports Web SQL Database');
  // Open and create Database
  var db = openDatabase(
    'mydb',
    '1.0',
    'My database',
    2 * 1024 * 1024
  );

  // Just for test clean tables
  // Delete Table
  db.transaction(function(tx) {
    tx.executeSql(
      'DROP TABLE IF EXISTS contacts',
      [],
      function(tx, results) {
        console.log('Success!', tx, results);
      },
      function(tx, error) {
        console.warn('Table doesn\'t droped', tx, error);
      }
    );
  });

  // Create Table
  db.transaction(function(tx) {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS contacts (id, name)',
      [],
      function(tx, results) {
        console.log('Success!', tx, results);
      },
      function(tx, error) {
        console.warn('Table already exits', tx, error);
      }
    );
  });

  // CRUD
  // Create (INSERT)
  db.transaction(function(tx) {
    tx.executeSql(
      'INSERT INTO contacts (id, name) VALUES (1, "John Doe")',
      [],
      function(tx, results) {
        console.log('Success! Contact inserted!', tx, results);
      },
      function(tx, error) {
        console.warn('Error! Contact doesn\'t inserted', tx, error);
      }
    );
  });
  db.transaction(function(tx) {
    tx.executeSql(
      'INSERT INTO contacts (id, name) VALUES (2, "Mary Doe")',
      [],
      function(tx, results) {
        console.log('Success! Contact inserted!', tx, results);
      },
      function(tx, error) {
        console.warn('Error! Contact doesn\'t inserted', tx, error);
      }
    );
  });

  // Read (SELECT)
  db.transaction(function(tx) {
    tx.executeSql(
      'SELECT * FROM contacts',
      [],
      function(tx, results) {
        var len = results.rows.length;
        console.log('Exists ' + len + ' registers!');
        for(var i = 0; i < len; i++) {
          var row = results.rows.item(i);
          console.log(row.id + ': ' + row.name);
        }
      },
      function(tx, error) {
        console.warn('Ops ' + error.message);
      }
    );
  });

  // Update (UPDATE)
  db.transaction(function(tx) {
    tx.executeSql(
      'UPDATE contacts SET name = "Douglas Adams" WHERE id = 1',
      [],
      function(tx, results) {
        console.log('Updated!', tx, results);
      },
      function(tx, error) {
        console.log('Error ', tx, error);
      }
    );
  });

  // Delete
  db.transaction(function(tx) {
    tx.executeSql(
      'DELETE FROM contacts WHERE id = 2',
      [],
      function(tx, results) {
        console.log('Deleted!', tx, results);
      },
      function(tx, error) {
        console.log('Error ', tx, error);
      }
    );
  });

} else {
  console.error('Browser doesn\'t support Web SQL Database');
}
















