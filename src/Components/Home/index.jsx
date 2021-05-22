import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JourneyPicker } from './JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  console.log(journey);

  return (
    <>
      <JourneyPicker
        onJourneyChange={
          (data) => setJourney(data)
          //console.log('nazdar')
        }
      />
      {journey !== null ? (
        <div>Nalezeno spojení s id{journey.journeyId}</div>
      ) : undefined}
    </>
  );
};
