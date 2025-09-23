export const Pegination = ({
  goToPreviosPage,
  goToNextPage,
  handelPageChange,
  noOfPages,
  currentPage,
}) => {
  return (
    <>
      <div>
        <div className="">
          <button
            disabled={currentPage === 0}
            className="page-number "
            onClick={() => goToPreviosPage()}
          >
            ⬅️
          </button>
          {...Array(noOfPages)
            .keys()
            .map((n) => (
              <span
                className="page-number "
                key={n}
                onClick={() => handelPageChange(n)}
              >
                {n}
              </span>
            ))}

          <button
            disabled={currentPage === noOfPages - 1}
            className="page-number"
            onClick={() => goToNextPage()}
          >
            ➡️
          </button>
        </div>
      </div>
    </>
  );
};
