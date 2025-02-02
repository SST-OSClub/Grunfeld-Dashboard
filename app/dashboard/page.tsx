// pages/dashboard.tsx or app/dashboard/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/dashboard.module.css";
import { supabase } from "@/lib/supabaseClient";

interface Profile {
  id: string;
  name: string;
  roll_number: string;
  academic_year: string;
}

const Dashboard: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("profiles").select("*");
        if (error) {
          setError("Error fetching profiles: " + error.message);
        } else {
          console.log("Fetched profiles:", data);
          setProfiles(data as Profile[]);
        }
      } catch (err) {
        setError("Unexpected error: " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) return <div className={styles.loading}>Loading profiles...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.profileCards}>
        {profiles.map((profile) => (
          <Link key={profile.id} href={`/profile/${profile.id}`} passHref>
            <div className={styles.profileCard}>
              <h2>{profile.name}</h2>
              <p>Roll Number: {profile.roll_number}</p>
              <p>Academic Year: {profile.academic_year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
