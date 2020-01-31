import React from 'react';
import Moment from 'react-moment';
import { Link, Redirect } from "react-router-dom";

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: null,
            deleted: false
        }
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    async componentDidMount() {
        const { id } = this.props.match.params

        const uri = `http://184.72.97.138:9000/tutorial/${id}`
        const res = await fetch(uri)
        
        this.setState({
            book: await res.json()
        })
    }

    async deleteHandler() {
        const { id } = this.props.match.params

        fetch(`http://184.72.97.138:9000/tutorial/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        this.setState({ deleted: true });
    }

    render() {
        let redirect;
        if(this.state.deleted) {
            redirect = <Redirect to="/"></Redirect>
        }
        return (
            <div> 
                {redirect}
                {
                    !this.state.book ? ( 
                        <div>Loading Book...</div>
                    ) : (
                        <div>
                            <h1 className="display-3 pt-3">{this.state.book.name}</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Author</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Actions</th>
                                    </tr>   
                                </thead>
                                <tbody>   
                                    <tr>
                                        <td>{this.state.book.name2}</td>
                                        <td>{this.state.book.name3}</td>
                                        <td><Moment format="DD-MM-YYYY HH:mm">{this.state.book.created_at}</Moment></td>
                                        <td>
                                            <Link to={`/${this.state.book._id}/edit`} className="btn btn-warning">Edit</Link>
                                            <Link onClick={this.deleteHandler} className="btn btn-danger">Delete</Link>
                                        </td>
                                    </tr>
                                </tbody> 
                            </table>    
                        </div>
                    )
                } 
            </div>
        )
    }

}

export default Show;