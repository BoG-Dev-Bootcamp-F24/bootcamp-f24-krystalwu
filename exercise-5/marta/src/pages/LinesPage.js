import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import TrainList from '../components/TrainList';

const LinesPage = () => {
  const [currColor, setCurrColor] = useState('GOLD'); // Default line color
  const [stationData, setStationData] = useState([]);
  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    const fetchStationData = async () => await axios.get("URL/api/stations");
    const fetchTrainData = async () => await axios.get("URL/api/trains");

    const fetchData = async () => {
      const stations = await fetchStationData();
      const trains = await fetchTrainData();
      setStationData(stations.data);
      setTrainData(trains.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <NavBar color={currColor} data={stationData} />
      <TrainList color={currColor} data={trainData} />
    </div>
  );
};

export default LinesPage;
