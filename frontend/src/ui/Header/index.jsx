import { ArrowRight } from "../Icons";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Header({data}) {
    return (
        <header className="relative w-full min-h-[27.5rem] flex flex-col justify-center md:justify-start md:flex-row md:items-center">
            <div className="w-full md:w-[68%] h-96 md:h-full right-0 md:absolute bg-cover relative" style={{ backgroundImage: `url(/affiches/${data.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-br md:bg-gradient-to-r from-background from-15% md:from-0% via-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background from-0% via-transparent"></div>
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
                    <Link className="flex w-full order-4 sm:order-5" to={`/regarder/${data.id}`}>
                        <Button intent="tertiary" size="small" className="flex w-full sm:w-fit"><ArrowRight className="h-5 w-5 mr-1"/>Regarder</Button>
                    </Link>
                    <p className="my-6 order-5 sm:order-4">{data.description}</p>
                </div>
            </div>
        </header>
    );
}