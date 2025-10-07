import React from "react";
import TicketCard from "./TicketCard";

const TicketsList = ({ tickets, onSelect }) => {
  if (tickets.length === 0) {
    return <p className="text-gray-600 text-center">No open tickets found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tickets.map((item) => (
        <TicketCard key={item.id} ticket={item} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default TicketsList;
