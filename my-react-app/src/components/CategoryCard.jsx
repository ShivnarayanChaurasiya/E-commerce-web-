import Categories from "../data/categories";

function CategoryCard({category}){
    return (
        <div className ="group cursor-pointer">

            <div className="overflow-hidden rounded-xl">
                <img
                src = {category.image}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
            </div>

            <h3 className="text-xl font-semibold text-center mt-4">
                {category.name}
            </h3>
        </div>
    );
}
export default CategoryCard;