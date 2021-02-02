import React , {Component} from 'react';

class Errorboundary extends Component {
    constructor(props){
        super(props);
        this.state= {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }


    render(){
        if(this.state.hasError)
            {
                return <h1>Our knights are working on this.........Sorry.</h1>
            }
        else{
            return this.props.children
        }
    }
}

export default Errorboundary;