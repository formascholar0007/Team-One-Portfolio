
const Contact = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen font-sans">
      <header className="bg-blue-600 w-full py-6">
        <h1 className="text-white text-center text-4xl font-bold">Contact Us</h1>
      </header>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-6 mb-12">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
              id="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-110"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Location</h2>
        <div className="h-64 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=San+Francisco,CA&zoom=13&size=600x300&maptype=roadmap"
            alt="Map of San Francisco"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Follow Us</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-110"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://linkedin.com"
            className="text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-110"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;
