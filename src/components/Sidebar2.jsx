import { Link } from 'react-router-dom';
import { Home, Users, FileText, Clipboard, BarChart2 } from 'react-feather';

const routes = [
  { path: '/', name: 'Dashboard', icon: <Home /> },
  { path: '/customers', name: 'Customers', icon: <Users /> },
  { path: '/estimates', name: 'Estimates', icon: <FileText /> },
  {
    name: 'Invoices',
    icon: <Clipboard />,
    submenu: [
      { path: '/invoices', name: 'Invoices List' },
      { path: '/invoice-grid', name: 'Invoices Grid' },
      { path: '/invoice-grid-two', name: 'Invoices Grid 2' },
      { path: '/add-invoice', name: 'Add Invoices' },
      { path: '/edit-invoice', name: 'Edit Invoices' },
      { path: '/view-invoice', name: 'Invoices Details' },
      { path: '/view-invoice-two', name: 'Invoices Details 2' },
      { path: '/invoices-settings', name: 'Invoices Settings' },
    ],
  },
  {
    name: 'Charts',
    icon: <BarChart2 />,
    submenu: [
      { path: '/chart-apex', name: 'Apex Charts' },
      { path: '/chart-js', name: 'Chart Js' },
      { path: '/chart-morris', name: 'Morris Charts' },
      { path: '/chart-flot', name: 'Flot Charts' },
      { path: '/chart-peity', name: 'Peity Charts' },
      { path: '/chart-c3', name: 'C3 Charts' },
    ],
  },
];

function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title"><span>Main</span></li>
            {routes.map((route, index) => (
              <MenuItem key={index} {...route} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MenuItem({ path, name, icon, submenu }) {
  if (submenu) {
    return (
      <li className="submenu">
        <a href="#">
          {icon} <span>{name}</span> <span className="menu-arrow"></span>
        </a>
        <ul>
          {submenu.map((subitem, index) => (
            <li key={index}>
              <Link to={subitem.path}>{subitem.name}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li>
        <Link to={path}>
          {icon} <span>{name}</span>
        </Link>
      </li>
    );
  }
}

export default Sidebar;
