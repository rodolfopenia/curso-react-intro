import "./TodoItem.css";
import { FaRegCircleCheck, FaXmark } from "react-icons/fa6";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}>
        <FaRegCircleCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}>
        <FaXmark />
      </span>
    </li>
  );
}

export { TodoItem };