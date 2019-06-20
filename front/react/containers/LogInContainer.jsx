import React, { Component } from "react";
import LogIn from "../components/LogIn";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions/logUser";

class LogInContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
        email:"",
        password:""
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({ [e.target.type]: e.target.value })
}
handleSubmit(e){
    e.preventDefault()
    this.props.logUser(this.state)
}

  render() {console.log(this.state)
    return <LogIn handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>;
  }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        logUser:fetchUser
    }
}


export default connect(
  null,
  mapDispatchToProps
)(LogInContainer);