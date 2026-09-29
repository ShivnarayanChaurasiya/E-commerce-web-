
import categories from "../data/categories";
import CategoryCard from "./CategoryCard";

function CategorySection(){
    return(
        <section 
          id="categories"
         className="px-6 py-16">
       <div className ="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center">Shop By Category</h2>
        <p className ="text-gray-500 text-center mt-2">Explore our popular categories</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {categories.map((category)=>(
            <CategoryCard
            key= {category.id}
            category ={category}/>
            ))}
      </div>
       </div>

        </section>

    );
}
export default CategorySection;