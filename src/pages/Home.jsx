import LeadForm from "../components/LeadForm/LeadFrom";
import Featured from "../components/Featured/Featured";
import Trending from "../components/Trending/Trending";
import PopularCities from "../components/PopularCities/PopularCities";
import Reviews from "../components/Reviews/Reviews";

function Home() {
  return (
    <div>
      <LeadForm />
      <Featured />
      <Trending />
      <PopularCities />
      <Reviews />
    </div>
  );
}

export default Home;
