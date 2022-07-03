

import moment from 'moment';
import React from 'react';
import './App.css';
import Search from './components/Search';
import Time from './components/Time';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      current:new Date(),
      getdate:'0',
      day:'00',
      hour:'00',
      second:'00',
      mint:'00',
      newTime:0
    }
  }
   tick() {
    this.setState({current:new Date()});
    if (this.state.newTime !== 0 && this.state.newTime>new Date()) {
      const diff = Math.floor((this.state.newTime - this.state.current) / 1000);
      this.setState({day:Math.floor(diff / 3600 / 24)});
      this.setState({hour:Math.floor(diff / 3600) % 24});
      this.setState({mint:Math.floor(diff / 60) % 60});
      this.setState({second:Math.floor(diff)% 60});
      return
    }

  }
 
  gettime = (Date1) => {
    this.setState({newTime:moment(new Date(Date1)).subtract(5, 'hours')});

  }
  componentDidMount(){
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  render(){
    return (
      <div className='timer'>
        <div className="container tc">
          <h1 className='white f1'>Count-Down Timer</h1>
          <div>
          <h1 className='white f2'>{moment(this.state.current).format('h:mm:ss A')}</h1>
          </div>
          <Search getTime={this.gettime} />
          <div className='container App'>
            <Time time={this.state.day} text={'Days'} />
            <Time time={this.state.hour} text={'Hours'} />
            <Time time={this.state.mint} text={'Minutes'} />
            <Time time={this.state.second} text={'Seconds'} />
          </div>
       
        </div>
      </div>
  
    );
  }


}

export default App;
