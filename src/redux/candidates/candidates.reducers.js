import CandidateActionTypes from "./candidates.types"

const INITIAL_DATA = {
    candidates: []
}

const candidatesReducer = (state=INITIAL_DATA, action)=>{
    // console.log({candidatesReducer:state})
    switch(action.type){
        case CandidateActionTypes.SELECT_CANDIDATE:
            return {
                ...state,
                candidates: state.candidates.map((candidate) => candidate.id === action.payload ? {...candidate,selected: true} : candidate)
            }
        case CandidateActionTypes.REJECT_CANDIDATE:
            return {
                ...state,
                candidates: state.candidates.map((candidate) => candidate.id === action.payload ? {...candidate, selected: false} : candidate)
            }
        case CandidateActionTypes.SET_CANDIDATES:
            return {
                ...state,
                candidates: action.payload
            }
        default:
            return state;
    }
}

export default candidatesReducer