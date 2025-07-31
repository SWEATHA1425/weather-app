import { useState } from "react";

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positive = total ? ((good / total) * 100).toFixed(1) : 0;

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded space-y-6 text-center">
      <h1 className="text-2xl font-bold text-blue-600">Feedback Tracker</h1>

      <div className="flex justify-center gap-4">
        <button onClick={() => setGood(good + 1)} className="bg-green-500 text-white px-4 py-2 rounded">Good</button>
        <button onClick={() => setNeutral(neutral + 1)} className="bg-yellow-400 text-white px-4 py-2 rounded">Neutral</button>
        <button onClick={() => setBad(bad + 1)} className="bg-red-500 text-white px-4 py-2 rounded">Bad</button>
      </div>

      {total > 0 ? (
        <div className="text-left bg-gray-100 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive Feedback: {positive}%</p>
        </div>
      ) : (
        <p className="text-gray-500">No feedback given yet.</p>
      )}
    </div>
  );
}

export default Feedback;