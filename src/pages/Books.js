import React from 'react';
import { Link } from "react-router-dom";
import Pagination from '../components/Pagination';

class Books extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            message: null,
            pagination: null,
            links: null,
            start: 0,
            limit: 5
        };
        this.updateData = this.updateData.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    async componentDidMount() {
        this.fetchData();
    }
        
    async fetchData() {
        const res = await fetch(`http://184.72.97.138:9000/tutorial?start=${this.state.start}&limit=${this.state.limit}`);
        const data = await res.json()
        
        this.setState(data);
    }

    updateData(startLimit) {
        this.setState(startLimit, this.fetchData);
      }

    deleteHandler = item => {
        const self = this
        const itemId = item._id

        fetch(`http://184.72.97.138:9000/tutorial/${itemId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {
                self.setState({
                    message: `Book ${item.name} deleted!`
                })            
            }
        })
        this.setState({
            items: item.filter(item => item._id !== itemId)
        });
    }

    render() {
        let books = this.state.items.map((item, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
              {item.name}
              <div className="btn-group" role="group" aria-label="Basic example">
                <Link to={`/books/${item._id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </li>
          ));

          return (
            <React.Fragment>
              <div className="row pt-5 pb-3">
                <div className="col">
                  <ul className="list-group list-group-flush">{books}</ul>
                </div>
              </div>
              <div className="row"> 
                <Pagination
                  data={this.state.pagination}
                  updateData={this.updateData}
                  start={this.state.start}
                  limit={this.state.limit}
                ></Pagination>
              </div>
            </React.Fragment>
          );
    }
}

export default Books;