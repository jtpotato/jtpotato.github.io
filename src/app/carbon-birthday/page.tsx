import { Metadata } from "next";
import "./page.css"
import DatePickerUI from "./DatePickerUI";

export const metadata: Metadata = {
  title: 'My Carbon Birthday',
  description: 'How old are you - but with CO2 concentrations?'
}

function CarbonBirthdayHome() {
  return (<>
    <div className="flex items-center justify-center h-screen text-white/95">
      <div>
        <h1 className="font-bold text-6xl">My Carbon Birthday Is...</h1>
        <div className="h-16" />
        <DatePickerUI />
      </div>
    </div>
  </>);
}

export default CarbonBirthdayHome;