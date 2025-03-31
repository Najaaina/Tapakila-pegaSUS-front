interface ReservationTabsProps {
  activeTab: string;
  setActiveTab: (activeTabe: string) => void;
}

export default function ReservationTabs({
  activeTab,
  setActiveTab,
}: ReservationTabsProps) {
  return (
    <div className="mb-6">
      <div className="flex space-x-8 border-b">
        <button
          className={`pb-2 px-1 ${
            activeTab === "past"
              ? "border-b-2 border-blue-600 font-medium text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("past")}
        >
          Événements passés
        </button>
        <button
          className={`pb-2 px-1 ${
            activeTab === "future"
              ? "border-b-2 border-blue-600 font-medium text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("future")}
        >
          Événements futurs
        </button>
      </div>
    </div>
  );
}
