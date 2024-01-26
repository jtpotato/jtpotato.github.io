"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function DatePicker({ setDate }: { setDate: any }) {
  const [internalDate, setInternalDate] = useState<number>()

  return (
    <div className="flex gap-4 items-end">
      <div>
        <Label htmlFor="year">Birth Year</Label>
        <Input type="number" id="year" className="w-fit" onChange={(e) => setInternalDate(e.currentTarget.valueAsNumber)} />
      </div>
      <Button onClick={() => setDate(internalDate)}>Let's See It!</Button>
    </div>

  )
}
