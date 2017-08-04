(function() {
    function HomeCtrl(Room, Message) {
        this.Room = Room;
        this.Message = Message;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message','$uibModal', HomeCtrl]);
})();
