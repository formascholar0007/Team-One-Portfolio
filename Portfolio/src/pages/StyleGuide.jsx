
const StyleGuide = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen font-sans items-center ">
      <h1 className="text-5xl font-extrabold text-center mb-12 t bg-clip-text ">Style Guide</h1>

      {/* Headings */}
      <section className="mb-12 ">
        <h2 className="text-4xl font-semibold mb-6">Headings</h2>
        <div className="space-y-4">
          <h1 className="text-6xl transition-transform transform hover:scale-105">H1 Heading</h1>
          <h2 className="text-5xl transition-transform transform hover:scale-105">H2 Heading</h2>
          <h3 className="text-4xl transition-transform transform hover:scale-105">H3 Heading</h3>
          <h4 className="text-3xl transition-transform transform hover:scale-105">H4 Heading</h4>
          <h5 className="text-2xl transition-transform transform hover:scale-105">H5 Heading</h5>
          <h6 className="text-xl transition-transform transform hover:scale-105">H6 Heading</h6>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-12">
        <h2 className="text-4xl font-semibold mb-6">Buttons</h2>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg transform transition-transform hover:scale-110">Primary</button>
          <button className="bg-gray-500 text-white py-2 px-6 rounded-full shadow-lg transform transition-transform hover:scale-110">Secondary</button>
          <button className="bg-green-500 text-white py-2 px-6 rounded-full shadow-lg transform transition-transform hover:scale-110">Success</button>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-12">
        <h2 className="text-4xl font-semibold mb-6">Cards</h2>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4 bg-white transition-transform transform hover:scale-105">
          <img className="w-full" src="https://via.placeholder.com/400x200" alt="Sample" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="mb-12">
        <h2 className="text-4xl font-semibold mb-6">Forms</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 transition-transform transform hover:scale-105">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default StyleGuide;
