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

    getTotalCalories() {
      let total = 0;
      data.items.forEach((item) => {
        total += item.calories;
      });
      data.totalCalories = total;
      return data.totalCalories;
    },

    getItemById(id) {
      let found = null;
      // loop through items
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },

    setCurrentItem(item) {
      data.currentItem = item;
    },

    getCurrentItem() {
      return data.currentItem;
    },

    updateItem(name, calories) {
      calories = parseInt(calories);

      let found = null;
      data.items.forEach(function (item) {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
  };
})();

// ui controller -----------------------------
const UIConroller = (function () {
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updatedBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
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

    showTotalCalories(totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent =
        totalCalories;
    },

    clearEditState() {
      UIConroller.clearInput();
      document.querySelector(UISelectors.updatedBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },

    addItemToForm() {
      document.querySelector(UISelectors.itemNameInput).value =
        ItemConroller.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value =
        ItemConroller.getCurrentItem().calories;
      UIConroller.showEditState();
    },

    showEditState() {
      document.querySelector(UISelectors.updatedBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },

    updateListItem(item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // turn node list into array
      listItems = Array.from(listItems);
      listItems.forEach(function (listitem) {
        const itemID = listitem.getAttribute('id');
        if (itemID === `item-${item.id}`) {
          document.querySelector(
            `#${itemID}`
          ).innerHTML = `<strong>${item.name}:</strong><em> ${item.calories} Kcal</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
        }
      });
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

    // edit icon click event
    document
      .querySelector(UISelectors.itemList)
      .addEventListener('click', itemEditSubmit);

    // update icon click event
    document
      .querySelector(UISelectors.updatedBtn)
      .addEventListener('click', itemUpdateSubmit);

    // disable submit on "ENTER"
    document.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });
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

    //get total calories
    const totalCalories = ItemConroller.getTotalCalories();
    UIConroller.showTotalCalories(totalCalories);

    // clear input fields
    UIConroller.clearInput();
    e.preventDefault();
  };

  const itemEditSubmit = function (e) {
    if (e.target.classList.contains('edit-item')) {
      // get list item id (item-0,...)
      const listID = e.target.parentNode.parentNode.id;

      // break into an array
      const listIDArr = listID.split('-');

      const id = parseInt(listIDArr[1]);

      // get item
      const itemToEdit = ItemConroller.getItemById(id);

      // set current item
      ItemConroller.setCurrentItem(itemToEdit);
      console.log(itemToEdit);

      // add item to form
      UIConroller.addItemToForm();
    }
    e.preventDefault();
  };

  // Update item submit
  const itemUpdateSubmit = function (e) {
    // get item input
    const input = UIConroller.getItemInput();

    // update item data
    const updateItem = ItemConroller.updateItem(input.name, input.calories);

    // update UI
    UIConroller.updateListItem(updateItem);
    e.preventDefault();
  };
  // public methods
  return {
    init() {
      console.log('initializing app');
      UIConroller.clearEditState();
      // fetch items from data structures / local storage
      const items = ItemConroller.getItems();
      if (items.length === 0) {
        UIConroller.hideList();
      } else {
        UIConroller.populateItemList(items);
      }
      // populate list with items
      loadEventListeners();
      const totalCalories = ItemConroller.getTotalCalories();
      UIConroller.showTotalCalories(totalCalories);
    },
  };
})(ItemConroller, UIConroller);

// initialize app
App.init();
