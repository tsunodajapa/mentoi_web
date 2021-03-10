import { ReactNode, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import ButtonIcon from '../ButtonIcon';
import { Container } from './styles';

interface ModalProps {
  isOpenModal: boolean;
  handleToggleModal(): void;
  background?: string;
  children: ReactNode;
}

const Modal = ({
  isOpenModal,
  handleToggleModal,
  background,
  children,
}: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpenModal ? 'hidden' : 'auto';
  }, [isOpenModal]);

  return (
    <Container visible={isOpenModal} background={background}>
      <div>
        {children}
        <ButtonIcon icon={IoMdClose} onClick={handleToggleModal} />
      </div>
    </Container>
  );
};

export default Modal;
