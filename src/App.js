import React,{Component} from 'react';
import CardList from './CardList.js'
import SearchBox from './SearchBox.js';
import Scroll   from './Scroll.js'
import './App.css';
class App extends Component {
constructor(){
  super()
  this.state=
  {
    robots:[],
    searchfiled:''
  }

}
 onChangeSearch = (event)=>{
   this.setState({searchfiled: event.target.value});
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response =>
    response.json()).then(users =>this.setState({robots:users}));
}

  render(){
    const filteredRobots = this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
    })
    if(this.state.robots.length === 0){
      return <h1 className='tc  f20 '> Loding</h1>
    }else{
      return(
              <div className='tc'>
    <h1 className='f1'>Robo Friends</h1>
    <SearchBox searchChange ={this.onChangeSearch} />

          <CardList robots={filteredRobots}/>

              </div>
            );
  }
}
}
export default App;
