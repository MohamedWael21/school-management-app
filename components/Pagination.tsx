const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button className="py-2 px-4 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow cursor-pointer text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-2 rounded-sm cursor-pointer hover:bg-custom-sky bg-custom-sky">
          1
        </button>
        <div className="px-2 rounded-sm cursor-pointer hover:bg-custom-sky">
          2
        </div>
        <div className="px-2 rounded-sm cursor-pointer hover:bg-custom-sky">
          3
        </div>
        <div className="px-2 rounded-sm cursor-pointer hover:bg-custom-sky">
          4
        </div>
        ...
        <div className="px-2 rounded-sm cursor-pointer hover:bg-custom-sky">
          10
        </div>
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow cursor-pointer text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};
export default Pagination;
