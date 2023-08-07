import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { MoonLoader } from "react-spinners";

const ChefSection = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-10-server-lemon.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false); // Set loading to false after data is fetched
      });
  }, []);

  return (
<div className="bg-blue-400 p-4 my-4 rounded-xl">
  <h1 className="font-bold text-3xl text-center my-5">Chef Section</h1>
  <h2 className="text-center">Chef: {datas.length}</h2>

  <div className="flex justify-center items-center"> {/* Flex container */}
    {loading ? (
        // TODO: SPINNER
      <MoonLoader color="#4c10e0" />
    ) : (
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        {datas.map((data) => (
          <ChefCard key={data.id} props={data} />
        ))}
      </div>
    )}
  </div>
</div>

  );
};

export default ChefSection;
