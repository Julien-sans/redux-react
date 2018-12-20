import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch({ type: 'ADD'}),
  onAddTen: () => dispatch({ type: 'ADD_10'}),
  onRemove: () => dispatch({ type: 'REMOVE'}),
  onRemoveTen: () => dispatch({ type: 'REMOVE_10'})
});

const CounterComponent = ({ counter, onAdd, onAddTen, onRemove, onRemoveTen }) => (
  <div>
    <p>{counter}</p>
    <button onClick={onAdd}>Add</button>
    <button onClick={onAddTen}>Add 10</button>
    <button onClick={onRemove}>Remove</button>
    <button onClick={onRemoveTen}>Remove 10</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
