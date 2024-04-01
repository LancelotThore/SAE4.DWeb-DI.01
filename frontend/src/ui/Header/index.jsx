export default function Header() {
    return (
        <header className="relative w-full min-h-[27.5rem] flex flex-col justify-center md:justify-start md:flex-row md:items-center">
            <div className="w-[68%] h-full right-0 absolute bg-hero bg-cover"></div>
            <div className="flex flex-col justify-center h-full z-10 p-4 mt-0">
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