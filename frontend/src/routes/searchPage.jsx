import React, { useState } from 'react';
import { Search } from "../ui/Icons";
import CataloguePage from "./cataloguePage";
import { fetchSearch } from "../lib/loaders"
import Button from '../ui/Button';
import { ListResult } from '../ui/List';

export default function SearchPage() {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);

    const loader = async () => {
        setIsLoading(true);
        const result = await fetchSearch({ query });
        setResults(result);
        setIsLoading(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loader();
    }

    return (
        <div className="mt-20">
            <h1 className="text-center font-bold pb-4">Recherche</h1>
            <form className="flex w-full px-3.5 items-center" onSubmit={handleSubmit}>
                <input
                    className="w-full px-4 border-none bg-navBackground text-forground rounded-l-lg appearence-none outline-none sm:w-4/6 h-12"
                    autoComplete="off"
                    type="text"
                    placeholder="Chercher sur RaiPlay..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <Button intent="searchBtn" className="h-12" type="submit">
                    <Search className="h-8" />
                </Button>
            </form>
            <div>
                {isLoading ? 'Chargement...' : <ListResult results={results} />}
            </div>
            <CataloguePage />
        </div>
    )
}