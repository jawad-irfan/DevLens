import { useState } from "react";
const navigation = [
  { icon: "▦", label: "Overview" },
  { icon: "⚠", label: "Error" },
  { icon: "⌁", label: "Performance" },
  { icon: "◷", label: "Activity" },
];

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="w-full border-b border-slate-800 bg-[#0b1220] p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <h1 className="mb-8 text-xl font-bold text-white">DevLens</h1>

      <p className="mb-3 text-xs uppercase text-slate-500">Workspace</p>

      <nav className="flex flex-wrap gap-2 md:flex-col">
        {navigation.map((item) => (
          <button
            key={item.label}
            onClick={() => setActivePage(item.label)}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm ${
              activePage === item.label
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:bg-slate-800"
            }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      
<div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-4">
  <p className="text-sm font-semibold text-white">
    Project Status
  </p>

  <div className="mt-3 flex items-center gap-2">
    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
    <span className="text-sm text-slate-300">
      Dashboard Online
    </span>
  </div>
</div>

    </aside>
  );
}

function Header({ activePage }) {
  return (
    <header className="flex flex-col justify-between gap-4 border-b border-slate-800 bg-[#0b1220] px-6 py-5 sm:flex-row sm:items-center">
      <div>
        <p className="text-sm text-slate-400">Workspace / {activePage}</p>

        <h2 className="mt-1 text-2xl font-bold text-white">
          {activePage === "Overview" ? "Dashboard" : activePage}
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <span className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300">
          Development
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          J
        </div>
      </div>

<button
  onClick={() => window.location.reload()}
  className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
>
  ↻ Refresh
</button>

    </header>
  );
}

function WelcomeSection() {
  return (
    <section className="mb-8 rounded-2xl border border-blue-900/60 bg-gradient-to-r from-blue-950 to-slate-900 p-6 md:p-8">
      <p className="text-sm font-medium text-blue-400">
        APPLICATION MONITORING
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
        Welcome to DevLens
      </h3>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
        Monitor application health, understand errors, and investigate
        performance issues from one centralized dashboard.
      </p>

      <button className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
        Explore Dashboard
      </button>
    </section>
  );
}

function OverviewCards() {
  const cards = [
    { title: "Total Errors", value: "128", note: "Sample data", icon: "⚠" },
    { title: "Failed Requests", value: "24", note: "Sample data", icon: "↗" },
    { title: "Response Time", value: "245 ms", note: "Sample data", icon: "◷" },
    {
      title: "Application Health",
      value: "Healthy",
      note: "Demo status",
      icon: "✓",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <article
          key={card.title}
          className="rounded-xl border border-slate-800 bg-[#0b1220] p-5"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">{card.title}</p>
            <span className="text-xl text-blue-400">{card.icon}</span>
          </div>

          <h4 className="mt-4 text-2xl font-bold text-white">{card.value}</h4>

          <p className="mt-2 text-xs text-slate-500">{card.note}</p>
        </article>
      ))}
    </section>
  );
}

function ErrorMonitoring() {
  const errors = [
    {
      id: 1,
      type: "API Error",
      message: "Failed to fetch products",
      endpoint: "/api/products",
      status: "500",
      severity: "High",
      time: "10:42 AM",
    },
    {
      id: 2,
      type: "Network Error",
      message: "Request timed out",
      endpoint: "/api/orders",
      status: "408",
      severity: "Medium",
      time: "10:38 AM",
    },
    {
      id: 3,
      type: "Application Error",
      message: "Invalid product data",
      endpoint: "/api/product/12",
      status: "400",
      severity: "Low",
      time: "10:31 AM",
    },
    {
      id: 4,
      type: "API Error",
      message: "Unable to load user profile",
      endpoint: "/api/profile",
      status: "503",
      severity: "High",
      time: "10:25 AM",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredErrors = errors.filter(
    (error) =>
      error.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      error.endpoint.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const [severityFilter, setSeverityFilter] = useState("All");

  const displayedErrors = filteredErrors.filter(
    (error) => severityFilter === "All" || error.severity === severityFilter,
  );

  return (
    <section className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-[#0b1220]">
      <div className="border-b border-slate-800 p-5">
        <input
          type="text"
          placeholder="Search errors or endpoints..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
        />

        <select
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value)}
          className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white sm:w-48"
        >
          <option value="All">All Severities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

<button
  onClick={() => {
    setSearchTerm('');
    setSeverityFilter('All');
  }}
  className="mt-3 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
>
  Clear Filters
</button>

<p className="mt-4 text-sm text-slate-400">
  Showing <span className="font-semibold text-blue-400">
    {displayedErrors.length}
  </span> errors
</p>

      </div>

      <div
        className="flex flex-col gap-2 border-b border-slate-800 p-5 sm:flex-row sm:items-center
sm:justify-between"
      >
        <div>
          <h3 className="text-lg font-semibold text-white">Recent Errors</h3>
          <p className="mt-1 text-sm text-slate-400">
            Example application error records
          </p>
        </div>
        <span className="w-fit rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">
          DevLens — CIT-392 | Two-Day Development Plan Page 7 4 Demo Events
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-slate-900/70 text-slate-400">
            <tr>
              <th className="px-5 py-4 font-medium">Error</th>
              <th className="px-5 py-4 font-medium">Endpoint</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium">Severity</th>
              <th className="px-5 py-4 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {displayedErrors.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="px-5 py-8 text-center text-slate-400"
                >
                  No errors found. Try another search.
                </td>
              </tr>
            )}

            {displayedErrors.map((error) => (
              <tr
                key={error.id}
                className="border-t border-slate-800 transition hover:bg-slate-900/60"
              >
                <td className="px-5 py-4">
                  <p className="font-medium text-white">{error.message}</p>
                  <p className="mt-1 text-xs text-slate-500">{error.type}</p>
                </td>
                <td className="px-5 py-4 font-mono text-xs text-slate-300">
                  {error.endpoint}
                </td>
                <td className="px-5 py-4 text-slate-300">{error.status}</td>
                <td className="px-5 py-4">
                  <span
                    className={`rounded-md px-2 py-1 text-xs font-medium ${
                      error.severity === "High"
                        ? "bg-red-500/10 text-red-400"
                        : error.severity === "Medium"
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-blue-500/10 text-blue-400"
                    }`}
                  >
                    {error.severity}
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-400">{error.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function PerformanceMonitoring() {

const [timeRange, setTimeRange] = useState('24 Hours');

const performanceData = {
  '1 Hour': ['120 ms', '98.5%', '45%'],
  '24 Hours': ['245 ms', '96.8%', '68%'],
  '7 Days': ['310 ms', '94.2%', '72%'],
  '30 Days': ['280 ms', '95.5%', '60%'],
};

const currentData = performanceData[timeRange];


  const metrics = [
    {
      label: "Average Response Time",
      value: currentData[0],
      description: "Example latency measurement",
      width: timeRange === '1 Hour' ? 'w-1/3' : timeRange === '24 Hours' ? 'w-2/3' : timeRange === '7 Days' ? 'w-4/5' : 'w-3/4',
      color: "bg-blue-500",
    },
    {
      label: "API Success Rate",
      value: currentData[1],
      description: "Example successful requests",
      width: timeRange === '1 Hour' ? 'w-[98.5%]' : timeRange === '24 Hours' ? 'w-[96.8%]' : timeRange === '7 Days' ? 'w-[94.2%]' : 'w-[95.5%]',
      color: "bg-emerald-500",
    },
    {
      label: "Server Load",
      value: currentData[2],
      description: "Example resource utilization",
      width: timeRange === '1 Hour' ? 'w-[45%]' : timeRange === '24 Hours' ? 'w-[68%]' : timeRange === '7 Days' ? 'w-[72%]' : 'w-[60%]',
      color: "bg-violet-500",
    },
  ];
  return (
    <section className="mt-6 rounded-xl border border-slate-800 bg-[#0b1220] p-5 md:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">
          Performance Overview
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          Illustrative metrics for the dashboard prototype
        </p>
      </div>

<select
  value={timeRange}
  onChange={(e) => setTimeRange(e.target.value)}
  className="mb-6 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white"
>
  <option value="1 Hour">Last 1 Hour</option>
  <option value="24 Hours">Last 24 Hours</option>
  <option value="7 Days">Last 7 Days</option>
  <option value="30 Days">Last 30 Days</option>
</select>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <p className="text-sm text-slate-400">{metric.label}</p>
            <h4 className="mt-3 text-2xl font-bold text-white">
              {metric.value}
            </h4>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full rounded-full ${metric.width} ${metric.color}`}
              ></div>
            </div>
            <p className="mt-3 text-xs text-slate-500">{metric.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ActivityMonitoring() {
  const activities = [
    { event: "Application started", time: "10:45 AM", status: "Success" },
    { event: "API request completed", time: "10:42 AM", status: "Success" },
    {
      event: "Database connection established",
      time: "10:40 AM",
      status: "Success",
    },
    { event: "API request failed", time: "10:38 AM", status: "Warning" },
  ];

  return (
    <section className="mt-6 rounded-xl border border-slate-800 bg-[#0b1220] p-5">
      <h3 className="text-lg font-semibold text-white">Recent Activity</h3>

      <p className="mt-1 text-sm text-slate-400">Latest application events</p>

      <div className="mt-5 space-y-4">
        {activities.map((item) => (
          <div
            key={item.event}
            className="flex flex-col justify-between gap-2 border-b border-slate-800 pb-4 sm:flex-row sm:items-center"
          >
            <div>
              <p className="text-sm font-medium text-white">{item.event}</p>
              <p className="mt-1 text-xs text-slate-500">{item.time}</p>
            </div>

            <span
              className={`w-fit rounded-md px-3 py-1 text-xs ${
                item.status === "Success"
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-amber-500/10 text-amber-400"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [activePage, setActivePage] = useState("Overview");

  return (
    <div className="min-h-screen bg-[#080d1a] text-white md:flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="min-w-0 flex-1">
        <Header activePage={activePage} />

        <div className="p-5 md:p-8">
          {activePage === "Overview" && (
            <>
              <WelcomeSection />
              <OverviewCards />
              <ErrorMonitoring />
              <PerformanceMonitoring />
              <ActivityMonitoring />
            </>
          )}

          {activePage === "Errors" && <ErrorMonitoring />}

          {activePage === "Performance" && <PerformanceMonitoring />}

          {activePage === "Activity" && <ActivityMonitoring />}
        </div>
      </main>
    </div>
  );
}
export default App;
