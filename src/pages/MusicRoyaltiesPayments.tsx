import { useState } from "react";
import { Search, Bell, Settings, User, HelpCircle, MessageSquare, Upload, Clock, CreditCard, Download } from "lucide-react";

export default function MusicRoyaltiesPayments() {
  const [activeTab, setActiveTab] = useState("Payments");
  
  // Sample payment data
  const payments = [
    { id: "PAY-ER453R-TR", period: "Apr 05 - May 05", amount: "Ghc 3,500", duration: "1hr 34min", status: "Pending", report: "Download PDF" },
    { id: "PAY-ER453R-TR", period: "Apr 05 - May 05", amount: "Ghc 3,500", duration: "1hr 34min", status: "Paid", report: "Download PDF" },
    { id: "PAY-ER453R-TR", period: "Apr 05 - May 05", amount: "Ghc 3,500", duration: "1hr 34min", status: "Paid", report: "Download PDF" },
    { id: "PAY-ER453R-TR", period: "Apr 05 - May 05", amount: "Ghc 3,500", duration: "1hr 34min", status: "Paid", report: "Download PDF" },
    { id: "PAY-ER453R-TR", period: "Apr 05 - May 05", amount: "Ghc 3,500", duration: "1hr 34min", status: "Paid", report: "Download PDF" },
    { id: "PAY-ER453R-TR", period: "Apr 05 - May 05", amount: "Ghc 3,500", duration: "1hr 34min", status: "Paid", report: "Download PDF" }
  ];

  const navigationItems = [
    { name: "Dashboard", icon: <Settings className="w-5 h-5" /> },
    { name: "Play History", icon: <Clock className="w-5 h-5" /> },
    { name: "Upload/Management", icon: <Upload className="w-5 h-5" /> },
    { name: "Payments", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Notifications", icon: <Bell className="w-5 h-5" /> },
    { name: "Help and Support", icon: <HelpCircle className="w-5 h-5" /> },
    { name: "Feedback/Reviews", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Profile", icon: <User className="w-5 h-5" /> },
    { name: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-primary text-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-indigo-900 flex flex-col">
        <div className="p-6 mb-6">
          <h1 className="text-3xl font-bold">ZamIO</h1>
        </div>
        <nav className="flex-1">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.name}>
                <button
                  className={`flex items-center w-full px-6 py-3 hover:bg-indigo-900 transition-colors ${
                    activeTab === item.name ? "bg-indigo-900 font-semibold" : ""
                  }`}
                  onClick={() => setActiveTab(item.name)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between p-6 border-b border-indigo-900">
          <h2 className="text-2xl font-semibold">Payments</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-indigo-900/50 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-indigo-900">
              <Bell className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white overflow-hidden mr-2">
                <img
                  src="/api/placeholder/40/40"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">Cynthia Doe</p>
                <p className="text-xs text-gray-400">Artist</p>
              </div>
            </div>
          </div>
        </header>

        {/* Payments Content */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Payments</h3>
            <button className="px-6 py-2 bg-indigo-900 rounded-full hover:bg-indigo-800 transition">
              Cash Out
            </button>
          </div>

          {/* Payments Table */}
          <div className="bg-indigo-950">
            <table className="w-full">
              <thead>
                <tr className="border-b border-indigo-800">
                  <th className="text-left py-4 px-4 font-medium">Payment ID</th>
                  <th className="text-left py-4 px-4 font-medium">Payment Period</th>
                  <th className="text-left py-4 px-4 font-medium">Amount</th>
                  <th className="text-left py-4 px-4 font-medium">Play Duration</th>
                  <th className="text-left py-4 px-4 font-medium">Status</th>
                  <th className="text-left py-4 px-4 font-medium">Reports</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-indigo-800 hover:bg-indigo-900/20"
                  >
                    <td className="py-4 px-4">{payment.id}</td>
                    <td className="py-4 px-4">{payment.period}</td>
                    <td className="py-4 px-4">{payment.amount}</td>
                    <td className="py-4 px-4">{payment.duration}</td>
                    <td className="py-4 px-4">
                      <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                        payment.status === "Paid" 
                          ? "bg-green" 
                          : "bg-gray text-gray-800"
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="flex items-center text-gray-300 hover:text-white">
                        <Download className="w-4 h-4 mr-1" />
                        {payment.report}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}