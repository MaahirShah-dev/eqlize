import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ChainModalList({ chainExpense , deleteChainExpense , infoAndUpdatefunc}) {
    return (
      <div className="h-[100%] w-[100%] overflow-y-scroll bg-gray-100">
        <ul className="w-full h-[100%] p-3 flex flex-col gap-2 items-center bg-gray-100">
          {
            chainExpense.map((chainExp) => (
              <li
                key={chainExp.id}
                className="min-h-[7rem] w-[90%] bg-white flex flex-col items-center shadow-sm transition hover:shadow-md flex-shrink-0 p-3"
              >
                <div className="h-[2.5rem] w-full flex flex-row items-center justify-between font-semibold">
                    <p>{chainExp.expense}</p>
                    <p>&#8377;{chainExp.amount}</p>
                </div>
                <div className="h-[2rem] w-full flex flex-row items-center justify-between text-[12.5px]">
                    <p>{chainExp.sharingRatio}</p>
                    <p>{chainExp.date}</p>
                </div>
                <div className="h-[2.5rem] w-full flex flex-row items-center justify-end">
                    <Button className="bg-white text-primary shadow-md mr-2 hover:bg-gray-200 h-9 w-9"
                    onClick={() => infoAndUpdatefunc(chainExp.id)}
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </Button>
                    <Button className="bg-white text-primary shadow-md hover:bg-gray-200 h-9 w-9"
                    onClick={() => deleteChainExpense(chainExp.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
  