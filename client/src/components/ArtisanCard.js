import Thumbs from "./Thumbs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileById } from "../actions/artisanProfile";
import { useState } from "react";

const ArtisanCard = ({
  artisan: { bio, city, profession, rate, street, user, zipcode },
}) => {
  const rating =
    rate.length > 0
      ? rate.reduce((acc, rate) => acc + rate.value, 0) / rate.length
      : 0;
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showPhone, setShowPhone] = useState(false);
  return (
    <div className='container mt-5 d-flex justify-content-center'>
      <div className='card artisanCard p-4 mt-3' id='artisanCard'>
        <div className='first'>
          <h6 className='heading'>{user.job}</h6>
        </div>
        <div className='second d-flex flex-row mt-2'>
          <Link
            to={
              auth.user && user._id === auth.user._id
                ? "/artisanprofile/me"
                : `/visitedartisanprofile/${user._id}`
            }
            onClick={() => {
              dispatch(getProfileById(user._id));
            }}
          >
            <div className='image mr-3 d-flex flex-column align-items-center'>
              {" "}
              <img
                src={user.avatar}
                className='rounded-circle'
                width='60'
                alt=''
              />{" "}
            </div>
          </Link>

          <div className='row'>
            <div className='sm-col-6 px-3'>
              <div className='d-flex flex-row mb-3 mr-3'>
                {" "}
                <Link
                  to={
                    auth.user && user._id === auth.user._id
                      ? "/artisanprofile/me"
                      : `/visitedartisanprofile/${user._id}`
                  }
                  onClick={() => {
                    dispatch(getProfileById(user._id));
                  }}
                >
                  <span>{user.name}</span>
                </Link>
                <div className='ratings ml-2'>
                  {" "}
                  <Thumbs rate={rating} />
                </div>
              </div>

              <div>
                {" "}
                <button
                  className='btn btn-outline-dark btn-sm'
                  onClick={() => setShowPhone(!showPhone)}
                >
                  {showPhone ? user.phone : <i className='fas fa-phone'></i>}
                </button>{" "}
                <button className='btn btn-outline-dark btn-sm'>
                  <i class='fas fa-comment-alt'></i>
                </button>{" "}
              </div>
            </div>
            <div
              className='md-col-6 px-3'
              style={{ maxWidth: "300px", maxHeight: "100px" }}
            >
              <span maxLength='5'>{bio}</span>
            </div>
          </div>
        </div>

        <span>
          {city} - {street}
        </span>
      </div>
    </div>
  );
};
export default ArtisanCard;
