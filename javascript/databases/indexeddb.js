// Basic Pattern

// 1. Open a database.
// 2. Create an object store in the database.
// 3. Start a transaction and make a request to do some database operation, like adding or retrieving data.
// 4. Wait for the operation to complete by listening to the right kind of DOM event.
// 5. Do something with the results (which can be found on the request object).

if(!window.indexedDB) {
  console.warn('Your browser doesn\'t support a stable version of indexedDB. Such and such will not be available');
}

const DB_NAME = 'myDB';
const DB_VERSION = 1;
const DB_STORE_NAME = 'publications';

var db;

function openDb() {
  console.log('openDB ...');
  var DBOpenRequest = window.indexedDB.open(DB_NAME, DB_VERSION);

  DBOpenRequest.onsuccess = function(event) {
    db = DBOpenRequest.result;
    console.log('openDb DONE');
  };

  DBOpenRequest.onerror = function(event) {
    console.error('openDb:', event.target.errorCode);
  };

  DBOpenRequest.onupgradeneeded = function(event) {
    console.log('openDb.onupgradeneeded');
    var store = event.currentTarget.result.createObjectStore(
      DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });

    store.createIndex('biblioid', 'biblioid', { unique: true });
    store.createIndex('title', 'title', { unique: false });
    store.createIndex('year', 'year', { unique: false });
  };
}

openDb();
