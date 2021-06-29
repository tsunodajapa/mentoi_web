import { useEffect, useState } from 'react';
import {
  FaFilePowerpoint,
  FaFileExcel,
  FaFileWord,
  FaFilePdf,
  FaFileAlt,
} from 'react-icons/fa';

import { IoMdClose } from 'react-icons/io';
import whatFileType from '@/shared/utils/whatFileType';
import { Container } from './styles';

export const IconsFile = {
  powerPoint: <FaFilePowerpoint />,
  excel: <FaFileExcel />,
  word: <FaFileWord />,
  pdf: <FaFilePdf />,
  default: <FaFileAlt />,
};

type FileType = {
  id: string;
  fileName: string;
  mimeType: string;
  fileUrl: string;
};

type FilePreviw =
  | string
  | {
      type: string;
      name: string;
      key: string;
    };

interface FilesPreviewPros {
  files: FileType[];
}

const FilesPreview = ({ files }: FilesPreviewPros) => {
  const [filesWithFormat, setFilesWithFormat] = useState<FilePreviw[]>();

  useEffect(() => {
    const filesNormalized = files.map((file, index) =>
      file.mimeType.includes('image')
        ? URL.createObjectURL(file)
        : {
            type: whatFileType(file.fileName),
            name: file.fileName,
            key: `img-${new Date().getTime()}-${index}`,
          },
    );

    setFilesWithFormat(filesNormalized);
  }, [files]);

  return (
    <Container>
      {filesWithFormat.slice(0, 3).map(file => (
        <div key={typeof file === 'string' ? file : file.key}>
          {typeof file === 'string' ? (
            <img src={file} alt="Point thumbnail" />
          ) : (
            IconsFile[file.type]
          )}
          <IoMdClose />
        </div>
      ))}

      {/* {files.length > 3 && (
        <button type="button" onClick={handleToggleModal}>
          {`+${files.length - 3}`}
        </button>
      )} */}
    </Container>
  );
};

export default FilesPreview;
