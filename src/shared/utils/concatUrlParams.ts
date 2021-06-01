import { NextRouter } from 'next/router';

export default function concatUrlParams(
  router: NextRouter,
  name: string,
  queryName: string,
) {
  const queries = Object.keys(router.query);

  let filter = '';
  queries.forEach((key, index) => {
    const symbol = !filter.length ? '?' : '&';

    if (!queries.includes(queryName) && !index && name) {
      filter += `${symbol}${queryName}=${name}`;
      filter += `&${key}=${router.query[key]}`;
    } else if (key === queryName && name) {
      filter += `${symbol}${key}=${name}`;
    } else if (key !== queryName) {
      filter += `${symbol}${key}=${router.query[key]}`;
    }
  });

  if (!queries.length && name) {
    filter = `?${queryName}=${name}`;
  }

  return filter;
}
