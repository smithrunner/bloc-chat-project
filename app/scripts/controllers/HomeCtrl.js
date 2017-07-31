(function() {
    function HomeCtrl(Room) {
        this.Room = Room.all;
        console.log(this.Room);
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
