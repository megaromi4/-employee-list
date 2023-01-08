import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "John Smith",
          salary: 1000,
          increase: false,
          rise: true,
          id: 1,
        },
        {
          name: "Vasya Pupkin",
          salary: 22,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: "Anna Vanna",
          salary: 1111,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      term: "",
      buttons: [
        { title: "Все сотрудники", id: "all", active: true },
        { title: "На повышение", id: "rise", active: false },
        { title: "ЗП больше 1000$", id: "more1000", active: false },
      ],
      filter: "all",
    };
    this.maxId = 4;
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  onAdd = (name, salary) => {
    this.setState(({ data }) => {
      const newItem = {
        name,
        salary,
        increase: false,
        rise: false,
        id: this.maxId,
      };
      return {
        data: [...data, newItem],
      };
    });
    this.maxId = this.maxId + 1;
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilter = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => {
          return item.rise;
        });
      case "all":
        return items;
      case "more1000":
        return items.filter((item) => {
          return item.salary > 1000;
        });
    }
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, buttons, filter } = this.state;
    const employees = this.state.data.length;
    const increase = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.onFilter(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increase={increase} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            buttons={buttons}
            onUpdateFilter={this.onUpdateFilter}
            filter={filter}
          />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.onDelete}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
