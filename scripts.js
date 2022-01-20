const fakeDB = [];
const createFakeDB = () => {
    const totalItems = Math.floor(Math.random() * (50 - 25)) + 25;
    for(let i = 1; i <=totalItems; i++ ) {
        fakeDB.push(i);
    }
}
createFakeDB();

const dataContainer = document.getElementById("data-container");
const paginationBar = document.getElementById("pagination-bar");

let currentPage = 1;
let paginationRows = 3;