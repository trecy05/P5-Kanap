const queryString = window.location.href;
const usp = new URL(queryString);
const idElement = usp.searchParams.get("id");
let element = [];
console.log(idElement);

// Recuperation d'un element dans l'API
const getElement = async () => {
  await fetch(`http://localhost:3000/api/products/${idElement}`)
    .then((rep) => {
      return rep.json();
    })
    .then(async (repAPI) => {
      element = await repAPI;
      console.table(element);
    });
};

const articleDisplay = async () => {
  await getElement();
  //Injection de l'image
  document.querySelector(".item__img").innerHTML = `
  <img src="${element.imageUrl}" alt="${element.name}">
  `;
};
articleDisplay();
