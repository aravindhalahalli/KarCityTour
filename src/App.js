import React from 'react';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/indexTour';
import './App.scss';

function App() {
  return (
    <main>
      <Navbar />
      <TourList />
    </main>
  );
}

export default App;
