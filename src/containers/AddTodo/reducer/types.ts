export enum AddTodoTypes {
  CleanForm = '[AddTodo] Clean Form',
  UpdateProp = '[AddTodo] Update Prop',
}

export type AddTodoAction =
  | { type: AddTodoTypes.UpdateProp; prop: string; value: string }
  | { type: AddTodoTypes.CleanForm };

export type AddTodoState = {
  userId: string;
  id: string;
  title: string;
};
