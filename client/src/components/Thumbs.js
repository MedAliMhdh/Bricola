const Thumbs = ({ rate, setRate }) => {
  const stars = (x) => {
    let array = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        array.push(
          <i onClick={() => setRate(i)} key={i} className='fas fa-star' />
        );
      } else {
        array.push(
          <i className='far fa-star' onClick={() => setRate(i)} key={i} />
        );
      }
    }
    return array;
  };
  return <div>{stars(rate)}</div>;
};

Thumbs.defaultProps = {
  setRate: () => {},
};

export default Thumbs;
