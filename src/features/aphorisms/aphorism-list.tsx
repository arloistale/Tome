import React from 'react';
import { useAppSelector } from '../../state/hooks';
import AphorismDisplay from './aphorism-display';
import getDateString from '../../util/date';
import { presentedAphorisms } from './aphorismsSlice';

const AphorismList = () => {
  const state = useAppSelector(presentedAphorisms);

  const renderedCells = state.map(item => (
    <React.Fragment key={item.id}>
      <h1>{getDateString(item.presentedAt!)}</h1>
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
