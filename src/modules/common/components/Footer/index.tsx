import { useState } from 'react';

import { IoChatbubblesOutline, IoBookOutline } from 'react-icons/io5';
import { BsPersonFill } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

import ButtonIcon from '@/shared/ButtonIcon';

import { ContainerMobile } from './styles';

interface FooterProps {
  changeStep: (step: number) => void;
}

const Footer = ({ changeStep }: FooterProps) => {
  const [buttonsColors, setButtonsColors] = useState([
    '--color-primary',
    '--color-text-complement',
    '--color-text-complement',
    '--color-text-complement',
    '--color-text-complement',
  ]);

  function handleChangeStep(step: number): void {
    const newButtonColors = buttonsColors.map((_, index) => {
      if (step === index) return '--color-primary';
      return '--color-text-complement';
    });

    setButtonsColors(newButtonColors);
    changeStep(step);
  }

  return (
    <ContainerMobile>
      <div>
        <ButtonIcon
          icon={AiFillHome}
          color={buttonsColors[0]}
          onClick={() => handleChangeStep(0)}
        />
        <ButtonIcon
          icon={IoBookOutline}
          color={buttonsColors[1]}
          onClick={() => handleChangeStep(1)}
        />
      </div>
      <ButtonIcon
        icon={FaQuestionCircle}
        color={buttonsColors[2]}
        onClick={() => handleChangeStep(2)}
      />
      <div>
        <ButtonIcon
          icon={IoChatbubblesOutline}
          color={buttonsColors[3]}
          onClick={() => handleChangeStep(3)}
        />
        <ButtonIcon
          icon={BsPersonFill}
          color={buttonsColors[4]}
          onClick={() => handleChangeStep(4)}
        />
      </div>
    </ContainerMobile>
  );
};

export default Footer;
