import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import TipTapMenubar from './TipTapMenubar';

// Tutorial used: https://www.youtube.com/watch?v=JFzH4bDEUPo

const TiptapEditor = ({ description, setDescription }) => {
  // console.log('description', description);

  const sampleDesc = `Describe your product in 4-5 bullet points...
    Point #1: this is an explanation of my product.
    Point #2: ....`;

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: sampleDesc,
      }),
    ],
    content: `${description}`,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });

  return (
    <div className='!mt-2 border border-gray-300 shadow rounded'>
      <TipTapMenubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
