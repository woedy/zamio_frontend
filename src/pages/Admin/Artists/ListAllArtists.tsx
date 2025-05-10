import { useState } from "react";
import { Search, UserPlus, Music } from "lucide-react"; // Added relevant icons
import { Link } from "react-router-dom";

export default function AllArtists() {
  const [artists, setArtists] = useState([
    { id: "ART-GH001", name: "Sarkodie", genre: "Hiplife", totalEarnings: "Ghc 55,750", registrationDate: "2023-08-15" },
    { id: "ART-GH002", name: "Stonebwoy", genre: "Afrobeat, Dancehall", totalEarnings: "Ghc 48,200", registrationDate: "2023-11-20" },
    { id: "ART-GH003", name: "Diana Hamilton", genre: "Gospel", totalEarnings: "Ghc 62,100", registrationDate: "2024-01-10" },
    { id: "ART-GH004", name: "Kuami Eugene", genre: "Afro-pop, Highlife", totalEarnings: "Ghc 51,500", registrationDate: "2024-03-01" },
    { id: "ART-GH005", name: "Wendy Shay", genre: "Afro-pop", totalEarnings: "Ghc 45,900", registrationDate: "2024-05-25" },
    // Add more artist data here
  ]);

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex justify-between items-center p-6">
        <h3 className="text-xl font-semibold">All Artists</h3>
        <Link to="/add-artist">

        <button className="flex items-center px-4 py-2 bg-indigo-900 rounded-full hover:bg-indigo-800 transition">
          <UserPlus className="w-4 h-4 mr-2" /> Add New Artist
        </button>
        </Link>
      </div>

      {/* Artists Table */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="bg-indigo-950 rounded-md shadow-md">
          <table className="w-full">
            <thead>
              <tr className="border-b border-indigo-800">
                <th className="text-left py-3 px-4 font-medium">Artist ID</th>
                <th className="text-left py-3 px-4 font-medium">Name</th>
                <th className="text-left py-3 px-4 font-medium">Genre</th>
                <th className="text-left py-3 px-4 font-medium">Total Earnings</th>
                <th className="text-left py-3 px-4 font-medium">Registration Date</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist, index) => (

               
                     <tr
                  key={index}
                  className="border-b border-indigo-800 hover:bg-indigo-900/20"
                >
                  <td className="py-3 px-4">{artist.id}</td>
                  <td className="py-3 px-4">{artist.name}</td>
                  <td className="py-3 px-4">{artist.genre}</td>
                  <td className="py-3 px-4">{artist.totalEarnings}</td>
                  <td className="py-3 px-4">{artist.registrationDate}</td>
                  <td className="py-3 px-4">
                    {/* Add action buttons here, e.g., View Profile, Edit */}
                    <Link to="/artist-details">
                    <button className="text-gray-300 hover:text-white mr-2">
                      View
                    </button>
                    </Link>
                    <button className="text-gray-300 hover:text-white">
                      Edit
                    </button>
                  </td>
                </tr>
               
           
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}