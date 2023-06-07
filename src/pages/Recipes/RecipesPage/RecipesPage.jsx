import { useParams } from "react-router-dom";
import ChefBanner from "../ChefBanner.jsx/ChefBanner";
import Recipes from "../Recipes/Recipes";

const RecipesPage = () => {
    const {id} = useParams();
    return (
        <div>
            <ChefBanner id={id}> </ChefBanner>
            <Recipes id={id}></Recipes>
        </div>
    );
};

export default RecipesPage;