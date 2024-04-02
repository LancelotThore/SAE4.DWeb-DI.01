export default function Header({data}) {
    return (
        <header className="relative w-full min-h-[27.5rem] flex flex-col justify-center md:justify-start md:flex-row md:items-center">
            <div className="w-full md:w-[68%] h-full right-0 absolute bg-cover" style={{ backgroundImage: `url(/affiches/${data.image})` }}></div>
            <div className="flex flex-col justify-center h-full z-10 p-7 mt-0">
                <div className="flex flex-col gap-2">
                    <p className="text-base">Le interviste di Peter Gomez</p>
                    <h1 className="text-4xl font-bold">{data.name}</h1>
                    <ul className="flex pt-1 pb-4 gap-2.5 text-sm opacity-60">
                        {data.category.map((cat) => (
                            <li key={cat.id}>{cat.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}