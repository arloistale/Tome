import ReactMarkdown from 'react-markdown';
import { getShortDateString } from '../../util/date';
import { Aphorism } from './aphorism';

interface AphorismDisplayProps {
    item: Aphorism;
}

// the UTC-zoned date of the aphorism is accurate to show, because aphorisms are presented at 00:05 UTC
const AphorismDisplay: React.FC<AphorismDisplayProps> = ({ item }) => {
    return ( 
        <div className="card">
          <div className="card-content">
            <div className='media'>
              <div className='media-content'>
                <p className='title is-3'>{item.title}</p>
                <p className='subtitle is-6'>Shown {getShortDateString(item.presentedAt!, 'UTC')}</p>
              </div>
            </div>

            <ReactMarkdown>{item.content}</ReactMarkdown>
          </div>
        </div>
      );
};

export default AphorismDisplay;