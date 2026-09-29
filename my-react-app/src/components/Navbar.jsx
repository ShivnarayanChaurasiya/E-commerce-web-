import { Link, useNavigate } from "react-router-dom";

function Navbar({ searchTerm, setSearchTerm }) {

  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4">

      <div className="max-w-7xl mx-auto flex items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 mr-10"
        >
          ShopZone
        </Link>


        {/* Navigation */}
        <div className="flex gap-6 whitespace-nowrap mr-10">

          <Link
           onClick={() => goToSection("Home")}
            // to="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <button
            onClick={() => goToSection("products")}
            className="text-gray-700 hover:text-blue-600"
          >
            Products
          </button>

          <button
            onClick={() => goToSection("categories")}
            className="text-gray-700 hover:text-blue-600"
          >
            Categories
          </button>

          <button
            onClick={() => goToSection("contact")}
            className="text-gray-700 hover:text-blue-600"
          >
            Contact
          </button>

        </div>


        {/* Search */}
        <div className="flex border border-gray-300 rounded-lg overflow-hidden w-80">

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="px-4 py-2 outline-none w-full"
          />

          <button
            type="button"
            className="bg-blue-600 text-white px-4 hover:bg-blue-700"
          >
            Search
          </button>

        </div>


        {/* Cart */}
        <Link
          to="/cart"
          className="relative text-2xl ml-auto"
        >
          🛒

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
            0
          </span>

        </Link>

      </div>

    </nav>
  );
}

export default Navbar;