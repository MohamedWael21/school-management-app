const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Events</h2>
        <span className="text-xs text-gray-400">View All</span>
      </div>{" "}
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-custom-sky-light rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg  text-gray-600 font-medium">
              Lorem ipsum dolor sit.
            </h2>
            <span className="rounded-md block text-xs p-1 bg-white text-gray-400">
              2025-01-01
            </span>
          </div>
          <p className="text-sm mt-1 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-custom-yellow-light rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg  text-gray-600 font-medium">
              Lorem ipsum dolor sit.
            </h2>
            <span className="rounded-md block text-xs p-1 bg-white text-gray-400">
              2025-01-01
            </span>
          </div>
          <p className="text-sm mt-1 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-custom-purple-light rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg  text-gray-600 font-medium">
              Lorem ipsum dolor sit.
            </h2>
            <span className="rounded-md block text-xs p-1 bg-white text-gray-400">
              2025-01-01
            </span>
          </div>
          <p className="text-sm mt-1 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Announcements;
