'use client';

export default function DashboardPage() {
  const invoices = [
    { id: 12, name: "Thomas Lynda", date: "2024-04-01", due: "2024-04-07", total: "$629.00", balance: "$629.00", status: "Draft" },
    { id: 13, name: "Jason Jonal", date: "2024-04-02", due: "2024-04-08", total: "$629.00", balance: "$0.00", status: "Paid" },
    { id: 14, name: "Michael Stokes", date: "2024-04-03", due: "2024-04-09", total: "$629.00", balance: "$375.00", status: "Partial" },
  ];

  const menuItems = ["Dashboard", "Transactions", "Results", "Setting", "Etc"];

  return (
    <main className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-mint shadow p-6 space-y-4">
        <h1 className="text-2xl font-bold text-green">Hello</h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item}
              className={`text-sm px-3 py-2 rounded cursor-pointer hover:bg-green ${
                item === 'Invoices' ? 'font-semibold text-indigo-600' : 'text-gray-700'
              }`}
            >
              {item}
            </div>
          ))}
        </nav>

      </aside>

      {/* Main */}
      <section className="flex-1 bg-white p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          
        </div>

        {/* Welcome */}
        <div className="flex justify-between items-center mb-6 p-4 h-40 rounded-lg overflow-hidden">
  <img src="/banner.png" alt="Logo" className="w-full h-full object-cover block" />
</div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded shadow mb-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Begin Date</label>
            <input type="date" className="w-full border rounded px-2 py-1" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">End Date</label>
            <input type="date" className="w-full border rounded px-2 py-1" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Status</label>
            <select className="w-full border rounded px-2 py-1">
              <option>Any</option>
              <option>Paid</option>
              <option>Partial</option>
              <option>Draft</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Client</label>
            <input type="text" placeholder="Any" className="w-full border rounded px-2 py-1" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto bg-white rounded shadow">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 text-left">Invoice</th>
                <th className="p-3 text-left">Client name</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Due date</th>
                <th className="p-3 text-left">Total</th>
                <th className="p-3 text-left">Balance</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id} className="border-t">
                  <td className="p-3">{inv.id}</td>
                  <td className="p-3">{inv.name}</td>
                  <td className="p-3">{inv.date}</td>
                  <td className="p-3">{inv.due}</td>
                  <td className="p-3">{inv.total}</td>
                  <td className="p-3">{inv.balance}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      inv.status === 'Paid'
                        ? 'bg-green-100 text-green-700'
                        : inv.status === 'Draft'
                        ? 'bg-red-100 text-red-600'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
