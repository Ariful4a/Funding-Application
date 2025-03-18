const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Company Info */}
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-3xl font-semibold">FandWave</h3>
              <p className="mt-2 text-gray-300">
                A platform for funding creative projects, personal needs, and startups.
              </p>
            </div>
  
            {/* Footer Links */}
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="mt-3 space-y-2">
                <li><a href="#" className="hover:text-gray-400">Home</a></li>
                <li><a href="#" className="hover:text-gray-400">About</a></li>
                <li><a href="#" className="hover:text-gray-400">Campaigns</a></li>
                <li><a href="#" className="hover:text-gray-400">Contact</a></li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4 mt-3">
                <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 FandWave. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  