import serviceIcon1 from "../../../../public/service_icon_1.svg";
import serviceIcon2 from "../../../../public/service_icon_2.svg";
import serviceIcon3 from "../../../../public/service_icon_3.svg";
import serviceIcon4 from "../../../../public/service_icon_4.svg";
import serviceIcon5 from "../../../../public/service_icon_5.svg";
import serviceIcon6 from "../../../../public/service_icon_6.svg";
const Services = () => {
  return (
    <div className="bg-blue-400 p-4 my-4 rounded-xl">
      <h1 className="py-5 text-center font-bold text-2xl">Services</h1>
      <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="shadow-md rounded-md bg-slate-50 p-2">
          <div className="border rounded-full inline-block border-slate-800 p-2">
            <img className="w-5" src={serviceIcon1} alt="" />
          </div>
          <div>
            <h1 className="font-bold">Delicious Recipes</h1>
            <p className="text-slate-500">
              Delicious Recipes is a premium service that offers a wide range of
              mouth-watering recipes to satisfy your taste buds. We have a team
              of expert chefs who craft perfect recipes that cater to your
              preferences, whether you are an experienced cook or a newbie.
            </p>
          </div>
        </div>
        <div className="shadow-md rounded-md bg-slate-50 p-2">
          <div className="border rounded-full inline-block border-slate-800 p-2">
            <img className="w-5" src={serviceIcon2} alt="" />
          </div>
          <div>
            <h1 className="font-bold">Best Chefs</h1>
            <p className="text-slate-500">
              Best Chefs is a premium service that offers a wide range of
              mouth-watering recipes to satisfy your taste buds. We have a team
              of expert chefs who craft perfect recipes that cater to your
              preferences, whether you are an experienced cook or a newbie.
            </p>
          </div>
        </div>
        <div className="shadow-md rounded-md bg-slate-50 p-2">
          <div className="border rounded-full inline-block border-slate-800 p-2">
            <img className="w-5" src={serviceIcon3} alt="" />
          </div>
          <div>
            <h1 className="font-bold">Big Community</h1>
            <p className="text-slate-500">
              Big Community is a premium service that offers a wide range of
              mouth-watering recipes to satisfy your taste buds. We have a team
              of expert chefs who craft perfect recipes that cater to your
              preferences, whether you are an experienced cook or a newbie.
            </p>
          </div>
        </div>
        <div className="shadow-md rounded-md bg-slate-50 p-2">
          <div className="border rounded-full inline-block border-slate-800 p-2">
            <img className="w-5" src={serviceIcon4} alt="" />
          </div>
          <div>
            <h1 className="font-bold">Food Forum</h1>
            <p className="text-slate-500">
              Food Forum is a premium service that offers a wide range of
              mouth-watering recipes to satisfy your taste buds. We have a team
              of expert chefs who craft perfect recipes that cater to your
              preferences, whether you are an experienced cook or a newbie.
            </p>
          </div>
        </div>
        <div className="shadow-md rounded-md bg-slate-50 p-2">
          <div className="border rounded-full inline-block border-slate-800 p-2">
            <img className="w-5" src={serviceIcon5} alt="" />
          </div>
          <div>
            <h1 className="font-bold">Food Camp</h1>
            <p className="text-slate-500">
              Food Camp is a premium service that offers a wide range of
              mouth-watering recipes to satisfy your taste buds. We have a team
              of expert chefs who craft perfect recipes that cater to your
              preferences, whether you are an experienced cook or a newbie.
            </p>
          </div>
        </div>
        <div className="shadow-md rounded-md bg-slate-50 p-2">
          <div className="border rounded-full inline-block border-slate-800 p-2">
            <img className="w-5" src={serviceIcon6} alt="" />
          </div>
          <div>
            <h1 className="font-bold">Food Network</h1>
            <p className="text-slate-500">
              Food Network is a premium service that offers a wide range of
              mouth-watering recipes to satisfy your taste buds. We have a team
              of expert chefs who craft perfect recipes that cater to your
              preferences, whether you are an experienced cook or a newbie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
