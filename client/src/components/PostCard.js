import React, { useState, useEffect } from 'react';
import { updateLikes, deletePost, addComment } from '../actions/post';
import { setAlert } from '../actions/alert';
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

  const defaultImg =
    'http://www.gravatar.com/avatar/c1a276b8587995e9f29e1b7fe9148169?s=200&r=pg&d=mm';
  const [text, setText] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);

  var commentsNumber = comments.length;
  var likesNumber = likes.length;

  useEffect(() => {
    commentsNumber = comments.length;
    likesNumber = likes.length;
  }, [comments, likes]);
  return (
    <div className='container postContainer col-md-12'>
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
              <span>
                <img
                  className='rounded-circle mr-2'
                  width='40'
                  src={photo}
                  alt=''
                />
              </span>
              <span className='username'>{fullName}</span>
              {((auth.user && auth.user.role === 'Admin') ||
                (auth.user && auth.user._id === userId)) && (
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
                onClick={() => setShowComments(!showComments)}
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
                className='btn m-r-15 text-inverse-lighter mr-1'
                onClick={() => {
                  auth.user
                    ? dispatch(updateLikes(id))
                    : setAlert({ msg: 'Please Connect', alertType: 'danger' });
                }}
              >
                <i className='fa fa-thumbs-up fa-fw fa-lg m-r-3'></i>Like
              </button>
              <button
                onClick={() => {
                  setShowCommentBox(auth.user ? true : false);
                  !auth.user &&
                    setAlert({ msg: 'Please Connect', alertType: 'danger' });
                }}
              >
                <i className='fa fa-comments fa-fw fa-lg m-r-3'></i>Comment
              </button>
            </div>
            {showCommentBox && (
              <div className='timeline-comment-box col-md-11'>
                <div className='user'>
                  <img
                    src={!!auth.user ? auth.user.avatar : defaultImg}
                    alt=''
                  />
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
                            text &&
                              dispatch(
                                addComment({ postId: id, formData: text })
                              );
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
            )}
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
