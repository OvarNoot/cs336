const addDataRows = () => {
    const object = new DataService(); // creates new object for DataService
    const element0 = document.getElementById("rows"); // gets the element with the id

    console.log(object.getData(1)); // to log the result

    object.data.forEach(rowData => createRow(element0, rowData)); // to call createRow until we go through whole array
    //createRow(element0, thisIsName.data[1]);
}


const createRow = (parentElem, rowData) => { //creates row with informations
    const rows = parentElem.insertRow(-1); // to make them added in order

    const box1 = rows.insertCell(0).innerHTML = rowData.name;  // inserts the new cell and adds the data inside the cell
    const box2 = rows.insertCell(1).innerHTML = rowData.gender; // inserts the new cell and adds the data inside the cell
    const box3 = rows.insertCell(2).innerHTML = rowData.address; // inserts the new cell and adds the data inside the cell
    const box4 = rows.insertCell(3).innerHTML = rowData.age; // inserts the new cell and adds the data inside the cell
    const box5 = rows.insertCell(4).innerHTML = rowData.phoneNumber; // inserts the new cell and adds the data inside the cell


    /* using insertcell and insertrow so commented out
    the createlement and appenchild but commented out becasue it looks ugly

    const rows = document.createElement("tr");
    const box = document.createElement("td");

    const box1 = document.createTextNode(object.name);
    box.appendChild(box1);
    rows.appendChild(box);

    const box22 = document.createElement("td");
    const box2 = document.createTextNode(object.gender);
    box22.appendChild(box2);
    rows.appendChild(box22);

    const box33 = document.createElement("td");
    const box3 = document.createTextNode(object.address);
    box33.appendChild(box3);
    rows.appendChild(box33);

    const box44 = document.createElement("td");
    const box4 = document.createTextNode(object.age);
    box44.appendChild(box4);
    rows.appendChild(box44);

    const box55 = document.createElement("td");
    const box5 = document.createTextNode(object.phoneNumber);
    box55.appendChild(box5);
    rows.appendChild(box55);

    parentElem.appendChild(rows);
    */






}