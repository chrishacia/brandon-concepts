import React from 'react';
import {MyNutJuiceModal} from './concept-modal';
import {MyNutJuiceForm1} from './concept-form';
import {MyNutJuiceForm2} from './concept-form';

class MyNutJuiceApp extends React.Component {
    render() {
        return (
            <MyNutJuiceModal>
                <MyNutJuiceForm1 />
            </MyNutJuiceModal>
        )
    }
}

// do whatever to render it where ever in the dom

