import getDateString from '../../util/date';
import { Aphorism } from './aphorism';
import MDEditor from '@uiw/react-md-editor';

interface AphorismDisplayProps {
    item: Aphorism;
}

const AphorismDisplay: React.FC<AphorismDisplayProps> = ({ item }) => {
    return ( 
        <div className="card">
          <h1>{item.presentedAt ? getDateString(item.presentedAt) : ""}</h1>
          <div className="card-content">
            <h1>{item.title || 'Empty string.' }</h1>
            <MDEditor.Markdown source={item.content || 'Empty string.'} />
          </div>
        </div>
      );
};

export default AphorismDisplay;