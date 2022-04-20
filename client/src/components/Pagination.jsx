import React, { useEffect } from "react";

const Pagination = ({ page, setPage, plainsPerPage, plains, pagination }) => {
  const pages = [];
  const totalPages = Math.ceil(plains / plainsPerPage);

  const back = () => {
    setPage(parseInt(page) - 1);
  };

  const Next = () => {
    setPage(parseInt(page) + 1);
  };

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="flex bg-white rounded-lg font-[Poppins]">
      <button
        onClick={back}
        disabled={page <= 1}
        className="h-12 border-2 border-r-0 border-indigo-400
            px-4 rounded-l-lg bg-indigo-300 hover:text-white"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      {pages.map((pg) => (
        <button
          key={pg}
          onClick={() => pagination(pg)}
          className={`h-12 border-2 border-r-0 border-indigo-400
              w-12 ${page === pg && "bg-indigo-400 text-white"}`}
        >
          {pg}
        </button>
      ))}
      <button
        onClick={Next}
        disabled={page >= totalPages}
        className="h-12 border-2  border-indigo-400
              px-4 rounded-r-lg hover:bg-indigo-300 hover:text-white"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
