(function() {
    function BlocChatCookies($cookies, $uibModal, Room) {
        var BlocChatCookies = {};
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
                Room.openCookie();
        }

    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', 'Room', BlocChatCookies]);
})();
