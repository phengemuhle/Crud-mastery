import React, { Component } from 'react';
import './App.css';




class App extends Component {
  constructor() {
    super()
    this.state = {
      punchline: '',
      joke: '',
      all: [],
      num: ''
    }
  }

  async componentDidMount() {
    let result = await fetch('http://localhost:3000/jokes');
    let jokes = await result.json();
    this.setState({
      all:[jokes],
    })
    console.log(this.state.all[0].jokes[0])
  }
  submit = () => {
    var num1 = Number(this.state.num)
    var punch = this.state.all[0].jokes[num1].punchline
    var jk = this.state.all[0].jokes[num1].joke
    console.log(jk, punch)
    this.setState({
      punchline: punch,
    })

  }
  submitJoke = () => {
    var line = Math.floor(Math.random() * 28)
    var punch = this.state.all[0].jokes[line].punchline
    var jk = this.state.all[0].jokes[line].joke
    console.log(jk, punch)
    this.setState({
      num: line,
      joke: jk,
      punchline: ''
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className='row'>
          <button onClick={this.submitJoke} type="button" class="things btn btn-dark btn-lg">Press Me First</button>
          <button onClick={this.submit} type="button" class="things btn btn-dark btn-lg">Press Me</button>
        </div>
        <br></br>
          <img src='https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmeVF6bpbLkcDDB4DwdFgD9GwpttFgi5MarugDCdYaDjd8/503644465e0ae8906a7407272878205d.jpg' className="App-logo" alt="logo" />
          <p>
            {this.state.joke}.
          </p>
          <p>
            {this.state.punchline}.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
