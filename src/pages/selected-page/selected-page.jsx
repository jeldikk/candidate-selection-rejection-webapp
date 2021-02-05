import React from 'react'

import {connect} from "react-redux"
import {Container} from 'react-bootstrap'

import CandidatesPreview from "../../components/candidates-preview/candidates-preview.component"
import {selectSelectedCandidates} from "../../redux/candidates/candidates.selectors"

const Selectedpage = (props) => {

    console.log(props);
    console.log("this is from selected page")

    return (
        <div className="selected-page">
            <Container>
                {
                    props.selectedCandidates.length === 0 ? <h3 className="m-3 text-center">You haven't selected any candidates yet</h3> : <CandidatesPreview cardList={props.selectedCandidates} />
                }
                
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedCandidates:  selectSelectedCandidates(state)
    }
}

export default connect(mapStateToProps,null)(Selectedpage);
