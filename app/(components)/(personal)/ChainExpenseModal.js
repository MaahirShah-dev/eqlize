import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ChainExpenseModal({
  isSecondModalOpen,
  toggleSecondModal,
  addChainExpense,
  updateChainExpense,
  selectedChainExpense,
  selectedChain,
}) {
  const [data, setData] = useState({
    expense: "",
    amount: 0,
    date: "",
    category: "",
    description: "",
    sharingRatio: "", // Added for sharing ratio
  });

  useEffect(() => {
    if (selectedChainExpense) {
      setData({
        expense: selectedChainExpense.expense,
        amount: selectedChainExpense.amount,
        date: selectedChainExpense.date,
        category: selectedChainExpense.category,
        description: selectedChainExpense.description,
        sharingRatio: selectedChainExpense.sharingRatio, // Pre-fill sharing ratio
      });
    } else {
      setData({
        expense: "",
        amount: 0,
        date: "",
        category: "",
        description: "",
        sharingRatio: "", // Reset sharing ratio
      });
    }
  }, [selectedChainExpense]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value) => {
    setData((prevData) => ({ ...prevData, category: value }));
  };

  const handleSharingRatioChange = (value) => {
    setData((prevData) => ({ ...prevData, sharingRatio: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedChainExpense) {
      updateChainExpense({ ...data, id: selectedChainExpense.id });
    } else {
      addChainExpense(data);
    }
    toggleSecondModal();

    setData({
      expense: "",
      amount: 0,
      date: "",
      category: "",
      description: "",
      sharingRatio: "", // Reset sharing ratio after form submission
    });
  };

  return (
    <div
      className={`h-[70%] w-[35%] flex flex-col bg-gray-100 absolute transition-transform duration-200 ease-in-out 
      transform scale-0 ${isSecondModalOpen ? "scale-100" : "scale-0"} 
      top-1/2 right-1/2 -translate-x-[-8.5%] -translate-y-1/2`}
    >
      <form className="h-[100%] w-[100%]" onSubmit={handleSubmit}>
        {/* Top Section */}
        <div className="h-[22.5%] w-[100%] flex bg-white">
          <div className="h-[100%] w-[90%] flex flex-col justify-center gap-3 p-4">
            {/* Input Field */}
            <input
              className="bg-transparent w-[90%] text-2xl border-0 font-bold focus:outline-none"
              placeholder="Expense Name"
              name="expense"
              value={data.expense}
              onChange={handleInput}
              required={!selectedChainExpense}
            />
            <Input
              type="number"
              placeholder="Enter Amount"
              className="w-[60%]"
              name="amount"
              value={data.amount}
              onChange={handleInput}
              required={!selectedChainExpense}
            />
          </div>
          <div className="flex flex-column items-center justify-center">
            <Button
              className="bg-white text-primary shadow-md mr-2 text-md hover:bg-gray-200 h-9 w-9"
              onClick={toggleSecondModal}
            >
              x
            </Button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="h-[65%] w-[100%] flex flex-col items-center justify-center bg-white">
          <div className="h-[15%] w-[100%] flex flex-column items-center p-4">
            {/* Sharing Ratio Dropdown Menu */}
            <Select
              value={data.sharingRatio}
              onValueChange={handleSharingRatioChange}
              required={!selectedChainExpense}
            >
              <SelectTrigger className="w-[50%]">
                <SelectValue placeholder="Sharing Ratio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={`You Owe ${selectedChain.user} ₹${data.amount}`}>
                  You Owe {selectedChain.user} ₹{data.amount}
                </SelectItem>
                <SelectItem value={`${selectedChain.user} Owes You ₹${data.amount}`}>
                  {selectedChain.user} Owes You ₹{data.amount}
                </SelectItem>
                <SelectItem value={`Split: ₹${data.amount / 2} each`}>
                  Split: ₹{data.amount / 2} each
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="h-[15%] w-[100%] flex flex-row items-center justify-between p-4">
            <Input
              type="date"
              className="w-[49%]"
              name="date"
              value={data.date}
              onChange={handleInput}
              required={!selectedChainExpense}
            />
            {/* Category Dropdown Menu */}
            <Select
              value={data.category}
              onValueChange={handleCategoryChange}
              required={!selectedChainExpense}
            >
              <SelectTrigger className="w-[49%]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food-and-dining">Food & Dining</SelectItem>
                <SelectItem value="transportation">Transportation</SelectItem>
                <SelectItem value="utilities">Utilities</SelectItem>
                <SelectItem value="groceries">Groceries</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="health-and-wellness">Health & Wellness</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="insurance">Insurance</SelectItem>
                <SelectItem value="loans">Loans</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="savings-and-investments">Savings & Investments</SelectItem>
                <SelectItem value="gifts-and-donations">Gifts & Donations</SelectItem>
                <SelectItem value="subscriptions">Subscriptions & Memberships</SelectItem>
                <SelectItem value="childcare">Childcare</SelectItem>
                <SelectItem value="pets">Pets</SelectItem>
                <SelectItem value="miscellaneous">Miscellaneous</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="h-[70%] w-[100%] flex flex-column items-center justify-center p-4">
            <Textarea
              className="resize-none h-[100%]"
              placeholder="Enter Description"
              name="description"
              value={data.description}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="h-[12.5%] w-[100%] flex flex-row items-center justify-end p-2 bg-white">
          <Button
            className="bg-white text-primary shadow-md mr-2 text-md hover:bg-gray-200 text-[15px]"
            type="submit"
          >
            {selectedChainExpense ? "Update Expense" : "Add Expense"}
          </Button>
        </div>
      </form>
    </div>
  );
}
