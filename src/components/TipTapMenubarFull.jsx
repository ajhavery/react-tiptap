import { AiOutlineBold, AiOutlineStrikethrough } from 'react-icons/ai';
import { AiOutlineItalic } from 'react-icons/ai';
import { BiHeading, BiCodeCurly } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';
import { RiFormatClear } from 'react-icons/ri';
import { AiOutlineOrderedList, AiOutlineUnorderedList } from 'react-icons/ai';
import { ImRedo2, ImUndo2 } from 'react-icons/im';
import { MdOutlineLayersClear } from 'react-icons/md';
import { FaQuoteLeft } from 'react-icons/fa';
import { AiOutlineEnter } from 'react-icons/ai';
import { MdOutlineHorizontalRule } from 'react-icons/md';
import { VscSymbolParameter } from 'react-icons/vsc';

function TipTapMenubar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div>
      <span>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`tiptap-button ${
            editor.isActive('bold') ? 'is-active' : ''
          }`}
        >
          <AiOutlineBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`tiptap-button ${
            editor.isActive('italic') ? 'is-active' : ''
          }`}
        >
          <AiOutlineItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`tiptap-button ${
            editor.isActive('strike') ? 'is-active' : ''
          }`}
        >
          <AiOutlineStrikethrough />
        </button>
      </span>

      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className={`tiptap-button`}
      >
        <RiFormatClear />
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className={`tiptap-button`}
      >
        <MdOutlineLayersClear />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`tiptap-button ${
          editor.isActive('paragraph') ? 'is-active' : ''
        }`}
      >
        <VscSymbolParameter className='scale-125' />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`tiptap-button ${
          editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
        }`}
      >
        <div className='flex items-end'>
          <BiHeading className='-mr-1' />
          <div className='text-xs m-0'>1</div>
        </div>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`tiptap-button ${
          editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
        }`}
      >
        <div className='flex items-end'>
          <BiHeading className='-mr-0.5' />
          <div className='text-xs m-0'>2</div>
        </div>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`tiptap-button ${
          editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
        }`}
      >
        <div className='flex items-end'>
          <BiHeading className='-mr-0.5' />
          <div className='text-xs m-0'>3</div>
        </div>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`tiptap-button ${
          editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
        }`}
      >
        <div className='flex items-end'>
          <BiHeading className='-mr-0.5' />
          <div className='text-xs m-0'>4</div>
        </div>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`tiptap-button ${
          editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
        }`}
      >
        <div className='flex items-end'>
          <BiHeading className='-mr-0.5' />
          <div className='text-xs m-0'>5</div>
        </div>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`tiptap-button ${
          editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
        }`}
      >
        <div className='flex items-end'>
          <BiHeading className='-mr-0.5' />
          <div className='text-xs m-0'>6</div>
        </div>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`tiptap-button ${
          editor.isActive('bold') ? 'is-active' : ''
        }`}
      >
        <AiOutlineUnorderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`tiptap-button ${
          editor.isActive('bold') ? 'is-active' : ''
        }`}
      >
        <AiOutlineOrderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`tiptap-button ${
          editor.isActive('code') ? 'is-active' : ''
        }`}
      >
        <BsCodeSlash />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`tiptap-button ${
          editor.isActive('codeBlock') ? 'is-active' : ''
        }`}
      >
        <BiCodeCurly />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`tiptap-button ${
          editor.isActive('blockquote') ? 'is-active' : ''
        }`}
      >
        <FaQuoteLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className='tiptap-button'
      >
        <MdOutlineHorizontalRule />
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className='tiptap-button'
      >
        <AiOutlineEnter />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className='tiptap-button'
      >
        <ImUndo2 />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className='tiptap-button'
      >
        <ImRedo2 />
      </button>
    </div>
  );
}

export default TipTapMenubar;
