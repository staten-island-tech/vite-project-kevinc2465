import "../styles/style.css";
import { fruits } from "../js/list";
import { DOM } from "../js/DOM";

function makeCards() {
  DOM.cards.insertAdjacentHTML(
    "beforeend",
    `
      <div class="result">
      <h2 class="individual-name"> ${fruits.name}</h2> 
      
      </div>
      `
  );
}
makeCards();
