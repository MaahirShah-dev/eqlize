import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ChainExpenseModal from "./ChainExpenseModal";
import ChainModalList from "./ChainModalList";

export default function ChainModal({ toggleOpenChain , selectedChain , addChainExpense , chainExpense , deleteChainExpense , infoAndUpdateChain, selectedChainExpense , updateChainExpense , setSelectedChainExpense}) {
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const toggleSecondModal = () => {
    if (isSecondModalOpen) {
      setSelectedChainExpense(null);
    }
    setIsSecondModalOpen(!isSecondModalOpen);
  };

  const infoAndUpdatefunc = (chainId) => {
    if (!isSecondModalOpen) {
      infoAndUpdateChain(chainId);
    }
    toggleSecondModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-20 flex justify-center items-center z-50">
      {/* First Modal */}
      <div
        className={`h-[70%] w-[25%] bg-gray-100 transition-all duration-150 ${
          isSecondModalOpen ? "translate-x-[62.5%]" : ""
        }`}
      >
        <div className="h-[10%] w-[100%] bg-white drop-shadow-md flex flex-col justify-center p-3">
          <p className="text-[18px] font-semibold">{selectedChain.chainName}</p>
          <p className="text-[10px]">You, {selectedChain.user}</p>
        </div>
        <div className="h-[75%] w-[100%] bg-white">
          <ChainModalList
          chainExpense={chainExpense}
          deleteChainExpense={deleteChainExpense}
          infoAndUpdatefunc={infoAndUpdatefunc}
          />
        </div>
        <div className="h-[15%] w-[100%] bg-white shadow-[0_-4px_6px_rgba(0,0,0,0.1)] flex flex-row items-center justify-end">
          <Button
            className="bg-white text-primary shadow-md mr-2 hover:bg-gray-200"
            onClick={toggleSecondModal}
          >
            Share Expense
          </Button>
          <Button
            className="bg-white text-primary shadow-md mr-2 hover:bg-gray-200"
            onClick={toggleOpenChain}
          >
            Close
          </Button>
        </div>
      </div>

      {/* Second Modal */}
      {isSecondModalOpen && (
        <ChainExpenseModal
        isSecondModalOpen={isSecondModalOpen}
        toggleSecondModal={toggleSecondModal}
        addChainExpense={addChainExpense}
        selectedChainExpense={selectedChainExpense} 
        updateChainExpense={updateChainExpense}
        selectedChain={selectedChain}
        />
      )}
    </div>
  );
}
