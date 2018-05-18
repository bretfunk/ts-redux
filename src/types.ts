export interface IState {
  item: string;
  items: string[];
}

export interface IInputProps {
  item: string;
  addTodo: () => any;
  updateItem: (e: any) => any;
}

export interface IListProps {
  items: string[];
  deleteTodo: (e: any) => any;
}
