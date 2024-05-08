'use client';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-4 py-2 rounded-md transition-colors duration-300 ${
          currentPage === 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-lime-500 hover:bg-lime-600 text-white'
        }`}
      >
        이전
      </button>
      <span className="mx-4 text-gray-500">
        {currentPage}
        {' '}
        /
        {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-4 py-2 rounded-md transition-colors duration-300 ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-lime-500 hover:bg-lime-600 text-white'
        }`}
      >
        다음
      </button>
    </div>
  );
}

export default Pagination;
