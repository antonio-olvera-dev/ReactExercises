import React, { Component, useState } from "react";
import "./forms.css";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

let contexto;
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleS: false,
      emailS:false,
      passwordS:false
    };
    this.email = "";
    this.password = "";
    contexto = this;
  }

  render() {
    return (
      <section className="section-forms">
        <form className="form-forms">
          {this.state.titleS ? (
            <h1 className="h1-form">
              Email: {this.email} <br />
              Password: {this.password}{" "}
            </h1>
          ) : (
            <h1 className="h1-form" >Welcome</h1>
          )}
          <div className="div-input-forms">
            <Email />
          </div>
          <div className="div-input-forms">
            <Password />
          </div>
          <Button
            type="button"
            onClick={SendForm}
            className="button-forms"
            variant="contained"
            color="primary"
          >
            Send Form
          </Button>
        </form>
      </section>
    );
  }
}

function SendForm() {
  const email = contexto.state.emailS;
  const password = contexto.state.passwordS;
  if (contexto.email.length < 3) { contexto.setState({emailS:true})}
  if (contexto.password.length < 3) { contexto.setState({passwordS:true})}
  if (!email && !password) {
    contexto.setState({ titleS: true });
  }
}

function Email() {
  
  const saveForm = (e) => {
    const value = e.target.value;
    contexto.email = value;
    if (value.length > 3) {
        contexto.setState({emailS:false})
    }
  };
  const valid = (e) => {
    const value = e.target.value;

    if (value.length < 3) {
        contexto.setState({emailS:true})
    } else {
        contexto.setState({emailS:false})
    }
  };

  return contexto.state.emailS ? (
    <TextField
      className="inputs-forms"
      name="email"
      helperText="Error messaje"
      error
      label="Email"
      variant="outlined"
      type="text"
      onChange={saveForm}
      onBlur={valid}
    />
  ) : (
    <TextField
      className="inputs-forms"
      name="email"
      label="Email"
      variant="outlined"
      type="text"
      onChange={saveForm}
      onBlur={valid}
    />
  );
}

function Password() {
  
    const saveForm = (e) => {
        const value = e.target.value;
        contexto.password = value;
        if (value.length > 3) {
            contexto.setState({passwordS:false})
        }
      };
      const valid = (e) => {
        const value = e.target.value;
    
        if (value.length < 3) {
            contexto.setState({passwordS:true})
        } else {
            contexto.setState({passwordS:false})
        }
      };
    
      return contexto.state.passwordS ? (
    <TextField
      className="inputs-forms"
      name="password"
      helperText="Error messaje"
      error
      label="Password"
      variant="outlined"
      type="text"
      onChange={saveForm}
      onBlur={valid}
    />
  ) : (
    <TextField
      className="inputs-forms"
      name="password"
      label="Password"
      variant="outlined"
      type="password"
      onChange={saveForm}
      onBlur={valid}
    />
  );
}

export default Forms;
