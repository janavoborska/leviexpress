import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JourneyDetail } from './JourneyDetail';
import { JourneyPicker } from './JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  return (
    <>
      <JourneyPicker
        onJourneyChange={
          (data) => setJourney(data)
          //console.log('nazdar')
        }
      />
      {journey !== null ? <JourneyDetail journey={journey} /> : undefined}
    </>
  );
};

/*<div>Nalezeno spojení s id{//journey.journeyId}</div> ) : undefined}*/
