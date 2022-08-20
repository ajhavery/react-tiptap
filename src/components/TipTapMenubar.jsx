import { AiOutlineBold, AiOutlineStrikethrough } from 'react-icons/ai';
import { AiOutlineItalic, AiOutlineEnter } from 'react-icons/ai';
import { AiOutlineOrderedList, AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlineUnderline } from 'react-icons/ai';
import { BiHeading, BiCodeCurly } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';
import { RiFormatClear } from 'react-icons/ri';
import { ImRedo2, ImUndo2 } from 'react-icons/im';
import { MdOutlineLayersClear, MdOutlineHorizontalRule } from 'react-icons/md';
import { FaQuoteLeft } from 'react-icons/fa';
import { VscSymbolParameter } from 'react-icons/vsc';

function TipTapMenubar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div className='bg-gray-100 px-2 py-1.5 border-b border-gray-300 shadow-sm rounded-t'>
      <span>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`tiptap-button ${
            editor.isActive('bold') ? 'is-active bg-green-100' : 'bg-white'
          }`}
        >
          <AiOutlineBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`tiptap-button ${
            editor.isActive('italic') ? 'is-active bg-green-100' : 'bg-white'
          }`}
        >
          <AiOutlineItalic />
        </button>
        {/* underline */}
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`tiptap-button ${
            editor.isActive('underline') ? 'is-active bg-green-100' : 'bg-white'
          }`}
        >
          <AiOutlineUnderline />
        </button>
        {/* strike through */}
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`tiptap-button ${
            editor.isActive('strike') ? 'is-active bg-green-100' : 'bg-white'
          }`}
        >
          <AiOutlineStrikethrough />
        </button>
      </span>

      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className='tiptap-button bg-white'
      >
        <RiFormatClear />
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className='tiptap-button bg-white'
      >
        <MdOutlineLayersClear />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`tiptap-button ${
          editor.isActive('paragraph') ? 'is-active bg-green-100' : 'bg-white'
        }`}
      >
        <VscSymbolParameter className='scale-125' />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`tiptap-button ${
          editor.isActive('heading', { level: 4 })
            ? 'is-active bg-green-100'
            : 'bg-white'
        }`}
      >
        <BiHeading className='scale-110' />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`tiptap-button ${
          editor.isActive('bulletList') ? 'is-active bg-green-100' : 'bg-white'
        }`}
      >
        <AiOutlineUnorderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`tiptap-button ${
          editor.isActive('orderedList') ? 'is-active bg-green-100' : 'bg-white'
        }`}
      >
        <AiOutlineOrderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`tiptap-button ${
          editor.isActive('code') ? 'is-active bg-green-100' : 'bg-white'
        }`}
      >
        <BsCodeSlash />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`tiptap-button ${
          editor.isActive('codeBlock') ? 'is-active bg-green-100' : 'bg-white'
        }`}
      >
        <BiCodeCurly />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`tiptap-button ${
          editor.isActive('blockquote') ? 'is-active bg-green-100' : 'bg-white'
        }`}
      >
        <FaQuoteLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className='tiptap-button bg-white'
      >
        <MdOutlineHorizontalRule />
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className='tiptap-button bg-white'
      >
        <AiOutlineEnter />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className='tiptap-button bg-white'
      >
        <ImUndo2 />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className='tiptap-button bg-white'
      >
        <ImRedo2 />
      </button>
    </div>
  );
}

export default TipTapMenubar;
