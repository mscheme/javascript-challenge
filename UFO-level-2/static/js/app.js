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
    filters={}
    filterList = ['#datetime', '#city', '#state', '#country', '#shape']
    let filterData = tableData

    // create dictionary from filters
    for (fID of filterList){
        let filter = d3.select(fID).property("value");

        // if a vaule is entered for the filter, save it to the dictionary
        if (filter){
            filters[fID.substring(1)] = filter
        }
    }

    if(Object.entries(filters).length ==0){
        // filters are empty
    }
    else{
        // Loop through all of the filters and keep any data that
        // matches the filter values
        Object.entries(filters).forEach(([key, value]) => {
            filterData = filterData.filter(row => row[key] === value);
        });
    }
    buildTable(filterData)
}

// build table on page load
buildTable(tableData);