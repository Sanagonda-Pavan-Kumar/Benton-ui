import { NavLink } from 'react-router-dom';
import {
  Home,
  Building,
  Users,
  AlertCircle,
  CreditCard,
  Settings
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', to: '/', icon: Home },
  { name: 'Apartments', to: '/apartments', icon: Building },
  { name: 'Tenants', to: '/tenants', icon: Users },
  { name: 'Issues', to: '/issues', icon: AlertCircle },
  { name: 'Payments', to: '/payments', icon: CreditCard },
  { name: 'Settings', to: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <item.icon
                className="mr-3 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}