// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log("Got data from Lambda");
        console.log(response)
    })
    .catch(err => {
        console.log("Got error from Lambda", err)
    })

function Tab(arr) {
    // define new elements
    const newTab = document.createElement("div");

    // setup structure of elements

    // set class names (from HTML)
    newTab.classList.add("tab");

    // set text content (function parameter names)
    newTab.textContent = "topic here";

    arr.forEach(item => {
        
    })

}