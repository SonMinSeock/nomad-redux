import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({ text, onDeleteBtnClick }) {
  return (
    <li>
      {text}
      <button onClick={onDeleteBtnClick}>Del</button>
    </li>
  );
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDeleteBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}
export default connect(null, mapDispatchToProps)(ToDo);
