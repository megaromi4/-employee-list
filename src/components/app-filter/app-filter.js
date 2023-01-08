import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttons, onUpdateFilter, filter } = this.props;

    const button = buttons.map(({ id, title, active }) => {
      let className = "btn";
      if (id === filter) {
        className += " btn-light";
      } else {
        className += " btn-outline-light";
      }
      return (
        <button
          type="button"
          key={id}
          className={className}
          onClick={() => onUpdateFilter(id)}
        >
          {title}
        </button>
      );
    });

    return <div className="btn-group">{button}</div>;
  }
}

export default AppFilter;
