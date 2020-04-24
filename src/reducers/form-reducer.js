import { SUBMIT_FORM } from '../actions/types';

export const initialState = {
    formData: []
};

const handlers = {
    [SUBMIT_FORM]: (state, action) => {
        let formData = [...state.formData, action.form];
        return {
            ...state,
            formData
        };
    }
};

export default function formReducer(state = initialState, action) {
    const handler = handlers[action.type];
    if (!handler) return state;
    return { ...state, ...handler(state, action) };
}