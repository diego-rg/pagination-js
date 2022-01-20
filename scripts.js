const fakeDB = [];
const createFakeDB = () => {
    const totalItems = Math.floor(Math.random() * (50 - 25)) + 25;
    for(let i = 1; i <=totalItems; i++ ) {
        fakeDB.push(i);
    }
}
createFakeDB();

const dataContainer = document.getElementById("data-container");//Div onde se verán os datos
const paginationBar = document.getElementById("pagination-bar");//Div onde se verán os botóns

let currentPage = 1;//Páxina actual
let setItemsPerPage = 9;//Número de datos por páxina

function displayList (items, wrapper, itemsPerPage, page) {
	wrapper.innerHTML = "";
	page--;

	let start = itemsPerPage * page;
	let end = start + itemsPerPage;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		wrapper.appendChild(item_element);
	}
}

function setupPagination (items, wrapper, itemsPerPage) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / itemsPerPage);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = paginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function paginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (currentPage == page) button.classList.add('active');

	button.addEventListener('click', function () {
		currentPage = page;
		displayList(items, dataContainer, setItemsPerPage, currentPage);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

displayList(fakeDB, dataContainer, setItemsPerPage, currentPage);
setupPagination(fakeDB, paginationBar, setItemsPerPage);