(function() {
    function HomeCtrl(Room) {
        this.Room = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
