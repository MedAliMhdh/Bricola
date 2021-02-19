import { useDispatch, useSelector } from 'react-redux';
import { evaluateArtisan } from '../actions/artisanProfile';

const Thumbs = ({ rate, setRate, evaluate = false }) => {
  const profile = useSelector((store) => store.artisan);
  const dispatch = useDispatch();

  const setAction = (rate) => {
    setRate(rate);
    profile.profile &&
      evaluate &&
      dispatch(evaluateArtisan({ rate, profileId: profile.profile.user._id }));
  };

  const stars = (x) => {
    let array = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        array.push(
          <i onClick={() => setAction(i)} key={i} className='fas fa-star' />
        );
      } else {
        array.push(
          <i className='far fa-star' onClick={() => setAction(i)} key={i} />
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
