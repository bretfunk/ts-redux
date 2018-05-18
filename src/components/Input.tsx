import * as React from "react";
import { connect } from "react-redux";
import { addTodo, updateItem } from "../ducks/todo";
import { IInputProps } from "../types";

const mapStateToProps = (state: any) => {
  return {
    item: state.item
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: () => dispatch(addTodo()),
    updateItem: (e: any) => dispatch(updateItem(e))
  };
};

class ConnectedInput extends React.Component<IInputProps> {
  public render() {
    const { addTodo, item, updateItem } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="item"
          name={item}
          onChange={updateItem}
        />
        <input type="submit" name="Submit" onClick={addTodo} />
      </div>
    );
  }
}
const Input = connect(mapStateToProps, mapDispatchToProps)(ConnectedInput);
export default Input;
