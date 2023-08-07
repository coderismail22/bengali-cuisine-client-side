import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const RecipesCard = ({ recipe }) => {
  const [favourite, setFavourite] = useState(false);
  console.log(recipe);
  const { id, name, photoUrl, ingredients, method, rating } = recipe;
  const handleAddToFavourite = (id) => {
    setFavourite(true);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${name} added to Favourite`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div>
      {/* Recipe Card */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img loading="lazy" src={photoUrl} alt="Food Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Ingredients:{ingredients}</p>
          <p>Cooking:{method}</p>
          <p>Rating:{rating}</p>
          <div className="card-actions justify-end">
            <button
              disabled={favourite === true}
              onClick={() => handleAddToFavourite(id)}
              className="btn btn-primary"
            >
              Add to Favourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
