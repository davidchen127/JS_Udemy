function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe(fn) {
    this.observers.push(fn);
    console.log(`you are now subscribed to ${fn.name}`);
  },
  unsubscribe(fn) {
    // filter out the function (item) from the list. If the function does not match, it returns the existing list.
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`you are now unsubscrbed from ${fn.name}`);
  },

  fire() {
    this.observers.forEach(function (item) {
      item.call();
    });
  },
};

const click = new EventObserver();

// event listeners
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});

// Click handler
const getCurMilliseconds = function () {
  console.log(`current milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function () {
  console.log(`current milliseconds: ${new Date().getSeconds()}`);
};
