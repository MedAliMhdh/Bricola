const ArtisanCard = () => {
  return (
    <div className='container mt-5 d-flex justify-content-center'>
      <div className='card p-4 mt-3'>
        <div className='first'>
          <h6 className='heading'>Job type</h6>
        </div>
        <div className='second d-flex flex-row mt-2'>
          <div className='image mr-3'>
            {' '}
            <img
              src='https://i.imgur.com/0LKZQYM.jpg'
              className='rounded-circle'
              width='60'
            />{' '}
          </div>
          <div className='row'>
            <div className='md-col-6 px-3'>
              <div className='d-flex flex-row mb-1'>
                {' '}
                <span>Full Name</span>
                <div className='ratings ml-2'>
                  {' '}
                  <i className='fa fa-star'></i> <i className='fa fa-star'></i>{' '}
                  <i className='fa fa-star'></i> <i className='fa fa-star'></i>{' '}
                  <i className='fa fa-star'></i>{' '}
                </div>
              </div>
              <div>
                <span>Adress</span>
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
              <span>Bio</span>
            </div>
          </div>
        </div>
        <hr className='line-color' />
        <h6>48 posts</h6>
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
