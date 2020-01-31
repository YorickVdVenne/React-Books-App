import React from 'react';

class Pagination extends React.Component {
    constructor(props) {
        super();
        this.state = {
          currentPage: null,
          currentItems: null,
          totalPages: null,
          totalItems: null,
          start: props.start,
          limit: props.limit
        };
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState(nextProps.data);
        this.setState(nextProps);
    }

    next() {
      if (Math.ceil(this.state.start / this.state.limit) + 1 < this.state.totalPages) {
        let n = {
          start: this.state.start + this.state.limit,
          limit: this.state.limit
        };
        this.props.updateData(n);
      }
    }
    previous() {
      if (Math.ceil(this.state.start / this.state.limit) > 0) {
        let n = {
          start: this.state.start - this.state.limit,
          limit: this.state.limit
        };
        this.props.updateData(n);
      }
    }
    page(number) {
      if (number !== Math.ceil(this.state.start / this.state.limit)) {
        let n = {
          start: this.state.limit * number,
          limit: this.state.limit
        };
        this.props.updateData(n);
      }
    }

    render() {
        let buttons = [];

        for (let i = 0; i< this.state.totalPages; i++) {
          buttons.push(
            <li className={`page-item ${i === Math.ceil(this.state.start / this.state.limit)? "active" : ""}`} key={i} onClick={() => this.page(i)}>
              <a className="page-link">{i + 1}</a>
            </li>
          );
        }
        buttons.unshift(
          <li className="page-item" key="prev">
            <a className="page-link" onClick={() => this.previous()}>
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
            </a>
          </li>
        );
        buttons.push(
          <li className="page-item" key="next">
            <a className="page-link" onClick={() => this.next()}>
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
            </a>
          </li>
        );
        return (
          <div className="col">
            <nav className="Page navigation example">
              <ul className="pagination pt-3">{buttons}</ul>
            </nav>
          </div>
        );
      }
}

export default Pagination;