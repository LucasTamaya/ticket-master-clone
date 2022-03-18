import HomeCardEvent from "./HomeCardEvent";
import HomeDiscoverCardEvent from "./HomeDiscoverCardEvent";
import categoryData from "../homeData/category";
import concertsData from "../homeData/concerts";
import sportsData from "../homeData/sports";
import artsTheater from "../homeData/artsTheater";
import familyData from "../homeData/family";
import discoverData from "../homeData/discover";

const HomePage = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-7 p-4">
      <h2 className="font-bold mb-4">Browse by Category</h2>
      {/* Recherche par catégories */}
      <HomeCardEvent data={categoryData} />

      {/* Recherche par meilleure vente dans les concerts */}
      <h2 className="font-bold mb-4">Top Selling</h2>
      <h3 className="mb-2">Concerts</h3>
      <HomeCardEvent data={concertsData} />

      {/* Recherche par sports */}
      <h2 className="font-bold mb-4">Sports</h2>
      <HomeCardEvent data={sportsData} />

      {/* Recherche par arts et théâtre */}
      <h2 className="font-bold mb-4">Arts & Theater</h2>
      <HomeCardEvent data={artsTheater} />

      {/* Recherche par activités familiales */}
      <h2 className="font-bold mb-4">Family</h2>
      <HomeCardEvent data={familyData} />

      {/* Activités à découvrir */}
      <h2 className="font-bold mb-4">Discover More Events</h2>
      <HomeDiscoverCardEvent data={discoverData} />
    </div>
  );
};

export default HomePage;
