(function() {
    function Room($firebaseArray, $uibModal) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        Room.instance = 0;

        Room.add = function(room) {
            rooms.$add({
                'room': room
            });
        };

        Room.open = function() {
          Room.instance = $uibModal.open({
                templateUrl : 'templates/modal.html',
                controller : 'ModalCtrl as modal'
            });
        };

        Room.cancel = function() {
            Room.instance.dismiss('cancel');
        };

        Room.enter = function(name) {
            if (name) {
                Room.add(name);
                Room.instance.close();
            }
        };


        Room.all = rooms;


        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray','$uibModal', Room]);
})();
