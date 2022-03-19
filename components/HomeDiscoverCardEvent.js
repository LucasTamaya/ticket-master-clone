import Link from "next/link";

const HomeDiscoverCardEvent = ({ data }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-5 mb-12 cursor-pointer">
      {data?.map((x) => (
        <Link key={x.title} href={`/search/keyword=${x.title.toLowerCase()}`}>
          <div
            style={{ backgroundImage: `url(${x.img})` }}
            className="w-full h-[90px] rounded flex items-end p-2 bg-cover bg-center"
          >
            <span className="bg-gray-900/80 text-white p-1 rounded">
              {x.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeDiscoverCardEvent;
