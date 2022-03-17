const AuthBanner = ({ type }) => {
  let titleFirstPart;
  let titleSecondPart;
  let paragraph;

  if (type === "signin") {
    titleFirstPart = "Welcome";
    titleSecondPart = "Back";
    paragraph =
      "Discover millions of events, get alerts about your favorite artists, teams, plays and more - plus always-secure, effortless ticketing.";
  }

  if (type === "signup") {
    titleFirstPart = "Your All-";
    titleSecondPart = "Access Pass";
    paragraph =
      "This is it. - millions of live events, up to the minute alerts for your favorite artists and teams and, of course, always safe, secure ticketing.";
  }

  return (
    <div className="w-[400px] h-[100vh] bg-[url(/signin-banner.jpg)] bg-cover hidden relative lg:block">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 p-10 flex flex-col gap-y-[30px]">
        <h3 className="text-cyan-400 text-5xl font-bold flex flex-col gap-y-4">
          <span>{titleFirstPart}</span>
          <span>{titleSecondPart}</span>
        </h3>

        <p className="text-white">{paragraph}</p>

        <div className="w-[100px] h-[5px] bg-cyan-400"></div>
      </div>
    </div>
  );
};

export default AuthBanner;
