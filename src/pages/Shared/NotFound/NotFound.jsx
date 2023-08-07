import notfound from "../../../assets/notfound.jpg";
const NotFound = () => {
  return (
    <div className="w-3/4">
        <img loading="lazy" src={notfound} alt="404-img" />
    </div>
  );
};

export default NotFound;
