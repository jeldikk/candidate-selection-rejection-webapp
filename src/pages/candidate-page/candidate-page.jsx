import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {selectCandidateById} from "../../redux/candidates/candidates.selectors"
import {selectCandidate, rejectCandidate} from "../../redux/candidates/candidates.actions"

import "./candidate-page.styles.scss"

export class Candidatepage extends Component {

    onSelectClicked = (event) => {
        // console.log(this.props)
        this.props.dispatch(selectCandidate(this.props.candidate.id))
        this.props.history.push('/')
    }

    onRejectClicked = (event) => {
        // console.log()
        this.props.dispatch(rejectCandidate(this.props.candidate.id))
        this.props.history.push('/')

    }
    
    render() {

        console.log({candidatePage: this.props})
        const {candidate} = this.props
        return (
            <div className="candidate-page">
                <Container>
                    <Row>
                        <Col md={3} className="text-center">
                            <img className="img-thumbnail rounded mx-auto" src={candidate.Image} alt=""/>
                        </Col>
                        <Col md={8}>
                            <div className="buttons">
                                <Button variant="primary" size="lg" onClick={this.onSelectClicked}>Select</Button>
                                <Button variant="danger" size="lg" onClick={this.onRejectClicked}>Reject</Button>
                            </div>
                            <div className="content">
                                <div className="name">
                                    {candidate.name}
                                </div>
                                <div className="description">
                                    Cupidatat velit sunt incididunt nostrud excepteur Lorem aliquip ullamco qui deserunt. Sunt culpa dolor qui nostrud deserunt. Commodo in veniam velit ullamco. Ex in veniam commodo excepteur labore incididunt. Ad Lorem sunt duis laboris eiusmod commodo mollit. Ad incididunt culpa anim sint officia dolore eu commodo.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStatetoProps = (state,actualProps) => {
    return {
        candidate: selectCandidateById(actualProps.match.params.candidateId)(state)[0]
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         selectCandidate: (id) => dispatch(selectCandidate(id)),
//         rejectCandidate: (id) => dispatch(rejectCandidate(id))
//     }
// }



export default connect(mapStatetoProps, null)(Candidatepage)
