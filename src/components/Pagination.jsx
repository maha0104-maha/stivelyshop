import React from "react";
const Pagination=({currentPage,totalPages,setCurrentPage}) => {
   //if 1page
  if (totalPages <= 1) {
    return null;
  }
  const maxVisiblePages = 5;
  let startPage=Math.max(currentPage-2,1);
  let endPage = Math.min(startPage+maxVisiblePages-1,totalPages);
  if(endPage-startPage+1<maxVisiblePages){
    startPage=Math.max(endPage-maxVisiblePages+1,1
    );
  }
  const pages=[];
  for(let page=startPage;page<=endPage;page++){
    pages.push(page);
  }
  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button type="button" disabled={currentPage===1}
        onClick={() =>
          setCurrentPage(currentPage-1)
        }
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 transition hover:border-gray-900 disabled:cursor-not-allowed disabled:opacity-40" >
        Previous
        </button>
      {pages.map((page) => (
        <button key={page} type="button"
          onClick={() =>
            setCurrentPage(page)
          }
          className={`h-9 w-9 rounded-lg text-sm transition ${
            currentPage === page
              ? "bg-gray-900 text-white"
              : "border border-gray-300 text-gray-700 hover:border-gray-900"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 transition hover:border-gray-900 disabled:cursor-not-allowed disabled:opacity-40" >
        Next
      </button>
    </div>
  );
};

export default Pagination;