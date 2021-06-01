import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

interface InfiniteScrollProps {
  getService: Function;
  filters?: String[];
}

const InfiniteScroll = ({ getService, filters }: InfiniteScrollProps) => {
  const divInfiteScrollRef = useRef<HTMLDivElement>();
  const [searchParams, setSearchParams] = useState({
    page: 0,
    q: null,
  });
  const [notFoundQuestions, setNotFoundQuestions] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(async ([entries]) => {
      const ratio = entries.intersectionRatio;

      if (ratio > 0 && !notFoundQuestions) {
        setSearchParams(state => ({ ...state, page: state.page + 1 }));
      }
    });

    if (divInfiteScrollRef.current)
      intersectionObserver.observe(divInfiteScrollRef.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [divInfiteScrollRef, notFoundQuestions]);

  useEffect(() => {
    setSearchParams({ page: 1, q: null, ...router.query });
  }, [router.query]);

  useEffect(() => {
    async function searchQuestions() {
      if (searchParams.page > 0) {
        const quantityFound = await getService(searchParams);

        if (!quantityFound) {
          setNotFoundQuestions(true);
        }
      }
    }

    searchQuestions();
  }, [getService, searchParams]);

  return <div ref={divInfiteScrollRef} />;
};

export default InfiniteScroll;
