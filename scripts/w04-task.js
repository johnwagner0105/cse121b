/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "John Wagner",
  photo: "images/2.jpg",
  favoriteFoods: ["Lasagna", "Red Pasta", "Ceviche"],
  hobbies: ["play basketball", "Go out with friends", "Listen to music"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: "Porto Alegre, RS, Brazil",
  Length: "9 months",
});

myProfile.placesLived.push({
  place: "Pelotas, RS, Brazil",
  Length: "3 months",
});

myProfile.placesLived.push({
  place: "Bage, RS, Brazil",
  Length: "6 months",
});
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach((hobbie) => {
  let hobbieItem = document.createElement("li");
  hobbieItem.textContent = hobbie;
  document.querySelector("#hobbies").appendChild(hobbieItem);
});
/* Places Lived DataList */
myProfile.placesLived.forEach((placeName) => {
  let placeDt = document.createElement("dt");
  placeDt.textContent = placeName.place;
  let placeDd = document.createElement("dd");
  placeDd.textContent = placeName.Length;
  document.querySelector("#places-lived").append(placeDt, placeDd);
});
