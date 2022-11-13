"use strict";

//class to supply hard coded data
class DataService {
  //initilizes data, doesn't take any user input
  constructor() {
    this.data = [
      /*
      {
        name: "Nathan Strain",
        gender: "Male",
        address: "BOER HALL",
        age: 20,
        phoneNumber: "296-281-6215"
      },
      {
        name: "Josiah P. Eising",
        gender: "Male",
        address: "VANDERWERP HALL",
        age: 19,
        phoneNumber: "123-456-7890"
      },
      {
        name: "Clinton Wilson",
        gender: "Male",
        address: "BOER HALL",
        age: 19,
        phoneNumber: "012-345-6789"
      }
      */
    ];
  }

  //returns data, optional paramater allows user to limit amount of data supplied
  //if parameter is not supplied all data is returned
  getData(numRecords = null) {
    return this.data.slice(0, numRecords ? numRecords : this.data.length);
  }
  fetchData() {
    fetch('https://randomuser.me/api/?results=10')
      .then(
        function (response) {
          if (!response.ok) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function (data) {
            console.log(JSON.stringify(data, undefined, 2));
          });
        })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });

  }
}

const


//test class with console.log()
/*
const dataService = new DataService();
console.log(dataService.getData());
console.log(dataService.getData(-1));
console.log(dataService.getData(0));
console.log(dataService.getData(1));
console.log(dataService.getData(2));
console.log(dataService.getData(3));
console.log(dataService.getData(4));
console.log(dataService.getData());
*/