(function() {
    function HomeCtrl(Room) {
        this.Room = Room;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','$uibModal', HomeCtrl]);
})();
