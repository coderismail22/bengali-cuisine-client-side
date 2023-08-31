import Banner from "../Banner/Banner";
import ChefSection from "../ChefSection/ChefSection";
import Contact from "../Contact/Contact";
import Join from "../Join/Join";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefSection></ChefSection>
      <Testimonial></Testimonial>
      <Services></Services>
      <Join></Join>
      <Contact></Contact>
    </div>
  );
};

export default Home;
