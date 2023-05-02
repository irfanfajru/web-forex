export default function ProfileCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center p-4">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Admin
        </h5>
        <img
          className="w-24 h-24 rounded-full shadow-lg"
          src="https://ui-avatars.com/api/?name=admin"
          alt="Bonnie image"
        />
        <div className="mt-2">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Upload New Photo
          </a>
        </div>
      </div>
    </div>
  );
}
