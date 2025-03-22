import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#222222]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src={Logo}
                className="w-28 bg-white rounded-full me-3"
                alt="Project Chetna Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Project Chetna
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-20 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://drive.google.com/drive/folders/1-4UounNjGxnSQk7RiVXRbtI1D5iyd4R2"
                    target="_blank"
                    className="hover:underline"
                  >
                    Project Chetna Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/p/C9fOuv5Nivb/"
                    target="_blank"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Project Chetna™
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
