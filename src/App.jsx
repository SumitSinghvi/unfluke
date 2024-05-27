import { useState, useEffect } from 'react'
import Navbar from './Navbar';
import LeaderBoard from './LeaderBoard';

const mockData = [
  { rank: 1, name: "Selling with re entr", calmarRatio: 3.96, overallProfit: 381845, avgDailyProfit: 319.54, winPercentage: 0.65, price: '-', action: 'View' },
  { rank: 2, name: "strategy_name", calmarRatio: 3.62, overallProfit: 268872.5, avgDailyProfit: 216.31, winPercentage: 0.64, price: '500', action: 'Buy' },
  { rank: 3, name: "Based on premium and", calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winPercentage: 0.64, price: '-', action: 'View' },
  { rank: 4, name: "strategy_name", calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: '-', action: 'View' },
];

function App() {
  return (
    <>
      <Navbar />
      <LeaderBoard />
    </>
  );
}

export default App;