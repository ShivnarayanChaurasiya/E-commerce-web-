 function Navbar(){
return(
    <nav className="bg-white shadow-md px-6 py-4">
  <div className="max-w-7xl mx-auto flex items-center gap-8">

    {/* Logo  */}
    <h1 className ="text-2xl font-bold text-blue-600">ShopZone</h1>

    {/* Navigation  */}
    <div className="hidden md:flex gap-6 whitespace-nowrap">

    <a href="#" className ="text-gray-700 hover:text-blue-600"> Home</a>
   
    <a href ="#" className="text-gray-700 hover:text-blue-600">Products</a>
   
     <a href="#" className="text-gray-700 hover:text-blue-600"> Categories</a>

     <a href="#" className="text-gray-700 hover:text-blue-600"> Contact </a>

    </div>

     {/* Search */}
     <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden flex-1 max-w-md">
        <input 
        type ="text"
        placeholder="Search products..."
        className="px-4 py-2 outline-none w-full"/>

        <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Search</button>
     </div>

   {/* Cart */}
   <button className="relative text-2xl"> 🛒
 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
            0
          </span>
   </button>
    

  </div>
    </nav>
);

 }
 export default Navbar;