const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const ChatRoom = function () {
  let users = {};

  return {
    register(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send(message, from, to) {
      if (to) {
        // single user message
        to.receive(message, from);
      } else {
        // broadcast to everyone
        for (key in users) {
          // except the one self who sends the message
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    },
  };
};

const tim = new User('Tim');
const helen = new User('Helen');
const leslie = new User('Leslie');

const room = new ChatRoom();

room.register(tim);
room.register(helen);
room.register(leslie);

tim.send('hi this is Tim, who are you?', leslie);
helen.send('wanna get high, Tim?', tim);
leslie.send('you guys are creepy, get out of my room');
