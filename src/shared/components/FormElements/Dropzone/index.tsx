import { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiPaperclip, FiUpload } from 'react-icons/fi';

import { IoMdClose } from 'react-icons/io';

import { useField } from '@unform/core';
import whatFileType from '@/shared/utils/whatFileType';
import { useToast } from '@/shared/hooks/toast';
import { Container, FilesPreviewContainer } from './styles';
import Modal from '../../Modal';
import { IconsFile } from '../../FilesPreview';
import ButtonIcon from '../../Buttons/ButtonIcon';

interface DropzoneProps {
  name: string;
  label?: string;
  limitFiles?: number;
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

const Dropzone = ({ name, label, limitFiles }: DropzoneProps) => {
  const inputRef = useRef<InputRefProps>(null);
  const containerRef = useRef(null);
  const { addToast } = useToast();
  const { fieldName, registerField, defaultValue = [] } = useField(name);
  const [selectedFilesUrl, setSelectedFilesUrl] = useState<FilePreviwProps[]>(
    defaultValue,
  );
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  function handleRemoveImage(indexFile: number) {
    console.log(indexFile);
    const imagesWithoutRemoved = selectedFilesUrl.filter(
      (_, index) => index !== indexFile,
    );

    setSelectedFilesUrl(imagesWithoutRemoved);
    inputRef.current.acceptedFiles = inputRef.current.acceptedFiles.filter(
      (_, index) => index !== indexFile,
    );
  }

  const onDrop = (onDropAcceptedFiles: File[]) => {
    console.log(onDropAcceptedFiles);
    if (limitFiles < onDropAcceptedFiles.length + selectedFilesUrl.length) {
      addToast({
        type: 'error',
        title: 'Limite de arquivos atingido!',
        description: 'Você pode enviar no máximo 3 arquivos por pergunta.',
      });
      return;
    }

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

      // bug do dropzone que não tira o foco depois que seleciona o arquivo
      inputRef.current.value = '';
      inputRef.current.blur();
      containerRef.current.blur();
    }
  };
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
        ref={containerRef}
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
            <div key={`img-${Date.now()}-${index}`}>
              {typeof file === 'string' ? (
                <img src={file} alt="Point thumbnail" />
              ) : (
                IconsFile[file.type]
              )}
              <ButtonIcon
                onClick={() => handleRemoveImage(index)}
                icon={IoMdClose}
              />
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
            selectedFilesUrl.map((file, index) => (
              <div key={`img-${index}-${Date.now()}`}>
                {typeof file === 'string' ? (
                  <img src={file} alt="Anexo" />
                ) : (
                  IconsFile[file.type]
                )}
                <ButtonIcon
                  onClick={() => handleRemoveImage(index)}
                  icon={IoMdClose}
                />
              </div>
            ))}
        </FilesPreviewContainer>
      </Modal>
    </>
  );
};

export default Dropzone;
