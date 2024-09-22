
export default function userProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-6">
      {/* Profile Container */}
      <div className="bg-gray-800 shadow-lg rounded-lg w-full max-w-md p-6 text-center">
        
        {/* Profile Header */}
        <h1 className="text-3xl font-semibold text-white mb-6">User Profile</h1>

        {/* Profile Info */}
        <p className="text-lg text-gray-300 mb-4">
          Welcome to the profile page!
        </p>

        {/* Display User ID */}
        <div className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md inline-block">
          User ID: {params.id}
        </div>
      </div>
    </div>
  );
}