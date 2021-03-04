export const INITIAL = 'INITIAL';
export const LOADING = 'LOADING';
export const DONE = 'DONE';
export const ERROR = 'ERROR';

const initialState = {
  response: null,
  status: INITIAL
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        response: null,
        status: LOADING
      };
    case DONE:
      return {
        response: action.payload,
        status: DONE
      };
    case ERROR:
      return {
        response: null,
        status: ERROR
      };
    default:
      throw new Error('Unexpected data action');
  }
};

export { dataReducer, initialState };
