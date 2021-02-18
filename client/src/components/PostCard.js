import React, { useState } from "react";
import { updateLikes, deletePost, addComment } from "../actions/post";
import { useDispatch, useSelector } from "react-redux";

const PostCard = ({ photo, fullName, content, id, userId }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [text, setText] = useState("");
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
              <div className='stats-right'>
                <span className='stats-text'>21 Comments</span>
              </div>
              <div className='stats'>
                <span className='fa-stack fa-fw stats-icon'>
                  <i className='fa fa-circle fa-stack-2x text-primary'></i>
                  <i className='fa fa-thumbs-up fa-stack-1x fa-inverse'></i>
                </span>
                <span className='stats-total'>4.3k</span>
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
                          setText("");
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
      </div>
    </div>
  );
};

export default PostCard;
