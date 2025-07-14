import React, { useEffect, useState } from "react";

//1: take value of page size
const PAGE_SIZE = 10;

const ProductCard = ({ image, title }) => {
  return (
    <>
      <div className="product_card_container">
        <img src={image} alt={title} className="image_container" />
        <h4 className="title_container">{title}</h4>
      </div>
    </>
  );
};

const PaginationDemo = () => {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);

  //2: get no of products
  // let totalProducts = 0;
  //3: Calculate no.of pages
  // const noOfPages = Math.ceil(totalProducts / PAGE_SIZE); //it will give decimal value so wrap it with ceil()

  // for add dynamic value to slice() to showing data
  // const start = currentPage * PAGE_SIZE;
  // const end = start + PAGE_SIZE;

  useEffect(() => {
    fetchData();
  }, [currentPage]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `https://dummyjson.com/products?skip=${
          (currentPage - 1) * PAGE_SIZE
        }&limit=${PAGE_SIZE}`
      );
      const jsonData = await data.json();
      console.log(jsonData.products);
      // totalProducts = jsonData.total;
      setApiData(jsonData.products);
      setTotalProducts(jsonData.total);
    } catch (err) {
      console.error("Failed to fetch data!", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (n) => {
    // console.log(n, "NNNNNNN");
    setCurrentPage(n + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return !totalProducts ? (
    <h1>No data found</h1>
  ) : (
    <div>
      <h1>Pagination</h1>
      <div className="pagination_btn_container">
        <button
          className="pagination_box"
          onClick={() => goToPrevPage()}
          disabled={currentPage === 1}
        >
          ⬅️
        </button>
        {[...Array(Math.ceil(totalProducts / PAGE_SIZE)).keys()].map((n) => (
          <button
            key={n + 1}
            className={`pagination_box ${
              currentPage === n + 1 ? "active" : ""
            } `}
            onClick={() => handlePageChange(n)}
          >
            {n + 1}
          </button>
        ))}
        <button
          className="pagination_box"
          onClick={() => goToNextPage()}
          disabled={currentPage === Math.ceil(totalProducts / PAGE_SIZE)}
        >
          ➡️
        </button>
      </div>
      <div className="pagination_container">
        {apiData.map((item) => (
          <ProductCard
            image={item.thumbnail}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PaginationDemo;
// 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
