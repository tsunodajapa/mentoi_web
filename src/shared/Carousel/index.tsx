import { useRef } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import ButtonIcon from '../ButtonIcon';
import { Container } from './styles';

const Carousel: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>();

  function handleSlider(type: string): void {
    const { scrollWidth, childNodes } = wrapRef.current;

    const pass = scrollWidth / childNodes.length;

    const value = type === 'previous' ? -pass : pass;

    wrapRef.current.scrollBy(value, 0);
  }

  return (
    <Container>
      <ButtonIcon
        type="button"
        onClick={() => handleSlider('previous')}
        icon={IoIosArrowDropleft}
      />

      <div ref={wrapRef}>
        <span>AREA INTERESSE</span>
        <span>HISTÓRIA</span>
        <span>INGLÊS</span>
        <span>QUÍMICA</span>
        <span>QUÍMICA</span>
        <span>GEOGRAFIA</span>
        <span>PORTUGUÊS</span>
        <span>FÍSICA</span>
        <span>ARTES</span>
      </div>

      <ButtonIcon
        type="button"
        onClick={() => handleSlider('next')}
        icon={IoIosArrowDropright}
      />
    </Container>
  );
};

export default Carousel;
