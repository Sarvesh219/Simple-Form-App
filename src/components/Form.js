import { TextField, Button, Card, CardContent, CardActions } from '@material-ui/core';
import React, { Component } from 'react';
import _ from 'lodash';

import { formOptions } from './constants/form-options';

class Form extends Component {
    state = {
        form: {}
    };

    componentDidMount = () => {
        let form = {};
        formOptions.forEach(item => {
            form[item.id] = '';
        });
        this.setState({ form });
    };

    handleChange = event => {
        const { form } = this.state;
        this.setState({ 
            form: _.set({ ...form }, event.target.id, event.target.value)
         });
    };

    render() {
        const { form } = this.state;
        const { onHandleSubmit } = this.props;
        return (
            <Card style={{ marginBottom: 20 }}>
                <CardContent>
                    {formOptions.map(item => (
                        <TextField
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            value={form[item.id] || ''}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            fullWidth
                        />
                    ))}
                </CardContent>
                <CardActions>
                    <Button
                        style={{ marginBottom: 10 }}
                        variant="contained"
                        color="primary"
                        onClick={()=> {
                            onHandleSubmit(form);
                            this.setState({ form: {} })
                        }}
                    >
                        SUBMIT
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default Form;