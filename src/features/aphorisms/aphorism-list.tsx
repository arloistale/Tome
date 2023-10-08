import './aphorism-list.scss'

import { useEffect } from 'react';
import { useAppSelector } from '../../state/hooks';
import AphorismDisplay from './aphorism-display';
import { presentedAphorisms } from './aphorismsSlice';
import { Link, useLocation } from 'react-router-dom';

const ITEMS_PER_PAGE = 5; 

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

const AphorismList = () => {
  const { status, errorMessage } = useAppSelector(state => state.aphorisms);
  const presented = useAppSelector(presentedAphorisms);

  const totalPages = Math.ceil(presented.length / ITEMS_PER_PAGE);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = clamp(Number(queryParams.get('page')) || 1, 1, totalPages);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedItems = presented.slice(startIndex, endIndex);

  const renderedCells = displayedItems.map(item => <AphorismDisplay key={item.id} item={item} />);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  switch (status) {
    case 'loading':
      return <p>Loading...</p>
    case 'failed':
      return <p>Failed to load aphorisms: {errorMessage}</p>
    case 'idle':
      return (
        <div>
          <div className='mb-4'>
            {renderedCells}
          </div>
          <nav className='pagination is-centered' role='navigation' aria-label="pagination">
            {page > 1 && (
              <Link className="pagination-previous" to={`/reflections?page=${page - 1}`}>Previous</Link>
            )}
            {page < totalPages && (
              <Link className="pagination-next" to={`/reflections?page=${page + 1}`}>Next</Link>
            )}
          </nav>
        </div>
      );
  }
};

export default AphorismList;
