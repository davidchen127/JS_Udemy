// init classes
const gitHub = new GitHub();
const ui = new UI();

// search input
const searchUser = document.getElementById("searchUser");

// search input event listener
searchUser.addEventListener("keyup", (e) => {
  // get input
  const userText = e.target.value;

  if (userText !== "") {
    // make http call
    gitHub.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("user not found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
