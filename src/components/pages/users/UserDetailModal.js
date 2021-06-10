import React, { useState , useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUsers, fetchUsersRequest } from '../../../redux/action';
import callApi from '../../../utils/ApiCaller'

const UserDetailModal = (props) => {

  const type = props.type;
  const [user , setUser] = useState({});
  const id = props.user.id;
  const [close , setClose] = useState('')

  useEffect(() => {
    if (type != undefined && type != '') {
      callApi('api/user/find-one/' + id , 'GET' , null).then(res => setUser(res.data));
    }
  },[type])

  const handleChangeName = (event) => {
    setUser({
      ...user,
      name: event.target.value
    })
  }

  const handleChangeUserName = (event) => {
    setUser({
      ...user,
      username: event.target.value
    })
  }

  const handleChangePassword = (event) => {
    setUser({
      ...user,
      password: event.target.value
    })
  }

  const handleClickUpdate = () => {
    console.log(user);
    callApi('api/user/create-or-update' , 'POST' , user).then(res => {
      props.fetchUsers();
      document.getElementById('btnClose').click();
    }).catch(e => {

    })
  }

  const handleChangeAge = (event) => {
    setUser({
      ...user,
      age: event.target.value
    })
  }

  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Modal title
              </h5>
          </div>
          <div className="modal-body">
            <div>
              <span><label>name: </label></span>
              <input  disabled={(type === 'detail')} onChange={handleChangeName} type="text" value={user.name}/>
            </div>
            <div>
              <span><label>username: </label></span>
              <input  disabled={(type === 'detail')} onChange={handleChangeUserName} type="text" value={user.username}/>
            </div>
            <div>
              <span><label>password: </label></span>
              <input  disabled={(type === 'detail')} onChange={handleChangePassword} type="text" value={user.password}/>
            </div>
            <div>
              <span><label>age: </label></span>
              <input  disabled={(type === 'detail')} onChange={handleChangeAge} type="text" value={user.age} type="number"/>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              id="btnClose"
            >
              Close
              </button>
            {(type === 'update') &&
              <button type="button" className="btn btn-primary" onClick={handleClickUpdate} >Update changes</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.UserReducer.users,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsersRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailModal);