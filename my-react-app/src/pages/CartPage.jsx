import { useCart } from "../context/CartContext";

function CartPage() {

  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">
          Your Cart is Empty 🛒
        </h1>

        <p className="text-gray-500 mt-3">
          Add some products to your cart.
        </p>
      </div>
    );
  }

  return (
    <section className="px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Shopping Cart 🛒
        </h1>

        <div className="space-y-4">

          {cart.map((product, index) => (

            <div
              key={`${product.id}-${index}`}
              className="flex items-center gap-5 bg-white shadow-md rounded-xl p-4"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">

                <h2 className="text-xl font-semibold">
                  {product.name}
                </h2>

                <p className="text-gray-500">
                  {product.category}
                </p>

                <p className="text-blue-600 font-bold mt-2">
                  ₹{product.price}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CartPage;