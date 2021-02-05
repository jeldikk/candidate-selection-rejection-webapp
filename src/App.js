import React from 'react'
import './App.css';
import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css"

import { Switch, Route } from "react-router-dom"
import {connect} from 'react-redux'
import { Container } from "react-bootstrap"

import {setCandidates} from "./redux/candidates/candidates.actions"

import Header from "./components/header/header.component"
import Homepage from "./pages/homepage/homepage"
import Candidatepage from "./pages/candidate-page/candidate-page"
import Selectedpage from "./pages/selected-page/selected-page"
import Rejectedpage from "./pages/rejected-page/rejected-page"

class App extends React.Component {

  componentDidMount(){

    const fetchData = async ()=>{
        try{
            const results = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
            if(results.status === 200){
                console.log(results.data);
                this.props.setCandidates(results.data.map((obj) => ({...obj,selected: null})))
                // this.setState({candidatesList: results.data})
            }
            
        }
        catch(err){
            console.error("Error occured during fetchData")
        }


       
        
    }


    fetchData();
}


  render() {

    return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/users/:candidateId" component={Candidatepage} /> 
            <Route exact path="/selected" component={Selectedpage} />
            <Route exact path="/rejected" component={Rejectedpage} />
          </Switch>
      </div>
    );

  }

}

const mapDispatchToProps = (dispatch) => {
  return {
      setCandidates: (cand_list) => dispatch(setCandidates(cand_list))
  }
}

export default connect(null, mapDispatchToProps)(App);
