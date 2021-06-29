import { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiPaperclip, FiUpload } from 'react-icons/fi';

import { IoMdClose } from 'react-icons/io';

import { useField } from '@unform/core';
import whatFileType from '@/shared/utils/whatFileType';
import { Container, FilesPreviewContainer } from './styles';
import Modal from '../../Modal';
import { IconsFile } from '../../FilesPreview';

interface DropzoneProps {
  name: string;
  label?: string;
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

const Dropzone = ({ name, label }: DropzoneProps) => {
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
          : { type: whatFileType(file.name), name: file.name };
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
      {!!label && (
        <label
          htmlFor="documents"
          style={{ marginTop: '0.8rem', display: 'block' }}
        >
          Anexo de documentos
        </label>
      )}
      <Container
        {...getRootProps()}
        id="documents"
        onClick={() => inputRef.current?.click()}
        boxContent={!!label}
      >
        <input
          {...getInputProps()}
          accept=".xlsx, .xls, image/*, .doc, .docx, .ppt, .pptx, .txt, .pdf"
          multiple
          ref={inputRef}
        />

        {label && (
          <p>
            <FiUpload />
            Certificado, Declaração de Conclusão de Curso, Histórico Escolar ou
            Carteira de Trabalho
          </p>
        )}

        {!label && <FiPaperclip />}
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
        <FilesPreviewContainer isModal>
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
