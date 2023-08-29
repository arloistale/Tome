import Editor from '@uiw/react-md-editor';
import { useState } from 'react';
import { Aphorism } from './aphorism';

interface TextEditorProps {
    item: Aphorism;
}

const TextEditor: React.FC<TextEditorProps> = ({ item }) => {
    const [value, setValue] = useState("Type something in!");

        return (
        <div className="container card">
            <div className="card-content">
        <Editor value={value} onChange={(v) => setValue(v || "")}/>
        </div>
    </div>
        );
};

export default TextEditor;