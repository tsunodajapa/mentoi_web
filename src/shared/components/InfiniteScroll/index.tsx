import { useEffect, useRef, useState } from 'react';

interface InfiniteScrollProps {
  getService: Function;
}

const InfiniteScroll = ({ getService }: InfiniteScrollProps) => {
  const divInfiteScrollRef = useRef<HTMLDivElement>();
  const [page, setPage] = useState(0);
  const [notFoundQuestions, setNotFoundQuestions] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(async ([entries]) => {
      const ratio = entries.intersectionRatio;

      if (ratio > 0 && !notFoundQuestions) {
        setPage(state => state + 1);
      }
    });

    if (divInfiteScrollRef.current)
      intersectionObserver.observe(divInfiteScrollRef.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [divInfiteScrollRef, notFoundQuestions]);

  useEffect(() => {
    async function searchQuestions() {
      if (page > 0) {
        const quantityFound = await getService(page);

        if (!quantityFound) {
          setNotFoundQuestions(true);
        }
      }
    }

    searchQuestions();
  }, [getService, page]);

  return <div ref={divInfiteScrollRef} />;
};

export default InfiniteScroll;
