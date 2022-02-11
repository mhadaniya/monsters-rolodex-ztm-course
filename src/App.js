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

  filterAction = (e) => this.setState({ searchField: e.target.value })

  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="bg-slate-900 h-screen w-screen flex flex-col">
        <Header filterAction={this.filterAction}/>
        <CardList items={filteredMonsters} />        
        <Footer />
      </div>
    );
  }
}

export default App;
