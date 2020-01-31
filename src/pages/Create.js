import React from 'react';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        }
    }

    submitHandler = e => {
        e.preventDefault()
        const self = this

        fetch('http://184.72.97.138:9000/tutorial', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
                name: e.target.name.value,
                name2: e.target.name2.value,
                name3: e.target.name3.value
            })
        }).then(res => {
            if (res.ok) {
                self.setState({
                    message: 'Book Created!'
                })
            }
        })
    }

    render() {
        return (
            <div>
                <h1 className="pt-3">Create new Book</h1>
                {
                    this.state.message ? (
                        <div>{this.state.message}</div>
                    ) : (null)
                }
                <form onSubmit={this.submitHandler}>
                    <div className="pt-3">
                        <label>Title</label>
                        <br/>
                        <input type="text" className="form-control" name="name"/>
                    </div>
                    <div>
                        <label>Author</label>
                        <br/>
                        <input type="text" className="form-control" name="name2"/>
                    </div>
                    <div>
                        <label>Genre</label>
                        <br/>
                        <input type="text" className="form-control" name="name3"/>
                    </div>
                    <input type="submit" className="btn btn-success mt-3" value="Create"/>
                </form>
            </div>
        )
    }
}

export default Create; 