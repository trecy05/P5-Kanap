//Recuperation des articles sur l'API
const theArticles = async () => {
  let recoveryArticles = await fetch("http://localhost:3000/api/products");
  return await recoveryArticles.json();
};
