import { Building2, Users, AlertCircle, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

export default function Dashboard() {
  const navigate = useNavigate();
  const { apartments, tenants, issues, rentPayments } = useStore();

  const stats = [
    {
      name: 'Total Apartments',
      value: apartments.length,
      icon: Building2,
      color: 'bg-blue-500',
      onClick: () => navigate('/apartments'),
    },
    {
      name: 'Active Tenants',
      value: tenants.length,
      icon: Users,
      color: 'bg-green-500',
      onClick: () => navigate('/tenants'),
    },
    {
      name: 'Open Issues',
      value: issues.filter((issue) => issue.status !== 'Resolved').length,
      icon: AlertCircle,
      color: 'bg-red-500',
      onClick: () => navigate('/issues'),
    },
    {
      name: 'Pending Payments',
      value: rentPayments.filter((payment) => payment.status === 'Unpaid').length,
      icon: DollarSign,
      color: 'bg-yellow-500',
      onClick: () => navigate('/payments'),
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            onClick={stat.onClick}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg"
          >
            <dt>
              <div className={`absolute rounded-md ${stat.color} p-3`}>
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </dd>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Recent Issues
            </h3>
            {/* Add recent issues list here */}
          </div>
        </div>

        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Upcoming Payments
            </h3>
            {/* Add upcoming payments list here */}
          </div>
        </div>
      </div>
    </div>
  );
}