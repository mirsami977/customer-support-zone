import React, { memo, useMemo } from "react";



const TicketCard = ({ ticket, onSelect }) => {
  const {
    title = " ",
    status = " ",
    description = "",
    customer = " ",
    createdAt = " ",
    priority = "Low",
  } = ticket || {};

  const formattedDate = useMemo(() => {
    if (!createdAt) return "—";
    try {
      return new Date(createdAt).toLocaleString();
    } catch {
      return String(createdAt);
    }
  }, [createdAt]);

  const statusStyle = (s) => {
    const key = String(s).toLowerCase();
    if (key === "open") return "bg-green-100 text-green-700";
    if (key === "pending") return "bg-yellow-100 text-yellow-700";
    if (key === "closed") return "bg-gray-100 text-gray-700";
    return "bg-blue-100 text-blue-700";
  };

  const priorityClass = (p) => {
    const key = String(p).toLowerCase();
    if (key.includes("high")) return "text-red-700";
    if (key.includes("medium")) return "text-yellow-700";
    return "text-blue-600";
  };

  const handleSelect = () => {
    if (typeof onSelect === "function") onSelect(ticket);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleSelect}
      onKeyDown={(e) => e.key === "Enter" && handleSelect()}
      className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-300"
      aria-label={`Open ticket ${title}`}
    >
    
      <div className="flex justify-between items-start">
        <h3 className="text-gray-900 font-semibold">{title}</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full ${statusStyle(status)}`}>
          {status}
        </span>
      </div>

      
      <p className="text-gray-600 text-sm mt-2">{description}</p>

     {/* Date */}
      <div className="flex justify-between text-gray-500 text-xs mt-3">
        <span className="truncate" title={customer}>{customer}</span>
        <span className="whitespace-nowrap">{formattedDate}</span>
      </div>

     
      <div className="mt-2">
        <span className={`text-xs font-bold ${priorityClass(priority)}`}>{priority}</span>
      </div>
    </div>
  );
};

export default memo(TicketCard);
