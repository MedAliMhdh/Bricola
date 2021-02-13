import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/post";
import Spinner from "./Spinner";

const Post = () => {
  const posts = useSelector((state) => state.post.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(), [getPosts]);
  });
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
                <img
                  src='https://bootdey.com/img/Content/avatar/avatar3.png'
                  alt=''
                />
              </span>
              <span className='username'>
                <a href='/'>Sean Ngu</a> <small></small>
              </span>
              <span className='pull-right text-muted'>18 Views</span>
            </div>
            <div className='timeline-content'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                faucibus turpis quis tincidunt luctus. Nam sagittis dui in nunc
                consequat, in imperdiet nunc sagittis.
              </p>
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
              <a href='/' className='m-r-15 text-inverse-lighter mr-1'>
                <i className='fa fa-thumbs-up fa-fw fa-lg m-r-3'></i>Like
              </a>
              <a href='/' className='m-r-15 text-inverse-lighter ml-1'>
                <i className='fa fa-comments fa-fw fa-lg m-r-3'></i>Comment
              </a>
            </div>
            <div className='timeline-comment-box col-md-11'>
              <div className='user'>
                <img
                  src='https://bootdey.com/img/Content/avatar/avatar3.png'
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
                    />
                    <span className='input-group-btn p-l-10'>
                      <button
                        className='btn btn-primary f-s-12 rounded-corner mr-3'
                        type='button'
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

export default Post;
