import CandidateActionTypes from "./candidates.types"

export const selectCandidate = (candidate)=>{
    return {
        type: CandidateActionTypes.SELECT_CANDIDATE,
        payload: candidate
    }
}

export const rejectCandidate = (candidate) => {
    return {
        type: CandidateActionTypes.REJECT_CANDIDATE,
        payload: candidate
    }
}

export const setCandidates = (candidateList) => {
    return {
        type: CandidateActionTypes.SET_CANDIDATES,
        payload: candidateList
    }
}