import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ChefCard = ({props}) => {
  // const { photoUrl, name, id, experience, recipes, likes } = props;
  console.log(props.id)

  return (
    <div>
      <div className="flex items-center gap-3 rounded-xl bg-base-300 shadow-xl p-4">
        <div className="w-1/2">
          <img
            // className="rounded-l-md object-center "
            className="h-52 w-full object-cover rounded-l mx-auto"
            src={props.photoUrl}
            alt="chef-img"
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold">Name: {props.name}</h2>
          <h2 className="font-semibold">ID: {props.id}</h2>
          <p>Experience: {props.experience}</p>
          <p>Recipes: {props.recipes}</p>
          <p>Likes: {props.likes}</p>
          <Link to={`/recipes/${props.id}`} className="btn btn-primary">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

ChefCard.propTypes = {
  props:PropTypes.object,
  photoUrl: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  experience: PropTypes.number,
  recipes: PropTypes.number,
  likes: PropTypes.number,
};

export default ChefCard;
