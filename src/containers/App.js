import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './app.css';
import Errorboundary from '../components/Errorboundary'

class App  extends Component{
    //adding state 
    constructor() {
        super()
        this.state=
        {
            robots: [],
            searchfield : ''
        }
    }

    componentDidMount(){     //since this is not a javascript file, we are not using the => function
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())  

        .then(users => this.setState({robots : users}))      // we are collecting the robots from the javascript file.
    }

    onSearchEvent = (event) =>{
        this.setState({searchfield: event.target.value})

    }


    render()
    {
        const { robots, searchfield} = this.state; //destructring the code to make it a lot clearner
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? <h1 className="tc">Loading</h1> :
        
            
                <div className="tc">
                    <h1 className='f1' >RoboFriends</h1>
                    < SearchBox searchChange= {this.onSearchEvent} />
                    <Scroll>
                    <Errorboundary>
                    <CardList robots={filteredRobots} />
                    </Errorboundary>
                    </Scroll>
                </div>
                
            
        }
       
        
    };


export default App;