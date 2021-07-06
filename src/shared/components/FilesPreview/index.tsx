import { useEffect, useState } from 'react';
import {
  FaFilePowerpoint,
  FaFileExcel,
  FaFileWord,
  FaFilePdf,
  FaFileAlt,
} from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';

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
  const [filesWithFormat, setFilesWithFormat] = useState<FilePreviw[]>([]);

  useEffect(() => {
    const filesNormalized = files.map((file, index) =>
      file.mimeType.includes('image')
        ? file.fileUrl
        : {
            type: whatFileType(file.fileName),
            name: file.fileUrl,
            key: `img-${new Date().getTime()}-${index}`,
          },
    );

    setFilesWithFormat(filesNormalized);
  }, [files]);

  return (
    <Container>
      <span>Clique para baixar</span>
      <div>
        {filesWithFormat.slice(0, 3).map(file => (
          <a
            href={typeof file === 'string' ? file : file.name}
            key={typeof file === 'string' ? file : file.key}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            {typeof file === 'string' ? (
              <img src={file} alt="Arquivo da questão" />
            ) : (
              IconsFile[file.type]
            )}
            <AiOutlineDownload />
          </a>
        ))}
      </div>
    </Container>
  );
};

export default FilesPreview;
