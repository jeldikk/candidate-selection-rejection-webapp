import React from "react";

import CandidateCard from "../candidate-card/candidate-card.component";
import "./candidates-preview.styles.scss"
const CandidatesPreview = ({ cardList }) => {
    return (
        <div className="candidates-preview">
            {cardList.map((candidate) => (
                <CandidateCard key={candidate.id} detail={candidate} />
            ))}
        </div>
    );
};

export default CandidatesPreview;
