// from data.js
var tableData = data;

// get d3 elements
// get button
let button = d3.select('#filter-btn');

// create event handlers
button.on('click', runFilter);

// define runFilter function
function runFilter(){

    // get date to filter
    let date = d3.select('#datetime').property("value");

    // use the date to create a new array
    let filteredData = tableData.filter(item => item.datetime === date);
    // show filtered data in table
    // get the table element
    let tbody = d3.select('tbody');

    // loop through every record in the filtered data array
    filteredData.forEach(item => {
        // add a new row
        let row = tbody.append("tr");

        // add data to the columns in the row
        row.append("td").text(item.datetime);
        row.append("td").text(item.city);
        row.append("td").text(item.state);
        row.append("td").text(item.country);
        row.append("td").text(item.shape);
        row.append("td").text(item.durationMinutes);
        row.append("td").text(item.comments);
    });

};



