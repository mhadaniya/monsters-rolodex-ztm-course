import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import { Footer } from "./components/footer/footer.component";
import { Header } from "./components/header/header.component";

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  
  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="bg-slate-900 h-screen w-screen flex flex-col">
        <Header />
        <CardList items={this.state.monsters} />        
        <Footer />
      </div>
    );
  }
}

export default App;
