let info_div = document.getElementById("user_info");
let title = document.getElementById("site_title");
let info_button = document.getElementById("submit_trainer_info");

info_button.addEventListener("click", () => {
  let trainer_Name = document.getElementById("pkTrainerName").value;
  let sprite = document.getElementsByName("pkTrainerSprite");

  for (let i = 0; i < sprite.length; i++) {
    if (sprite[i].checked) {
      sprite = sprite[i].value;
      break;
    }
  }
  console.log(trainer_Name);
  console.log(sprite);
  info_div.hidden = !info_div.hidden;
  title.innerHTML = `Welcome to your Pokemon Trainer Card ${trainer_Name}`;
});
