'use client';

import React, { useState, useEffect } from 'react';

interface CodeData {
  code: string;
  generatedAt: number;
  expiresAt: number;
  isValid: boolean;
}

const AdminPage = () => {
  const [codeData, setCodeData] = useState<CodeData | null>(null);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const handleGenerateCode = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/generateCode');
      if (!res.ok) {
        throw new Error('Failed to generate code');
      }
      const data = await res.json();
      setCodeData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!codeData) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const remainingTime = Math.max(Math.ceil((codeData.expiresAt - now) / 1000), 0);
      setTimeLeft(remainingTime);

      // Clear interval if time has run out
      if (remainingTime <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [codeData]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <button
        onClick={handleGenerateCode}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? 'Generating...' : 'Generate Secure Code'}
      </button>
      {codeData && (
        <div className="mt-4">
          <p>
            <strong>Secure Code:</strong> {codeData.code}
          </p>
          <p>
            <strong>Time Remaining:</strong> {timeLeft} seconds
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
