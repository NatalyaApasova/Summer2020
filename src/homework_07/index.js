1.
const list = document.getElementById('list');
const toggleListItems = function (e) {
    Array.from(e.target.children).forEach((child) => {
      Array.from(child.children).forEach((li) => {
        
        li.classList.toggle('hidden');
      })
    });
  }
list.addEventListener('click', toggleListItems);

2.
const imgWidth = 410;
const imgAmount = 3;

const prev = document.getElementById('backward');
const next = document.getElementById('forward');

let position = 0;

const carousel = document.getElementById('carousel');
const liArr = carousel.querySelectorAll('ul li');

function onPrev() {
  position += imgWidth * imgAmount;
  position = Math.min(position, 0)
  carousel.style.marginLeft = position + 'px';
}

prev.addEventListener('click', onPrev);

function onNext() {
  position -= imgWidth * imgAmount;
  position = Math.max(position, -imgWidth * (liArr.length - imgAmount));
  carousel.style.marginLeft = position + 'px';
}

next.addEventListener('click', onNext);

3.
const input = document.getElementById('todo-input');
const button = document.getElementById('todo-button');
const items = document.getElementById('todo-items');

const showAllButton = document.createElement('button');
showAllButton.innerHTML = '<span>show all</span>';
items.appendChild(showAllButton);

function manipulateTodoList() {
  if (input.value) {
    const li = document.createElement('li');

    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<span>X</span>';

    const hideButton = document.createElement('button');
    hideButton.innerHTML = '<span>hide</span>'

    itemText = document.createTextNode(input.value + '\u00A0');

    items.appendChild(li).appendChild(itemText);
    items.appendChild(li).appendChild(hideButton);
    items.appendChild(li).appendChild(removeButton);

    const remove = function() {
      this.parentNode.remove();
    }
    removeButton.addEventListener('click', remove);

    const hide = function() {
      this.parentNode.classList.add('hidden');
    }
    hideButton.addEventListener('click', hide);

    const show = function() {
      Array.from(items.children).forEach((child) => {
        child.classList.remove('hidden');
      });
    }
    showAllButton.addEventListener('click', show);
  }
  input.value = '';
}

button.addEventListener('click', manipulateTodoList);
