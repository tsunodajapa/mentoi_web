import { useEffect, useState } from 'react';
import { useOnboarding } from '@/hooks/onboarding';
import Modal from '../Modal';

import { Container, Item, ItemProps } from './styles';

const Onboarding = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [itemStyles, setItemStyles] = useState<ItemProps>();
  const { steps } = useOnboarding();

  useEffect(() => {
    console.log(steps);
    if (steps.length) {
      const {
        offsetTop,
        offsetLeft,
        clientWidth,
        clientHeight,
      } = steps[0].component;

      const size =
        (clientWidth > clientHeight ? clientWidth : clientHeight) + 5;

      const top =
        offsetTop - (size / 2 + offsetTop - (clientHeight / 2 + offsetTop));

      const left =
        offsetLeft - (size / 2 + offsetLeft - (clientWidth / 2 + offsetLeft));

      const styles = {
        top,
        left,
        size,
      };

      setItemStyles(styles);
    }
  }, [steps]);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <Item {...itemStyles} />
      <Modal
        isOpenModal={isOpenModal}
        handleToggleModal={handleToggleModal}
        background="none"
      >
        Teste
      </Modal>
    </>
  );
};

export default Onboarding;
