import { useEffect, useState } from "react";

const RecipesCard = ({ recipe }) => {
  console.log(recipe);
  const {id,name,photoUrl,ingredients,method,rating} = recipe;
  return (
    <div>
      {/* Recipe Card */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={photoUrl}
            alt="Food Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Ingredients:{ingredients}</p>
          <p>Cooking:{method}</p>
          <p>Rating:{rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Favourite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
