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
            this.reqInterceptors = Axios.interceptors.request.use(request => {
                this.setState({ error: null })
                return request;
            });

            this.resInterceptors = Axios.interceptors.response.use(response => response, error => {
                console.log(error);
                this.setState({ error: error })
            });
        }

        // We need to UnMount the interceptors after the component has been rendered successfully so that it does not run again and again with each rendering, which can lead to memory use and hinder the performance of the application.

        componentWillUnmount(){
            console.log("UNmounting", this.reqInterceptors, this.resInterceptors)
            Axios.interceptors.request.eject(this.reqInterceptors); // Takes the reference of the interceptors 
            Axios.interceptors.response.eject(this.resInterceptors); // created in the componentWillMount() lifecycle hook.
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