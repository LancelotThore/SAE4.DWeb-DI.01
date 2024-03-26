import Card from "./Card";

export async function loader({params}) {
    let response = await fetch("http://localhost:8080/api/movie/1");
    let data = await response.json();
    console.log(data);
}

export default function List(props) {

    return (
        <section>
            <p>A ne pas manquer</p>
            <ul className="flex gap-1">
                <li className="w-32"><Card /></li>
            </ul>
        </section>
    );
}