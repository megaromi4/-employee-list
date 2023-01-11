import { Component } from "react";

import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

class EmployeesList extends Component {
  render() {
    const { data, onDelete, onToggleIncrease, onToggleRise } = this.props;
    let elem = data.map((data) => {
      const { id, ...item } = data;
      return (
        <EmployeesListItem
          key={id}
          {...item}
          onDelete={() => onDelete(id)}
          onToggleIncrease={() => onToggleIncrease(id)}
          onToggleRise={() => onToggleRise(id)}
        />
      );
    });
    return <ul className="app-list list-group">{elem}</ul>;
  }
}

export default EmployeesList;
