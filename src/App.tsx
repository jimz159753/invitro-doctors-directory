import { useState } from "react";
import "./index.css";
import { IAppointment, IDoctor, specialties } from "./components/interfaces";
import { doctorsMock } from "./data/mockData";
import Modal from "./components/Modal";
import SummaryView from "./components/SummaryView";
import DoctorView from "./components/DoctorView";
import FilterController from "./components/FilterController";
import './App.css';

const App = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedDoctor, setSelectedDoctor] = useState<IDoctor>();
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("doctors");
  const [doctors, setDoctors] = useState<IDoctor[]>(doctorsMock);

  const filteredDoctors =
    filter === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialty === filter);

  const bookAppointment = (doctor: IDoctor, time: string): void => {
    setAppointments([...appointments, { ...doctor, time }]);
    setDoctors((prevDoctors) =>
      prevDoctors.map((doc) =>
        doc.id === doctor.id
          ? { ...doc, availability: doc.availability.filter((t) => t !== time) }
          : doc
      )
    );
    setSelectedDoctor(undefined);
  };

  return (
    <div className="app-container">
      <h1>Doctor Directory</h1>
      <div className="tabs">
        <button
          className={`tab ${selectedTab === "doctors" ? "active" : ""}`}
          onClick={() => setSelectedTab("doctors")}
        >
          Doctors
        </button>
        <button
          className={`tab ${selectedTab === "appointments" ? "active" : ""}`}
          onClick={() => setSelectedTab("appointments")}
        >
          My Appointments
        </button>
      </div>
      {
        selectedTab === "doctors" ? (
          <>
            <FilterController filter={filter} setFilter={setFilter} specialties={specialties} />
            <DoctorView
              filteredDoctors={filteredDoctors}
              setSelectedDoctor={setSelectedDoctor}
            />
            <Modal
              selectedDoctor={selectedDoctor}
              setSelectedDoctor={setSelectedDoctor}
              bookAppointment={bookAppointment}
            />
          </>
        ) : (
          <SummaryView appointments={appointments} />
        )
      }
      
    </div>
  );
};

export default App;
