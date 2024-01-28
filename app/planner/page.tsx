import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Planner() {
    return (
        <main className="flex min-h-screen flex-col md:flex-row justify-evenly items-center">
            <div className="flex flex-col">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email" className="text-white">Country</Label>
                    <Input type="email" id="email" placeholder="Email" className="bg-slate-900 border-slate-900 text-white" />
                </div>
                <div className="pt-6 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email" className="text-white">City</Label>
                    <Input type="email" id="email" placeholder="Email" className="bg-slate-900 border-slate-900 text-white" />
                </div>
                <div className="pt-6 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email" className="text-white">Additional Info</Label>
                    <Input type="email" id="email" placeholder="Family friendly, halal, etc." className="bg-slate-900 border-slate-900 text-white" />
                </div>
            </div>
        </main>
    );
}

export default Planner;