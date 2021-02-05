import React, { Component } from 'react'

import axios from 'axios'
import { Form, Button, Container } from 'react-bootstrap';

import "./homepage.styles.scss"
import {connect} from 'react-redux'

import CandidatesPreview from "../../components/candidates-preview/candidates-preview.component"

// import {setCandidates} from "../../redux/candidates/candidates.actions"
import {selectCandidatesList, selectSearchCandidates} from "../../redux/candidates/candidates.selectors"

export class Homepage extends Component {

    state = {
        
        searchText: ''
    }


    onSearchTextChanged = (event) => {
        console.log("search text changed")

        const {name, value} = event.target;

        this.setState({[name]: value })

    }
    render() {
        console.log(this.props);
        console.log(this.props.match.params)
        const dom_list = this.state.searchText.length === 0 ? this.props.candidatesList : this.props.searchCandidatesList(this.state.searchText.toLowerCase());
        console.log({dom_list});
        return (

            
            <Container className="homepage">
            
                <Form className="search-form">
                    <Form.Group controlId="searchBox">
                        <Form.Control type="text" name="searchText" value={this.state.searchText} placeholder="Search for Candidate Name" onChange={this.onSearchTextChanged} />
                    </Form.Group>
                </Form>
                {
                    dom_list.length === 0 ? null : <CandidatesPreview cardList={dom_list} />
                }
            
             </Container>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        candidatesList: selectCandidatesList(state),
        searchCandidatesList: (searchText) => selectSearchCandidates(searchText)(state)
    }
}

export default connect(mapStateToProps, null)(Homepage);
