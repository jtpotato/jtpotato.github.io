"use client"

import { useState } from "react";
import { DatePicker } from "./DatePickerComponent";

function DatePickerUI() {
  const [date, setDate] = useState<Date>()

  return (<>
    <DatePicker date={date} setDate={setDate} />
  </>);
}

export default DatePickerUI;