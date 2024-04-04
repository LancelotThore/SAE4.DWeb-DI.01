import { useLoaderData } from "react-router-dom";
import { fetchPlaylist } from "../lib/loaders";
import { ListCat, ListResult } from "../ui/List";

export async function loader() {
    return await fetchPlaylist();
}

export default function Other() {
    const playlist = useLoaderData();

    return (
        <div>
            {playlist && playlist.length > 0 ? (
                <ListResult results={playlist} />
            ) : (
                <></>
            )}
        </div>
    )
}