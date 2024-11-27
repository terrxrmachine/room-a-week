import LeadForm from "../components/LeadForm/LeadFrom";
import Featured from "../components/Featured/Featured";
import Trending from "../components/Trending/Trending";
import PopularCities from "../components/PopularCities/PopularCities";

function Home() {
  return (
    <div>
      <LeadForm />
      <Featured />
      <Trending />
      <PopularCities />
      <span>What renters are saying about Room A Week:</span>
    </div>
  );
}

export default Home;
