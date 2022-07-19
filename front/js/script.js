//Reponse fetch
fetch("http://localhost:3000/api/products").then((reponse) =>
  console.log(reponse)
);

//Recuperation des articles sur l'API
const theArticles = async () => {
  let recoveryArticles = await fetch("http://localhost:3000/api/products");
  return await recoveryArticles.json();
};

// Ajout des données de l'API dans le DOM
const listOfItems = async () => {
  let results = await theArticles().then(function (repAPI) {
    const articles = repAPI;
    console.table(articles);
    //Création d'une boucle for..in
    for (let i in articles) {
      //lien
      let elementLink = document.createElement("a");
      let elementItems = document.getElementById("items");
      elementItems.appendChild(elementLink);
      elementLink.href = `product.html?id=${repAPI[i]._id}`;
      // article
      let elementArticle = document.createElement("article");
      elementLink.appendChild(elementArticle);
      // image
      let elementImage = document.createElement("img");
      elementArticle.appendChild(elementImage);
      elementImage.src = repAPI[i].imageUrl;
      elementImage.alt = repAPI[i].altTxt;
      //h3
      let elementTitle = document.createElement("h3");
      elementArticle.appendChild(elementTitle);
      elementTitle.classList.add("productName");
      elementTitle.innerHTML = repAPI[i].name;
      //paragraphe
      let elementParagraphe = document.createElement("p");
      elementArticle.appendChild(elementParagraphe);
      elementParagraphe.classList.add("productDescription");
      elementParagraphe.innerHTML = repAPI[i].description;
      //Prix
      let elementPrice = document.createElement("p");
      elementArticle.appendChild(elementPrice);
      elementPrice.classList.add("productPrice");
      elementPrice.innerHTML = repAPI[i].price;
    }
  });
};
listOfItems();
