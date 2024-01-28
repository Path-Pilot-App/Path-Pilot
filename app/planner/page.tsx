'use server'

import { Card } from "@/components/ui/card"
import UserInfo from "./UserInfo";
async function Planner() {

    return (
        <main className="flex min-h-screen flex-col md:flex-row justify-evenly items-center">
            <UserInfo />
        </main>
    );
}

export default Planner;