import React from 'react';

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            book: null,
            message: null
        }
    }   

    async componentDidMount() {
        const { id } = this.props.match.params

        const res = await fetch(`http://184.72.97.138:9000/tutorial/${id}`)
        const book = await res.json()

        this.setState({
            loading: true,
            id: book._id,
            name: book.name,
            name2: book.name2,
            name3: book.name3
        })
    }

    submitHandler = e => {
        e.preventDefault();
        const self = this

        fetch(`http://184.72.97.138:9000/tutorial/${this.state.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: e.target.name.value,
                name2: e.target.name2.value,
                name3: e.target.name3.value
            })
        }).then(res => {
            if (res.ok) {
                self.setState({
                    message: 'Book edited!'
                })
            }
        })
    }

    render() {
        return (
            <div>
                <h1 className="pt-3 pb-3">Edit Book</h1>
                {
                    this.state.message ? (
                        <div>{this.state.message}</div>
                    ) : (null)
                }
                {
                    !this.state.loading ? (
                        <div>Loading...</div>
                    ) : (
                        <form onSubmit={this.submitHandler} >
                            <div>
                                <label>Title</label>
                                <input type="text" class="form-control mb-3" name="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                            </div>
                            <div>
                                <label>Author</label>
                                <input type="text" class="form-control mb-3"  name="name2" value={this.state.name2} onChange={e => this.setState({ name2: e.target.value })} />
                            </div>
                            <div>
                                <label>Genre</label>
                                <input type="text" class="form-control"  name="name3" value={this.state.name3} onChange={e => this.setState({ name3: e.target.value })}/>
                            </div>
                            <input type="submit" class="btn btn-warning mt-4" value="Edit"/>
                        </form>
                    )
                }
            </div>
        )
    }

}

export default Edit;