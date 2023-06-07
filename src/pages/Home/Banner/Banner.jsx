import banner from "../../../assets/img/banner.jpg";
const Banner = () => {
  return (
    <div>
      <div className="sm:flex">
        <div className="sm:w-1/2 flex justify-center items-center mb-4">
          <h1 className="font-bold text-5xl text-center ">
            Welcome to <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-red-500">Banglar Cuisine</span>
          </h1>
        </div>
      <div className="sm:w-1/2">
      <img className="rounded-md" src={banner} alt="banner-img" />
      </div>
      </div>
    </div>
  );
};

export default Banner;
