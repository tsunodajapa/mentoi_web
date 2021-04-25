import { useEffect, useState } from 'react';
import { useOnboarding } from '@/hooks/onboarding';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import Modal from '../Modal';
import ButtonIcon from '../Buttons/ButtonIcon';
import { ModalStyles } from '../Modal/styles';

import { Item, Container, Main, Footer, ItemProps } from './styles';

const Onboarding = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [itemStyles, setItemStyles] = useState<Omit<ItemProps, 'isVisible'>>();
  const [modalStyles, setModalStyles] = useState<ModalStyles>();
  const [actualStep, setActualStep] = useState(0);
  const { steps } = useOnboarding();

  useEffect(() => {
    if (steps.length) {
      const { cardStyles, modalStyles: modalStylesByStep } = steps[actualStep];

      setModalStyles(modalStylesByStep);
      setItemStyles(cardStyles);
    }
  }, [steps, actualStep]);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  function handleChangeStep(step: number) {
    setActualStep(actualStep + step);
  }

  return (
    <>
      {steps[actualStep] && (
        <>
          <Item {...itemStyles} isVisible={isOpenModal} />
          <Modal
            isOpenModal={isOpenModal}
            handleToggleModal={handleToggleModal}
            styles={modalStyles}
          >
            <Container>
              <Main>
                <h5>{steps[actualStep].title}</h5>
                <p>{steps[actualStep].description}</p>
              </Main>
              <Footer>
                <ButtonIcon
                  icon={IoIosArrowBack}
                  onClick={() => handleChangeStep(-1)}
                />

                <span>
                  {String(actualStep + 1).padStart(2)}/{steps.length}
                </span>

                <ButtonIcon
                  icon={IoIosArrowForward}
                  onClick={() => handleChangeStep(1)}
                />
              </Footer>
            </Container>
          </Modal>
        </>
      )}
      {!steps[actualStep] && <div>Carregando</div>}
    </>
  );
};

export default Onboarding;
