import { AddTodoTypes, AddTodoState, AddTodoAction } from './types';

export const initialState: AddTodoState = {
  userId: '',
  id: '',
  title: '',
};

export const AddTodoReducer = (state: AddTodoState, action: AddTodoAction) => {
  switch (action.type) {
    case AddTodoTypes.UpdateProp:
      return {
        ...state,
        [action.prop]: action.value,
      };
    case AddTodoTypes.CleanForm:
      return initialState;
    default:
      return state;
  }
};

export const AddTodoActions = {
  clearForm: () => ({
    type: AddTodoTypes.CleanForm,
  }),
  updateProp: (prop: string, value: string) => ({
    type: AddTodoTypes.UpdateProp,
    prop,
    value,
  }),
};
