interface TabsControllerProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const TabsController = ({
  selectedTab,
  setSelectedTab,
}: TabsControllerProps) => (
  <div className="tabs">
    <button
      className={`tab ${selectedTab === "doctors" ? "active" : ""}`}
      onClick={() => setSelectedTab("doctors")}
      aria-label="Doctors Tab"
    >
      Doctors
    </button>
    <button
      className={`tab ${selectedTab === "appointments" ? "active" : ""}`}
      onClick={() => setSelectedTab("appointments")}
      aria-label="Appointments Tab"
    >
      My Appointments
    </button>
  </div>
);

export default TabsController;
