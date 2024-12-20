import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function AddExpenseModal({
  toggleModal,
  addExpense,
  selectedExpense,
  updatedExpense
}) {
  const [data, setData] = useState({
    expense: "",
    amount: 0,
    date: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (selectedExpense) {
      setData({
        expense: selectedExpense.expense,
        amount: selectedExpense.amount,
        date: selectedExpense.date,
        category: selectedExpense.category,
        description: selectedExpense.description,
      });
    } else {
      setData({
        expense: "",
        amount: 0,
        date: "",
        category: "",
        description: "",
      });
    }
  }, [selectedExpense]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleCategoryChange = (value) => {
    setData((prevData) => {
      return { ...prevData, category: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedExpense) {  
      updatedExpense({...data, id: selectedExpense.id});
    } else {
      addExpense(data);
    }
    toggleModal();

    setData({
      expense: "",
      amount: 0,
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-20 flex justify-center items-center z-50">
      <div className="bg-white h-[60%] w-[40%] p-4">
        <div className="h-[10%] w-[100%] flex items-center text-[1.5rem] p-4 font-bold">
          {selectedExpense ? "Update Expense" : "Add Expense"}
        </div>
        <form className="h-[90%] w-[100%] flex flex-col" onSubmit={handleSubmit}>
          <div className="h-[15%] w-[100%] flex flex-row items-center justify-evenly">
            <Input
              className="h-[70%] w-[47%]"
              placeholder="Expense"
              name="expense"
              onChange={handleInputChange}
              value={data.expense}
              required
            />
            <Input
              className="h-[70%] w-[47%]"
              placeholder="Amount"
              type="number"
              name="amount"
              onChange={handleInputChange}
              value={data.amount}
              required
            />
          </div>

          <div className="h-[15%] w-[100%] flex flex-row items-center justify-evenly">
            <Input
              className="h-[70%] w-[47%]"
              type="date"
              name="date"
              onChange={handleInputChange}
              value={data.date}
              required
            />
            <Select
              value={data.category}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className="h-[70%] w-[47%]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food-and-dining">Food & Dining</SelectItem>
                <SelectItem value="transportation">Transportation</SelectItem>
                <SelectItem value="utilities">Utilities</SelectItem>
                <SelectItem value="groceries">Groceries</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="health-and-wellness">
                  Health & Wellness
                </SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="insurance">Insurance</SelectItem>
                <SelectItem value="loans">Loans</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="savings-and-investments">
                  Savings & Investments
                </SelectItem>
                <SelectItem value="gifts-and-donations">
                  Gifts & Donations
                </SelectItem>
                <SelectItem value="subscriptions">
                  Subscriptions & Memberships
                </SelectItem>
                <SelectItem value="childcare">Childcare</SelectItem>
                <SelectItem value="pets">Pets</SelectItem>
                <SelectItem value="miscellaneous">Miscellaneous</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-[55%] w-[100%] flex items-center justify-center">
            <Textarea
              className="h-[90%] w-[96%] resize-none"
              placeholder="Description"
              name="description"
              value={data.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="h-[10%] w-[100%] flex items-center justify-end">
            <Button
              type="button"
              className="mr-2 bg-white text-primary shadow-md hover:bg-gray-200"
              onClick={toggleModal}
            >
              Close
            </Button>
            <Button
              className="mr-3 bg-white text-primary shadow-md hover:bg-gray-200"
              type="submit"
            >
              {selectedExpense ? "Update Expense" : "Add Expense"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}