import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import { useReservation } from '../context/ReservationContext';
import { TIMES_ACTION_TYPES } from '../App'; // Import action types
import '../styles/ReservationsPage.css';

function ReservationsPage({ availableTimes, dispatchTimes }) {
  const { state, dispatch, RESERVATION_ACTIONS } = useReservation(); // Removed updateAvailableTimes
  const [errors, setErrors] = useState({});

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const validateForm = () => {
    const newErrors = {};

    if (!state.date) newErrors.date = 'Date is required';
    if (!state.time) newErrors.time = 'Time is required';
    if (!state.name.trim()) newErrors.name = 'Name is required';
    if (!state.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!state.phone.trim()) newErrors.phone = 'Phone number is required';
    if (state.guests < 1 || state.guests > 10) {
      newErrors.guests = 'Number of guests must be between 1 and 10';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch({ type: RESERVATION_ACTIONS.SUBMIT_RESERVATION });
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    dispatch({ type: RESERVATION_ACTIONS.SET_DATE, payload: selectedDate });
    dispatch({ type: RESERVATION_ACTIONS.SET_TIME, payload: '' }); // Reset time when date changes
    dispatchTimes({ type: TIMES_ACTION_TYPES.UPDATE_TIMES_FOR_DATE, payload: { date: selectedDate } });
  };

  if (state.isSubmitted) {
    return (
      <div className="reservation-success">
        <div className="success-content">
          <h1>🎉 Reservation Confirmed!</h1>
          <div className="confirmation-details">
            <h2>Reservation Details</h2>
            <p><strong>Name:</strong> {state.name}</p>
            <p><strong>Date:</strong> {new Date(state.date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {state.time}</p>
            <p><strong>Guests:</strong> {state.guests}</p>
            {state.occasion && <p><strong>Occasion:</strong> {state.occasion}</p>}
            <p><strong>Email:</strong> {state.email}</p>
            <p><strong>Phone:</strong> {state.phone}</p>
            {state.specialRequests && (
              <p><strong>Special Requests:</strong> {state.specialRequests}</p>
            )}
          </div>
          <p className="confirmation-message">
            We've sent a confirmation email to {state.email}. 
            We look forward to seeing you!
          </p>
          <button 
            onClick={() => dispatch({ type: RESERVATION_ACTIONS.RESET_FORM })}
            className="new-reservation-btn"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="reservations-page">
      <div className="page-header">
        <h1>Reserve a Table</h1>
        <p>Book your table at Little Lemon and enjoy an unforgettable dining experience.</p>
      </div>

      <BookingForm 
        state={state} 
        dispatch={dispatch} 
        RESERVATION_ACTIONS={RESERVATION_ACTIONS}
        errors={errors}
        today={today}
        availableTimes={availableTimes} // Now from props
        handleDateChange={handleDateChange} // This will change
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ReservationsPage;
