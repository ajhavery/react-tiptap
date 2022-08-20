import { useState } from 'react';
import TiptapEditor from './components/TiptapEditor';

const App = () => {
  const [editorState, setEditorState] = useState('');
  return (
    <div className='container mx-auto mt-12 space-y-4'>
      <h1 className='text-2xl font-bold text-center'>
        TipTap React Rich Text Editor Demo
      </h1>
      <div className='flex justify-center'>
        <div className='w-full max-w-lg'>
          <TiptapEditor
            description={editorState}
            setDescription={setEditorState}
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-full max-w-lg'>
          <h2>HTML output:</h2>
          <pre>{JSON.stringify(editorState, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
