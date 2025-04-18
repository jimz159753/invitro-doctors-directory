interface TabsControllerProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const TabsController = ({
  selectedTab,
  setSelectedTab,
}: TabsControllerProps) => (
  <div className="tabs">
    <h4
      className={`tab ${selectedTab === "doctors" ? "active" : ""}`}
      onClick={() => setSelectedTab("doctors")}
    >
      Doctors
    </h4>
    <h4
      className={`tab ${selectedTab === "appointments" ? "active" : ""}`}
      onClick={() => setSelectedTab("appointments")}
    >
      My Appointments
    </h4>
  </div>
);

export default TabsController;
