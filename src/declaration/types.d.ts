export type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface UserData {
  userId: number;
  id: number;
}

export interface TodoItemInterface extends UserData {
  title: string;
  completed: boolean;
}
