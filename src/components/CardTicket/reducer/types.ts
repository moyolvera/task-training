export type cardTicket = {
  name: string;
};

export enum cardTicketReducerTypes {
  updateName = '[CardTicket] update name',
}

export type cardTicketActionsTypes = { type: cardTicketReducerTypes.updateName; value: string };
