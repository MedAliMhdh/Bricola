import React, { useState, useEffect } from 'react';
import { updateLikes, deletePost, addComment } from '../actions/post';
import { useDispatch, useSelector } from 'react-redux';

import CommentCard from './CommentCard';

const PostCard = ({
  photo,
  fullName,
  content,
  comments,
  likes,
  id,
  userId,
}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [text, setText] = useState('');
  const [showComments, setShowComments] = useState(false);

  var commentsNumber = comments.length;
  var likesNumber = likes.length;

  useEffect(() => {
    commentsNumber = comments.length;
    likesNumber = likes.length;
  }, [comments, likes]);
  return (
    <div className='container postContainer col-md-6'>
      {/* <!-- begin tab-content --> */}

      <div className='tab-content p-0'>
        {/* <!-- begin /profile-post tab --> */}

        <div className='tab-pane fade active show' id='profile-post'>
          {/* <!-- begin timeline --> */}

          <div className='timeline-icon'>
            <a href='/'>&nbsp;</a>
          </div>
          <div className='timeline-body'>
            <div className='timeline-header'>
              <span className='userimage'>
                <img src={photo} alt='' />
              </span>
              <span className='username'>
                <a href='/'>{fullName}</a> <small></small>
              </span>
              {auth.user && auth.user._id === userId && (
                <button
                  type='button'
                  className='close'
                  aria-label='Close'
                  onClick={() => dispatch(deletePost(id))}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              )}
            </div>
            <div className='timeline-content'>
              <p>{content}</p>
              <img alt=''></img>
            </div>
            <div className='timeline-likes'>
              <div
                className='stats-right'
                onClick={() => setShowComments(true)}
              >
                <span className='stats-text'>{commentsNumber} Comments</span>
              </div>
              <div className='stats'>
                <span className='fa-stack fa-fw stats-icon'>
                  <i className='fa fa-circle fa-stack-2x text-primary'></i>
                  <i className='fa fa-thumbs-up fa-stack-1x fa-inverse'></i>
                </span>
                <span className='stats-total'>{likesNumber}</span>
              </div>
            </div>
            <div className='timeline-footer'>
              <button
                className='m-r-15 text-inverse-lighter mr-1'
                onClick={() => dispatch(updateLikes(id))}
              >
                <i className='fa fa-thumbs-up fa-fw fa-lg m-r-3'></i>Like
              </button>
              <a href='/' className='m-r-15 text-inverse-lighter ml-1'>
                <i className='fa fa-comments fa-fw fa-lg m-r-3'></i>Comment
              </a>
            </div>
            <div className='timeline-comment-box col-md-11'>
              <div className='user'>
                <img src={photo} alt='' />
              </div>
              <div className='input col-sm-12'>
                <form action=''>
                  <div className='input-group '>
                    <input
                      type='text'
                      className='form-control rounded-corner mr-3'
                      placeholder='Write a comment...'
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                    <span className='input-group-btn p-l-10'>
                      <button
                        className='btn btn-primary f-s-12 rounded-corner mr-3'
                        type='button'
                        onClick={() => {
                          dispatch(addComment({ postId: id, formData: text }));
                          setText('');
                          setShowComments(true);
                        }}
                      >
                        Comment
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {showComments &&
          comments.map((comment, i) => (
            <CommentCard
              key={i}
              postWriter={userId}
              commentWriter={comment.user}
              name={comment.name}
              photo={comment.avatar}
              comment={comment.text}
              commentId={comment._id}
              postId={id}
            />
          ))}
      </div>
    </div>
  );
};

export default PostCard;
