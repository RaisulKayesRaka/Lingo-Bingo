import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 text-white">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col space-y-4">
        <div className="flex flex-col items-center justify-center">
          <img src="./logo.svg" alt="" className="h-16 w-16" />
          <h2 className="text-2xl font-bold text-white">Lingo Bingo</h2>
        </div>
        <div className="text-center">
          <p>Email: support@lingobingo.com</p>
          <p>Phone: +123-456-7890</p>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="hover:text-blue-500" size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="hover:text-blue-400" size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-pink-500" size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-700" size={24} />
          </a>
        </div>
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Lingo Bingo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
