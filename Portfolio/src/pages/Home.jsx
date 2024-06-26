
   

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 w-full py-6">
        <h1 className="text-white text-center text-4xl font-bold">Welcome to Team One,s Website</h1>
      </header>
      
      <main className="flex-1">
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-semibold text-gray-800 mb-8">Hello, Developers!</h2>
            <p className="text-gray-600 text-lg mb-8">
              This is a beautifully designed homepage built with React and Tailwind CSS.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </section>
        
        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-semibold text-gray-800 text-center mb-12">Features</h3>
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">Feature One</h4>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">Feature Two</h4>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">Feature Three</h4>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;


