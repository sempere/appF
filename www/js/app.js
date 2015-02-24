// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('financeApp', ['ionic', 'financeApp.controllers', 'financeApp.services', 'ngCordova']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
//    db = $cordovaSQLite.openDB({ name : "my.db"});
//    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
  });
});


app.controller("ExampleController", function($scope, $cordovaSQLite, $cordovaLocalNotification, BD, $cordovaSQLite) {
    $scope.probando = "Prueba que puedes";
       
    $scope.insert = function(a,b) {
        BD.insert('Alvaro', 'Negredo');
        $cordovaLocalNotification.add({message : 'Elemento insertado' });
    };
        
    $scope.select = function(lastname) {
        var query = BD.select();
        $cordovaSQLite.execute(BD.get(), query, [lastname]).then(function(result) {
            if(result.rows.length > 0) {
                console.log("SELECTadasdas -> " + result.rows.item(0).firstname + " " + result.rows.item(0).lastname);
                $scope.probando = result.rows.item(0).firstname;
            } else {
                console.log("NO ROWS FOUNDED");
            }
        }, function(error) {
            console.log(error);
        });
        
    };
    
    
    
});


