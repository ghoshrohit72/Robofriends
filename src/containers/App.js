import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './app.css';
import Errorboundary from '../components/Errorboundary'

function App() 
{
    //adding state 
    // constructor() {
    //     super()
    //     this.state=
    //     {
    //         robots: [],
    //         searchfield : ''
    //     }
    // }

    // componentDidMount(){     //since this is not a javascript file, we are not using the => function
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())  

    //     .then(users => this.setState({robots : users}))      // we are collecting the robots from the javascript file.
    // }

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    const onSearchEvent = (event) =>{
        setSearchfield(event.target.value)

    }
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())  

            .then(users =>{setRobots(users)})  

    },[]) //only change if the component changes
    
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? <h1 className="tc">Loading</h1> :
        
            
                <div className="tc">
                    <h1 className='f1' >RoboFriends</h1>
                    < SearchBox searchChange= {onSearchEvent} />
                    <Scroll>
                    <Errorboundary>
                    <CardList robots={filteredRobots} />
                    </Errorboundary>
                    </Scroll>
                </div>
                
            
        
       
        
    };


export default App;