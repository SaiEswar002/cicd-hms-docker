import * as React from "react";
import { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard.jsx";

function DoctorsSection() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('http://localhost:8083/api/doctors');
      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }
      const data = await response.json();
      setDoctors(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="doctors-section">
        <h2 className="section-title">Our Doctors</h2>
        <div className="doctors-grid">
          {loading ? (
            <p>Loading doctors...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : doctors.length > 0 ? (
            doctors.map((doctor, index) => (
              <DoctorCard
                key={doctor.id || index}
                imageSrc={doctor.imageUrl}
                doctorName={doctor.name}
                specialty={doctor.specialty}
              />
            ))
          ) : (
            <p>No doctors found.</p>
          )}
        </div>
      </section>
      <style jsx>{`
  .doctors-section {
    margin-top: 60px;
    text-align: center;
    padding: 40px 20px;
    background: var(--Primary, #1f2b6c);
    color: var(--white, #fcfefe);
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the content */
    padding-top: 20px;
  }

  @media (max-width: 991px) {
    .doctors-section {
      padding: 0 20px;
      margin-top: 40px;
    }
  }

  .section-title {
    color: var(--Secondary, #159eec);
    letter-spacing: 2.88px;
    text-transform: uppercase;
    font: 700 18px Work Sans, sans-serif;
  }

  .doctors-grid {
    display: grid;
    justify-content: center; /* Center the grid items */
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 64px;
    width: 100%; /* Ensures it takes up available space */
    max-width: 900px; /* Adjust as needed */
  }

  @media (max-width: 991px) {
    .doctors-grid {
      grid-template-columns: 1fr;
      margin-top: 40px;
    }
  }
`}</style>

    </>
  );
}

export default DoctorsSection;
