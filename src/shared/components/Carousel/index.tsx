import concatUrlParams from '@/shared/utils/concatUrlParams';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState, Children, ReactNode } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import ButtonIcon from '../Buttons/ButtonIcon';
import { Container, ButtonOption } from './styles';

interface CarouselProps {
  data?: {
    name: string;
    color: string;
  }[];
  arrowVisible?: boolean;
  onlyWeb?: boolean;
  children?: ReactNode;
}

const Carousel = ({
  data,
  arrowVisible = true,
  onlyWeb = false,
  children,
}: CarouselProps) => {
  const ChildrenCount = Children.count(children);

  const router = useRouter();

  const wrapRef = useRef<HTMLDivElement>();
  const [selectedOption, setSelectedOption] = useState<boolean[]>([]);
  const [itemsLength, setItemsLength] = useState(ChildrenCount);
  const [arrowVisibility, setArrowVisibility] = useState(false);

  useEffect(() => {
    if (data) {
      const areaInterest = router.query.areaInterest as string;
      const names = data.map(item => item.name);
      let itemsOptions: boolean[];

      if (areaInterest && names.includes(areaInterest)) {
        itemsOptions = names.map(name => {
          return name === areaInterest;
        });
      } else {
        itemsOptions = data.map(() => false);
      }
      setSelectedOption([...itemsOptions, areaInterest === 'me']);

      setItemsLength(data.length);
    }
  }, [data, router.query.areaInterest]);

  useEffect(() => {
    const { scrollWidth, offsetWidth } = wrapRef.current;

    if (scrollWidth > offsetWidth) setArrowVisibility(true);
  }, []);

  function handleSlider(type: string): void {
    const { scrollWidth, childNodes } = wrapRef.current;

    const pass = scrollWidth / childNodes.length;

    const value = type === 'previous' ? -pass : pass;

    wrapRef.current.scrollBy(value, 0);
  }

  function handleOption(position: number, name = ''): void {
    const itemsOptions = selectedOption.map((_, index) => index === position);

    const filter = concatUrlParams(router, name, 'areaInterest');

    router.push(`/feed${filter}`, undefined, { shallow: true });

    setSelectedOption(itemsOptions);
  }

  return (
    <Container onlyWeb={onlyWeb}>
      {arrowVisible && (
        <ButtonIcon
          type="button"
          onClick={() => handleSlider('previous')}
          icon={IoIosArrowDropleft}
          visible={arrowVisibility}
          color="--color-secondary"
        />
      )}

      <div ref={wrapRef}>
        {data && (
          <ButtonOption
            selected={selectedOption[itemsLength]}
            onClick={() => handleOption(itemsLength, 'me')}
          >
            AREA INTERESSE
          </ButtonOption>
        )}
        {data?.map((item, index) => (
          <ButtonOption
            key={item.name}
            color={item.color}
            selected={selectedOption[index]}
            onClick={() => handleOption(index, item.name)}
          >
            {item.name}
          </ButtonOption>
        ))}
        {!data && children}
      </div>

      {arrowVisible && (
        <ButtonIcon
          type="button"
          onClick={() => handleSlider('next')}
          icon={IoIosArrowDropright}
          visible={arrowVisibility}
          color="--color-secondary"
        />
      )}
    </Container>
  );
};

export default Carousel;
