import { ArrowRight, PageZoom, Plus, Tick } from "../Icons";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAddPlaylist, fetchPlaylist, fetchRemovePlaylist, fetchUser } from "../../lib/loaders";
import { useMediaQuery } from 'react-responsive';

export default function Header({ data }) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const [playlist, setPlaylist] = useState({ error: "Not logged in" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchPlaylist();
      setPlaylist(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  const handlerAdd = async (id) => {
    await fetchAddPlaylist({ id });
    let data = await fetchPlaylist();
    setPlaylist(data);
  }

  const handlerRemove = async (id) => {
    await fetchRemovePlaylist({ id });
    let data = await fetchPlaylist();
    setPlaylist(data);
  }

  return (
    <header className="relative w-full min-h-[27.5rem] flex flex-col justify-center md:justify-start md:flex-row md:items-center">
      <div className="w-full md:w-[68%] h-96 md:h-full right-0 md:absolute bg-cover relative" style={{ backgroundImage: `url(/affiches/${data.image})` }}>
        <div className="absolute inset-0 bg-gradient-to-br md:bg-gradient-to-r from-background from-15% md:from-0% via-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background from-0% via-transparent"></div>
      </div>
      <div className="flex flex-col justify-center h-full z-10 px-7 -mt-5 md:w-9/12">
        <div className="flex flex-col">
          <p className="text-base">Le interviste di Peter Gomez</p>
          <h1 className="text-4xl font-bold">{data.name}</h1>
          <ul className="flex pt-1 pb-4 gap-2.5 text-sm opacity-60 flex-wrap">
            {data.category.map((cat) => (
              <li key={cat.id}>{cat.name}</li>
            ))}
          </ul>
          {isSmallScreen ?
            <>
              <p className="my-6">{data.description}</p>
              <Link className="flex w-full sm:w-fit mb-6" to={`/regarder/${data.id}`}>
                <Button intent="tertiary" size="small" className="flex w-full sm:w-fit"><ArrowRight className="h-5 w-5 mr-1" />Regarder</Button>
              </Link>
              <div className="flex items-center justify-center gap-6">
                <Link to={`/film/${data.id}`}>
                  <Button intent="svgBtn" size="none"><PageZoom className="w-full h-full" /></Button>
                </Link>
                {playlist.error !== "Not logged in" ? (
                  playlist.some(movie => movie.id === data.id) ? (
                    <Button onClick={() => handlerRemove(data.id)} intent="svgBtn" size="none"><Tick className="w-full h-full" /></Button>
                  ) : (
                    <Button onClick={() => handlerAdd(data.id)} intent="svgBtn" size="none"><Plus className="w-full h-full" /></Button>
                  )
                ) : (
                  <></>
                )}
              </div>
            </>
            :
            <>
              <p className="my-6">{data.description}</p>
              <div className="flex items-center justify-center sm:justify-start gap-6 order-6 sm:order-6">
                <Link className="flex w-full sm:w-fit" to={`/regarder/${data.id}`}>
                  <Button intent="tertiary" size="small" className="flex w-full sm:w-fit"><ArrowRight className="h-5 w-5 mr-1" />Regarder</Button>
                </Link>
                <Link to={`/film/${data.id}`}>
                  <Button intent="svgBtn" size="none"><PageZoom className="w-full h-full" /></Button>
                </Link>
                {playlist.error !== "Not logged in" ? (
                  playlist.length > 0 && playlist.some(movie => movie.id === data.id) ? (
                    <Button onClick={() => handlerRemove(data.id)} intent="svgBtn" size="none">
                      <Tick className="w-full h-full" />
                    </Button>
                  ) : (
                    <Button onClick={() => handlerAdd(data.id)} intent="svgBtn" size="none">
                      <Plus className="w-full h-full" />
                    </Button>
                  )
                ) : (
                  <></>
                )}
              </div>
            </>
          }

        </div>
      </div>
    </header>
  );
}