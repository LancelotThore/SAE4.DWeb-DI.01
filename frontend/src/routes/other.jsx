import { Link, useLoaderData } from "react-router-dom";
import { fetchUser } from "../lib/loaders";
import { Plus } from "../ui/Icons";
import Button from "../ui/Button";

export async function loader() {
    return await fetchUser();
}

export default function Other() {
    const user = useLoaderData();

    const handleLogout = () => {
        window.location.href = 'http://193.168.145.123:8080/logout';
    }

    const handleLogin = () => {
        window.location.href = 'http://193.168.145.123:8080/login';
    }

    const handleRegister = () => {
        window.location.href = 'http://193.168.145.123:8080/register';
    }

    return (
        <>
            {user.error === "Not logged in" ? (
                <div className="grid mt-24 px-10 grid-cols-2 gap-2">
                    <Button onClick={handleLogin} intent="connexionBtn" size="small">Se connecter</Button>
                    <Button onClick={handleRegister} intent="inscriptionBtn" size="small">S'inscrire</Button>
                </div>
            ) : (
                <div className="flex flex-col mt-24 px-7 gap-8">
                    <div className="flex items-starter px-3.5 gap-4">
                        <img className="w-16 h-16 rounded-md" src={`./profils/${user.image}`} alt={user.name} />
                        <div className="flex flex-col gap-1">
                            <h1 className="text-forground font-bold text-base capitalize">{user.name}</h1>
                            <p className="cursor-pointer text-forground/50 text-sm" onClick={handleLogout}>Se déconnecter</p>
                        </div>
                    </div>
                    <div className="w-full h-px bg-forground/25"></div>
                    <Link to="/playlist" className="flex items-center gap-3.5">
                        <Plus className="w-8 h-8 text-forground/50" />
                        <p className="font-semibold">Ma Playlist</p>
                    </Link>
                </div>
            )}
        </>
    )

}