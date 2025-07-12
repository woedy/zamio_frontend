import { useState } from "react";
import { MapPin } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import map from '../../images/map.png';
import hitzfm from '../../images/hitzfm.png';
import raggae from '../../images/raggae.jpg';

export default function ArtistDashboard() {
  
  // Sample data for the chart
  const chartData = [
    { name: "Jan", plays: 20 },
    { name: "Feb", plays: 40 },
    { name: "Mar", plays: 80 },
    { name: "Apr", plays: 120 },
    { name: "May", plays: 150 },
    { name: "Jun", plays: 180 },
    { name: "Jul", plays: 230 },
    { name: "Aug", plays: 250 },
    { name: "Sep", plays: 250 },
    { name: "Oct", plays: 250 },
    { name: "Nov", plays: 250 },
    { name: "Dec", plays: 250 },
  ];

  // Sample data for recent airplays
  const recentAirplays = [
    { station: "Hitz FM", location: "Accra", date: "(Apr. 20) 02:25 pm", song: "Raggae Flow", duration: "2 min" },
    { station: "Hitz FM", location: "Accra", date: "(Apr. 20) 02:25 pm", song: "Raggae Flow", duration: "2 min" },
    { station: "Hitz FM", location: "Accra", date: "(Apr. 20) 02:25 pm", song: "Raggae Flow", duration: "2 min" },
    { station: "Hitz FM", location: "Accra", date: "(Apr. 20) 02:25 pm", song: "Raggae Flow", duration: "2 min" },
  ];


  return (
    <div className="flex flex-col lg:flex-row w-full p-2 gap-4">
      {/* Main Dashboard Area */}
      <div className="flex-1">
        {/* Stats and Graph Section */}
        <div className="grid grid-cols-1 md:grid-cols-9 gap-4 mb-6">
          {/* Total Airplays */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center bg-gray dark:bg-indigo-900/20 shadow-1 rounded-lg p-4">
            <p className="mb-2 font-medium">Total Airplays</p>
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-8 border-red-500 flex items-center justify-center mb-2">
              <div className="text-center">
                <p className="text-2xl sm:text-4xl font-bold">250</p>
                <p className="text-xs sm:text-sm text-gray-400">Plays</p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="col-span-1 md:col-span-5 bg-gray dark:bg-indigo-900/20 shadow-1 rounded-lg p-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.3} />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Line
                  type="monotone"
                  dataKey="plays"
                  stroke="#fff"
                  strokeWidth={1}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Total Revenue */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center bg-gray dark:bg-indigo-900/20 shadow-1 rounded-lg p-4">
            <p className="mb-2 font-medium">Total TV</p>
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-8 border-green-500 flex items-center justify-center mb-2">
              <div className="text-center">
                <p className="text-2xl sm:text-4xl font-bold">3,050</p>
                <p className="text-xs sm:text-sm text-gray-400">GHC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Total Radio Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center bg-gray dark:bg-indigo-900/20 shadow-1 rounded-lg p-4">
            <p className="text-gray-400 mb-2">Total Radio</p>
            <p className="text-2xl sm:text-4xl font-bold">11</p>
          </div>
          
          <div className="text-center bg-gray dark:bg-indigo-900/20 shadow-1 rounded-lg p-4">
            <p className="text-gray-400 mb-2">Total TV</p>
            <p className="text-2xl sm:text-4xl font-bold">11</p>
          </div>
        </div>

        {/* Recent Notification */}
        <div className="mb-6 p-4 bg-gray dark:bg-indigo-900/20 shadow-1 rounded-lg">
          <p className="text-sm sm:text-base">Your song <span className="font-bold">'Highlife Groove'</span> was played on <span className="font-bold">Hitz FM</span> at <span className="font-bold">10:15 AM</span> on <span className="font-bold">April 20, 2025</span>.</p>
        </div>

        {/* Recent Airplays Table */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
            <h3 className="text-lg sm:text-xl font-semibold">Recent Airplays</h3>
            <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gray dark:bg-graydark text-white rounded-lg hover:bg-indigo-700 transition text-sm sm:text-base">
              View All
            </button>
          </div>
          <div className="bg-gray dark:bg-indigo-900/20 shadow-1 rounded-lg overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="border-b border-graydark">
                  <th className="text-left py-3 px-2 sm:px-4">Station</th>
                  <th className="text-left py-3 px-2 sm:px-4">Location</th>
                  <th className="text-left py-3 px-2 sm:px-4">Date/time</th>
                  <th className="text-left py-3 px-2 sm:px-4">Song Title</th>
                  <th className="text-left py-3 px-2 sm:px-4">Duration</th>
                </tr>
              </thead>
              <tbody>
                {recentAirplays.map((play, index) => (
                  <tr key={index} className="border-b border-indigo-800 hover:bg-indigo-100/50">
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded mr-2">
                          <img src={hitzfm} alt="Station logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs sm:text-base">{play.station}</span>
                      </div>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-base">{play.location}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-base">{play.date}</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded mr-2">
                          <img src={raggae} alt="Album art" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs sm:text-base">{play.song}</span>
                      </div>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-base">{play.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full lg:w-80 mt-6 lg:mt-0 bg-indigo-900/30 rounded-lg overflow-hidden">
        <div className="bg-indigo-800 py-3 px-4">
          <h3 className="font-semibold flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Airplays Locations
          </h3>
        </div>
        <div className="h-64 lg:h-full">
          <img src={map} alt="Map" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}