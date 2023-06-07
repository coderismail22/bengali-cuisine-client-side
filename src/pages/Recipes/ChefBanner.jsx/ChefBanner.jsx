import { useEffect, useState } from "react";

const ChefBanner = ({ id }) => {
  const [chef, setChef] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/recipes/chef/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, [id]);

  if (!chef) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Banner */}
      <div className="hero min-h-16 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={chef.photoUrl} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{chef.name}</h1>
            <p className="py-6">{chef.bio}</p>
            <button className="btn btn-primary">See All Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
