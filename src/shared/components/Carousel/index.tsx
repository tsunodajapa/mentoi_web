import { ReactNode } from 'react';

import { Container } from './styles';

interface CarouselProps {
  children?: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

export default Carousel;
