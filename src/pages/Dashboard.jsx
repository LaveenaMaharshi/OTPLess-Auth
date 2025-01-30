import React from 'react';
import { useAuth } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h2 className="h4 fw-bold mb-3">Dashboard</h2>
        <div className="mb-2">
          <p className="mb-1"><strong>Name:</strong> {user.name}</p>
          <p className="mb-1"><strong>Email:</strong> {user.email}</p>
          <p className="mb-1"><strong>WhatsApp ID:</strong> {user.waId}</p>
          {user.token && (
            <p className="text-muted small text-break">
              <strong>Token:</strong> {user.token}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
