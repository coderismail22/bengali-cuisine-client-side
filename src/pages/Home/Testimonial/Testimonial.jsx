import person1 from "../../../assets/person1.jpg";
import person2 from "../../../assets/person2.jpg";
import person3 from "../../../assets/person3.jpg";

const Testimonial = () => {
  return (
    <div className="bg-purple-700 text-white p-5 rounded-md">
      <div className="text-center py-10">
        <h5 className="text-2xl text-blue-300">Testimonials</h5>
        <h1 className="text-3xl font-bold">READ WHAT OTHERS HAVE TO SAY.</h1>
      </div>

      <div className="grid group md:grid-cols-3 mx-auto gap-8 text-center">
        <div className="cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.80] hover:!scale-100 bg-white/10 p-8 rounded-xl mix-blend-luminosity">
          <img
          loading="lazy"
            src={person1}
            alt="person-1"
            className="h-20 object-cover w-20 rounded-full mx-auto"
          />
          <h4 className="text-xl font-bold mx-auto">JOHN DOE</h4>
          <p className="text-sm leading-7 my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            tempora a voluptates, earum cumque necessitatibus blanditiis. Cum
            repudiandae sequi culpa.
          </p>
          <button className="btn py-2 px-8 rounded-full">Follow</button>
        </div>
        <div className="cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.80] hover:!scale-100  bg-white/10 p-8 rounded-xl mix-blend-luminosity">
          <img
          loading="lazy"
            src={person2}
            alt="person-1"
            className="object-cover h-20 w-20 rounded-full mx-auto"
          />
          <h4 className="text-xl font-bold mx-auto">JOHN DOE</h4>
          <p className="text-sm leading-7 my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            tempora a voluptates, earum cumque necessitatibus blanditiis. Cum
            repudiandae sequi culpa.
          </p>
          <button className="btn py-2 px-8 rounded-full">Follow</button>
        </div>
        <div className="cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.80] hover:!scale-100 bg-white/10 p-8 rounded-xl mix-blend-luminosity">
          <img
          loading="lazy"
            src={person3}
            alt="person-1"
            className="object-cover h-20 w-20 rounded-full mx-auto"
          />
          <h4 className="text-xl font-bold mx-auto">JOHN DOE</h4>
          <p className="text-sm leading-7 my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            tempora a voluptates, earum cumque necessitatibus blanditiis. Cum
            repudiandae sequi culpa.
          </p>
          <button className="btn py-2 px-8 rounded-full">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
