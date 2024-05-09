import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import '../styles/pagination.css';

function Pagination({ canPreviousPage, canNextPage, nextPage, previousPage, pageIndex, pageOptions, gotoPage }) {
  const navigate = useNavigate();
  const location = useLocation();

  // 페이지 변경 시 URL 업데이트
  useEffect(() => {
    if (pageIndex !== 0) {
      navigate(`${location.pathname}?page=${pageIndex + 1}`);
    } else {
      const newSearch = location.search.replace(/[?&]page=\d+/g, '');
      navigate(`${location.pathname}${newSearch}`);
    }
  }, [pageIndex, navigate, location.pathname, location.search]);

  // URL 변경 시 페이지 업데이트
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');
    if (page !== null && page !== pageIndex + 1) {
      const pageNumber = Number(page);
      if (pageNumber === pageNumber) { // NaN check 
        gotoPage(pageNumber - 1);
      }
    }
  }, []);
  

  const pageNumbers = [];
  const startPage = Math.floor(pageIndex / 5) * 5;
  const endPage = Math.min(startPage + 5, pageOptions.length);
  
  //페이지 번호 버튼 
  for(let i = startPage; i < endPage; i++){
    pageNumbers.push(
      <button className={'page-btn' + (pageIndex == i ? " active" : "")}
        key={i}
        onClick={() => gotoPage(i)}
        disabled={pageIndex === i}
      >
        {i + 1}
      </button>
    );
  }

// console.log(pageOptions)


  return (
    <div className='page-container'>
      <button className='page-btn' onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>
          {pageNumbers}
      <button className='page-btn' onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button> 
      <div className='page-total'>
        <span className='page-str'>
          페이지 {pageIndex + 1} / {pageOptions.length}
        </span>
      </div>
    </div>
  );
}

export default Pagination;