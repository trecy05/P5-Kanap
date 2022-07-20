let link = window.location.href;
let url = new URL(link);
let idElement = url.searchParams.get("id");
console.log(idElement);
let produit = "";

// Recuperation d'un element dans l'API
const getElement = async () => {
  await fetch(`http://localhost:3000/api/products/${idElement}`).then((rep) => {
    return res.json();
  });
};
