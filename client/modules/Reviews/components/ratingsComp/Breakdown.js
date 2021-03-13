import React, { useRef, useEffect, useState } from 'react';
import { BreakdownDiv } from './styles.js';
import Factor from './Factor.js';
import Recommend from './Recommend.js';

const Breakdown = ({ data, recommend }) => {
  const parentRef = useRef(null);
  const [width, setWidth] = useState(0);

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }
  const renderFactors = (data, parentWidth) => {
    const rendered = [];
    for (const factor in data) {
      rendered.push(
        <Factor
          width={parentWidth}
          key={factor}
          label={factor}
          rating={data[factor].value}
        />,
      );
    }
    return rendered;
  };

  useEffect(() => {
    // load initial width
    if (parentRef.current) {
      setWidth(parentRef.current.offsetWidth);
    }

    // use this to handle changing size
    const debouncedHandleResize = debounce(() => {
      setWidth(parentRef.current.offsetWidth);
    }, 0.5);
    window.addEventListener('resize', debouncedHandleResize);

    // clean up after finishing resizing
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [parentRef]);

  return (
    <BreakdownDiv id="breakdown">
      <Recommend recommend={recommend} />
      <div ref={parentRef} className="factors">
        { renderFactors(data, width)}
      </div>
    </BreakdownDiv>
  );
};

export default Breakdown;
