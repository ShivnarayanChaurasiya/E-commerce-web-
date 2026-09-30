function Profile() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">

      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-8 text-center">

        {/* Profile Image */}
        <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-5xl">
          👤
        </div>

        <h1 className="text-2xl font-bold mt-5">
          Shivnarayan Chaurasiya
        </h1>

        <p className="text-gray-500 mt-2">
          Frontend Developer
        </p>

        <div className="mt-6 text-left space-y-3">

          <p>
            <strong>Email:</strong> amit902642@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> +91 9026421766
          </p>

          <p>
            <strong>Location:</strong> India
          </p>
 
        </div>

        <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Edit Profile
        </button>

      </div>

    </section>
  );
}

export default Profile;