import React from "react";

const TaskStatus = ({ tasks, resolved, onComplete }) => {
  return (
    <div className="space-y-10">
      {/* Active / Pending Tasks */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Active Tasks</h2>

        {tasks && tasks.length > 0 ? (
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={tasks.id}
                className="flex justify-between border rounded-2xl p-3 items-center  bg-white hover:shadow-md transition"
              >
                <span className="text-gray-800">{task.title}</span>
                <button
                  onClick={() => onComplete(task)}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition"
                >
                  Mark as Done
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">You have no active tasks at the moment.</p>
        )}
      </section>

      {/* Completed / Resolved Tasks */}
      <section>
        <h2 className="text-lg font-bold mb-4">Completed Tasks</h2>

        {resolved && resolved.length > 0 ? (
          <ul className="space-y-2">
            {resolved.map((task) => (
              <li
                key={task.id}
                className="bg-gray-100 text-gray-700 rounded-md px-3 py-2 text-sm"
              >
                {task.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">No tasks have been completed yet.</p>
        )}
      </section>
    </div>
  );
};

export default TaskStatus;

