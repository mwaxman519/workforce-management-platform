export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        Enterprise Workforce Management Platform
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">RBAC System</h3>
          <p>Role-based access control with 6 user roles</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Location Management</h3>
          <p>Google Maps integration for location tracking</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Booking System</h3>
          <p>FullCalendar integration for scheduling</p>
        </div>
      </div>
    </div>
  );
}