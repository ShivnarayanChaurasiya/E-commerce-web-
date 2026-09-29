import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <h2 className="text-center text-2xl mt-20">
        Product Not Found
      </h2>
    );
  }

  return (
    <section className="px-6 py-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">

          <p className="text-blue-600 font-medium">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mt-3">
            {product.name}
          </h1>

          <p className="text-3xl font-bold text-blue-600 mt-5">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mt-5 leading-7">
            This is a premium quality product.
            Perfect choice for your daily needs.
            Get this product at an amazing price.
          </p>

          <button className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;