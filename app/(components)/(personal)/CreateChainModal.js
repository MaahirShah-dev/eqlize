import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function CreateExpenseChainModal({ toggleModal ,addChain }) {
  const [data, setData] = useState({
    chainName: "",
    user: "",
  });

  const handleUserChange = (value) => {
    setData((prevData) => {
      return { ...prevData, user: value }; // Fix: Update 'user' key
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addChain(data);
    toggleModal();
    setData({ 
      chainName: "",
      user: "",
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-20 flex justify-center items-center z-50">
      <div className="bg-white h-[30%] w-[30%] p-6">
        <div className="h-[30%] w-[100%] flex items-center text-[1.5rem] font-bold">
          Create Chain
        </div>
        <form className="h-[70%] w-[100%] flex-column" onSubmit={handleSubmit}>
          <div className="w-[100%] h-[50%] flex flex-row justify-between items-center">
            <Input
              className="h-[80%] w-[71%]"
              name="chainName"
              value={data.chainName}
              onChange={handleInputChange}
              placeholder="Enter Chain Name"
              required
            />
            <Select value={data.user} onValueChange={handleUserChange} required>
              <SelectTrigger className="h-[80%] w-[27.5%]">
                <SelectValue placeholder="Select User" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Maahir">Maahir</SelectItem>
                <SelectItem value="Prasham">Prasham</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-[100%] h-[50%] flex flex-row items-center justify-end gap-1">
            <Button
              className="bg-white text-primary shadow-md hover:bg-gray-200"
              type="button"
              onClick={toggleModal}
            >
              Close
            </Button>
            <Button
              className="bg-white text-primary shadow-md hover:bg-gray-200"
              type="submit"
            >
              Create Chain
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
