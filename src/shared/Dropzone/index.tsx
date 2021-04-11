import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiPaperclip } from 'react-icons/fi';
import {
  FaFilePowerpoint,
  FaFileExcel,
  FaFileWord,
  FaFilePdf,
  FaFileAlt,
} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import { Container, FilesPreviewContainer } from './styles';
import Modal from '../Modal';

const IconsFile = {
  powerPoint: <FaFilePowerpoint />,
  excel: <FaFileExcel />,
  word: <FaFileWord />,
  pdf: <FaFilePdf />,
  default: <FaFileAlt />,
};

interface Props {
  onFileUploaded: (files: File[]) => void;
}

type FilePreviwProps =
  | string
  | {
      type: string;
      name: string;
    };

function whateFileType(fileName: string): string {
  const fileType = fileName.split('.')[1];

  switch (true) {
    case ['xlsx', 'xls'].includes(fileType):
      return 'excel';
    case ['ppt', 'pptx'].includes(fileType):
      return 'powerPoint';
    case ['doc', 'docx'].includes(fileType):
      return 'word';
    case ['pdf'].includes(fileType):
      return 'pdf';
    default:
      return 'default';
  }
}

const Dropzone = ({ onFileUploaded }: Props) => {
  const [selectedFilesUrl, setSelectedFilesUrl] = useState<FilePreviwProps[]>();
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const filesPreview = acceptedFiles.map(file => {
        return file.type.includes('image')
          ? URL.createObjectURL(file)
          : { type: whateFileType(file.name), name: file.name };
      });

      if (selectedFilesUrl) {
        setSelectedFilesUrl(oldState => [...oldState, ...filesPreview]);
      } else {
        setSelectedFilesUrl([...filesPreview]);
      }
      onFileUploaded(acceptedFiles);
    },
    [onFileUploaded, selectedFilesUrl],
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.xlsx, .xls, image/*, .doc, .docx, .ppt, .pptx, .txt, .pdf',
  });

  return (
    <>
      <Container {...getRootProps()}>
        <input
          {...getInputProps()}
          accept=".xlsx, .xls, image/*, .doc, .docx, .ppt, .pptx, .txt, .pdf"
          multiple
        />

        <FiPaperclip />
      </Container>

      {selectedFilesUrl && (
        <FilesPreviewContainer>
          {selectedFilesUrl.slice(0, 3).map(file => (
            <div key={`img-${file}`}>
              {typeof file === 'string' ? (
                <img src={file} alt="Point thumbnail" />
              ) : (
                IconsFile[file.type]
              )}
              <IoMdClose />
            </div>
          ))}

          {selectedFilesUrl.length > 3 && (
            <button type="button" onClick={handleToggleModal}>
              {`+${selectedFilesUrl.length - 3}`}
            </button>
          )}
        </FilesPreviewContainer>
      )}

      <Modal isOpenModal={isOpenModal} handleToggleModal={handleToggleModal}>
        <FilesPreviewContainer>
          {selectedFilesUrl &&
            selectedFilesUrl.map(file => (
              <div key={`img-${file}`}>
                {typeof file === 'string' ? (
                  <img src={file} alt="Anexo" />
                ) : (
                  IconsFile[file.type]
                )}
                <IoMdClose />
              </div>
            ))}
        </FilesPreviewContainer>
      </Modal>
    </>
  );
};

export default Dropzone;
