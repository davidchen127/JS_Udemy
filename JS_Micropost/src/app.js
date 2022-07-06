import { http } from './http';
import { ui } from './ui';

// get posts on DOM load
document.addEventListener('DOMOnContentLoaded', getPosts);

function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => {
      console.log(data);
      ui.showPosts(data);
    })
    .catch((err) => console.log(err));
}
