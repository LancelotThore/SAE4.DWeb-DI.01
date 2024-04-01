export default function Header() {
    return (
        <header className="relative w-full h-fit flex flex-col md:flex-row md:items-center">
            <div className="w-full min-h-[47vh] md:-top-[4.5rem] absolute bg-hero bg-cover"></div>
            <div className="flex flex-col justify-center h-[47vh] z-10 p-4 -mt-32 md:mt-0">
                <div className="flex flex-col gap-2">
                    <p className="text-base">Le interviste di Peter Gomez</p>
                    <h1 className="text-4xl font-bold"> Pif a 'La Confessione'</h1>
                    <ul className="flex pt-1 pb-4 gap-2.5 text-sm opacity-60">
                        <li>La Confessione</li>
                        <li>St 2024</li>
                        <li>28 min</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}