import { useAppSelector } from '../../state/hooks';
import AphorismDisplay from './aphorism-display';
import { mostRecentPresentedAphorism } from './aphorismsSlice';

const AphorismSingle = () => {
  const state = useAppSelector(state => state.aphorisms);
  const mostRecent = useAppSelector(mostRecentPresentedAphorism);

  switch (state.status) {
    case 'loading':
      return <p>Loading...</p>
    case 'failed':
      return <p>Failed to load aphorisms: {state.errorMessage}</p>
    case 'idle':
      if (!mostRecent) {
        return <p>Something went wrong. No content found!</p>;
      }
    
      return <AphorismDisplay item={mostRecent!} />;
  }
};

export default AphorismSingle;
