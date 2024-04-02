import Button from "../Button";

export default function Header({data}) {
    return (
        <header className="relative w-full min-h-[27.5rem] flex flex-col justify-center md:justify-start md:flex-row md:items-center">
            <div className="w-full md:w-[68%] h-96 md:h-full right-0 md:absolute bg-cover relative" style={{ backgroundImage: `url(/affiches/${data.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent sm:from-background to-transparent"></div>
            </div>
            <div className="flex flex-col justify-center h-full z-10 px-7 -mt-5 md:w-9/12">
                <div className="flex flex-col">
                    <p className="text-base order-1">Le interviste di Peter Gomez</p>
                    <h1 className="text-4xl font-bold order-2">{data.name}</h1>
                    <ul className="flex pt-1 pb-4 gap-2.5 text-sm opacity-60 order-3">
                        {data.category.map((cat) => (
                            <li key={cat.id}>{cat.name}</li>
                        ))}
                    </ul>
                    <Button intent="tertiary" size="small" className="order-4 sm:order-5 sm:w-fit">Guarda ora</Button>
                    <p className="my-6 order-5 sm:order-4">{data.description}</p>
                </div>
            </div>
        </header>
    );
}