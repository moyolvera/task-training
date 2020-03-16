import { cardTicket, cardTicketActionsTypes, cardTicketReducerTypes } from './types';

export const initialState: cardTicket = {
  name: '',
};

export const cardTicketReducer = (action: cardTicketActionsTypes, state: cardTicket) => {
  switch (action.type) {
    case cardTicketReducerTypes.updateName:
      return { ...state, name: action.value };
    default:
      return state;
  }
};

export const cardTicketActions = {
  updateName: (value: string) => ({
    action: cardTicketReducerTypes.updateName,
    value,
  }),
};
