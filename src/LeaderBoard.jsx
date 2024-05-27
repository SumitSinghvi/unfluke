import React from "react";

export default function LeaderBoard() {
  const mockData = [
    {
      rank: 1,
      name: "Selling with re entr",
      calmarRatio: 3.96,
      overallProfit: 381845,
      avgDailyProfit: 319.54,
      winPercentage: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 2,
      name: "strategy_name",
      calmarRatio: 3.62,
      overallProfit: 268872.5,
      avgDailyProfit: 216.31,
      winPercentage: 0.64,
      price: "500",
      action: "Buy",
    },
    {
      rank: 3,
      name: "Based on premium and",
      calmarRatio: 3.42,
      overallProfit: 255425,
      avgDailyProfit: 208.51,
      winPercentage: 0.64,
      price: "-",
      action: "View",
    },
    {
      rank: 4,
      name: "strategy_name",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentage: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 5,
      name: "Selling with re entr",
      calmarRatio: 3.96,
      overallProfit: 381845,
      avgDailyProfit: 319.54,
      winPercentage: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 6,
      name: "strategy_name",
      calmarRatio: 3.62,
      overallProfit: 268872.5,
      avgDailyProfit: 216.31,
      winPercentage: 0.64,
      price: "500",
      action: "Buy",
    },
    {
      rank: 7,
      name: "Based on premium and",
      calmarRatio: 3.42,
      overallProfit: 255425,
      avgDailyProfit: 208.51,
      winPercentage: 0.64,
      price: "-",
      action: "View",
    },
    {
      rank: 8,
      name: "strategy_name",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentage: 0.65,
      price: "-",
      action: "View",
    },
  ];
  return (
    <>
      <div className="px-36 py-12">
        <h1 className="text-4xl text-gray-600 font-semibold">
          Welcome to the LeaderBoard
        </h1>
        <p className="py-4 text-gray-600 text-xl w-[32em]">
          Explore and analyze the performance of various trading strategies
          through detailed backtesting results. Our leaderboard showcases the
          top strategies based on key performance metrics, helping you identify
          the most effective approaches to trading
        </p>
      </div>
      <div className="px-36 text-3xl font-semibold flex flex-col items-center">
        <h1>Basic Backtest</h1>
        <div className="py-6 flex gap-8 flex-wrap items-center justify-center">
          {mockData.map((elem) => (
            <div
              key={elem.rank}
              className="text-lg items-center flex flex-col gap-2"
            >
              <div className="border rounded-lg bg-blue-400 flex flex-col gap-6 px-10 py-6 ">
                <div className="">
                  <p>
                    Calmar Ratio :{" "}
                    <span className="text-green-800">{elem.calmarRatio}</span>
                  </p>
                  <p>
                    Win Daily Percentage :{" "}
                    <span className="text-green-800">{elem.winPercentage}</span>
                  </p>
                </div>
                <div className="">
                  <p>
                    Avg Daily Profit :{" "}
                    <span className="text-green-800">
                      {elem.avgDailyProfit}
                    </span>
                  </p>
                  <p>
                    Overall Profit :{" "}
                    <span className="text-green-800">{elem.overallProfit}</span>
                  </p>
                </div>
              </div>
              <div className="flex mr-auto w-full">
                <p className="font-bold capitalize">{elem.name}</p>
                <button className="text-red-800 ml-auto">{elem.action}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
