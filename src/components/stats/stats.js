import React from 'react';

const Stats = ({ stats }) => {
    if (!stats) {
        //loading not yet started
        return <span className="stats">Loading... </span>;
    }
    return (
        <span className="stats">
            {stats.error && 'Error!'}
            {stats.isLoading && '🤦‍♂️ Loading'}
            {stats.downloads !== null && `Downloads: ${stats.downloads}`}
        </span>
    );
};

export default Stats;
