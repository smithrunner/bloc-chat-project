(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.open = $ubiModal.open({
                templateUrl : 'templates/modal.html',
                controller : 'ModalCtrl'
            });


        Room.all = rooms;

        Room.add = function(room) {
            Room.all.$add({

            }).then(function(ref) {
                var id = ref.key();
            });
        };

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
