import { useEffect, useState } from 'react';
import { OnboardingStep, useOnboarding } from '@/shared/hooks/onboarding';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import Modal from '../Modal';
import ButtonIcon from '../Buttons/ButtonIcon';
import { ModalStyles } from '../Modal/styles';

import { Item, Container, Main, Footer, ItemProps } from './styles';

interface OnboardingProps {
  adtionalSteps: {
    step: number | string;
    title: string;
    description: string;
  }[];
  qtd: number;
}

const Onboarding = ({ adtionalSteps, qtd }: OnboardingProps) => {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [itemStyles, setItemStyles] = useState<Omit<ItemProps, 'isVisible'>>();
  const [modalStyles, setModalStyles] = useState<ModalStyles>();
  const [actualStep, setActualStep] = useState(0);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [isPreviuosButtonDisabled, setIsPreviuosButtonDisabled] = useState(
    true,
  );
  const [elementFocused, setElementFocused] = useState(null);
  const [stepsOnboarding, setStepsOnboarding] = useState<OnboardingStep[]>([]);

  const { steps } = useOnboarding();

  useEffect(() => {
    if (adtionalSteps.length && qtd === steps.length) {
      const stepsNormalized = steps;

      adtionalSteps.forEach(item => {
        if (item.step === 'first')
          stepsNormalized.unshift({
            idComponent: 'adtionalStep',
            id: `${item.title}-${Date.now()}`,
            title: item.title,
            description: item.description,
            modalStyles: {
              position: 'absolute',
              background: 'none',
            },
          });

        if (item.step === 'last')
          stepsNormalized.push({
            idComponent: 'adtionalStep',
            id: `${item.title}-${Date.now()}`,
            title: item.title,
            description: item.description,
            modalStyles: {
              position: 'absolute',
              background: 'none',
            },
          });
      });

      document.body.style.overflowY = 'hidden';
    }

    setStepsOnboarding(steps);
  }, [adtionalSteps, steps, qtd]);

  useEffect(() => {
    if (elementFocused) {
      elementFocused.style.boxShadow =
        '0px 0px 40px 2px, rgb(33 33 33 / 50%) 0px 0px 0px 5000px';
    }
  }, [elementFocused]);

  useEffect(() => {
    if (
      stepsOnboarding.length &&
      qtd + adtionalSteps.length === stepsOnboarding.length
    ) {
      const {
        idComponent,
        cardStyles,
        modalStyles: modalStylesByStep,
      } = stepsOnboarding[actualStep];

      if (idComponent) {
        setElementFocused(old => {
          if (old) {
            old.style.boxShadow = '';
          }

          if (idComponent !== 'adtionalStep')
            return document.getElementById(idComponent);
        });
        // document.getElementById(idComponent).
      }

      setModalStyles(modalStylesByStep);
      setItemStyles(cardStyles);

      // if (cardStyles && cardStyles.top) {
      //   window.scrollBy(0, cardStyles.top);
      // }

      document.body.style.overflowY = 'hidden';
    }
  }, [stepsOnboarding, actualStep, qtd, adtionalSteps]);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
    document.body.style.overflowY = 'auto';
  }

  function handleChangeStep(step: number) {
    setIsPreviuosButtonDisabled(false);
    setIsNextButtonDisabled(false);

    if (actualStep - 1 === 0 && step < 0) {
      setIsPreviuosButtonDisabled(true);
    }

    if (actualStep + 1 === stepsOnboarding.length - 1 && step > 0) {
      setIsNextButtonDisabled(true);
    }

    setActualStep(actualStep + step);
  }

  return (
    <>
      {steps[actualStep] && (
        <>
          {/* <Item {...itemStyles} isVisible={isOpenModal} /> */}
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
                  disabled={isPreviuosButtonDisabled}
                  icon={IoIosArrowBack}
                  onClick={() => handleChangeStep(-1)}
                />

                <span>
                  {String(actualStep + 1).padStart(2)}/{stepsOnboarding.length}
                </span>

                <ButtonIcon
                  disabled={isNextButtonDisabled}
                  icon={IoIosArrowForward}
                  onClick={() => handleChangeStep(1)}
                />
              </Footer>
            </Container>
          </Modal>
        </>
      )}
      {!stepsOnboarding[actualStep] && <div>Carregando</div>}
    </>
  );
};

export default Onboarding;
