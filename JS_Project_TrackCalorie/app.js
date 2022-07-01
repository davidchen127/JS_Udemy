// storage controller

// item controller
const ItemConroller = (function () {
  // Item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // data structure / state
  const data = {
    items: [
      //   { id: 0, name: 'Steak Menu', calories: 800 },
      //   { id: 0, name: 'Instant noodles', calories: 500 },
      //   { id: 0, name: 'Banana', calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  // public methods
  return {
    getItems() {
      return data.items;
    },
    logData() {
      return data;
    },
    addItem(name, calories) {
      let ID;
      // create ID
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // calories to number
      calories = parseInt(calories);
      // create new item
      newItem = new Item(ID, name, calories);
      data.items.push(newItem);
      return newItem;
    },
  };
})();

// ui controller -----------------------------
const UIConroller = (function () {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
  };

  return {
    populateItemList(items) {
      let html = '';
      items.forEach((item) => {
        html += `
            <li id="item-${item.id}" class="collection-item"
            <strong>${item.name}:</strong><em> ${item.calories} Kcal</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a></li>
            `;
      });
      // insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getSelectors() {
      return UISelectors;
    },

    getItemInput() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },

    addListItem(item) {
      // show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';

      // create li element
      const li = document.createElement('li');
      // add class
      li.classList.add('collection-item');
      // add id
      li.id = `item-${item.id}`;
      // add html
      li.innerHTML = `<strong>${item.name}:</strong><em> ${item.calories} Kcal</em>
      <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
      // insert item
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement('beforeend', li);
    },

    clearInput() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },

    hideList() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
  };
})();

// app controller -----------------------------
const App = (function (ItemConroller, UIConroller) {
  // hook up event listeners
  const loadEventListeners = function () {
    const UISelectors = UIConroller.getSelectors();

    // add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);
  };

  const itemAddSubmit = function (e) {
    // get form input from UIController
    const input = UIConroller.getItemInput();

    // check for name and calorie input
    if (input.name !== '' && input.calories !== '') {
      // add item
      const newItem = ItemConroller.addItem(input.name, input.calories);
      // add item to the list
      UIConroller.addListItem(newItem);
    }

    // clear input fields
    UIConroller.clearInput();
    e.preventDefault();
  };
  // public methods
  return {
    init() {
      console.log('initializing app');
      // fetch items from data structures / local storage
      const items = ItemConroller.getItems();
      if (items.length === 0) {
        UIConroller.hideList();
      } else {
        UIConroller.populateItemList(items);
      }
      // populate list with items
      loadEventListeners();
    },
  };
})(ItemConroller, UIConroller);

// initialize app
App.init();
