"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AddExpenseModal from "@/app/(components)/(personal)/AddExpenseModal";
import CreateExpenseChainModal from "@/app/(components)/(personal)/CreateChainModal";
import ExpenseList from "@/app/(components)/(personal)/ExpenseList";
import ChainsList from "@/app/(components)/(personal)/ChainsList";
import ChainModal from "@/app/(components)/(personal)/chainModal";
import { v4 as uuidv4 } from "uuid";

export default function Personal() {
  const [addExpenseModal, setAddExpenseModal] = useState(false);
  const [createChainModal, setCreateChainModal] = useState(false);
  const [expenseData, setExpenseData] = useState([]);
  const [chainData, setChainData] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState();
  const [openChain , setOpenChain] = useState(false);
  const [selectedChain , setSelectedChain] = useState();
  const [chainExpense , setChainExpense] = useState([]);
  const [selectedChainExpense , setSelectedChainExpense] = useState();

  const toggleCreateChainModal = () => {
    setCreateChainModal((prev) => !prev);
  };

  const toggleAddExpenseModal = () => {
    setAddExpenseModal((prev) => !prev);
  };

  const toggleOpenChain = () => {
    setOpenChain((prev) => !prev);
  }

  const selectOpenChain = (chainId) => {
    const select = chainData.find((chain) => chain.id === chainId);
    setSelectedChain(select);
    toggleOpenChain();
  }

  const addExpense = ({ expense, amount, date, category, description }) => {
    const newExpense = {
      id: uuidv4(),
      expense,
      amount,
      date,
      category,
      description,
    };

    setExpenseData((prevExpenseData) => [...prevExpenseData, newExpense]);
  };

  const deleteExpense = (expenseId) => {
    const updatedExpense = expenseData.filter((expense) => expense.id !== expenseId);
    setExpenseData(updatedExpense);
  };

  const infoAndUpdate = (expenseId) => {
    const getExpense = expenseData.find((exp) => exp.id === expenseId);
    setSelectedExpense(getExpense);
    toggleAddExpenseModal();
  };

  const updatedExpense = (expense) => {
    const updateExpense = expenseData.map((exp) => exp.id === expense.id ? expense : exp);
    setExpenseData(updateExpense);
    setSelectedExpense();
  };

  const addChain = ({chainName, user}) => {
    const newChain = {
      id: uuidv4(),
      chainName,
      user,
    };

    setChainData((prevChainData) => [...prevChainData, newChain]);
  };

  const addChainExpense = ({expense,amount,date,category,description,sharingRatio}) => {
    const newChainExpense = {
      id:uuidv4(),
      expense:expense,
      amount:amount,
      date:date,
      category:category,
      description:description,
      sharingRatio:sharingRatio
    }

    setChainExpense((prev) => [...prev, newChainExpense]);
  }

  useEffect(() => {
    console.log(chainExpense);
  });

  const deleteChainExpense = (id) => {
    const updatesChain = chainExpense.filter((exp) => exp.id !== id);
    setChainExpense(updatesChain);
    setSelectedChainExpense();
  }

  const infoAndUpdateChain = (id) => {
    const getExpenseChain = chainExpense.find((exp) => exp.id === id);
    setSelectedChainExpense(getExpenseChain);
  }

  const updateChainExpense = (expense) => {
    const updateExpenseChain = chainExpense.map((exp) => exp.id === expense.id ? expense : exp);
    setChainExpense(updateExpenseChain);
    setSelectedChainExpense();
  }

  return (
    <div className="h-full w-full bg-white flex flex-col items-center overflow-auto">
      <div className="h-[7.5%] w-[90%] mt-16 flex flex-row items-center justify-end">
        <Button className="mr-2 bg-white text-primary shadow-md hover:bg-gray-200" onClick={toggleAddExpenseModal}>
          Add Expense
        </Button>
        <Button className="bg-white text-primary shadow-md hover:bg-gray-200" onClick={toggleCreateChainModal}>
          Create Chain
        </Button>
      </div>

      <div className="h-[37.5%] w-[90%] mt-1 flex flex-row justify-between">
        <ExpenseList
          expenses={expenseData}
          deleteExpense={deleteExpense}
          toggleModal={toggleAddExpenseModal}
          addExpense={addExpense}
          infoAndUpdate={infoAndUpdate}
        />
        <ChainsList
        chainData={chainData}
        selectOpenChain={selectOpenChain}
        />
      </div>

      <div className="h-[37.5%] w-[90%] bg-white mt-5 flex flex-row justify-between">
        <div className="h-full w-[49.75%] flex flex-col bg-gray-100"></div>
        <div className="h-full w-[49.75%] flex flex-col bg-gray-100"></div>
      </div>

      {addExpenseModal && (
        <AddExpenseModal
          toggleModal={toggleAddExpenseModal}
          addExpense={addExpense}
          selectedExpense={selectedExpense}
          updatedExpense={updatedExpense}
        />
      )}

      {createChainModal && (
        <CreateExpenseChainModal toggleModal={toggleCreateChainModal}
        addChain={addChain} />
      )}

      {openChain && (
        <ChainModal
        toggleOpenChain={toggleOpenChain} 
        selectedChain={selectedChain}
        addChainExpense={addChainExpense}
        chainExpense={chainExpense}
        deleteChainExpense={deleteChainExpense}
        infoAndUpdateChain={infoAndUpdateChain}
        updateChainExpense={updateChainExpense}
        selectedChainExpense={selectedChainExpense}
        setSelectedChainExpense={setSelectedChainExpense}
        />
      )}

    </div>
  );
}
