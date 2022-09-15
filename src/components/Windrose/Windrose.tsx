
import { Chart } from "react-windrose-chart";
import { windroseData } from "./Windrose.constants";
import { getChartData } from "./Windrose.utils";

function Windrose() {

  // usually this data would come from an API
  const chartData = getChartData(windroseData)

  const columns = [
      "angle",
      "safe",
      /* ... */
      "critical",
      "unsafe",
    ]


 return (
    <div>
      <Chart
        chartData={chartData}
        columns={columns}
        responsive
        legendGap={10}
      />
    </div>
  );

}

export default Windrose
