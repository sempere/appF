angular.module('financeApp.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicPlatform, $cordovaLocalNotification) {
  $scope.chat = Chats.get($stateParams.chatId);
  $ionicPlatform.ready(function() {
		$cordovaLocalNotification.add({message : 'Hello Local Notification' });
	});
        $scope.chat.lastText = "Probando";
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('NotifyCtrl', function($scope, $ionicPlatform, $cordovaLocalNotification) {

	
        });

       
