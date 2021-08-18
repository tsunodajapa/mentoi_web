import { useState } from 'react';

import { useAuth } from '@/shared/hooks/auth';
import Modal from '@/shared/components/Modal';
import UserImage from '@/modules/common/components/UserImage';
import { FaCheckCircle } from 'react-icons/fa';
import UserDisplayName from '@/modules/common/components/UserDisplayName';
import { Container, ModalHeader } from './styles';
import MakeQuestionBox from '..';

const MakeQuestionWeb = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { user } = useAuth();

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <Container type="button" onClick={handleToggleModal}>
        <div>
          <UserImage
            avatarUrl={user.avatarUrl}
            name={user.name}
            color={user.color}
            gender={user.gender}
          />
        </div>
        QUAL SUA DÚVIDA?
      </Container>

      <Modal
        isOpenModal={isOpenModal}
        handleToggleModal={handleToggleModal}
        styles={{ width: '45rem' }}
      >
        {user && (
          <ModalHeader>
            <div>
              <UserImage
                avatarUrl={user.avatarUrl}
                name={user.name}
                color={user.color}
                gender={user.gender}
              />
            </div>

            <UserDisplayName
              hasUser={!!user}
              name={user.name}
              displayName={user.displayName}
              nickName={user.nickName}
              type={user.type}
            />
          </ModalHeader>
        )}
        <MakeQuestionBox />
      </Modal>
    </>
  );
};

export default MakeQuestionWeb;
