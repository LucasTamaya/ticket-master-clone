import Link from "next/link";

const HomeCardEvent = ({ title, imgSrc }) => {
  console.log(title);

  return (
    <div className="w-[200px] h-[120px] rounded flex items-end p-2 bg-[url(/concerts.jpg)] bg-cover">
      <span className="bg-gray-900/80 text-white p-1 rounded">{title}</span>
    </div>
  );
};

export default HomeCardEvent;
