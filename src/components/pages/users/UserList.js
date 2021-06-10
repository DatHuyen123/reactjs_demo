import React, { useState, useEffect } from 'react';
import callAPI from "../../../utils/ApiCaller";
import UserDetailModal from './UserDetailModal'
import { connect } from 'react-redux';
import { fetchUsersRequest } from '../../../redux/action';
import callApi from '../../../utils/ApiCaller'
import { ExportCSV } from './ExportCSV';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const UserList = (props) => {

  const { users } = props;
  const [user, setUser] = useState({});
  const [type, setType] = useState('');
  const [message, setMessage] = useState('')

  useEffect(() => {
    props.fetchUsers();
  }, [])

  const handleClickDetail = (item, type) => {
    setUser(item);
    setType(type);
  }

  const handleClickDelete = (id) => {
    console.log(id);
    callApi('api/user/delete/' + id, 'DELETE', null).then(res => {
      setMessage('delete success');
      props.fetchUsers();
    }).catch(e => {
      setMessage('delete faild');
    })
  }

  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-4">LIST OF USERS</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
          <Link to="/admin/"><a href="index.html">Dashboard</a></Link>
          </li>
          <li className="breadcrumb-item active">USERS</li>
        </ol>
        <div className="card mb-4">
          <div className="">
            <ExportCSV csvData={(users)} fileName="users" />
          </div>
          <div className="card-header">
            <i className="fas fa-table mr-1" />
              Data User
            </div>
          {message}
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>username</th>
                    <th>password</th>
                    <th>role</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.password}</td>
                        <td>{item.role}</td>
                        <td>
                          <button type="button" className="btn btn-danger" onClick={() => { handleClickDelete(item.id) }}>
                            Remove
                            </button>
                            &nbsp;&nbsp;
                            <button type="button" className="btn btn-warning" data-toggle="modal"
                            data-target="#exampleModalCenter" onClick={() => {
                              handleClickDetail(item, 'update');
                            }}>
                            Update
                            </button>
                            &nbsp;&nbsp;
                            <button
                            className="btn btn-primary"
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            onClick={() => {
                              handleClickDetail(item, 'detail');
                            }}
                          >
                            Detail
                            </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <UserDetailModal user={user} type={type} />
            </div>
          </div>
        </div>
      </div>
    </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList);