import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    increase,
    rise,
    onToggleIncrease,
    onToggleRise,
    onChangeSalary,
  } = props;

  let classNames = "list-group-item d-flex";

  if (increase) {
    classNames += " increase";
  }

  if (rise) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <div className="box">
        <span className="list-group-item-label" onClick={onToggleRise}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary}
          onChange={(e) => {
            onChangeSalary(e.target.value);
          }}
        />
      </div>

      <div className="btns d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
