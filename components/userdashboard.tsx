"use client";
import React, { useState, useEffect } from "react";

interface Broadcast {
  id: string;
  title: string;
  started: boolean;
}

const UserDashboard: React.FC = () => {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Simulate fetching broadcasts from an API
    const fetchedBroadcasts = [
      { id: "1", title: "faith", started: false },
      { id: "2", title: "hearing God", started: false },
    ];
    setBroadcasts(fetchedBroadcasts);
  }, []);

  useEffect(() => {
    // Simulate receiving a notification about a new broadcast
    const timer = setTimeout(() => {
      const updatedBroadcasts = broadcasts.map((b) =>
        b.id === "1" ? { ...b, started: true } : b
      );
      setBroadcasts(updatedBroadcasts);
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [broadcasts]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-40">
      <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>

      {showPopup && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg z-60">
              <h2 className="text-xl font-semibold mb-4">
                New Broadcast Started!
              </h2>
              <p className="mb-4">A new broadcast has started. Join now!</p>
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
        </>
      )}

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Broadcasts</h2>
        <ul>
          {broadcasts.map((broadcast) => (
            <li key={broadcast.id} className="mb-2">
              <div className="flex justify-between items-center">
                <span>{broadcast.title}</span>
                {broadcast.started && (
                  <span className="text-green-500">LIVE</span>
                )}
                <button className="ml-4 px-4 py-2 bg-green-500 text-white rounded">
                  Attend
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
