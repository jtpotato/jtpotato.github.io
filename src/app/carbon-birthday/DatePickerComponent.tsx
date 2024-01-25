"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DatePicker({ date, setDate }: { date: Date, setDate: any }) {
  return (
    <div className="flex gap-4 items-end">
      <div>
        <Label htmlFor="date">Birthday</Label>
        <Input type="date" id="date" className="w-fit" />
      </div>
      <Button>Let's See It!</Button>
    </div>

  )
}
