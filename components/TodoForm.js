class TodoForm extends React.Component {
    state = {
        title: this.props.todo ? this.props.todo.title : '',
        body: this.props.todo ? this.props.todo.body : ''
    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(() => ({ title }))
    }

    onBodyChange = (e) => {
        const body = e.target.value
        this.setState(() => ({ body }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit({ ...this.state })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                    <input 
                        placeholder="body"
                        value={this.state.body}
                        onChange={this.onBodyChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export { TodoForm as default }