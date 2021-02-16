import { deleteProfile } from '../../actions/artisanProfile';
import { deletePersonProfile } from '../../actions/personProfile';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const DeleteButton = () => {
  const userRole = useSelector((state) => state.auth.user.role);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <button
        type='button'
        class='btn btn-danger'
        data-toggle='modal'
        data-target='#exampleModal'
      >
        Delete Profile
      </button>

      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Delete your profile
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              Are you sure you want to delete your profile
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-success'
                data-dismiss='modal'
              >
                No
              </button>
              <button
                type='button'
                class='btn btn-danger'
                data-dismiss='modal'
                onClick={() =>
                  dispatch(
                    userRole === 'Artisan'
                      ? deleteProfile(history)
                      : userRole === 'Person' && deletePersonProfile(history)
                  )
                }
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
