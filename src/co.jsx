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