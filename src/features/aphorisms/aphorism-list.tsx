import React from 'react';
import { useAppSelector } from '../../state/hooks';
import AphorismDisplay from './aphorism-display';
import { presentedAphorisms } from './aphorismsSlice';

const AphorismList = () => {
  const state = useAppSelector(state => state.aphorisms);
  const presented = useAppSelector(presentedAphorisms);

  const renderedCells = presented.map(item => (
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
          {renderedCells}
        </div>
      );
  }
};

export default AphorismList;
