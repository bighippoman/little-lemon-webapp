import React from 'react';
import '../styles/ReservationsPage.css'; // Assuming styles are general enough

function BookingForm(props) {
  const {
    state,
    dispatch,
    RESERVATION_ACTIONS,
    errors,
    today,
    availableTimes,
    handleDateChange,
    handleSubmit
  } = props;

  return (
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
              onChange={handleDateChange} // This will be updated later to use App.js dispatch
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
              disabled={!state.date || availableTimes.length === 0}
            >
              <option value="">Select a time</option>
              {availableTimes.map(time => (
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
        </div>

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
        </div>
      </div>

      <div className="form-section">
        <h2>Preferences & Notes</h2>
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
          </div>
        </div>
      </div>

      <button type="submit" className="submit-reservation-btn">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
