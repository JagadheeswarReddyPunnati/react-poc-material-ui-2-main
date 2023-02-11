import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/index.js';
import RegularButton from "../../material-ui-components/CustomButtons/Button.js";
function UsersReduxThunk({ userData, fetchUsers }) {
    return <div>
        <RegularButton onClick={fetchUsers} color="primary" size="lg" > Load Users Redux Thunk</RegularButton>
        <div>
            {
                userData.loading ? (
                    <h2>Loading</h2>
                ) : userData.error ? (
                    <h2>{userData.error}</h2>
                ) : (
                    <div>
                        <div>
                            {userData &&
                                userData.users.length>0 && <h2>Users with Redux Thunk</h2>}
                            {userData &&
                                userData.users &&
                                userData.users.map(user => <p key={user.id}>{user.name}</p>)}
                        </div>
                    </div>
                )}
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersReduxThunk)