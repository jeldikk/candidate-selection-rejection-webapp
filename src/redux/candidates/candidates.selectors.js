
import {createSelector} from 'reselect'


export const selectCandidatesList = (state) => state.candidates.candidates;

export const selectCandidateById = (candidateId) => createSelector(
    [selectCandidatesList],
    (candidates) => candidates.filter((candidate) => candidateId === candidate.id)
)

export const selectSelectedCandidates = createSelector(
    [selectCandidatesList],
    (candidates) => candidates.filter((candidate) => candidate.selected === true)
)

export const selectRejectedCandidates = createSelector(
    [selectCandidatesList],
    (candidates) => candidates.filter((candidate) => candidate.selected === false)
)

export const selectSearchCandidates = (searchText) => createSelector(
    [selectCandidatesList],
    (candidates) => candidates.filter((candidate) => candidate.name.toLowerCase().includes(searchText))
)