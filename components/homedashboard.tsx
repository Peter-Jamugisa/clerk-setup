import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-800 text-white">
      <div className="relative">
        <img src="/one.jpeg" alt="background" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold">Live by Faith, be Known by Love, & be a Voice of Hope</h1>
          <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-full">Give your life to Christ</button>
        </div>
      </div>
      <div className="p-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold">Nice to meet you.</h2>
        <p className="mt-4">
          We know you have a lot of great churches to choose from in our city,
          and we encourage you to check them out. If in your search you find yourself on our doorstep,
          we will welcome you with loving arms. Our goal is to be an authentic community of believers who are learning to love Jesus and love others more and more each day.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full">Visit Us This Sunday</button>
      </div>
    </div>
  );
};

export default Dashboard;

