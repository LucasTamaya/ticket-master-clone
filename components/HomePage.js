import HomeCardEvent from "./HomeCardEvent";

const HomePage = () => {
  return (
    <div>
      Browse by Category
      <HomeCardEvent title="Concerts" />
      <HomeCardEvent title="Sports"/>
      <HomeCardEvent title="Arts & Theater"/>
      <HomeCardEvent title="Family"/>
    </div>
  );
};

export default HomePage;
