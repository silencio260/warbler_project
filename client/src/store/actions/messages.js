import {apiCall} from '../../services/api'
import {addError} from './errors'
import {LOAD_MESSAGE, REMOVE_MESSAGE} from '../actionTypes'

export const loadMessages = messages => ({
    type: LOAD_MESSAGE,
    messages
})

export const fetchMessages = () => {
    return dispatch => {
        return apiCall('get', '/api/messages')
        .then(res => dispatch(loadMessages(res)))
        .catch(err => addError(err.message))
    }
}

export const postNewMessage = text => (dispatch, getState) => {
    let {currentUser} = getState();
    const id = currentUser.user.id
    return apiCall('post', `/api/users/${id}/messages`, {text})
            .then(res => {})
            .catch(err => dispatch(addError(err.message)))
}

  