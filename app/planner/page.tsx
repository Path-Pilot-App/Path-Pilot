"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React from "react"

function Planner() {
    const [startDate, setStartDate] = React.useState<Date>()
    const [endDate, setEndDate] = React.useState<Date>()
    const [country, setCountry] = React.useState<String>()
    const [city, setCity] = React.useState<String>()
    const [additionalInfo, setAdditionalInfo] = React.useState<String>()

    return (
        <main className="flex min-h-screen flex-col md:flex-row justify-evenly items-center">
            <Card className="flex flex-col bg-slate-900 p-6">
                <div className="grid w-full max-w-sm items-center gap-2.5">
                    <Label htmlFor="email" className="text-white">Country</Label>
                    <Input onChange={(event) => setCountry(event.target.value)} type="email" id="email" placeholder="Canada" className="bg-zinc-950 border-white text-white" />
                </div>
                <div className="pt-6 grid w-full max-w-sm items-center gap-2.5">
                    <Label htmlFor="email" className="text-white">City</Label>
                    <Input onChange={(event) => setCity(event.target.value)} type="email" id="email" placeholder="Montreal" className="bg-zinc-950 border-white text-white" />
                </div>
                <div className="pt-6 grid w-full max-w-sm items-center gap-2.5">
                    <Label htmlFor="email" className="text-white">Additional Info</Label>
                    <Input onChange={(event) => setAdditionalInfo(event.target.value)} type="email" id="email" placeholder="Family friendly, halal, etc." className="bg-zinc-950 border-white text-white" />
                </div>
                <Popover>
                    <Label htmlFor="email" className="mt-6 text-white">End Date</Label>
                    <PopoverTrigger asChild className="mt-2 bg-zinc-950 border-white">
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal text-slate-500",
                                !startDate && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4 text-slate-500" />
                            {startDate ? format(startDate, "PPP") : <span className="text-slate-500">Pick a start date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-zinc-950 border-white">
                        <Calendar
                            mode="single"
                            selected={startDate}
                            onSelect={setStartDate}
                            initialFocus
                            className="text-slate-500"
                        />
                    </PopoverContent>
                </Popover>
                <Popover>
                    <Label htmlFor="email" className="mt-6 text-white">End Date</Label>
                    <PopoverTrigger asChild className="mt-2 bg-zinc-950 border-white">
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal text-slate-500",
                                !endDate && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4 text-slate-500" />
                            {endDate ? format(endDate, "PPP") : <span className="text-slate-500">Pick an end date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-slate-900 border-slate-900">
                        <Calendar
                            mode="single"
                            selected={endDate}
                            onSelect={setEndDate}
                            initialFocus
                            className="text-slate-500"
                        />
                    </PopoverContent>
                </Popover>
                <Button className="mt-6 bg-zinc-950 border-white">Generate 🪄</Button>
            </Card>

            <Card className="flex flex-col bg-slate-900 p-7 min-w-96 max-w-96">
                <h1 className="text-white">Your itinerary will be shown here, click generate...</h1>
            </Card>
        </main>
    );
}

export default Planner;