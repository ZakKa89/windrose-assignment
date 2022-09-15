
import { Chart } from "react-windrose-chart";
import { columns } from "./Windrose.constants";
import { windroseData } from "./Windrose.mock";
import { getChartData } from "./Windrose.utils";

function Windrose() {
  // usually this data would come from an API
  const chartData = getChartData(windroseData)


 return (
    <div>
      <Chart
        //@ts-ignore
        chartData={chartData}
        columns={columns}
        responsive
        legendGap={10}
      />
    </div>
  );

}

export default Windrose
