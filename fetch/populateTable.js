
const addDataRows = async () => {
    const object = new DataService(); // creates new object for DataService
    await object.fetchData(); // wait until its fully gotten the data
    const data = object.getData(); // gets the data that was put into array 
    const element0 = document.getElementById("rows"); // gets the element with the id

    console.log(object.getData()); // to log the result

    data.forEach(rowData => createRow(element0, rowData)); // to call createRow until we go through whole array
    //createRow(element0, thisIsName.data[1]);
}


const createRow = (parentElem, rowData) => { //creates row with informations
    const rows = parentElem.insertRow(-1); // to make them added in order

    const box1 = rows.insertCell(0).innerHTML = rowData.name.title + " " + rowData.name.first + " " + rowData.name.last;  // inserts the new cell and adds the data inside the cell
    const box2 = rows.insertCell(1).innerHTML = rowData.gender; // inserts the new cell and adds the data inside the cell
    const box3 = rows.insertCell(2).innerHTML = rowData.location.street.number + " " + rowData.location.street.name + ", " + rowData.location.city + ", " + rowData.location.state + ", " + rowData.location.postcode; // inserts the new cell and adds the data inside the cell
    const box4 = rows.insertCell(3).innerHTML = rowData.dob.age; // inserts the new cell and adds the data inside the cell
    const box5 = rows.insertCell(4).innerHTML = rowData.phone; // inserts the new cell and adds the data inside the cell
    const box6 = rows.insertCell(5); // creates new box

    const image = document.createElement('img'); // create new element that will take image
    image.src = rowData.picture.large; // takes the image source
    box6.appendChild(image); // appends to the box

}