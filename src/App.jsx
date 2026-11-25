import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Monitor,
  ChartNoAxesCombined,
  TriangleAlert,
  Clock3,
  FileText,
  Sparkles,
  Settings,
  CalendarDays,
  Bell,
  CircleCheck,
  Plus,
  CirclePlay,
  Eye,
} from "lucide-react";

const Icon = ({ name, size = 20 }) => {
  const icons = {
    grid: LayoutDashboard,
    apps: Monitor,
    events: ChartNoAxesCombined,
    warning: TriangleAlert,
    clock: Clock3,
    logs: FileText,
    spark: Sparkles,
    settings: Settings,
    calendar: CalendarDays,
    bell: Bell,
    check: CircleCheck,
    plus: Plus,
    play: CirclePlay,
  };

  const LucideIcon = icons[name];

  return LucideIcon ? (
    <LucideIcon
      size={size}
      strokeWidth={1.8}
      aria-hidden="true"
    />
  ) : null;
};

function Logo() {
  return (
    <div className="brand">
      <div className="brand-mark">
        <Eye />
      </div>
      <div>
        <strong>DevLens</strong>
        <span>Monitor · Analyze · Debug</span>
      </div>
    </div>
  );
}

const Counter = ({ value }) => {
  const match = String(value).match(/^([\d,]+(?:\.\d+)?)\s*(.*)$/);
  const target = Number((match?.[1] || value).replace(/,/g, ""));
  const rawSuffix = match?.[2] || "";
  const suffix =
    rawSuffix === "ms"
      ? " ms"
      : rawSuffix === "%"
        ? "%"
        : rawSuffix
          ? ` ${rawSuffix}`
          : "";
  const decimals = String(match?.[1] || "").includes(".") ? 2 : 0;
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frame;
    const animate = (now) => {
      const progress = Math.min((now - start) / 1000, 1);
      setNumber(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  const shown =
    target >= 1000
      ? Math.round(number).toLocaleString()
      : number.toFixed(decimals);
  return (
    <>
      {shown}
      {suffix}
    </>
  );
};

function MetricCard({ label, value, change, tone, icon }) {
  return (
    <article className={`metric-card ${tone}`}>
      <div className="metric-card-head">
        <span>{label}</span>
        <div className="metric-icon">
          <Icon name={icon} size={21} />
        </div>
      </div>
      <div className="metric-value">
        <Counter value={value} />
      </div>
      <div className="metric-change">
        <strong>{change}</strong>
        <span>vs. previous 24h</span>
      </div>
    </article>
  );
}

function Sidebar({ active, setActive }) {
const items = [
  ["grid", "Dashboard"],
  ["apps", "Applications"],
  ["events", "Performance"],
  ["warning", "Errors"],
  ["logs", "Logs"],
  ["spark", "AI Insights"],
  ["settings", "Settings"],
];
  return (
    <aside className="sidebar">
      <Logo />
      <nav>
        {items.map(([icon, label]) => (
          <button
            key={label}
            data-tooltip={label}
            className={`nav-item ${active === label ? "active" : ""}`}
            onClick={() => setActive(label)}
          >
            <Icon name={icon} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-promo">
        <div className="promo-icon">
          <Icon name="play" size={18} />
        </div>
        <strong>
          Keep your apps
          <br />
          running smoothly
        </strong>
        <p>
          Detect issues early, debug faster,
          <br />
          ship with confidence.
        </p>
      </div>
      <footer>DevLens </footer>
    </aside>
  );
}

function Topbar({ active }) {
  return (
    <header className="topbar">
      <div>
        <h1>{active}</h1>
        <p>Real-time overview of your application performance and errors.</p>
      </div>
      <div className="top-actions">
        <button className="range-button">
          <Icon name="calendar" size={17} />
          <span>Last 24 hours</span>
        </button>
        <button className="notification" aria-label="Notifications">
          <Icon name="bell" size={18} />
          <i />
        </button>
        <div className="profile">
          <div className="avatar">JI</div>
          <strong>Jawad Irfan</strong>
        </div>
      </div>
    </header>
  );
}

function TrendChart() {
  const blue =
    "M45 145 C85 128 105 122 135 145 C175 170 190 105 225 90 C260 74 278 125 315 118 C350 112 370 95 410 108 C445 120 462 145 505 130 C545 118 566 150 605 150 C645 148 660 80 695 95 C730 112 745 105 785 62";
  const red =
    "M45 183 C95 190 115 177 150 181 C190 187 210 181 245 184 C285 188 310 178 350 181 C390 176 425 183 465 178 C505 173 530 186 565 181 C600 170 625 140 645 118 C665 96 680 125 705 184 C725 195 745 188 785 190";
  return (
    <section className="glass chart-panel">
      <div className="panel-heading">
        <h2>Errors &amp; Response Time Trend</h2>
        <div className="legend">
          <span>
            <i className="red-dot" />
            Errors
          </span>
          <span>
            <i className="blue-dot" />
            Response Time (ms)
          </span>
        </div>
      </div>
      <div className="chart-wrap">
        <svg viewBox="0 0 800 210" preserveAspectRatio="none">
          <g className="grid-lines">
            {[35, 75, 115, 155, 195].map((y) => (
              <line key={y} x1="45" y1={y} x2="785" y2={y} />
            ))}
          </g>
          <defs>
            <linearGradient id="chartBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#4d8cff" stopOpacity=".28" />
              <stop offset="1" stopColor="#4d8cff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${blue} L785 195 L45 195Z`} fill="url(#chartBlue)" />
          <path className="blue-line" d={blue} />
          <path className="red-line" d={red} />
        </svg>
        <div className="chart-axis">
          {[
            "12 AM",
            "3 AM",
            "6 AM",
            "9 AM",
            "12 PM",
            "3 PM",
            "6 PM",
            "9 PM",
          ].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TopErrors() {
  const rows = [
    ["500", "Internal Server Error", "16", "38.3%", "red"],
    ["404", "Not Found", "11", "23.4%", "orange"],
    ["401", "Unauthorized", "7", "14.9%", "blue"],
    ["429", "Request Timeout", "5", "12.8%", "purple"],
    ["400", "Bad Request", "5", "10.6%", "teal"],
  ];
  return (
    <section className="glass data-panel">
      <div className="panel-heading">
        <h2>Top Errors</h2>
        <button>View All</button>
      </div>
      <table className="error-table">
        <thead>
          <tr>
            <th>Error</th>
            <th>Count</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[1]}>
              <td>
                <span className={`code-badge ${r[4]}`}>{r[0]}</span>
                {r[1]}
              </td>
              <td>{r[2]}</td>
              <td>{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function RecentEvents() {
  const rows = [
    ["red", "!", "Internal Server Error", "/api/products", "2 mins"],
    ["orange", "!", "Not Found", "/images/logo.png", "8 mins"],
    ["blue", "i", "Request completed (200)", "/api/users", "12 mins"],
    ["purple", "i", "Timeout", "/api/orders", "18 mins"],
    ["teal", "i", "Request completed (200)", "/api/products", "25 mins"],
  ];
  return (
    <section className="glass data-panel">
      <div className="panel-heading">
        <h2>Recent Events</h2>
        <button>View All</button>
      </div>
      <div className="events">
        {rows.map((r) => (
          <div className="event-row" key={r[2] + r[4]}>
            <span className={`event-icon ${r[0]}`}>{r[1]}</span>
            <div>
              <strong>{r[2]}</strong>
              <small>{r[3]}</small>
            </div>
            <time>{r[4]} ago</time>
          </div>
        ))}
      </div>
    </section>
  );
}

function RightRail() {
  const status = [
    ["All Systems Operational", true],
    ["Web Application", false],
    ["API Server", false],
    ["Database", false],
    ["Redis Cache", false],
    ["Background Jobs", false],
  ];
  return (
    <aside className="right-rail">
      <section className="glass ai-panel">
        <div className="panel-heading">
          <h2>
            <span className="ai-mark">
              <Icon name="spark" size={17} />
            </span>
            AI Insights
          </h2>
          <button>View All</button>
        </div>
        <p>
          The recent spike in errors is related to “API timeout” in the
          /api/products endpoint. This usually happens when the database is slow
          or unavailable.
        </p>
        <div className="suggestion">
          <strong>Suggested Actions:</strong>
          <ol>
            <li>Check database response times</li>
            <li>Review connection pool settings</li>
            <li>Consider adding retry logic</li>
          </ol>
        </div>
        <button className="analysis-button">
          View Full Analysis <span>→</span>
        </button>
      </section>
      <section className="glass status-panel">
        <h2>System Status</h2>
        <div className="status-list">
          {status.map(([name, top]) => (
            <div className="status-row" key={name}>
              <span>
                <i /> {name}
              </span>
              {!top && <strong>Healthy</strong>}
            </div>
          ))}
        </div>
      </section>
      <section className="glass quick-panel">
        <h2>Quick Actions</h2>
        <div className="quick-grid">
          <button>
            <Icon name="plus" />
            <span>Add App</span>
          </button>
          <button>
            <Icon name="logs" />
            <span>View Logs</span>
          </button>
          <button>
            <Icon name="play" />
            <span>Run Test</span>
          </button>
        </div>
      </section>
    </aside>
  );
}

function ApplicationTable() {
  return (
    <section className="glass application-panel">
      <div className="app-tabs">
        <h2>
          <Icon name="apps" size={17} />
          Application Performance
        </h2>
        <div>
          <button className="active">Overview</button>
          <button>API Endpoints</button>
          <button>Database</button>
          <button>Frontend</button>
        </div>
      </div>
      <div className="table-scroll">
        <table className="app-table">
          <thead>
            <tr>
              <th>Endpoint</th>
              <th>Requests</th>
              <th>Errors</th>
              <th>Avg. Response Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GET /api/products</td>
              <td>3,482</td>
              <td>12</td>
              <td>620 ms</td>
              <td>
                <span className="healthy">Healthy</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("Dashboard");
  return (
    <div className="dashboard-shell">
      <Sidebar active={active} setActive={setActive} />
      <main>
        <Topbar active={active} />
        <div className="dashboard-body">
          <div className="main-column">
            <div className="metric-grid">
              <MetricCard
                label="Total Requests"
                value="12,482"
                change="↑ 12%"
                tone="blue"
                icon="apps"
              />
              <MetricCard
                label="Total Errors"
                value="47"
                change="↓ 56%"
                tone="red"
                icon="warning"
              />
              <MetricCard
                label="Avg. Response Time"
                value="842 ms"
                change="↓ 34%"
                tone="orange"
                icon="clock"
              />
              <MetricCard
                label="Uptime"
                value="99.62%"
                change="↑ 0.31%"
                tone="teal"
                icon="check"
              />
            </div>
            <TrendChart />
            <div className="two-column">
              <TopErrors />
              <RecentEvents />
            </div>
            <ApplicationTable />
          </div>
          <RightRail />
        </div>
      </main>
    </div>
  );
}
