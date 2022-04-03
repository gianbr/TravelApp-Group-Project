import React from "react";

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

  return (
    <div className="flex bg-white rounded-lg font-[Poppins]">
      <button
        onClick={back}
        disabled={page <= 1}
        className="h-12 border-2 border-r-0 border-teal-500
            px-4 rounded-l-lg bg-teal-500 hover:text-white"
      >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      {pages.map((pg) => (
        <button
          key={pg}
          onClick={() => pagination(pg)}
          className={`h-12 border-2 border-r-0 border-teal-500
              w-12 ${page === pg && "bg-teal-500 text-white"}`}
        >
          {pg}
        </button>
      ))}
      <button
        onClick={Next}
        disabled={page >= totalPages}
        className="h-12 border-2  border-teal-500
              px-4 rounded-r-lg hover:bg-teal-500 hover:text-white"
      >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
