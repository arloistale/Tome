import React from 'react';
import { useAppSelector } from '../../state/hooks';
import AphorismDisplay from './aphorism-display';
import getDateString from '../../util/date';

const AphorismList = () => {
  const state = useAppSelector(state => state.aphorisms);

  const renderedCells = state.items.map(item => (
    <React.Fragment>
      <h1>{getDateString(item.createdAt)}</h1>
      <AphorismDisplay item={item} />
    </React.Fragment>
  ));

  return (
    <div>
      {renderedCells}
    </div>
  );
};

export default AphorismList;
