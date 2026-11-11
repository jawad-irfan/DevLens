const navigation = [
  { icon: "▦", label: "Overview" },
  { icon: "⚠", label: "Error" },
  { icon: "⌁", label: "Performance" },
  { icon: "◷", label: "Activity" },
]

function Sidebar() {
  return (
    <aside className="w-full border-b border-slate-800 bg-[#0b1220] p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="mb-8 flex items-center gap-3">
        <div className=" flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
          D
        </div>

        <div>
          <h1 className="text-xl font-bold text-white">DevLens</h1>
          <p className="text-xs text-slate-400">Monitoring Platform</p>
        </div>
      </div>

      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
        workspace
      </p>

      <nav className="flex flex-wrap gap-2 md:flex-col">
        {navigation.map((item, index) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm ${index === 0
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-4">
        <p className="text-sm font-semibold text-white">Project Status</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span className="text-sm text-slate-300">Dashboard online</span>
        </div>
      </div>
    </aside>
  )
}

function Header() {
  return (
    <header className="flex flex-col justify-between gap-4 border-b border-slate-800 bg-[#0b1220] px-6 py-5 sm:flex-row sm:items-center">
      <div>
        <p className="text-sm text-slate-400">Workspace / Overview</p>
        <h2 className="mt-1 text-2xl font-bold text-white">Dashboard</h2>
      </div>

      <div className="flex items-center gap-3">
        <span className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300">
          Development
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          J
        </div>
      </div>
    </header>
  )
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
  )
}

function OverviewCards() {
    const cards = [
        { title: 'Total Errors', value: '128', note: 'Sample data', icon: '⚠' },
        { title: 'Failed Requests', value: '24', note: 'Sample data', icon: '↗' },
        { title: 'Response Time', value: '245 ms', note: 'Sample data', icon: '◷' },
        { title: 'Application Health', value: 'Healthy', note: 'Demo status', icon: '✓' },
    ]

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
  )
}

function ErrorMonitoring() {
 const errors = [
 {
 id: 1,
 type: 'API Error',
 message: 'Failed to fetch products',
 endpoint: '/api/products',
 status: '500',
 severity: 'High',
 time: '10:42 AM',
 },
 {
 id: 2,
 type: 'Network Error',
 message: 'Request timed out',
 endpoint: '/api/orders',
 status: '408',
 severity: 'Medium',
 time: '10:38 AM',
 },
 {
 id: 3,
 type: 'Application Error',
 message: 'Invalid product data',
 endpoint: '/api/product/12',
 status: '400',
 severity: 'Low',
 time: '10:31 AM',
 },
 {
 id: 4,
 type: 'API Error',
 message: 'Unable to load user profile',
 endpoint: '/api/profile',
 status: '503',
 severity: 'High',
 time: '10:25 AM',
 },
 ]
 return (
 <section className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-[#0b1220]">
 <div className="flex flex-col gap-2 border-b border-slate-800 p-5 sm:flex-row sm:items-center
sm:justify-between">
 <div>
 <h3 className="text-lg font-semibold text-white">
 Recent Errors
 </h3>
 <p className="mt-1 text-sm text-slate-400">
 Example application error records
 </p>
 </div>
 <span className="w-fit rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">
DevLens — CIT-362 | Two-Day Development Plan Page 7
 4 Demo Events
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
 {errors.map((error) => (
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
 error.severity === 'High'
 ? 'bg-red-500/10 text-red-400'
 : error.severity === 'Medium'
 ? 'bg-amber-500/10 text-amber-400'
 : 'bg-blue-500/10 text-blue-400'
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
 )
}

function PerformanceMonitoring() {
 const metrics = [
 {
 label: 'Average Response Time',
 value: '245 ms',
 description: 'Example latency measurement',
 width: 'w-2/3',
 color: 'bg-blue-500',
 },
 {
 label: 'API Success Rate',
 value: '96.8%',
 description: 'Example successful requests',
 width: 'w-[96.8%]',
 color: 'bg-emerald-500',
 },
 {
 label: 'Server Load',
 value: '68%',
 description: 'Example resource utilization',
 width: 'w-[68%]',
 color: 'bg-violet-500',
 },
 ]
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
 <p className="mt-3 text-xs text-slate-500">
 {metric.description}
 </p>
 </article>
 ))}
 </div>
 </section>
 )
}


function App() {
  return (
    <div className="min-h-screen bg-[#080d1a] text-white md:flex">
 <Sidebar />
 <main className="min-w-0 flex-1">
 <Header />
 <div className="p-5 md:p-8">
 <WelcomeSection />
 <OverviewCards />
 <ErrorMonitoring />
 <PerformanceMonitoring />
 </div>
 </main>
 </div>
  )
}
export default App;
