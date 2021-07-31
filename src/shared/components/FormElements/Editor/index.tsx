import dynamic from 'next/dynamic';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorProps } from 'react-draft-wysiwyg';

const EditorReact = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false },
);

const Editor = () => {
  return (
    <EditorReact
      toolbar={{
        options: ['inline', 'list', 'link'],
        list: { options: ['unordered', 'ordered'] },
        link: { options: ['link'] },
      }}
    />
  );
};

export default Editor;
