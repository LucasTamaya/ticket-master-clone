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
      <HomeCardEvent data={categoryData} />
      <h2 className="font-bold mb-4">Top Selling</h2>
      <h3 className="mb-2">Concerts</h3>
      <HomeCardEvent data={concertsData} />
      <h2 className="font-bold mb-4">Sports</h2>
      <HomeCardEvent data={sportsData} />
      <h2 className="font-bold mb-4">Arts & Theater</h2>
      <HomeCardEvent data={artsTheater} />
      <h2 className="font-bold mb-4">Family</h2>
      <HomeCardEvent data={familyData} />
      <h2 className="font-bold mb-4">Discover More Events</h2>
      <HomeDiscoverCardEvent data={discoverData} />

      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 mb-12">
        {categoryData?.map((x) => (
          <div key={x.title} className="w-full cursor-pointer">
            <HomeCardEvent title={x.title} img={x.img} />
          </div>
        ))}
      </div> */}

      {/* <h2 className="font-bold mb-4">Top Selling</h2>
      <h3 className="mb-2">Concerts</h3>
      <div className="grid grid-cols-4 gap-x-5 gap-y-5 mb-12">
        {concertsData?.map((x) => (
          <div key={x.title} className="flex-1 cursor-pointer">
            <HomeCardEvent title={x.title} img={x.img} />
          </div>
        ))}
      </div>

      <h2 className="font-bold mb-4">Sports</h2>
      <div className="grid grid-cols-4 gap-x-5 gap-y-5 mb-12">
        {sportsData?.map((x) => (
          <div key={x.title} className="flex-1 cursor-pointer">
            <HomeCardEvent title={x.title} img={x.img} />
          </div>
        ))}
      </div>

      <h2 className="font-bold mb-4">Arts & Theater</h2>
      <div className="grid grid-cols-4 gap-x-5 gap-y-5 mb-12">
        {artsTheater?.map((x) => (
          <div key={x.title} className="flex-1 cursor-pointer">
            <HomeCardEvent title={x.title} img={x.img} />
          </div>
        ))}
      </div>

      <h2 className="font-bold mb-4">Family</h2>
      <div className="grid grid-cols-4 gap-x-5 gap-y-5 mb-12">
        {familyData?.map((x) => (
          <div key={x.title} className="flex-1 cursor-pointer">
            <HomeCardEvent title={x.title} img={x.img} />
          </div>
        ))}
      </div>

      <h2 className="font-bold mb-4">Discover More Events</h2>
      <div className="grid grid-cols-6 gap-x-5 gap-y-5">
        {discoverData?.map((x) => (
          <div key={x.title} className="flex-1 cursor-pointer">
            <HomeDiscoverCardEvent title={x.title} img={x.img} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default HomePage;
