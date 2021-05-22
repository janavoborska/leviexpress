import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Seat } from '../Seat';

export const SeatPicker = () => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        <div className="seat-row">
          <Seat number="5" isOccupied={true} isSelected={true} onSelect />
          <Seat number="2" isOccupied={true} isSelected={false} onSelect />
          <Seat number="6" isOccupied={false} isSelected={true} onSelect />
          <Seat number="8" isOccupied={false} isSelected={false} onSelect />
        </div>
      </div>
      <button className="btn" type="button">
        Rezervovat
      </button>
    </div>
  );
};
