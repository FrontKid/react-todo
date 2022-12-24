export type TUserTodos = {
  userText: string,
  isDone: boolean,
  id: string,
}

export interface ITodoStates {
  userTodos: TUserTodos[];
  userText: string;
}