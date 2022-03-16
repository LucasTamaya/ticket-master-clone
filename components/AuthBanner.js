const AuthBanner = () => {
  return (
    <div className="w-[400px] h-[100vh] bg-[url(/signin-banner.jpg)] bg-cover hidden relative lg:block">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 p-10 flex flex-col gap-y-[30px]">
        <h3 className="text-cyan-400 text-5xl font-bold flex flex-col gap-y-4">
          <span>Welcome</span>
          <span>Back</span>
        </h3>

        <p className="text-white">
          Discover millions of events, get alerts about your favorite artists,
          teams, plays and more - plus always-secure, effortless ticketing.
        </p>

        <div className="w-[100px] h-[5px] bg-cyan-400"></div>
      </div>
    </div>
  );
};

export default AuthBanner;
