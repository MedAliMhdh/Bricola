const Thumbs = ({ rate, setRate }) => {
  const stars = (x) => {
    let array = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        array.push(
          <span onClick={() => setRate(i)} key={i}>
            ★
          </span>
        );
      } else {
        array.push(
          <span onClick={() => setRate(i)} key={i}>
            ☆
          </span>
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
