class DataService {
    data = [ // array of objects 
        {
            name: "Erekle Lennart",
            gender: "male",
            address: "7348 Colonial Drive Philadelphia, PA 19111",
            age: 21,
            phoneNumber: "215-200-8836"
        },
        {
            name: "Clover Satisha",
            gender: "female",
            address: "9703 Jackson Street Stamford, CT 06902",
            age: 36,
            phoneNumber: "203-200-7952"
        },
        {
            name: "Olamilekan Ambroży",
            gender: "male",
            address: "7926 Beaver Ridge Street Owensboro, KY 42301",
            age: 18,
            phoneNumber: "270-200-2610"
        }
    ];
    constructor() { // defined data above so left empty
    }
    getData = (numRecords) => { // gets the data depending on 
        return (numRecords !== undefined) ? this.data.slice(0, numRecords) : this.data; //if the numRecords is not undefined return the array with the range of that numRecords or just return the whole thing
    }
}

/* The test cases
const object = new DataService();
console.log(object.getData());
console.log(object.getData(1));
console.log(object.getData(2));
console.log(object.getData(3));
*/