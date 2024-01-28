'use client'

import React, { useEffect } from "react"
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
import { Card } from "@/components/ui/card"
import axios from "axios"
import Map from '@/components/Map'


function UserInfo() {
    const [startDate, setStartDate] = React.useState<Date>()
    const [endDate, setEndDate] = React.useState<Date>()
    const [country, setCountry] = React.useState<String>()
    const [city, setCity] = React.useState<String>()
    const [additionalInfo, setAdditionalInfo] = React.useState<String>()
    const [loading, setLoading] = React.useState<Boolean>()
    const [threadId, setThreadId] = React.useState<String>()
    const [itinerary, setItinerary] = React.useState<String>('')
    const [lat, setLat] = React.useState<number>(45.5031824)
    const [lon, setLon] = React.useState<number>(-73.5698065)
    const [mapKey, setMapKey] = React.useState<number>(0);

    useEffect(() => {
        axios.get('https://va7kdap9f9.execute-api.us-east-2.amazonaws.com/dev/api/chat/createthread')
            .then((response) => {
                setThreadId(response.data.thread_id);
            })
    }, []);

    const handleSubmit = () => {
        axios.get(`https://geocode.maps.co/search?q=${city}&api_key=65b666cf384db290066286xqbdf08a8`)
            .then((response) => {
                setLat(response.data[0].lat)
                setLon(response.data[0].lon)
                setMapKey((prevKey) => prevKey + 1);
            })

        setLoading(true);
        const axiosPromise = axios.get('https://va7kdap9f9.execute-api.us-east-2.amazonaws.com/dev/api/chat/sendrequest', {
            params: {
                'thread_id': threadId,
                'request': `I want to travel from ${startDate} to ${endDate} to ${city}, ${country}. Generate me an itinerary that is friendly to the following restrictions, ${additionalInfo}.`
            }
        })
            .then((response) => {
                setItinerary(response.data.response[0])
                setLoading(false);
            });
    }

    return (
        <>
            <Card className={`flex flex-col max-w-full lg:max-w-lg bg-slate-900 p-6 m-7 ${itinerary === '' ? '' : 'hidden'}`}>
                <div className="grid w-full max-w-sm items-center gap-2.5">
                    <Label htmlFor="email" className="text-white">Country</Label>
                    <Input onChange={(event) => setCountry(event.target.value)} type="text" name="country" placeholder="Canada" className="bg-zinc-950 border-white text-white" />
                </div>
                <div className="pt-6 grid w-full max-w-sm items-center gap-2.5">
                    <Label htmlFor="email" className="text-white">City</Label>
                    <Input onChange={(event) => setCity(event.target.value)} type="text" name="city" placeholder="Montreal" className="bg-zinc-950 border-white text-white" />
                </div>
                <div className="pt-6 grid w-full max-w-sm items-center gap-2.5">
                    <Label htmlFor="email" className="text-white">Additional Info</Label>
                    <Input onChange={(event) => setAdditionalInfo(event.target.value)} type="text" name="additionalInfo" placeholder="Family friendly, halal, etc." className="bg-zinc-950 border-white text-white" />
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
                    <PopoverContent className="w-auto p-0 bg-zinc-950 border-white">
                        <Calendar
                            mode="single"
                            selected={endDate}
                            onSelect={setEndDate}
                            initialFocus
                            className="text-slate-500"
                        />
                    </PopoverContent>
                </Popover>
                <Button onClick={handleSubmit} className="mt-6 bg-zinc-950 border-white border-2">Generate 🪄</Button>
            </Card>
            <Card className={`bg-slate-900 p-7 m-7 max-w-full lg:max-w-lg ${itinerary === '' ? 'hidden' : ''}`}>
                <h1 className="text-white">{itinerary}</h1>
            </Card>
            {loading ? (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>) : ''}
            <Map key={mapKey} lat={lat} lon={lon} />
        </>
    );
}

export default UserInfo;