import { useEffect, useRef, useState } from 'react';


export const useNearScreen = () => {
  const refElement = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(refElement.current);
  }, [refElement]);

  return [show, refElement];
};
