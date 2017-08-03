(function() {
    function ModalCtrl(Room) {
        this.Room = Room;
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', ModalCtrl]);
})();
