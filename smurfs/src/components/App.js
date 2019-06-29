import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSmurf } from '../actions/index'
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurf: {
      name: '',
      age: '',
      height: ''
    }
  }
  inputChange = e => {
    e.preventDefault()
    this.setState({ ...this.state, smurf: {...this.state.smurf, [e.target.name]: e.target.value} })
  }
  newSmurf = e => {
    e.preventDefault()
    this.props.addSmurf(this.state.smurf)
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.newSmurf}>
          <input
            type="text" name="name" value={this.state.smurf.name}
            placeholder="Smurf Name" onChange={this.inputChange}
          ></input>
          <input
            type="number" name="age" value={this.state.smurf.age}
            placeholder="Smurf Age" onChange={this.inputChange}></input>
          <input
            type="number" name="height" value={this.state.smurf.height}
            placeholder="Smurf Height(cm)" onChange={this.inputChange}></input>
          <button>Add Smurf</button>
        </form>
        {this.props.smurfs.map(smurf => {
          return <p key={Math.floor(Math.random() * 1000) + 1}>{smurf.name} is {smurf.age} years old and is {smurf.height} cm tall</p>
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { smurfs: state.smurfs }
}
export default connect(mapStateToProps, { addSmurf })(App);
