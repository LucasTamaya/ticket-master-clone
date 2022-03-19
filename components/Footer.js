import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="bg-gray-800 w-screen px-20 py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-y-8 lg:flex-row border-b border-white pb-10">
        <div className="flex-1 flex flex-col">
          <h4 className="text-white font-bold mb-3 text-center lg:text-left">
            Helpful Links
          </h4>
          <ul className="flex flex-col gap-y-3">
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              My account
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Ticket your event
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Refunds and exchanges
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Get help
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Sell
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Gift cards
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              N.Y registered brokers
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Do not sell my information
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col">
          <h4 className="text-white font-bold mb-3 text-center lg:text-left">
            Our Network
          </h4>
          <ul className="flex flex-col gap-y-3">
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              House of blues
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Front gate tickets
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Ticket web
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Universe
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Sell
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              NFL ticket exchange
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              NBATICKETS.com
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              NHL ticket exchange
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col">
          <h4 className="text-white font-bold mb-3 text-center lg:text-left">
            About Us
          </h4>
          <ul className="flex flex-col gap-y-3">
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Who we are
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Ticket master blog
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Ticketing 101
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Privacy Policy
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Work with us
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Across the globe
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Innovation
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col">
          <h4 className="text-white font-bold mb-3 text-center lg:text-left">
            Friends & Partners
          </h4>
          <ul className="flex flex-col gap-y-3">
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              American Express
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              Allianz
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left">
              AWS
            </li>
            <li className="cursor-pointer text-white capitalize text-center lg:text-left font-bold">
              Get our app
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-10 flex flex-col gap-y-8 lg:flex-row justify-between items-center">
        <img
          src="/ticketmaster.svg"
          alt="logo ticket master"
          className="filter-white cursor-pointer"
        />
        <p className="text-white text-center lg:text-left">
          By continuing past this page, you agree to our{" "}
          <span className="font-bold text-white cursor-pointer">
            Terms of use
          </span>
          .
        </p>
        <span className="font-bold text-white">&copy; Ticketmaster 2022</span>
        <div className="flex items-center gap-x-1">
          <img src="/img/footer/usa-flag.png" alt="usa flag" className="w-6" />
          <span className="font-bold text-white">United States</span>
        </div>
        <div className="flex items-center gap-x-4">
          <FacebookIcon className="text-white cursor-pointer" />
          <InstagramIcon className="text-white cursor-pointer" />
          <TwitterIcon className="text-white cursor-pointer" />
          <YouTubeIcon className="text-white cursor-pointer" />
          <a href="https://www.linkedin.com/in/lucas-tamaya-41a09621b">
            <LinkedInIcon className="text-white" />
          </a>
          <a href="https://github.com/LucasTamaya">
            <GitHubIcon className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
