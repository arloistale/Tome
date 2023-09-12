import ReactMarkdown from 'react-markdown';
import getDateString from '../../util/date';
import { Aphorism } from './aphorism';

interface AphorismDisplayProps {
    item: Aphorism;
}

const AphorismDisplay: React.FC<AphorismDisplayProps> = ({ item }) => {
    return ( 
        <div className="card">
          <div className="card-content">
            <div className='media'>
              <div className='media-content'>
                <p className='title is-3'>{item.title || 'Empty string.' }</p>
                <p className='subtitle is-6'>{item.presentedAt ? getDateString(item.presentedAt) : ""}</p>
              </div>
            </div>

            <div className='content'>
              <ReactMarkdown>{item.content || 'Empty string.'}</ReactMarkdown>
            </div>
          </div>
        </div>
      );
};

export default AphorismDisplay;