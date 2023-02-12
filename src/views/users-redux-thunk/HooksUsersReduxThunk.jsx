import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers4Hooks } from '../../redux/index.js';
import RegularButton from "../../material-ui-components/CustomButtons/Button.js";
function HooksUsersReduxThunk() {
    const userData = useSelector(state => state.userHooks)
    const dispatch = useDispatch()
    return <div>
        <RegularButton onClick={() => dispatch(fetchUsers4Hooks())} color="info" size="lg" > Load Users Redux Thunk Hooks</RegularButton>
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
                                userData.users4hooks.length>0 && <h2>Users with Redux Thunk Hooks</h2>}
                            {userData &&
                                userData.users4hooks &&
                                userData.users4hooks.map(user => <p key={user.id}>{user.name}</p>)}
                        </div>
                    </div>
                )}
        </div>
    </div>
}


export default HooksUsersReduxThunk;