import { useEffect, useState } from "react";
import RecipesCard from "./RecipesCard";

const Recipes = ({ id }) => {
  const [chef, setChef] = useState();
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/recipes/chef/${id}`)
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
      fetch(`http://localhost:5000/recipes/${chef.name}`)
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
    return <div>Loading...</div>;
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
