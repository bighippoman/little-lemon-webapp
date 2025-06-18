// src/App.js
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReservationProvider } from './context/ReservationContext';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ReservationsPage from './pages/ReservationsPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import ContactPage from './pages/ContactPage';
import './App.css';

// Mock API functions - these would typically interact with a backend
const fetchAPI = date => {
  // For now, returning a fixed set of times regardless of date
  // This simulates fetching available slots for a given date
  // In a real app, this would make an API call
  console.log(`Fetching times for date: ${date}`);
  return [
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
  ];
};

// Action type for the reducer
export const TIMES_ACTION_TYPES = {
  UPDATE_TIMES_FOR_DATE: 'UPDATE_TIMES_FOR_DATE',
  INITIALIZE_TIMES: 'INITIALIZE_TIMES' // Optional: if you want an explicit init action
};

// Reducer function for managing availableTimes
const updateTimes = (state, action) => {
  switch (action.type) {
    case TIMES_ACTION_TYPES.UPDATE_TIMES_FOR_DATE:
      // For now, returns the same available times regardless of the date (action.payload.date)
      // Later, this would use action.payload.date to fetch/filter times
      console.log('Reducer: Updating times for date:', action.payload.date);
      return fetchAPI(action.payload.date); // Or return a static list for now as per instructions
    case TIMES_ACTION_TYPES.INITIALIZE_TIMES:
      return initializeTimes(); // Call the initializer
    default:
      return state;
  }
};

// Function to initialize times - can also be fetched
const initializeTimes = () => {
  // For now, return a fixed array of times
  // This could also call fetchAPI with today's date for a more dynamic start
  return fetchAPI(new Date().toISOString().split('T')[0]);
};

function App() {
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes);
  // Note: The third argument to useReducer is the initializer function, which is called once.
  return (
    <ReservationProvider>
      <Router>
        <div className="App">
          <Header />
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/reservations" element={<ReservationsPage availableTimes={availableTimes} dispatchTimes={dispatchTimes} />} />
              <Route path="/order-online" element={<OrderOnlinePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ReservationProvider>
  );
}

export default App;