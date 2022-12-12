import "../styles/style.css";
import { fruits } from "../js/list";

const DOM = {
  cards: document.getElementById("cards"),
};
function makeCards() {
  DOM.cards.insertAdjacetntHTML(
    "beforeend,",
    `
      <div class="result">
      <h2 class="subtitle">${fruits.name}</h2>
      </div>
    `
  );
}
makeCards();
console.log(fruits);
