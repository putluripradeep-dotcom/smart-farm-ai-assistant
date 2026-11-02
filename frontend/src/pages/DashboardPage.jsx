const demoStats = [
  { label: 'Total Crops', value: 12 },
  { label: 'Active Fields', value: 5 },
  { label: 'Alerts', value: 3 },
  { label: 'Revenue', value: '₹84,000' }
];

const tasks = [
  'Irrigation check — 08:00 AM',
  'Fertilizer application — Corn field',
  'Monitor pest activity — 2 PM',
  'Weather forecast review — 6 PM'
];

export default function DashboardPage() {
  const user = JSON.parse(localStorage.getItem('smartFarmUser') || '{"name":"Demo Farmer"}');

  return (
    <div>
      <div className="hero">
        <h1>Welcome, {user.name}</h1>
        <p>Smart farming dashboard for field monitoring, weather planning, crop health, and resource tracking.</p>
      </div>

      <div className="grid grid-4" style={{ marginBottom: '1.5rem' }}>
        {demoStats.map((item) => (
          <div key={item.label} className="metric">
            <h4>{item.label}</h4>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Crop Calendar</h3>
          <ul className="list">
            <li>Rice planting window: Jun 15 – Jun 30</li>
            <li>Tomato bloom check: Jul 05</li>
            <li>Maize harvest forecast: Aug 18</li>
            <li>Pesticide reminder: Every 14 days</li>
          </ul>
        </div>

        <div className="card">
          <h3>Today&apos;s Tasks</h3>
          <ul className="list">
            {tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
