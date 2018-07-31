import React from 'react';
import FruitBasket from './FruitBasket';

//const App = () => <FruitBasket />;

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      fruit: [],
    }
  }

  render(){
    return(<FruitBasket />)
  }
}

export default App;
