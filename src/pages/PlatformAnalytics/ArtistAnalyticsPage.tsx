import React from "react";
import {
  MapPin, BarChartBig, PieChart, Music2, Smartphone
} from "lucide-react";

const dummyPlays = [
  { date: "Jul 1", count: 20 },
  { date: "Jul 2", count: 32 },
  { date: "Jul 3", count: 15 },
  { date: "Jul 4", count: 50 },
  { date: "Jul 5", count: 41 },
];

const topStations = [
  { name: "YFM Accra", percent: 35 },
  { name: "Hitz FM", percent: 25 },
  { name: "Joy FM", percent: 20 },
  { name: "Others", percent: 20 },
];

const topSongs = [
  { title: "Blessings ft. XYZ", plays: 91 },
  { title: "Midnight Drive", plays: 74 },
  { title: "Rain On Me", plays: 63 },
  { title: "Freedom", plays: 41 },
];

const ArtistAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <BarChartBig className="text-indigo-400" /> Airplay & Streaming Analytics
        </h1>

        <div className="grid grid-cols-2 gap-4">

        {/* Airplay Map */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <MapPin className="text-green-400" /> Airplay Map – Ghana
          </h2>
          <div className="bg-slate-800 h-64 rounded-lg flex items-center justify-center text-gray-400">
            [ 🗺 Map of Ghana with Region Heatmarks Placeholder ]
          </div>
        </section>


        {/* Plays Over Time */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <BarChartBig className="text-cyan-400" /> Plays Over Time
          </h2>
          <div className="bg-slate-800 p-4 rounded-lg text-gray-300">
            {dummyPlays.map((day) => (
              <div key={day.date} className="flex justify-between py-1 text-sm">
                <span>{day.date}</span>
                <div className="bg-indigo-600 h-2 rounded w-[60%]">
                  <div
                    className="bg-green-400 h-2 rounded"
                    style={{ width: `${day.count * 2}%` }}
                  />
                </div>
                <span>{day.count}</span>
              </div>
            ))}
          </div>
        </section>

        </div>




        {/* Station Breakdown */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <PieChart className="text-pink-400" /> Station Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="bg-slate-800 h-48 rounded-lg flex items-center justify-center text-gray-400">
              [ 🍩 Pie Chart Placeholder ]
            </div>
            <ul className="text-sm text-gray-300 space-y-1">
              {topStations.map((station, i) => (
                <li key={i}>
                  {station.name}: <span className="text-white font-semibold">{station.percent}%</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Top Songs Played */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Music2 className="text-yellow-400" /> Top Songs Played
          </h2>
          <ul className="divide-y divide-white/10">
            {topSongs.map((song, i) => (
              <li key={i} className="py-3 flex justify-between text-sm text-gray-200">
                <span>{i + 1}. {song.title}</span>
                <span className="text-indigo-300">{song.plays} plays</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Mobile/Streaming Analytics */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Smartphone className="text-teal-300" /> Streaming Plays (Coming Soon)
          </h2>
          <div className="text-sm text-gray-400">
            Fan streaming stats will be available soon when integration with Apple Music and Boomplay is live.
          </div>
        </section>


      </div>
    </div>
  );
};

export default ArtistAnalyticsPage;
