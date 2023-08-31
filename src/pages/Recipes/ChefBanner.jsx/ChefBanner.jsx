import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

const ChefBanner = ({ id }) => {
  const [chef, setChef] = useState();

  useEffect(() => {
    fetch(`https://bengali-cuisine-server-side.vercel.app/recipes/chef/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, [id]);

  if (!chef) {
    return <MoonLoader color="#4c10e0" />;
  }

  return (
    <div>
      {/* Banner */}
      <div className="hero min-h-16 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            loading="lazy"
            src={chef.photoUrl}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">{chef.name}</h1>
            <p className="py-5">{chef.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
