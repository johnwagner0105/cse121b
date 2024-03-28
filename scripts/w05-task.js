/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    let article = document.createElement("article");
    let name = document.createElement("h3");
    name.textContent = temple.templeName;
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.location);
    article.appendChild(name);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};
/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  if (response.ok) {
    templeList = await response.json();
  }

  displayTemples(templeList);
};
/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};
/* filterTemples Function */
const filterTemples = (temples) => {
  reset();
  let filter = document.getElementById("filtered").value;
  let filteredList = [];
  switch (filter) {
    case "utah":
      temples.forEach((element) =>
        element.location.includes("Utah") ? filteredList.push(element) : ""
      );
      console.log(filteredList);
      displayTemples(filteredList);
      break;
    case "notutah":
      temples.forEach((element) =>
        !element.location.includes("Utah") ? filteredList.push(element) : ""
      );
      console.log(filteredList);
      displayTemples(filteredList);
      break;
    case "older":
      temples.forEach((element) =>
        new Date(element.dedicated) < new Date(1950, 0, 1)
          ? filteredList.push(element)
          : ""
      );
      console.log(filteredList);
      displayTemples(filteredList);
      break;
    case "all":
      filteredList = temples;
      console.log(filteredList);
      displayTemples(filteredList);
      break;
  }
};
getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});
