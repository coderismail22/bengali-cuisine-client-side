import { useEffect, useState } from "react";
import RecipesCard from "./RecipesCard";
import { MoonLoader } from "react-spinners";

const Recipes = ({ id }) => {
  const [chef, setChef] = useState();
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://assignment-10-server-lemon.vercel.app/recipes/chef/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setChef(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  useEffect(() => {
    if (chef && chef.name) {
      fetch(
        `https://assignment-10-server-lemon.vercel.app/recipes/${chef.name}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }
  }, [chef]);

  if (isLoading) {
    // TODO: SPINNER
    return <MoonLoader color="#4c10e0" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>These are recipes of the chef {chef.name}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipesCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
