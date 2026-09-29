import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
    const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      <Link to={`/product/${product.id}`}>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-5">

          <p className="text-sm text-gray-500">
            {product.category}
          </p>

          <h2 className="text-xl font-semibold mt-1">
            {product.name}
          </h2>

          <p className="text-lg font-bold text-blue-600 mt-2">
            ₹{product.price}
          </p>

        </div>

      </Link>

      <div className="px-5 pb-5">

        <button
          onClick={() => addToCart(product)}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;