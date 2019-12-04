import personHelper from '../helpers/personHelper';
import {change} from "redux-form";

export const changeEditingPerson = (person) => {
    return {type: personHelper.ACTIONS.CHANGE_EDITING_PERSON, payload: person };
}

export const createNewPerson = (newPerson, onComplete) => {
    newPerson.id = Math.floor(Math.random() * 10);

    return dispatch => {
        onComplete && onComplete(newPerson);
        dispatch({type: personHelper.ACTIONS.CREATE_NEW_PERSON, payload: newPerson});
    };
}