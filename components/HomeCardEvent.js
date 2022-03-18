import Link from "next/link";

const HomeCardEvent = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 mb-12 cursor-pointer">
      {data?.map((x) => (
        // Lien vers la page de recherche de l'intitulé correspondant (ex: concerts, sports ...)
        <Link href={`/search/${x.title.toLowerCase()}`}>
          <div
            style={{ backgroundImage: `url(${x.img})` }}
            className="w-full h-[150px] rounded flex items-end p-2 bg-cover bg-center"
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

export default HomeCardEvent;
