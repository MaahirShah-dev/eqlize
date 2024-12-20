export default function ChainsList({selectOpenChain , chainData}) {
    return (
        <div className="bg-gray-100 h-[100%] w-[49.75%]">
            <div className="h-[15%] w-full flex items-center font-semibold text-xl shadow-sm p-3 text-primary">
                <h1>Your Expense Chains</h1>
            </div>

            <div className="h-[85%] w-full overflow-y-scroll">
                <ul className="w-full p-3 flex flex-col gap-2 items-center">
                    {chainData.map((chain) => (
                        <li key={chain.id}
                        className="min-h-[3rem] w-[97.5%] bg-white flex flex-row items-center text-sm font-medium shadow-sm flex-shrink-0 transition hover:shadow-md"
                        onClick={() => selectOpenChain(chain.id)}
                        >
                            <p className="w-[50%] text-center">{chain.chainName}</p>
                            <p className="w-[50%] text-center">{chain.user}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
