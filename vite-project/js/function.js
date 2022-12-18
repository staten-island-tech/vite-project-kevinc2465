import { fruits } from "./list";
import { DOM } from "./DOM";

fruits.forEach((fruits) => {
    DOM.cards.insertAdjacentHTML(
      "beforeend",
      `
        <div class="result">
        <h2 class="individual-name">${fruits.name}</h2>
        <img class="image" src= "${fruits.img_url}"/>
        <p class="paragraph"> ${fruits.origin}</p>
        <p class="paragraph"> ${fruits.flavor}</p>
        <p class="paragraph"> $${fruits.price_per_lb} per lb</p>
        </div>
        `
    );
  });

