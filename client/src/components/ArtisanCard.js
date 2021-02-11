import Thumbs from './Thumbs';

const ArtisanCard = ({
  profile: {
    bio,
    city,
    profession,
    rate,
    street,
    user: { avatar, name },
    zipcode,
  },
}) => {
  return (
    <div className='container mt-5 d-flex justify-content-center'>
      <div className='card artisanCard p-4 mt-3'>
        <div className='first'>
          <h6 className='heading'>{profession}</h6>
        </div>
        <div className='second d-flex flex-row mt-2'>
          <div className='image mr-3'>
            {' '}
            <img
              src={avatar}
              className='rounded-circle'
              width='60'
              alt=''
            />{' '}
          </div>
          <div className='row'>
            <div className='md-col-6 px-3'>
              <div className='d-flex flex-row mb-1'>
                {' '}
                <span>{name}</span>
                <div className='ratings ml-2'>
                  {' '}
                  <Thumbs rate={rate} />
                </div>
              </div>
              <div>
                <span>
                  {city}/{street}
                </span>
              </div>
              <div>
                {' '}
                <button className='btn btn-outline-dark btn-sm'>
                  <i className='fas fa-phone'></i>
                </button>{' '}
                <button className='btn btn-outline-dark btn-sm'>
                  <i className='fas fa-comment'></i>
                </button>{' '}
              </div>
            </div>
            <div className='md-col-6 px-3'>
              <span>{bio}</span>
            </div>
          </div>
        </div>
        <hr className='line-color' />
        <h6>{zipcode}</h6>
        <div className='third mt-4'>
          {' '}
          <button className='btn btn-success btn-block'>
            <i className='fa fa-clock-o'></i> See Profile
          </button>
        </div>
      </div>
    </div>
  );
};
export default ArtisanCard;
