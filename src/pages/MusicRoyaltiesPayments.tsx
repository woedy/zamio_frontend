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

 

  return (
   

    <div className="flex-1 flex flex-col">
      

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
  );
}