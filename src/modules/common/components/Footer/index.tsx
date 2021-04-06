import { IoChatbubblesOutline, IoBookOutline } from 'react-icons/io5';
import { BsPersonFill } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

import ButtonIcon from '@/shared/ButtonIcon';

import { ContainerMobile } from './styles';

const Footer = () => {
  return (
    <ContainerMobile>
      <div>
        <ButtonIcon icon={AiFillHome} color="--color-primary" />
        <ButtonIcon icon={IoBookOutline} color="--color-text-complement" />
      </div>
      <ButtonIcon icon={FaQuestionCircle} color="--color-text-complement" />
      <div>
        <ButtonIcon
          icon={IoChatbubblesOutline}
          color="--color-text-complement"
        />
        <ButtonIcon icon={BsPersonFill} color="--color-text-complement" />
      </div>
    </ContainerMobile>
  );
};

export default Footer;
