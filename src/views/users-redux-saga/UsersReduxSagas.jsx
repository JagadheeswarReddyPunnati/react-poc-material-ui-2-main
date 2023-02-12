import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {getAllUsersRequestWatcher,editUserRequestWatcher} from "../../redux/userSagas/userSagasActions"
import RegularButton from "../../material-ui-components/CustomButtons/Button.js";

function UsersReduxSagas({ userSagasData, getAllUsersRequestWatcher,editUserRequestWatcher }) {
    const editUser={name: 'Jagadeesh'};
    const userId= 1;
    return <div>
        <RegularButton onClick={() => getAllUsersRequestWatcher()} color="primary" size="lg" > Load Users Redux Sagas</RegularButton> 
        <RegularButton onClick={() => editUserRequestWatcher(editUser,userId)} color="primary" size="lg" > Update User Redux Sagas</RegularButton>
        <div>
            {
                userSagasData.loading ? (
                    <h2>Loading</h2>
                ) : userSagasData.error ? (
                    <h2>{userSagasData.error}</h2>
                ) : (
                    <div>
                        <div>
                            {userSagasData &&
                                userSagasData.users4Saga.length>0 && <h2>Users with Redux Sagas</h2>}
                            {userSagasData &&
                                userSagasData.users4Saga &&
                                userSagasData.users4Saga.map(user => <p key={user.id}>{user.name}</p>)}
                        </div>
                    </div>
                )}
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        userSagasData: state.userSagas
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        getAllUsersRequestWatcher,
        editUserRequestWatcher       
      },
      dispatch,
    );
  };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersReduxSagas)