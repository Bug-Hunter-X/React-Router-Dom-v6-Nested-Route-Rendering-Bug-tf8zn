// Correctly renders nested routes using Outlet

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet/>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      {/* ... profile content ... */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;