// from data.js
const tableData = data;

// get d3 elements
// get button
let button = d3.select('#filter-btn');

// get tbody
const tbody = d3.select('tbody');

// define function for clearing table and adding data
function buildTable(data){
    // First, clear out any existing data
    tbody.html("");
    
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // add data to the columns in the row
        row.append("td").text(dataRow.datetime);
        row.append("td").text(dataRow.city);
        row.append("td").text(dataRow.state);
        row.append("td").text(dataRow.country);
        row.append("td").text(dataRow.shape);
        row.append("td").text(dataRow.durationMinutes);
        row.append("td").text(dataRow.comments);
    })
}

// create event for clicking of filter button
button.on("click", runFilter);

function runFilter(){
    // get date entered in filter
    let dateFilter = d3.select("#datetime").property("value");
    console.log('date filter = ', dateFilter);
    
    if (dateFilter !== ""){
        // get filtered data
        let filteredData = tableData.filter(item => item.datetime == dateFilter);

        // build table
        buildTable(filteredData);
    }
    else{
        buildTable(tableData)
    }
}

// build table on page load
buildTable(tableData);