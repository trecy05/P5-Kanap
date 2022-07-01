//Recuperation des articles sur l'API
const theArticles = async () => {
  let recoveryArticles = await fetch("http://localhost:3000/api/products");
  return await recoveryArticles.json();
};

// Ajout des données de l'API dans le DOM
const listOfItems = async () => {
  let results = await theArticles().then(function (resultatAPI) {
    const articles = resultatAPI;
    console.log(articles);
  });
};
listOfItems();
