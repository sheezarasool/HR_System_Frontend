// src/pages/Dashboard.jsx
const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb & Title */}
      <div>
        <p className="text-gray-400 text-sm">Home &gt; Dashboard</p>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      </div>

      {/* Welcome Card */}
      <div className="bg-purple-600 rounded-xl p-6 text-white shadow-md">
        <h2 className="text-lg">Good Afternoon,</h2>
        <h1 className="text-2xl font-bold">John Smith</h1>
        <p className="text-sm">CEO, Executive</p>
        <p className="mt-2 text-sm">
          Welcome to your Employee Management System dashboard.
        </p>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-200 mb-3">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 cursor-pointer">
            <p className="font-medium text-white">Add Employee</p>
            <p className="text-xs text-gray-400">Create new employee</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 cursor-pointer">
            <p className="font-medium text-white">Departments</p>
            <p className="text-xs text-gray-400">Manage departments</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 cursor-pointer">
            <p className="font-medium text-white">Employees</p>
            <p className="text-xs text-gray-400">View all employees</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 cursor-pointer">
            <p className="font-medium text-white">Request Leave</p>
            <p className="text-xs text-gray-400">Submit leave request</p>
          </div>
        </div>
      </div>

      {/* Organization Overview */}
      <div>
        <h2 className="text-lg font-semibold text-gray-200 mb-3">
          Organization Overview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">11</p>
            <p className="text-sm text-gray-400">Total Employees</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-400">14</p>
            <p className="text-sm text-gray-400">Departments</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-yellow-400">8</p>
            <p className="text-sm text-gray-400">Job Positions</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-400">5</p>
            <p className="text-sm text-gray-400">Leave Requests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
