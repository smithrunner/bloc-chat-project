(function() {
    function Message($firebaseArray, $cookies) {
        var Message = {};
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId, index) {
            ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot) {
                Message.selectedRoom = snapshot.val();
                Message.selectedRoomId = roomId;
                Message.index = index;
            });
        }

        Message.classSwitcher = function(divclass) {
            if (divclass === 'darkchat') {
                return 'lightchat';
            } else if (divclass === 'lightchat') {
                return 'darkchat';
            };
        };


        Message.lastClass = 'lightchat';
        Message.userDivSelector = function(username) {
            if (Message.lastUsername == undefined) {
                Message.lastUsername = username;
                Message.lastClass = 'darkchat';
                return Message.lastClass;
            } else if (username != Message.lastUsername) {
                Message.lastClass = Message.classSwitcher(Message.lastClass);
                Message.lastUsername = username;
                return Message.lastClass;
            } else if (username == Message.lastUsername) {
                return Message.lastClass;
            };
        };

        Message.send = function(newMessage) {
            var chatUser = $cookies.get('blocChatCurrentUser');
            var datetime = new Date();
            var time = (datetime.getHours()-12) + ":" + datetime.getMinutes();
            var NewChat = {
                username : chatUser,
                sentat : time,
                content : newMessage,
                roomId : Message.selectedRoomId
            };
            messages.$add(NewChat);
            console.log(newMessage);
        };

        Message.all = messages;
        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
