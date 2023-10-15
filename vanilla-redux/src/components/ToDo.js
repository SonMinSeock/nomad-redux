import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onDeleteBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
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
