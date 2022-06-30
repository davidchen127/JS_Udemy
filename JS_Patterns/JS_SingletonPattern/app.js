// must be done in the form of Immediately-invoked Function Expression (IIFE)
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Tom' });
    return object;
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
