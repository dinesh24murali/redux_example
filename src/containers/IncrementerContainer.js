import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement, makeApiCall } from '../slices/appSlice';
import Incrementer from '../components/Incrementer';

const mapStateToProps = (state) => {
    return {
        number: state.app.number
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            increment,
            decrement,
            makeApiCall
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Incrementer);
