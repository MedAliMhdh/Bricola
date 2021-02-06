import React, { useState } from "react";

const Thumbs = () => {
  let thumbs = [];
  const [rate, setRate] = useState(0);

  for (let i = 0; i < 5; i++) {
    i < rate
      ? thumbs.push(
          <span onClick={() => setRate(i + 1)} key={i}>
            <i className='fas fa-star fa-2x p-1'></i>
          </span>
        )
      : thumbs.push(
          <span onClick={() => setRate(i + 1)} key={i}>
            <i className='far fa-star fa-2x p-1'></i>
          </span>
        );
  }
  return <div className='md-lg-3 d-flex flex-nowrap '>{thumbs}</div>;
};

//declaring default props in case we click on thumbs of Artisans Card and we don't have a setRate function
// Thumbs.defaultPros = {
//   setRate: () => {},
// };

export default Thumbs;
