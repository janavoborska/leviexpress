import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import mapImage from './img/map.svg';

export const JourneyPicker = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Odesílám formulář s cestou');
    console.log(fromCity);
    console.log(toCity);
    console.log(date);
  };

  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');

  return (
    <>
      <div className="journey-picker container">
        <h2 className="journey-picker__head">Kam chcete jet?</h2>
        <div className="journey-picker__body">
          <form onSubmit={handleSubmit} className="journey-picker__form">
            <label>
              <div className="journey-picker__label">Odkud:</div>
              <select
                value={fromCity}
                onChange={(event) => setFromCity(event.target.value)}
              >
                <option value="">Vyberte</option>
                <option value="Mesto1">Město 1</option>
                <option value="Mesto2">Město 2</option>
                <option value="Mesto3">Město 3</option>
                <option value="Mesto4">Město 4</option>
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Kam:</div>
              <select
                value={toCity}
                onChange={(event) => setToCity(event.target.value)}
              >
                <option value="">Vyberte</option>
                <option value="Mesto1">Město 1</option>
                <option value="Mesto2">Město 2</option>
                <option value="Mesto3">Město 3</option>
                <option value="Mesto4">Město 4</option>
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Datum:</div>
              <select
                value={date}
                onChange={(event) => setDate(event.target.value)}
              >
                <option value="">Vyberte</option>
                <option>20.05.2021</option>
                <option>21.05.2021</option>
                <option>22.05.2021</option>
                <option>23.05.2021</option>
              </select>
            </label>
            <div className="journey-picker__controls">
              <button className="btn" type="submit">
                Vyhledat spoj
              </button>
            </div>
          </form>
          <img className="journey-picker__map" src={mapImage} />
        </div>
      </div>

      <div className="journey-detail container">
        <h2>Podrobnosti cesty</h2>
        <div className="stops">
          <div className="bus-stop">
            <div className="bus-stop__bullet"></div>
            <div className="bus-stop__place">
              <div className="bus-stop__city">Město 1</div>
              <div className="bus-stop__station">Zastávka</div>
            </div>
            <div className="bus-stop__departure">10:45</div>
          </div>
          <div className="bus-stop">
            <div className="bus-stop__bullet"></div>
            <div className="bus-stop__place">
              <div className="bus-stop__city">Město 2</div>
              <div className="bus-stop__station">Zastávka</div>
            </div>
            <div className="bus-stop__departure">10:45</div>
          </div>
          <div className="bus-stop">
            <div className="bus-stop__bullet"></div>
            <div className="bus-stop__place">
              <div className="bus-stop__city">Město 3</div>
              <div className="bus-stop__station">Zastávka</div>
            </div>
            <div className="bus-stop__departure">10:45</div>
          </div>
          <div className="bus-stop">
            <div className="bus-stop__bullet"></div>
            <div className="bus-stop__place">
              <div className="bus-stop__city">Město 4</div>
              <div className="bus-stop__station">Zastávka</div>
            </div>
            <div className="bus-stop__departure">10:45</div>
          </div>
        </div>
      </div>
    </>
  );
};
