import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';

interface InfiniteScrollProps {
  getService: Function;
  allowedFilters?: string[];
}

const InfiniteScroll = ({
  getService,
  allowedFilters = ['q'],
}: InfiniteScrollProps) => {
  const divInfiteScrollRef = useRef<HTMLDivElement>();
  const [searchParams, setSearchParams] = useState({
    page: 0,
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
    const filters = Object.keys(router.query).reduce((prev, current) => {
      return allowedFilters.includes(current)
        ? { ...prev, [current]: router.query[current] }
        : prev;
    }, {});

    setSearchParams({ page: 1, ...filters });
  }, [router.query, allowedFilters]);

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
