import React from 'react';
import PropTypes from 'prop-types';

const TrainList = ({ lineColor }) => {
    // Filter the train data by the specified line color
    const filteredTrains = trainData.RailArrivals.filter(train => 
        train.LINE.toLowerCase() === lineColor.toLowerCase()
    );

    return (
        <div>
            <h1>{lineColor.charAt(0).toUpperCase() + lineColor.slice(1)} Line Trains</h1>
            <ul>
                {filteredTrains.length > 0 ? (
                    filteredTrains.map((train, index) => (
                        <li key={index}>
                            <strong>Train {train.TRAIN_ID}:</strong> 
                            {` Destination: ${train.DESTINATION}, `}
                            {`Next Arrival: ${new Date(train.NEXT_ARR).toLocaleTimeString()}, `}
                            {`Waiting Time: ${train.WAITING_TIME}, `}
                            {`Delay: ${train.DELAY}`}
                        </li>
                    ))
                ) : (
                    <li>No trains available for this line at the moment.</li>
                )}
            </ul>
        </div>
    );
};

TrainList.propTypes = {
    lineColor: PropTypes.oneOf(['blue', 'gold', 'red', 'green']).isRequired,
};

export default TrainList;
