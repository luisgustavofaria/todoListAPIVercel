import { useEffect, useRef } from 'react';

const InfiniteScroll = ({ fetchMore }) => {
  const divRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        fetchMore();
      }
    }, options);
    observer.observe(divRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchMore]);
  return <div ref={divRef} />;
};

export default InfiniteScroll;
