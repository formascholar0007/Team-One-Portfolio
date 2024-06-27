const About = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen font-sans">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        About Us
      </h1>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Company</h2>
        <p className="text-gray-700 leading-relaxed">
          What is an About Us Page? An About Us page is an opportunity to
          introduce your company on your own terms. It's where potential
          customers will go to find out why you're passionate about your
          products – and why they should be, too. A well-crafted About Us page
          is the key to building trust and loyalty with your customers.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          One Piece takes place in an alternate world where pirates rule the
          seas and anything can happen. Gold Roger was the Pirate King who had
          fame, fortune, and power ... The story follows the adventures of
          Monkey D. Luffy and his crew, the Straw Hat Pirates, where he explores
          the Grand Line in search of the mythical treasure ...{" "}
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-700">Co-Founder & CEO</p>
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula commodo nulla, et fermentum nulla lacinia ut.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-700">Chief Marketing Officer</p>
            <p className="text-gray-700 mt-2">
              Ut eget lectus quis tortor iaculis tempor. In hac habitasse platea
              dictumst.
            </p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ex
          sed nisl pharetra ultricies vitae nec justo. Quisque quis magna
          libero. Sed auctor felis ut sem iaculis, sed tincidunt justo
          fringilla.
        </p>
      </div>

      
    </div>
  );
};

export default About;
