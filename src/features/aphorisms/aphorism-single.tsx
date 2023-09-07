import './aphorism-single.css';

import { useAppDispatch } from '../../state/hooks';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../state/hooks';
import AphorismDisplay from './aphorism-display';
import getDateString from '../../util/date';
import { fetchAphorismsAsync, mostRecentPresentedAphorism } from './aphorismsSlice';

const AphorismSingle = () => {
  const state = useAppSelector(state => state.aphorisms);
  const mostRecent = useAppSelector(mostRecentPresentedAphorism);

  switch (state.status) {
    case 'loading':
      return <p>Loading...</p>
    case 'failed':
      return <p>Failed to load aphorisms! Check console.</p>
    case 'idle':
      if (!mostRecent) {
        return (
          <div className='aphorism-single'>
            <div className='centered'>
              <h1>{getDateString(new Date())}</h1>
            </div>
            <p>Something went wrong. No content found!</p>
          </div>
        );
      }
    
      return (
        <div className='aphorism-single'>
          <div className='centered'>
            <h1>{getDateString(mostRecent!.presentedAt!)}</h1>
          </div>
          <AphorismDisplay item={mostRecent!} />
        </div>
      );
  }
};

export default AphorismSingle;
