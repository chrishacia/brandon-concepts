import React from 'react';

class MyNutJuiceForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email,
            firstName,
            lastName
        }
    }

    resetFormFields() {
        const fields = {};
        this.state.map((o,k) => {
            fields[k] = '';
        })
        this.setState(fields);
    }

    buttonCallBack(params) {
        if(!this.props.callBack) {
            this.resetFormFields();
            return;
        }
        this.props.callBack(params);
        this.resetFormFields();
    }

    render() {

        return (
            <form>
                <input
                    className="bootstrapClass-wtf"
                    type="text"
                    value={!this.state.email ? "" : this.state.email }
                    onChange={
                        (e) => {
                            this.setState({
                                email: e.currentTarget.value
                            })
                        }
                    }
                />
                <input
                    type="text"
                    className="bootstrapClass-wtf"
                    value={!this.state.firstName ? "" : this.state.firstName }
                    onChange={
                        (e) => {
                            this.setState({
                                firstName: e.currentTarget.value
                            })
                        }
                    }
                />
                <input
                    type="text"
                    className="bootstrapClass-wtf"
                    value={!this.state.lastName ? "" : this.state.lastName }
                    onChange={
                        (e) => {
                            this.setState({
                                lastName: e.currentTarget.value
                            })
                        }
                    }
                />
                <button onClick={
                    ()=>{
                        this.buttonCallBack
                    }}
                >
                    Submit
                </button>
            </form>
        )
    }
};

export default MyNutJuiceForm;