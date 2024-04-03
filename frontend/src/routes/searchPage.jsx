import Button from "../ui/Button";
import { Search } from "../ui/Icons";
import CataloguePage from "./cataloguePage";

export default function SearchPage() {
    return (
        <div className="mt-20">
            <form className="flex w-full px-3.5 items-center">
                <input className="w-full px-4 border-none bg-navBackground text-forground rounded-l-lg border-none appearence-none outline-none sm:w-4/6 h-12" autoComplete="off" type="text" placeholder="Chercher sur RaiPlay..."></input>
                <Button intent="searchBtn" className="h-12"><Search className="h-8"/></Button>
            </form>
        <CataloguePage />
        </div>
    )
}