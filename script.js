//Part1 Refactoring old code
const csvdata = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`
//Split in rows
const rows = csvdata.split('\n');
// Loop through each row
for (let row of rows) {
    //Split each rows into cells
    const cells = row.split(',');
    console.log(cells[0], cells[1], cells[2], cells[3]);
}
//Part 2: Expanding Functionality
// Number of columns in each row
const firstRowColumns = rows[0].split(','); // Get the first row as an array of columns
const numOfColumns = firstRowColumns.length; // Store the number of columns

console.log(`Number of columns in each row: ${numOfColumns}`); 

//Expand the code to accept any number of columns

const headings = rows[0].split(',');

const data = [];
//Expand the code to accept any number of columns
for (let i = 0; i < rows.length; i++) {
    const columns = rows[i].split(',');
    data.push(columns);
}

console.log(data);

//Part 3: Transforming Data.
// Get column headings
const dataObjects = [];

for (let i = 1; i < rows.length; i++) {
    const columns = rows[i].split(',');
    const obj = {};
    for (let j = 0; j < columns.length; j++) {
        obj[headings[j].toLowerCase()] = columns[j];
    }
    dataObjects.push(obj);
}
console.log(dataObjects); // Output the two-dimensional array 
//Part 4: Sorting and Manipulating Data
//Remove the last element from the sorted array:
dataObjects.pop();

//Insert the following object at index 1:
dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

//Add the following object to the end of the array:
dataObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

//Calculate the average age of the group:
let totalAge = 0;
for (let i = 0; i < dataObjects.length; i++) {
    totalAge += parseInt(dataObjects[i].age);
}
const averageAge = totalAge / dataObjects.length;
console.log("Average Age:", averageAge);

//Part 5: Full Circle
let csvOutput = '';
//converting each object's values into an array, joining those values with commas to create rows

for (let i = 0; i < dataObjects.length; i++) {
    const values = Object.values(dataObjects[i]);
    const row = values.join(',');
    // joining all rows with newline characters (\n)
    csvOutput += row + '\n';
}

console.log(csvOutput);





