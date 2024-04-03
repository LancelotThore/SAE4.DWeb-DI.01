import CataloguePage from "./cataloguePage";

export default function SearchPage() {
    return (
        <div className="mt-20">
            <input className="mx-3.5 w-[-webkit-fill-available] px-4 py-2 border-none bg-navBackground text-forground" type="text" placeholder="Chercher sur RaiPlay..."></input>
        <CataloguePage />
        </div>
    )
}