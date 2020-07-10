var dbPromised = idb.open("football-mania", 1, function(upgradeDb) {
    var articlesObjectStore = upgradeDb.createObjectStore("teams", {
      keyPath: "id"
    });
    articlesObjectStore.createIndex("id", "id", { unique: true });
});

const saveTeam = (team) => {
    dbPromised
      .then(function(db) {
        var tx = db.transaction("teams", "readwrite");
        var store = tx.objectStore("teams");
        console.log(team);
        store.put(team);
        return tx.complete;
      })
      .then(function() {
        console.log("Team telah tersimpan.");
      });
}

const getAll = () => {
    return new Promise(function(resolve, reject) {
      dbPromised
        .then(function(db) {
          var tx = db.transaction("teams", "readonly");
          var store = tx.objectStore("teams");
          return store.getAll();
        })
        .then(function(teams) {
          resolve(teams);
        });
    });
}

const getById = id => {
    return new Promise(function(resolve, reject) {
      dbPromised
        .then(function(db) {
          var tx = db.transaction("teams", "readonly");
          var store = tx.objectStore("teams");
          return store.get(id);
        })
        .then(function(team) {
          resolve(team);
        });
    });
}


export { saveTeam, getAll, getById };