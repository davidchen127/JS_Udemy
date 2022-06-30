const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Home state
const homeState = function (page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
<!--  <div class="p-5 mb-4 bg-light rounded-3">
  <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">Custom jumbotron</h1>
    <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
    <button class="btn btn-primary btn-lg" type="button">Example button</button>
  </div>
</div> -->
<div class="jumbotron">
    <h1 class="display-3">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
};

const aboutState = function (page) {
  document.querySelector('#heading').textContent = 'About us';
  document.querySelector('#content').innerHTML = `
  <p>This is the about page</P>
  `;
};

const contactState = function (page) {
  document.querySelector('#heading').textContent = 'Contact us';
  document.querySelector('#content').innerHTML = `
    <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    `;
};

// Instantiate pageState
const page = new PageState();

// init the first staet
page.init();

// UI vars
const home = document.getElementById('home'),
  about = document.getElementById('about'),
  contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState());

  e.preventDefault();
});

about.addEventListener('click', (e) => {
  page.change(new aboutState());

  e.preventDefault();
});

contact.addEventListener('click', (e) => {
  page.change(new contactState());

  e.preventDefault();
});
