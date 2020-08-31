import React from "react";
import "./quick-links.css";

function QuickLinks({ baseIngredients, search, showList }) {
  return (
    <div>
      <nav>
        {baseIngredients.map((ingredient, i) => (
          <span
            className="quick-links__item"
            key={i}
            onClick={() => {
              search(ingredient);
              showList(true);
            }}
          >
            {ingredient}
          </span>
        ))}
      </nav>
    </div>
  );
}

export default QuickLinks;
