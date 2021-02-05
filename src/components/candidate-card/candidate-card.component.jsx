import React from 'react'

import {Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {selectCandidate, rejectCandidate} from "../../redux/candidates/candidates.actions"

import "./candidate-card.styles.scss"

const CandidateCard = (props) => {
    // console.log(propdetail);
    const {Image, name, id, selected, selectedPage, rejectedPage} = props.detail;
    // const {selectCandidate, rejectCandidate} = props;

    const stylingClass = ()=>{
        if(selected === null){
            return ''
        }
        else{
            if(selected === true){
                return 'selected'
            }
            else if(selected === false){
                return 'rejected'
            }
        }
    }

    return (
        <div className={`candidate-card shadow-lg`}>
             <Card>
                <Card.Header className={stylingClass()}>
                    <Card.Img src={Image} />
                    {/* <div className="overlay">this is over lay dude</div> */}
                </Card.Header>
                
                <Card.Body>
                    <Card.Title><Link to={`/users/${id}`}>{name}</Link></Card.Title>
                    <Card.Text>Some Description about candidate</Card.Text>
                </Card.Body>
                <div className="buttons">
                    
                    <Button variant="primary" onClick={() => props.selectCandidate(id)}>Select</Button>
                    <Button variant="danger" onClick={() => props.rejectCandidate(id)}>Reject</Button>
                </div>
            </Card>
        </div>
       
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectCandidate: (id) => dispatch(selectCandidate(id)),
        rejectCandidate: (id) => dispatch(rejectCandidate(id))
    }
}

export default connect(null, mapDispatchToProps)(CandidateCard);
