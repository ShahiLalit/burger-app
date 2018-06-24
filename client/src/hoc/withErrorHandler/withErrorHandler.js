import React from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, Axios) => {
    return class extends React.Component {
        state = {
            error: null
        }
        // componentDidMount() will be executed after the componentDidMount() ran for the child elements.
        // componentDidMount() { 

        // To run the interceptors before we need to introduce the interceptors in the componentWillMount()
        componentWillMount() {
            Axios.interceptors.request.use(request => {
                this.setState({ error: null })
                return request;
            });

            Axios.interceptors.response.use(response => response, error => {
                console.log(error);
                this.setState({ error: error })
            });
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} canceled={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler;