const answerBlock = document.getElementById('answer');
const getAlbumsButton = document.getElementById('albums_button');
const getTodosButton = document.getElementById('todos_button');
const getPostsButton = document.getElementById('posts_button');
const postUsersButton = document.getElementById('user_button');
const deleteRequestsButton = document.getElementById('delrequests_button');

const getAlbums = function() {
  const xhr = new XMLHttpRequest();
  const albumsUrl = `https://jsonplaceholder.typicode.com/users/1/albums`;
  xhr.open('GET', albumsUrl);
  xhr.responseType = 'text';
  xhr.send();

  xhr.onload = function() {
    let response = xhr.response;
    let answer = document.createTextNode(response);
    answerBlock.append(answer);
  }

  xhr.onerror = function(err) {
    let answer = document.createTextNode(err);
    answerBlock.append(answer);
  }
}

getAlbumsButton.addEventListener('click', getAlbums);

const getTodos = function() {
  const xhr = new XMLHttpRequest();
  const todosUrl = `https://jsonplaceholder.typicode.com/users/1/todos`;
  xhr.open('GET', todosUrl);
  xhr.responseType = 'text';
  xhr.send();

  xhr.onload = function() {
    let response = xhr.response;
    let answer = document.createTextNode(response);
    answerBlock.append(answer);
  }

  xhr.onerror = function(err) {
    let answer = document.createTextNode(err);
    answerBlock.append(answer);
  }
}

getTodosButton.addEventListener('click', getTodos);

const getPosts = function() {
  const xhr = new XMLHttpRequest();
  const postsUrl = `https://jsonplaceholder.typicode.com/users/1/posts`;
  xhr.open('GET', postsUrl);
  xhr.responseType = 'text';
  xhr.send();

  xhr.onload = function() {
    let response = xhr.response;
    let answer = document.createTextNode(response);
    answerBlock.append(answer);
  }

  xhr.onerror = function(err) {
    let answer = document.createTextNode(err);
    answerBlock.append(answer);
  }
}

getPostsButton.addEventListener('click', getPosts);

const postUsers = function() {
  const data = JSON.stringify(
    {
      'userId': 11,
      'id': 11,
      'name': 'Edward Black',
      'username': 'Eddy'
    }
  );

  const xhr = new XMLHttpRequest();
  const usersUrl = `https://jsonplaceholder.typicode.com/users`;
  xhr.open('POST', usersUrl);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.responseType = 'text';

  xhr.onload = function() {
    let response = xhr.response;
    let answer = document.createTextNode(response);
    answerBlock.append(answer);
  }

  xhr.onerror = function(err) {
    let answer = document.createTextNode(err);
    answerBlock.append(answer);
  }
  xhr.send(data);
}

postUsersButton.addEventListener('click', postUsers);

const delRequests = function() {
  const data = null;
  const xhr = new XMLHttpRequest();
  const usersUrl = `https://jsonplaceholder.typicode.com/users/1`;
  xhr.responseType = 'text';
  xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
      let response = xhr.response;
      let answer = document.createTextNode(response);
      answerBlock.append(answer);
    }
  }
  xhr.open('DELETE', usersUrl);
  xhr.send(data);
}

deleteRequestsButton.addEventListener('click', delRequests);
