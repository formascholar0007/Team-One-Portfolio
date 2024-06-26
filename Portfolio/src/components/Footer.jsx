
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
       
        <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center mt-5 justify-between space-y-4 md:space-y-0">
          <div className="w-full md:w-auto flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your e-mail"
              className="px-4 py-2 rounded-full w-full md:w-auto text-gray-700 focus:outline-none"
            />
            <button className="bg-pink-500 hover:bg-pink-700 text-white px-4 py-2 rounded-full">
              Subscribe Now!
            </button>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col">
              <h4 className="font-bold hover:bg-white hover:border-4 rounded-xl text-center hover:text-black">Partnership</h4>
              <a href="#" className="hover:text-gray-400">Websites</a>
              <a href="#" className="hover:text-gray-400">Social Media</a>
              <a href="#" className="hover:text-gray-400">Branding</a>
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold hover:bg-white hover:border-4 rounded-xl text-center hover:text-black">About</h4>
              <a href="#" className="hover:text-gray-400">Our Projects</a>
              <a href="#" className="hover:text-gray-400">Careers</a>
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold hover:bg-white hover:border-4 rounded-xl text-center hover:text-black">Support</h4>
              <a href="#" className="hover:text-gray-400">Support Request</a>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; All rights reserved 2020</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
