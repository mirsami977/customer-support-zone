import React, { useState } from 'react';
import ticketsData from './data/ticketsData.js';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import TicketsList from './components/TicketsList.jsx';
import TaskStatus from './components/TaskStatus.jsx';
import Footer from './components/Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  //  State Management
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  //   Ticket Selector
  const handleSelectTicket = (ticket) => {
    setInProgressTickets([...inProgressTickets, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    toast.info(`${ticket.title} added to In-Progress`);
  };

  //  Task Complete
  const handleCompleteTask = (ticket) => {
    setResolvedTickets([...resolvedTickets, ticket]);
    setInProgressTickets(inProgressTickets.filter((t) => t.id !== ticket.id));
    toast.success(`${ticket.title} marked as Resolved`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Banner inProgress={inProgressTickets.length} resolved={resolvedTickets.length} />

      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 flex-grow">
        {/* Left Side Tickets */}
        <div className="md:col-span-2">
          <TicketsList tickets={tickets} onSelect={handleSelectTicket} />
        </div>

        {/* Right Side Task Status */}
        <div>
          <TaskStatus tasks={inProgressTickets} resolved={resolvedTickets} onComplete={handleCompleteTask} />
        </div>
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
