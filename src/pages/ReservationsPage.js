import React, { useState } from 'react';
import { useReservation } from '../context/ReservationContext';
import '../styles/ReservationsPage.css';

function ReservationsPage() {
  const { state, dispatch, updateAvailableTimes, RESERVATION_ACTIONS } = useReservation();
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
    updateAvailableTimes(selectedDate);
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

      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-section">
          <h2>Reservation Details</h2>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Choose date *</label>
              <input
                type="date"
                id="date"
                value={state.date}
                min={today}
                onChange={handleDateChange}
                className={errors.date ? 'error' : ''}
                required
              />
              {errors.date && <span className="error-message">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="time">Choose time *</label>
              <select
                id="time"
                value={state.time}
                onChange={(e) => dispatch({ type: RESERVATION_ACTIONS.SET_TIME, payload: e.target.value })}
                className={errors.time ? 'error' : ''}
                required
                disabled={!state.date}
              >
                <option value="">Select a time</option>
                {state.availableTimes.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
              {errors.time && <span className="error-message">{errors.time}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">Number of guests *</label>
              <select
                id="guests"
                value={state.guests}
                onChange={(e) => dispatch({ type: RESERVATION_ACTIONS.SET_GUESTS, payload: parseInt(e.target.value) })}
                className={errors.guests ? 'error' : ''}
                required
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                ))}
              </select>
              {errors.guests && <span className="error-message">{errors.guests}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                value={state.occasion}
                onChange={(e) => dispatch({ type: RESERVATION_ACTIONS.SET_OCCASION, payload: e.target.value })}
              >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date">Date</option>
                <option value="business">Business</option>
                <option value="celebration">Celebration</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Contact Information</h2>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full name *</label>
              <input
                type="text"
                id="name"
                value={state.name}
                onChange={(e) => dispatch({ type: RESERVATION_ACTIONS.SET_NAME, payload: e.target.value })}
                className={errors.name ? 'error' : ''}
                placeholder="Enter your full name"
                required
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                value={state.email}
                onChange={(e) => dispatch({ type: RESERVATION_ACTIONS.SET_EMAIL, payload: e.target.value })}
                className={errors.email ? 'error' : ''}
                placeholder="Enter your email"
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div> {/* End of form-row for name/email */} 

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone number *</label>
              <input
                type="tel"
                id="phone"
                value={state.phone}
                onChange={(e) => dispatch({ type: RESERVATION_ACTIONS.SET_PHONE, payload: e.target.value })}
                className={errors.phone ? 'error' : ''}
                placeholder="(123) 456-7890"
                required
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            {/* This form-group for phone is currently alone in its form-row. It will take full width in that row. */}
            {/* If paired with another field, that field would go here. */}
          </div> {/* End of form-row for phone */} 
        </div> {/* End of form-section for Contact Information */} 

        {/* New form-section for Special Requests if desired, or keep it in Contact Info */}
        {/* For now, let's assume Special Requests is its own logical group but still part of the overall form */}
        <div className="form-section"> {/* Optional: New section for clarity, or remove if special requests belongs above */} 
          <h2>Preferences & Notes</h2> {/* Example new section title */} 
          <div className="form-row form-row--full">
            <div className="form-group">
              <label htmlFor="specialRequests">Special requests</label>
              <textarea
                id="specialRequests"
                value={state.specialRequests}
                onChange={(e) => dispatch({ type: RESERVATION_ACTIONS.SET_SPECIAL_REQUESTS, payload: e.target.value })}
                placeholder="Any allergies, dietary restrictions, or special needs?"
                rows="4"
              />
              {/* Add error span here if specialRequests has validation errors */}
            </div>
          </div> {/* End of form-row for special requests */} 
        </div> {/* End of form-section for Special Requests */} 

        <button type="submit" className="submit-reservation-btn">
          Make Your Reservation
        </button>
      </form>
    </div>
  );
}

export default ReservationsPage;
