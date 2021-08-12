import React from 'react'
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>RichTech News</h2>
                <InfoIcon />
            </div>
            { newsArticle("RichTech launches linkedin-Clone!! Awesomeness!", 'Top news - 10,099 readers') }
            { newsArticle("2022 Audi RS3 Redesign!", "Top news - 11,463 readers") }
            { newsArticle("Tesla hits new highs!", "Top news - 11,463 readers") }
            { newsArticle("Dogecoin is soaring! Should you buy?", "Top news - 7,956 readers") }
            { newsArticle("RichTech coming near you!", "Top news - 8,193 readers") }
        </div>
    )
}

export default Widgets
