import { useCallback, useEffect, useRef, useState } from 'react';
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

import { useField } from '@unform/core';
import { Container, FilesPreviewContainer } from './styles';
import Modal from '../../Modal';

const IconsFile = {
  powerPoint: <FaFilePowerpoint />,
  excel: <FaFileExcel />,
  word: <FaFileWord />,
  pdf: <FaFilePdf />,
  default: <FaFileAlt />,
};

interface DropzoneProps {
  name: string;
}

type FilePreviwProps =
  | string
  | {
      type: string;
      name: string;
    };

interface InputRefProps extends HTMLInputElement {
  acceptedFiles: File[];
}

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

const Dropzone = ({ name }: DropzoneProps) => {
  const inputRef = useRef<InputRefProps>(null);
  const { fieldName, registerField, defaultValue = [] } = useField(name);
  const [selectedFilesUrl, setSelectedFilesUrl] = useState<FilePreviwProps[]>(
    defaultValue,
  );
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  const onDrop = useCallback(
    (onDropAcceptedFiles: File[]) => {
      const filesPreview = onDropAcceptedFiles.map(file => {
        return file.type.includes('image')
          ? URL.createObjectURL(file)
          : { type: whateFileType(file.name), name: file.name };
      });

      if (selectedFilesUrl) {
        setSelectedFilesUrl(oldState => [...oldState, ...filesPreview]);
      } else {
        setSelectedFilesUrl([...filesPreview]);
      }

      if (inputRef.current) {
        !inputRef.current.acceptedFiles
          ? (inputRef.current.acceptedFiles = onDropAcceptedFiles)
          : inputRef.current.acceptedFiles.push(...onDropAcceptedFiles);
      }
    },
    [selectedFilesUrl],
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.xlsx, .xls, image/*, .doc, .docx, .ppt, .pptx, .txt, .pdf',
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: InputRefProps) => {
        return ref.acceptedFiles || [];
      },
      clearValue: (ref: InputRefProps) => {
        setSelectedFilesUrl([]);
        ref.acceptedFiles = [];
      },
      setValue: (ref: InputRefProps, value) => {
        ref.acceptedFiles = value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container {...getRootProps()} onClick={() => inputRef.current?.click()}>
        <input
          {...getInputProps()}
          accept=".xlsx, .xls, image/*, .doc, .docx, .ppt, .pptx, .txt, .pdf"
          multiple
          ref={inputRef}
        />

        <FiPaperclip />
      </Container>

      {selectedFilesUrl && (
        <FilesPreviewContainer>
          {selectedFilesUrl.slice(0, 3).map((file, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={`img-${new Date().getTime()}-${index}`}>
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
