import { useEffect, useState } from "react";
import RecipesCard from "./RecipesCard";
import { MoonLoader } from "react-spinners";

const Recipes = ({ id }) => {
  const [chef, setChef] = useState();
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://bengali-cuisine-server-side.vercel.app/recipes/chef/${id}`)
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
        `https://bengali-cuisine-server-side.vercel.app/recipes/${chef.name}`
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
    return <MoonLoader color="#4c10e0" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mb-5">
      <h1 className="text-center text-2xl font-bold my-4">These are recipes of the chef {chef.name}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        {recipes.map((recipe) => (
          <RecipesCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
