function Hero (){
return(
    <section
     id ="Home"
    className="big-blue-50 px-6 py-16">
        <div className="max-w-7x1 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">


          {/* Left Content   */}
          <div className ="flex-1">

            <p className = "text-blue-600 font-semibold mb-3">NEW COLLECTION 2026</p>
             
             <h1 className ="text-5xl font-bold text-gray-900 leading-tight">Find your
                <span className="text-blue-600">Perfect Style</span>
             </h1>

             <p className ="text-gray-600 mt-5 text-lg max-w-lg">
                Discover the latest fashion , electronics and accessories at amazing prices.
             </p>

             <button  className="mt-7 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Shop Now
             </button>

          </div>
           {/* Right Image */}
           <div className ="flex-1 flex justify-center">
            <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Shopping"
            className ="w-full max-w-lg rounded-2xl shadow-lg" />
           </div>
        </div>
    </section>
);

}
export default Hero;