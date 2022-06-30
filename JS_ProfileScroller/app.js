const data = [
  {
    name: 'Harry Mole',
    age: 25,
    degree: 'Bachelor',
    location: 'Berlin',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
  },
  {
    name: 'Penny Wordo',
    age: 25,
    degree: 'Master',
    location: 'Hamburg',
    image: 'https://randomuser.me/api/portraits/women/19.jpg',
  },
  {
    name: 'Kenny Jay Williams',
    age: 25,
    degree: 'Bachelor',
    location: 'Tokyo',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
];
// assign the data to the iterator
const profiles = profileIterator(data);
// call the first profile automatically
document.addEventListener('DOMContentLoaded', nextProfile);

// get next profile and display
document.getElementById('next').addEventListener('click', nextProfile);
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile.name !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group>
      <li class="list-group-item"><img src="${currentProfile.image}"></li>
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Degree: ${currentProfile.degree}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
      `;
  } else {
    document.getElementById('next').disabled = true;
    document.getElementById(
      'profileDisplay'
    ).innerHTML = `No more profiles. The page will reload in 3 seconds`;
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
}

// Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { value: 'No more profiles', done: true };
    },
  };
}
