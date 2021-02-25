import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../actions/post";

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
    <div className='timeline-comments col-md-12 px-2 py-3'>
      <div className='d-flex justify-content-between'>
        <div className='d-flex justify-content-start align-items-center mb-3'>
          <div className='user'>
            <img src={photo} alt='' />
          </div>
          <span className='commentWriterName'>{name}</span>
        </div>
        <span className='input-group-btn p-l-10'>
          {((auth.user && auth.user.role === "Admin") ||
            (auth.user && auth.user._id === commentWriter)) && (
            <button
              type='button'
              className='close'
              aria-label='Close'
              onClick={() => {
                dispatch(deleteComment({ postId, commentId }));
              }}
            >
              <i className='fas fa-times fa-xs'></i>
            </button>
          )}
        </span>
      </div>

      <div className='input col-sm-12'>
        <form action=''>
          <div className='input-group timeline-content '>
            <span className=' rounded-corner mr-3'>{comment}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentCard;
