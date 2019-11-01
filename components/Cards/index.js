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

const articleAnchor = document.querySelector(".cards-container");

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response.data.articles);

        //getting back an object per category, each with an array of objects, that are articles 

        // get the values of all topics (eg. bootstrap) object (using Object.values

        // use forEach to iterate through array of those articles 

        // pass that obj into the createArticle function 
        Object.values(response.data.articles).forEach((value) => {
            value.forEach(item => {
                const newArticle = createArticle(item);
                // console.log(newArticle);
                articleAnchor.appendChild(newArticle);
            })
        }
        )
    });

function createArticle(obj){
    const newCard = document.createElement('div');
        const newHeadline = document.createElement('div');
        const newAuthor = document.createElement('div');
            const newImgContainer = document.createElement('div');
                const newAuthorImg = document.createElement('img');
            const newAuthorName = document.createElement('span');

    newHeadline.textContent = obj.headline;
    newAuthorImg.src = obj.authorPhoto;
    newAuthorName.textContent = 'By ' + obj.authorName;

    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthor.classList.add('author');
    newImgContainer.classList.add('img-container');

    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
        newAuthor.appendChild(newImgContainer);
            newImgContainer.appendChild(newAuthorImg);
        newAuthor.appendChild(newAuthorName);

    return newCard;
};



