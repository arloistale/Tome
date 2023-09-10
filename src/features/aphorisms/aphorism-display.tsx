import getDateString from '../../util/date';
import { Aphorism } from './aphorism';
import MDEditor from '@uiw/react-md-editor';

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
              <MDEditor.Markdown source={item.content || 'Empty string.'}/>
            </div>
          </div>
        </div>
      );
};

export default AphorismDisplay;