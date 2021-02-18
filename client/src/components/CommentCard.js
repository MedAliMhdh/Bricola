import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../actions/post';

const CommentCard = ({
  postWriter,
  commentWriter,
  name,
  photo,
  comment,
  commentId,
  postId,
}) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      <div className='timeline-comment-box col-md-11'>
        <div>
          <div className='user'>
            <img src={photo} alt='' />
          </div>
          <span>{name}</span>
          <span className='input-group-btn p-l-10'>
            {(auth.user && auth.user._id === postWriter) ||
              (auth.user && auth.user._id === commentWriter && (
                <button
                  type='button'
                  className='close'
                  aria-label='Close'
                  onClick={() => {
                    dispatch(deleteComment({ postId, commentId }));
                  }}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              ))}
          </span>
        </div>

        <div className='input col-sm-12'>
          <form action=''>
            <div className='input-group '>
              <span className='form-control rounded-corner mr-3'>
                {comment}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
