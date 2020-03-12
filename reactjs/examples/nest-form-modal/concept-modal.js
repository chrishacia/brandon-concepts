import React from 'react';
import { Modal } from 'react-bootstrap';


class MyNutJuiceModal extends React.Component {
    constructor(props) {
        super(props);

        const buttonCallBack = (params) =>{
            this.setState({showModal: false});
            if(!this.props.callBack) {
                return;
            }
            this.props.callBack(params);
        }

        defaultButton = {
            buttonText: !this.props.buttonText ? "Close" : this.props.buttonText,
            buttonStyles: !this.props.buttonStyles ? "btn btn-primary" : this.props.buttonStyles,
            callBack: buttonCallBack
        }

        this.state = {
            showModal: false,
            title: !this.props.title ? "Message" : this.props.title,
            buttons: !this.props.buttons ? noButtons : this.props.buttons,
            callBack: buttonCallBack,
            buttons: !this.props.buttons ? defaultButton : this.props.buttons
        }
    }

    render() {

        return (
            <div className="juicyModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{ this.state.title }</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={(params) => {
                                if(!this.state.callBack) {
                                    return;
                                }
                                this.state.callBack(params)
                            }}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        { this.props.children }
]
                    </div>
                    <div className="modal-footer">
                        {
                            this.state.buttons.map((o,k) => (
                                <MyNutJuiceButton
                                    styels={this.state.buttonStyles}
                                    callBack={this.state.callBack}
                                    displayText={this.state.buttonText}
                                />
                            ))
                        }
                    </div>
                    </div>
                </div>
            </div>
        )
    }
};

class MyNutJuiceButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="juicyModal"
                onClick={(params) => {
                    this.props.callBack(params);
                }}
            >
                Close
            </button>
        )
    }
}

export default MyNutJuiceModal;