//Recuperation des articles sur l'API
const theArticles = async () => {
  let recoveryArticles = await fetch("http://localhost:3000/api/products");
  return await recoveryArticles.json();
};

// Ajout des données de l'API dans le DOM
const listOfItems = async () => {
  let results = await theArticles().then(function (resultatAPI) {
    const articles = resultatAPI;
    console.table(articles);
    //Création d'une boucle for..in
    for (let article in articles) {
      //lien
      let elementLink = document.createElement("a");
      // article
      let elementArticle = document.createElement("article");
      // image
      let elementImage = document.createElement("img");
      //h3
      let elementTitle = document.createElement("h3");
      //paragraphe
      let elementParagraphe = document.createElement("p");
    }
  });
};
listOfItems();
