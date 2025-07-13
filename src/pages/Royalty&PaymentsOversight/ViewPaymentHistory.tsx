import { Wallet, ArrowDownToLine, Info, Banknote, BarChart3, CalendarCheck } from "lucide-react";

const wallet = {
    total: 845.50,
    sources: {
      radio: 460.00,
      streaming: 255.50,
      distro: 130.00,
    },
    royaltyRates: {
      radio: "GHS 1.20 per spin",
      streaming: "GHS 0.005 per stream",
    },
    history: [
      { date: "2025-06-30", amount: 300, method: "MTN MoMo", status: "Paid" },
      { date: "2025-05-28", amount: 450, method: "MTN MoMo", status: "Paid" },
    ],
  };
  
export default function RoyaltyDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Wallet Overview */}
        <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 p-6 rounded-lg shadow-md text-white">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Wallet size={20} /> Wallet Balance
          </h2>
          <p className="text-4xl font-semibold mt-2">GHS {wallet.total.toFixed(2)}</p>
          <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
            <div>📻 Radio: <span className="font-medium">GHS {wallet.sources.radio.toFixed(2)}</span></div>
            <div>🎧 Streaming: <span className="font-medium">GHS {wallet.sources.streaming.toFixed(2)}</span></div>
            <div>🌍 Distro: <span className="font-medium">GHS {wallet.sources.distro.toFixed(2)}</span></div>
          </div>
        </div>

        {/* Royalty Breakdown */}
        <div className="bg-slate-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <BarChart3 size={18} /> Royalty Breakdown
            </h2>
            <button className="text-sm bg-slate-700 px-3 py-1 rounded hover:bg-slate-600">Switch to Table</button>
          </div>
          <div className="bg-slate-700 h-40 flex items-center justify-center text-white/60 rounded">
            [Chart showing earnings by song or source over time]
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <CalendarCheck size={18} /> Payment History
          </h2>
          <table className="w-full text-sm">
            <thead className="text-white/60">
              <tr>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Amount</th>
                <th className="text-left py-2">Method</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {wallet.history.map((tx, i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="py-2">{tx.date}</td>
                  <td>GHS {tx.amount.toFixed(2)}</td>
                  <td>{tx.method}</td>
                  <td className="text-green-400">{tx.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MoMo Withdrawal */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <ArrowDownToLine size={18} /> Request Withdrawal
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Mobile Money Number</label>
              <input type="text" className="w-full p-2 bg-slate-700 rounded" placeholder="e.g. 024XXXXXXX" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Amount to Withdraw</label>
              <input type="number" className="w-full p-2 bg-slate-700 rounded" placeholder="e.g. 100" />
              <p className="text-xs text-white/60 mt-1">Min withdrawal: GHS 50</p>
            </div>
            <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-500 text-sm font-semibold">
              Request Payout
            </button>
          </form>
        </div>

        {/* Royalty Rates Info */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Info size={18} /> Royalty Rate Information
          </h2>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              📻 Radio Play: <span className="font-medium">{wallet.royaltyRates.radio}</span>
            </li>
            <li>
              🎧 Streaming Play: <span className="font-medium">{wallet.royaltyRates.streaming}</span>
            </li>
            <li className="text-white/60 text-xs">
              * Rates may vary by platform and region. Data based on verified sources.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
