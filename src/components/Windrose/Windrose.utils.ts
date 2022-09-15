import { WindroseData } from "./Windrose.constants";



export const getChartData = (windroseData: WindroseData) => {
  const chartData = windroseData.safetyLevels.map((safetyLevel) => {

    const safetyCategories = {
      safe: 0,
      critical: 0,
      unsafe: 0,
    }

    // gotcha: Don't fill in the number where  speedInBeaufort starts in the graph,
    // the total needs to be 12!
    safetyLevel.windForces.forEach((windForce) => {

      const isSafe = windForce.lineForce < windroseData.safeWorkingLoad
      const isCritical = windForce.lineForce > windroseData.safeWorkingLoad && windForce.lineForce < windroseData.minimumBreakingLoad
      const isUnsafe = windForce.lineForce > windroseData.minimumBreakingLoad

      //between 0/50% of MBL (750)
      if (isSafe) {
        safetyCategories.safe = windForce.speedInBeaufort
      }

      // between 50/100% of MBL (1500)
      if (isCritical) {
        safetyCategories.critical++
      }

      // over 100% of MBL (1500)
      if (isUnsafe) {
        safetyCategories.unsafe++
      }
    })

    console.log(safetyLevel.windDirection, "-->", { safetyCategories })

    return {
      angle: safetyLevel.windDirection,
      ...safetyCategories,
      total: 12,
    }

  })



  return chartData


};
