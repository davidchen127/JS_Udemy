// basic structure
// (function(){
//     // declare private variables and functions

//     return{
//         // declare public variables and functions
//     }
// })();

// Standard Module Pattern - similar to using setter/getter within OOP
// The UICtrl is basically an object (see the return part), so the returned function serves like a getter to access the private variables/functions (the text variable and changeText()) inside the function body
{
  const UICtrl = (function () {
    let text = 'hello my friend';

    const changeText = function () {
      const element = document.querySelector('h1');
      element.textContent = text;
    };

    return {
      callChangeText() {
        changeText();
        console.log(text);
      },
    };
  })();

  // Call the function
  // console.log(typeof UICtrl);
  // UICtrl.callChangeText();
}

// Revealing Module Pattern
{
  const itemCtrl = (function () {
    let data = []; // "_data" with the underscore means private

    function add(item) {
      data.push(item);
      console.log('item added');
    }

    function get(id) {
      return data.find((item) => {
        return item.id === id;
      });
    }

    return {
      //   add: add,
      //   get: get,
      add, // simple version to reveal the function with the same name above
      get,
    };
  })();

  itemCtrl.add({ id: 1, brand: 'BMW' });
  itemCtrl.add({ id: 2, brand: 'Land Rover' });
  console.log(itemCtrl.get(2));
  //   console.log(typeof itemCtrl);
}
