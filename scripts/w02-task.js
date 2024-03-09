/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "John Wagner";
let currentYear = new Date().getFullYear();
let profilePicture = "images/2.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");
/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);
/* Step 5 - Array */
let favoriteFoods = ["Ceviche", "Aji de Gallina", "Pasta"];
foodElement.innerHTML = favoriteFoods.join(",");
const singleFood = "Lomo Saltado";
favoriteFoods.push(singleFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;
