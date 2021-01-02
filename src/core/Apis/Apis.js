import React, { Component } from "react";
import "./apis.css";
import Button from '@material-ui/core/Button';
let ctx;
class Apis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exist: false,
      users: [],
    };
    ctx = this;
    this.callApi();
  }

  async callApi() {
    try {
    //   const userA = await (
    //     await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    //   ).json();
        //   const user = userA;
        const userA = await (await fetch("https://randomuser.me/api/")).json();
        const user = userA.results[0];

      let newUsers = ctx.state.users;
      newUsers.push(user);
      ctx.setState({
        users: newUsers,
        exist: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  Lista() {
    let listItems;
     if (ctx.state.exist) {
        listItems = ctx.state.users.map((number) => {
         return(<ul key={`${number.picture.medium}`} className="ul-apis">
             <li className="li-img-apis"><img alt={number.name.first} src={number.picture.medium} /></li>
                <li className="li-name-apis">Name: {number.name.first}</li>
                <li>Age: {number.dob.age}</li>
           </ul>)  ;
        });
     } else {
        listItems = []
     }
    return listItems;
  }

  render() {
    return (
      <section className="section-apis" >
          <Button style={{margin:"1em"}} variant="outlined" color="secondary" onClick={this.callApi}>Add new user</Button>
        {ctx.state.exist ? (
          
            <div className="div-lista-api">
                <this.Lista />
            </div>
         
        ) : null}
      </section>
    );
  }
}

export default Apis;
