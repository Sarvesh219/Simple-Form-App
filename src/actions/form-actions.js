import { SUBMIT_FORM } from './types';

export function submitForm(form) {
    return dispatch => {
        dispatch({ type: SUBMIT_FORM, form });
    };
}