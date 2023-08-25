import './code-editor.css';
import MonacoEditor, {OnMount} from '@monaco-editor/react';
import prettier from 'prettier';
import { useRef } from 'react';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({initialValue, onChange}) => {
  const editorRef = useRef<any>();

  const onEditorDidMount: OnMount = (editor, _) => {
    editorRef.current = editor;

    editor.onDidChangeModelContent(() => {
      const value = editorRef.current.getValue();
      onChange(value);
    });

    editor.getModel()?.updateOptions({
        tabSize: 2
    });
  };

  const onFormat = () => {
    var value = editorRef.current.getModel().getValue();
    
    // value = prettier.format(value, {
    //   parser: 'babel',
    //   useTabs: false,
    //   semi: true,
    //   singleQuote: true,
    // });

    editorRef.current.setValue(value);
  };

  return (
    <div className="editor-wrapper">
        <button className="button button-format is-primary is-small" onClick={onFormat}>Format</button>
    <MonacoEditor 
      onMount={onEditorDidMount}
      value={initialValue}
      language="javascript" 
      height="100%"
      options = {{
        wordWrap: 'on',
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
    </div>
  );
};

export default CodeEditor;