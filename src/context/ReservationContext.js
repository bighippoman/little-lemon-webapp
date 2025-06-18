import React, { createContext, useContext, useReducer } from 'react';

const ReservationContext = createContext();

// Action types
const RESERVATION_ACTIONS = {
  SET_DATE: 'SET_DATE',
  SET_TIME: 'SET_TIME',
  SET_GUESTS: 'SET_GUESTS',
  SET_OCCASION: 'SET_OCCASION',
  SET_NAME: 'SET_NAME',
  SET_EMAIL: 'SET_EMAIL',
  SET_PHONE: 'SET_PHONE',
  SET_SPECIAL_REQUESTS: 'SET_SPECIAL_REQUESTS',
  SUBMIT_RESERVATION: 'SUBMIT_RESERVATION',
  RESET_FORM: 'RESET_FORM',
};

// Initial state
const initialState = {
  date: '',
  time: '',
  guests: 2,
  occasion: '',
  name: '',
  email: '',
  phone: '',
  specialRequests: '',
  isSubmitted: false,
  reservations: []
};

// Reducer function
function reservationReducer(state, action) {
  switch (action.type) {
    case RESERVATION_ACTIONS.SET_DATE:
      return { ...state, date: action.payload };
    case RESERVATION_ACTIONS.SET_TIME:
      return { ...state, time: action.payload };
    case RESERVATION_ACTIONS.SET_GUESTS:
      return { ...state, guests: action.payload };
    case RESERVATION_ACTIONS.SET_OCCASION:
      return { ...state, occasion: action.payload };
    case RESERVATION_ACTIONS.SET_NAME:
      return { ...state, name: action.payload };
    case RESERVATION_ACTIONS.SET_EMAIL:
      return { ...state, email: action.payload };
    case RESERVATION_ACTIONS.SET_PHONE:
      return { ...state, phone: action.payload };
    case RESERVATION_ACTIONS.SET_SPECIAL_REQUESTS:
      return { ...state, specialRequests: action.payload };
    case RESERVATION_ACTIONS.SUBMIT_RESERVATION:
      return {
        ...state,
        isSubmitted: true,
        reservations: [...state.reservations, {
          id: Date.now(),
          date: state.date,
          time: state.time,
          guests: state.guests,
          occasion: state.occasion,
          name: state.name,
          email: state.email,
          phone: state.phone,
          specialRequests: state.specialRequests,
          createdAt: new Date().toISOString()
        }]
      };
    case RESERVATION_ACTIONS.RESET_FORM:
      return {
        ...initialState,
        reservations: state.reservations
      };
    default:
      return state;
  }
}

// Provider component
export function ReservationProvider({ children }) {
  const [state, dispatch] = useReducer(reservationReducer, initialState);

  const value = {
    state,
    dispatch,
    RESERVATION_ACTIONS
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
}

// Custom hook
export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
}
