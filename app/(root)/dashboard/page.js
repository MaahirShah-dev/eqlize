import DashboardDoughnut from "@/app/(components)/dashboardDoughnut";
import DashboardLineChart from "@/app/(components)/dashboardLineChart";

export default function Home() {
  return (
    <div className="h-full w-full bg-white flex flex-col items-center">
      {/* First inner div */}
      <div className="bg-white-500 h-[20%] w-full flex items-center justify-center">
        <div className="bg-gray-200 h-[80%] w-full"></div>
      </div>

      {/* Second inner div */}
      <div className="bg-white-500 h-[40%] w-full flex items-center justify-center">
        <div className="bg-gray-200 h-[90%] w-[97.5%] flex">
          {/* Doughnut Chart and Analytics Section */}
          <div className="bg-gray-100 h-full w-1/2 flex items-center justify-evenly">
            <DashboardDoughnut />
            <div className="text-black text-left">
              <h1 className="text-xl font-bold mb-2">Total Expenses: ₹12,000</h1>
              <p className="text-lg"><strong>Highest Spending:</strong> Rent (₹6,000)</p>
              <p className="text-lg"><strong>Lowest Spending:</strong> Entertainment (₹1,000)</p>
            </div>
          </div>

          {/* Placeholder for additional data */}
          <div className="bg-gray-100 h-full w-1/2 flex items-center justify-evenly">
              <DashboardLineChart />
          </div>
        </div>
      </div>

      {/* Third inner div */}
      <div className="bg-white-500 h-[40%] w-full flex items-center justify-center">
        <div className="bg-gray-200 h-[90%] w-[97.5%]"></div>
      </div>
    </div>
  );
}
