import * as React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../ducks/todo";
import { IListProps } from "../types";

const mapStateToProps = (state: any) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteTodo: (e: any) => dispatch(deleteTodo(e))
  };
};

class ConnectedList extends React.Component<IListProps> {
  public render() {
    const { items, deleteTodo } = this.props;
    const button = <button onClick={deleteTodo}>Delete</button>;
    const list = items.map((item: string, i: number) => (
      <li key={i}>
        {item}
        {button}
      </li>
    ));
    return <ul>{list}</ul>;
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
