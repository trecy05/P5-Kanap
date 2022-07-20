const idElement = window.location.search.split("?").join("");

// Recuperation d'un element dans l'API
const getElement = async () => {
  await fetch(`http://localhost:3000/api/products/${idElement}`).then((rep) => {
    return res.json();
  });
};
console.log(idElement);
