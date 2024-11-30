import LeadForm from "../components/LeadForm/LeadFrom";
import Featured from "../components/Featured/Featured";
import Trending from "../components/Trending/Trending";
import PopularCities from "../components/PopularCities/PopularCities";
import Reviews from "../components/Reviews/Reviews";
import Explore from "../components/Explore/Explore";
import FAQ from "../components/FAQ/FAQ";

function Home() {
  return (
    <div>
      <LeadForm />
      <Featured />
      <PopularCities />
      <Trending />
      <Reviews />
      <Explore />
      <FAQ />
    </div>
  );
}

export default Home;
