import React from 'react';
import '../styles/ExpertiseEnd.css';

const ExpertiseEnd = () => {
    const categories = ["Commercial", "Hospitality", "Rental", "Construction", "Retail", "Multisite", "Residential"];

    const renderCategories = () => (
        categories.map((category, index) => (
            <React.Fragment key={index}>
                <span className="category">{category}</span>
                {index < categories.length - 1 && <span className="separator">~</span>}
            </React.Fragment>
        ))
    );

    return (
        <div className="marquee-container">
            <div className="marquee">
                {renderCategories()}
                {renderCategories()} {/* Duplicate content for seamless transition */}
            </div>
        </div>
    );
}

export default ExpertiseEnd;
