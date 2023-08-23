const input = document.querySelector('.input');
const btnAdd = document.querySelector('.btn-add');
const renderList = document.querySelector('.render-list');


let items = getItemsLocalStorage();
render(items);

btnAdd.addEventListener('click', addItemToLocalStorage);
function addItemToLocalStorage(e) {
  e.preventDefault();
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const item = input.value;
  if (!item) {
    alert('Please enter the value in input !');
  } else {
    items.push({ value: item });
    input.value = '';
    localStorage.setItem('items', JSON.stringify(items));
  }
  render(getItemsLocalStorage());
}

function render(items) {
  let content = '<ul>';
  items.forEach((item, index) => {
    content += `
    <li class="item">
      <p class="item-value">${item.value}</p>
      <i class="fa-solid fa-trash-can item-ic-delete" onclick="deleteItem(${index})"></i>
    </li>
    `
  })
  content += '</ul>';
  renderList.innerHTML = content;
}

function getItemsLocalStorage() {
  return localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
}


function deleteItem(id) {
  if (confirm('Are you sure you want to delete?')) {
    const items = getItemsLocalStorage();
    items.splice(id, 1);
    localStorage.setItem('items', JSON.stringify(items));
    render(items);
  }
}

