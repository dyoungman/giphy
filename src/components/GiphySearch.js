import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react'

class GiphySearch extends React.Component {
    constructor() {
        super();
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = { userQuery: '' }
    }

    async changeHandler(e) {
        await this.setState({userQuery: e.target.value});
    }

    submitHandler = () => this.props.onSearchChange(this.state.userQuery);

    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <Input onChange={this.changeHandler} placeholder='Enter Search Terms...' size='small' />
                <Button attached='right' color='purple' onClick={this.submitHandler} >Search</Button>
            </Form>
        );
    }
}

export default GiphySearch;