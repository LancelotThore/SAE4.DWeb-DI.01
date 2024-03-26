import Card from "./Card";


export default function List(props) {

    

    return (
        <section>
            <p>A ne pas manquer</p>
            <ul className="flex gap-1">
                <li className="w-32"><Card /></li>
                <li className="w-32"><Card /></li>
                <li className="w-32"><Card /></li>
            </ul>
        </section>
    );
}