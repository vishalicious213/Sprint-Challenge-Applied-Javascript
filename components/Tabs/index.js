// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// 1. get data
// 2. create html element
// 3. do #2 for each piece of data?
// 4. append to DOM

// axios.get("https://lambda-times-backend.herokuapp.com/topics")
//     .then(response => {
//         console.log("Got data from Lambda");
//         console.log(response);
//         console.log(response.data.topics)
//     })
//     .catch(err => {
//         console.log("Got error from Lambda", err)
//     })


axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log("Got data from Lambda");
        console.log(response);
        console.log(response.data.topics);
        
        const topicArr = response.data.topics;
        console.log(topicArr);

        topicArr.forEach(item => {
            newItem = item;
            console.log(newItem) // got array of topic names
        }) // .topicArr
    }) // .then
    .catch(err => {
        console.log("Got error from Lambda", err)
    }) // .catch



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