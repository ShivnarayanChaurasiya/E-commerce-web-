import products from "../data/products";
import ProductCard from "./ProductCard";

function  ProductSection(){
     return(
        <section className="px-6 py-16 bg-gray-50">

            <div className ="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center">Featured Products</h2> 
                
                <p className="text-gray-500 text-center mt-2"> 
                    Check out our latest products
                </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                  {products.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}/>
                  ))}

                  </div>
             </div>
        </section>
     );
}
export default ProductSection;