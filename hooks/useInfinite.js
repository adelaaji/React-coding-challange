import { useState, useEffect } from "react";

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    window.addEventListener("touchmove", isScrolling);

    return () => {
      window.removeEventListener("scroll", isScrolling);
      window.removeEventListener("touchmove", isScrolling);
    };
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function isScrolling() {
    let scrollingHeight = window.innerHeight + document.documentElement.scrollTop;
    let documentHeight = document.documentElement.offsetHeight - 400;
    if (scrollingHeight <= documentHeight || isFetching) return;
    setIsFetching(true);
  }
  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
