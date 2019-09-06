// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log("Got data from Lambda");
        // console.log(response);
        // console.log(response.data.articles) // logging article topics - each has multiple articles
        
        const categories = (response.data.articles);
        console.log(categories);
        // console.log(categories.bootstrap[0]);
        // console.log(categories.bootstrap[0].authorName);
        // console.log(categories.bootstrap[0].authorPhoto);
        // console.log(categories.bootstrap[0].headline);
        // console.log(Object.entries(categories));

        const categoryList = ["bootstrap", "javascript", "jquery", "node", "technology"];

        categoryList.forEach(type => {
            console.log(type);
            sendMe = `categories.${type}.forEach`;
            sendMe((item, i) => {
                const title = categories.bootstrap[i].headline;
                const writer = categories.bootstrap[i].authorName;
                const pic = categories.bootstrap[i].authorPhoto;
                console.log(title, writer, pic);
            })
    
        })

        // categories.bootstrap.forEach((item, i) => {
        //     const title = categories.bootstrap[i].headline;
        //     const writer = categories.bootstrap[i].authorName;
        //     const pic = categories.bootstrap[i].authorPhoto;
        //     console.log(title, writer, pic);
        // })


        // const categoriesArray = (Object.entries(categories)); // all the object categories as an array
        // console.log("Categories: ", categoriesArray);
        // console.log(categoriesArray[0]);
        // categoriesArray.forEach((category, i) => {
            // console.log(category.bootstrap[0]);
            // const catName = category;
            // console.log(catName);
            // console.log(Object.entries(category));

            // const headline = catName.arr[i];
            // console.log(headline);
            // console.log(category);
            // console.log(category[i][i+1]);
            // console.log(category.headline[i]);
            // Article(category[i]);
        // })

        // categories.forEach(category => {
        //     console.log(category[i])
        // })
    })
    .catch(err => {
        console.log("Got error from Lambda", err)
    })


    function Article(title, writer, pic) { 
        // define new elements
        const card = document.createElement("div"); // container
        const headline = document.createElement("div"); // text
        const author = document.createElement("div"); // container
        const imgContainer = document.createElement("div"); //container
        const imgSrc = document.createElement("a"); // URL
        const by = document.createElement("span"); // text
    
        // setup structure of elements
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(imgSrc);
        imgContainer.appendChild(by);

        // set class names (from HTML)
        card.classList.add("card");
        headline.classList.add("headline");
        author.classList.add("author");
        imgContainer.classList.add("img-container");
        
        // set text content (function parameter names)
        headline.textContent = title; // headline
        imgSrc.textContent = pic; // authorPhoto
        by.textContent = `By ${writer}`; // authorName


    }
