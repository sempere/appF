var services = angular.module('financeApp.services', []);

var db = null;

services.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    db = $cordovaSQLite.openDB({ name : "my.db"});
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
  });
});

services.service('BD', function($cordovaSQLite) {
    
        this.get = function() {
            return db;
        };
    
        this.insert = function(firstname, lastname) {
            var query = "INSERT INTO people (firstname, lastname) VALUES (?, ?)";
            $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(result) {
                    console.log("INSERT ID -> " + result.insertId);
            }, function(error) {
                    console.log(error);
            });
        };
        this.select = function() {
            var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
            return query;
        };
});

/**
 * A simple example service that returns some data.
 */
services.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  };
});
