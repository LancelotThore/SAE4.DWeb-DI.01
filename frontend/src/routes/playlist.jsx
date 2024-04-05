import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ListResult } from '../ui/List';
import { fetchPlaylist } from '../lib/loaders';

export async function loader() {
    return await fetchPlaylist();
}

export default function Playlist() {
    const playlist = useLoaderData();

    return (
        <div className="flex flex-col mt-24 px-10">
            {playlist && playlist.length > 0 ? (
                <ListResult results={playlist} />
            ) : (
                <></>
            )}
        </div>
    )
}