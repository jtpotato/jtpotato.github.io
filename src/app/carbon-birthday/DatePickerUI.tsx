"use client"

import { useState } from "react";
import { DatePicker } from "./DatePickerComponent";
import CarbonCalculator from "./CarbonCalculator";

function DatePickerUI() {
  const [year, setYear] = useState<number>()

  return (<>
    <DatePicker setDate={setYear} />
    <CarbonCalculator year={year} />
  </>);
}

export default DatePickerUI;