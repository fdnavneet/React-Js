import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./productCard";
import { PAGE_SIZE } from "./constaint";
import { Pegination } from "./pegination";


// const PAGE_SIZE = 10;

function App({}) {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=194");
    const jsonData = await response.json();
    console.log(jsonData);
    setProducts(jsonData.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handelPageChange = (n) => {
    setCurrentPage(n);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPreviosPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return !products.length ? (
    <h1> No product Found </h1>
  ) : (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <div className="product-contaner">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>

      <Pegination
        goToPreviosPage ={goToNextPage}
        goToNextPage = {goToNextPage}
        handelPageChange ={handelPageChange}
        noOfPages={noOfPages}
        currentPage ={currentPage}
      />

      {/* pegination ui */}

      {/* <div className="">
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
      </div> */}
    </div>
  );
}

export default App;
