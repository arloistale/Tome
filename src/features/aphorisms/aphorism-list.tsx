import React, { useState } from 'react';
import { useAppSelector } from '../../state/hooks';
import AphorismDisplay from './aphorism-display';
import { presentedAphorisms } from './aphorismsSlice';

const AphorismList = () => {
  const ITEMS_PER_PAGE = 5; // You can adjust this value based on your preference
  const state = useAppSelector(state => state.aphorisms);
  const presented = useAppSelector(presentedAphorisms);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(presented.length / ITEMS_PER_PAGE);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0); 
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0); 
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedItems = presented.slice(startIndex, endIndex);

  const renderedCells = displayedItems.map(item => (
    <React.Fragment key={item.id}>
      <AphorismDisplay item={item} />
    </React.Fragment>
  ));

  switch (state.status) {
    case 'loading':
      return <p>Loading...</p>
    case 'failed':
      return <p>Failed to load aphorisms: {state.errorMessage}</p>
    case 'idle':
      return (
        <div>
          <div className='mb-4'>
            {renderedCells}
          </div>
          <nav className='pagination is-centered' role='navigation' aria-label="pagination">
            {currentPage > 1 && (
              <a className="pagination-previous" role="button" aria-label='Go to previous page' onClick={handlePreviousPage}>Previous</a>
            )}
            {currentPage < totalPages && (
              <a className="pagination-next" role="button" aria-label='Go to next page' onClick={handleNextPage}>Next</a>
            )}
          </nav>
        </div>
      );
  }
};

export default AphorismList;
