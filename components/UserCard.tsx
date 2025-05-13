const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl p-4 flex-1 min-w-[130px] odd:bg-custom-purple even:bg-custom-yellow">
      <div className="flex justify-between items-center">
        <span className="bg-white rounded-full px-2 py-1 text-green-600 text-[10px]">
          2024/12
        </span>
        <button className="flex gap-0.5 cursor-pointer">
          <span className="w-1 h-1 rounded-full block bg-white"></span>
          <span className="w-1 h-1 rounded-full block bg-white"></span>
          <span className="w-1 h-1 rounded-full block bg-white"></span>
        </button>
      </div>
      <p className="text-2xl font-semibold my-4">6,123</p>

      <span className="text-sm capitalize font-medium text-gray-500">
        {type}s
      </span>
    </div>
  );
};
export default UserCard;
