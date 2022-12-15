import "../styles/style.css";
import { fruits } from "../js/list";
import { DOM } from "../js/DOM";
// import { functions } from "../js/functions";

function makeCards() {
  DOM.cards.insertAdjacentHTML(
    "beforeend",
    `
      <div class="result">
      <h2 class="individual-name">${fruits.name}</h2>
      <img class="image" scr="${fruits.img_url}"/>
      <p class="paragraph"> ${fruits.origin}</p>
      <p class="paragraph"> ${fruits.origin}</p>
      <p class="paragraph"> ${fruits.price_per_lb}</p>
      </div>
      `
  );
}
makeCards();

fruits.forEach((fruits) => {
  console.log(`${fruits.name}`);
});
