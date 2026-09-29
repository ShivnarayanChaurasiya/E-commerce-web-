import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductSection({ searchTerm }) {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {

    const matchCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchSearch =
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  const categories = [
    "All",
    "Shoes",
    "Watch",
    "Accessories",
    "Electronics",
  ];

  return (
    <section
     id="products"
     className="px-6 py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center">
          Featured Products
        </h2>

        <p className="text-gray-500 text-center mt-2">
          Check out our latest products
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found 😔
          </p>
        )}

      </div>

    </section>
  );
}

export default ProductSection;