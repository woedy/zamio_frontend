import { MapPin, User, Calendar, Clock, BarChart3 } from "lucide-react";





export default function TrackDetails() {

  const track = {
    title: "Freedom Ride",
    artist: "Amaarae",
    genre: "Afrofusion",
    duration: "3:45",
    releaseDate: "2023-10-01",
    plays: 312,
    cover: "/covers/freedom.jpg",
    contributors: [
      { role: "Producer", name: "Juls" },
      { role: "Featured", name: "Kwesi Arthur" },
    ],
    topStations: [
      { name: "YFM Accra", count: 102 },
      { name: "JOY FM", count: 89 },
      { name: "Empire FM", count: 46 },
    ],
    playLogs: [
      { time: "2025-07-11T08:45", station: "JOY FM", region: "Greater Accra" },
      { time: "2025-07-11T14:22", station: "YFM", region: "Greater Accra" },
      { time: "2025-07-10T19:33", station: "Empire FM", region: "Western" },
    ],
  };
  


  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex items-start gap-6">
          <img
            src={track.cover}
            alt={track.title}
            className="w-40 h-40 object-cover rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold">{track.title}</h1>
            <p className="text-sm text-white/70">{track.artist}</p>
            <div className="mt-3 flex gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <Clock size={16} /> {track.duration}
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} /> {track.releaseDate}
              </div>
              <div className="flex items-center gap-1">
                <BarChart3 size={16} /> {track.plays} plays
              </div>
            </div>
            <div className="mt-4">
              <span className="px-2 py-1 text-xs bg-indigo-600 rounded-full">
                {track.genre}
              </span>
            </div>
          </div>
        </div>

        {/* Contributors */}
        <div className="bg-slate-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">👥 Contributors</h2>
          <ul className="space-y-1 text-sm text-white/90">
            {track.contributors.map((c, i) => (
              <li key={i}>
                <strong>{c.role}:</strong> {c.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Airplay Map & Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mini Region Map */}
          <div className="bg-slate-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">📍 Airplay Map (by Region)</h2>
            <div className="text-sm text-white/70 h-40 flex items-center justify-center bg-slate-700 rounded">
              [Interactive Ghana Region Map]
            </div>
          </div>

          {/* Plays Chart */}
          <div className="bg-slate-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">📈 Plays Over Time</h2>
            <div className="h-40 bg-slate-700 rounded flex items-center justify-center text-sm text-white/70">
              [Line/Bar Chart Placeholder]
            </div>
          </div>
        </div>

        {/* Top Stations */}
        <div className="bg-slate-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">🏆 Top Stations</h2>
          <ul className="space-y-2">
            {track.topStations.map((s, i) => (
              <li key={i} className="flex justify-between text-sm">
                <span>{s.name}</span>
                <span className="text-white/60">{s.count} plays</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Play Logs */}
        <div className="bg-slate-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">📜 Play Logs</h2>
          <div className="divide-y divide-white/10 text-sm">
            {track.playLogs.map((log, i) => (
              <div key={i} className="py-2 flex justify-between">
                <div>
                  {new Date(log.time).toLocaleString()} –{" "}
                  <span className="font-medium">{log.station}</span>
                </div>
                <div className="text-white/60 flex items-center gap-1">
                  <MapPin size={14} /> {log.region}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
