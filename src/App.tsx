import { useState } from "react";
import "./index.css";
import { IAppointment, IDoctor, specialties } from "./components/interfaces";
import { doctorsMock } from "./data/mockData";
import Modal from "./components/Modal";
import SummaryView from "./components/SummaryView";
import DoctorView from "./components/DoctorView";
import FilterController from "./components/Controllers/Filter";
import "./App.css";
import TabsController from "./components/Controllers/Tabs";

const App = () => {
  const [filter, setFilter] = useState<string>("All");
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
    <div>
      <img
        className="background-image"
        src={require("./assets/images/hospital-background.png")}
        alt="doctor"
      />
      <div className="navbar">
        <img src={require('./assets/images/book.png')} alt="book" />
        <h2>Doctor's Directory</h2>
      </div>
      <div className="app-container">
        <TabsController
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === "doctors" ? (
          <>
            <FilterController
              filter={filter}
              setFilter={setFilter}
              specialties={specialties}
            />
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
        )}
      </div>
      <div className="footer">
        <p className="footer-text">
          © 2025 Doctor's Directory. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default App;
