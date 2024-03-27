export default function Header() {
    return (
        <header className="relative w-full h-fit flex flex-col md:flex-row md:items-center">
            <div className="w-full h-[47vh] bg-hero bg-cover md:order-2"></div>
            <div className="relative z-10 p-4 -mt-32 md:mt-0 md:order-1">
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