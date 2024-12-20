import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

// Utility Function to Format Date
function formatDate(dateString) {
  const dateObj = new Date(dateString);
  const day = dateObj.getDate(); // Day of the month
  const year = dateObj.getFullYear().toString().slice(-2); // Last 2 digits of year

  // Extract the month in short form
  const monthShortForm = (() => {
    const month = dateObj.getMonth(); // JS months are 0-indexed
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    return months[month];
  })();

  return `${day} ${monthShortForm} ${year}`;
}

export default function ExpenseList({ expenses, deleteExpense, infoAndUpdate }) {
  return (
    <div className="h-full w-[49.75%] flex flex-col bg-gray-100">
      {/* Header */}
      <div className="h-[15%] w-full flex items-center font-semibold text-xl shadow-sm p-3 text-primary">
        <h1>Your Expenses</h1>
      </div>

      {/* Scrollable Expense List */}
      <div className="h-[85%] w-full overflow-y-scroll">
        <ul className="w-full p-3 flex flex-col gap-2 items-center">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="min-h-[3rem] w-[97.5%] bg-white flex flex-row items-center text-sm font-medium shadow-sm flex-shrink-0"
            >
              {/* Expense Name */}
              <p className="w-[35%] text-center">{expense.expense}</p>

              {/* Amount */}
              <p className="w-[22.5%] text-center">&#8377; {expense.amount}</p>

              {/* Formatted Date */}
              <p className="w-[22.5%] text-center">
                {formatDate(expense.date)}
              </p>

              {/* Buttons */}
              <div className="w-[20%] flex flex-row items-center justify-evenly">
                <Button
                  className="h-[65%] w-[35%] bg-white text-primary shadow-md hover:bg-gray-200"
                  onClick={() => infoAndUpdate(expense.id)}
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                </Button>

                <Button
                  className="h-[65%] w-[35%] bg-white text-primary shadow-md hover:bg-gray-200"
                  onClick={() => deleteExpense(expense.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
