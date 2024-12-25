import newsBg from "../../../src/assets/images/bg-shadow.png";
import logo from "../../../src/assets/images/logo-footer.png";
const Footer = () => {
  const background = {
    backgroundImage: `url(${newsBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <footer className="footer footer-center relative top-48  bg-black font-extralight text-yellow-50 md:p-10 p-6 md:mt-0 mt-6">
        <aside className="container mx-auto flex justify-center items-center pt-20 mt-24 md:mt-14">
          <img
            className="border-dashed border border-gray-400 w-28 p-2"
            src={logo}
            alt="logo"
          />
        </aside>

        <div className="container mx-auto md:px-4 px-0 flex flex-col md:flex-row justify-between text-start">
          <nav className="flex flex-col space-y-3">
            <h6 className="footer-title">About Us</h6>
            <a className="link link-hover">We are a passionate team</a>
            <a className="link link-hover">dedicated to providing the best</a>
            <a className="link link-hover">services to our customers.</a>
          </nav>
          <nav className="flex flex-col space-y-3 md:pt-0 pt-6 text-start">
            <h6 className="footer-title">Quick Links</h6>
            <li className="link link-hover">Home</li>
            <li className="link link-hover">About</li>
            <li className="link link-hover">Services</li>
            <li className="link link-hover">Contact</li>
          </nav>
          <form>
            <h6 className="font-bold mb-3 opacity-50">Subscribe</h6>
            <fieldset className="form-control">
              <a className="link link-hover opacity-50">
                Subscribe to our newsletter for the
              </a>
              <a className="link link-hover opacity-50 pb-4">latest updates.</a>
              <div className="w-full px-1">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="rounded-tl-md rounded-bl-md input-bordered join-item p-3 md:mb-0 mb-2"
                />
                <button
                  className="
                  rounded-tr-md rounded-br-md 
                  p-3 bg-gradient-to-r from-purple-500 to-pink-400 join-item"
                >
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        {/* added newsletter */}
        <div
          style={{ ...background, width: "90%" }}
          className="flex flex-col justify-center items-center md:py-10 w-11/ absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg mb-5 text-black space-y-4 border"
        >
          <div className="space-y-4 py-10 md:px-0 px-2">
            <h2 className="text-center text-3xl text-black font-bold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-center text-md text-gray-700 font-medium">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex justify-center items-center md:flex-row flex-col gap-2">
              <input
                className="border px-4 py-2 rounded-md"
                type="text"
                placeholder="Enter your email"
              />
              <button className="border border-blue-300 px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <aside className="grid-flow-col w-full border-t pt-8 border-gray-400">
          <p>@2024 Your Company All Rights Reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
