import { ICharacter, IEpisode } from "../generalTypes";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import ReactSelectFilter, {
  IReactSelectOption,
} from "../components/FilterComponents/ReactSelectFilter";
import queryString from "query-string";
import { Navigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import { useEpisodeCharacters, useEpisodes } from "../fetchApi/fetchEpisode";
import { motion } from "framer-motion";
import { AxiosError } from "axios";
import { episodeEpisodesList, episodeNamesList } from "../api";

interface ISearchParams {
  page: number;
  name?: string;
  episode?: string;
}
const loadPageWithAnimation = {
  initial: { y: "-100vw", opacity: 0 },
  animate: { y: "0vw", opacity: 1, transition: { duration: 1.5 } },
};

function Episodes() {
  const [page, setPage] = useState<number>(1);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [episodeFilter, setEpisodeFilter] = useState<string>("");

  const searchParams: ISearchParams = { page: page };
  if (nameFilter) searchParams.name = nameFilter;
  if (episodeFilter) searchParams.episode = episodeFilter;
  const queryFilters: string = queryString.stringify(searchParams);
  //! useQuery to get all episodes
  const {
    isLoading: isEpisodesLoading,
    isError: isEpisodesError,
    data: episodeData,
    error: episodesError,
  } = useEpisodes(page, nameFilter, episodeFilter);
  useEffect(() => {
    setPage(1);
  }, [nameFilter, episodeFilter]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event);
    setPage(value);
  };

  let charactersArray: string[] = [];
  const characters = episodeData?.data?.characters;
  if (Array.isArray(characters)) {
    const arr = characters?.map((item) => item.split("/").at(-1));
    charactersArray = arr;
  } else {
    const item = characters?.split("/").at(-1);
    charactersArray.push(item);
  }
  const { data: episodeCharactersData } = useEpisodeCharacters(charactersArray);
  const chnageReaceSelectNamesHandler = (e: unknown) => {
    setNameFilter((e as IReactSelectOption).value);
    setEpisodeFilter("");
  };
  const chnageReaceSelectEpisodesHandler = (e: unknown) => {
    setEpisodeFilter((e as IReactSelectOption).value);
    setNameFilter("");
  };

  return (
    <div className={`${isEpisodesLoading && "w-full"}`}>
      <div className="container max-w-sm mx-auto flex flex-col gap-3 mb-8 w-full">
        <ReactSelectFilter
          placeHolder="search name..."
          value={nameFilter}
          options={episodeNamesList}
          chnageReaceSelectHandler={chnageReaceSelectNamesHandler}
        />
        <ReactSelectFilter
          placeHolder="search episode..."
          value={episodeFilter}
          options={episodeEpisodesList}
          chnageReaceSelectHandler={chnageReaceSelectEpisodesHandler}
        />
      </div>
      {isEpisodesLoading ? (
        <div className="w-full flex justify-center items-center">
          <Loader size={50} />
        </div>
      ) : (
        false
      )}
      {isEpisodesError && episodesError instanceof AxiosError && (
        <div>{toast.error(episodesError?.response?.data?.error)}</div>
      )}
      {episodeData && episodeCharactersData && (
        <motion.div
          variants={loadPageWithAnimation}
          initial="initial"
          animate="animate"
        >
          <Navigate to={`/episodes/?${queryFilters}`} />
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap  justify-center gap-4">
              {episodeData &&
                episodeCharactersData &&
                episodeData.data.results.map((item: IEpisode) => (
                  <Episode
                    key={item.id}
                    episode={item}
                    characters={episodeCharactersData.data.results}
                  />
                ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-16">
            <Pagination
              color="primary"
              MuiPaginationItem-textSecondary
              count={episodeData.data.info.pages}
              page={page}
              onChange={handleChange}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Episodes;

//! one episode component
interface IEpisodeProps {
  episode: IEpisode;
  characters: ICharacter[];
}

const hoverCharacter = {
  scale: 1.13,
  transition: { duration: 0.5, type: "spring", stiffness: 200 },
};
function Episode({ episode, characters }: IEpisodeProps) {
  return (
    <motion.div
      whileHover={hoverCharacter}
      className="flex h-36 w-[320px] rounded-md overflow-hidden text-xs bg-color-secondary"
    >
      {/*! image section */}
      <div>
        <img
          className="w-full h-full object-cover"
          src={"/images/episodePoster.png"}
          alt={episode.episode}
        />
      </div>
      {/*! info section */}
      <div className="flex-1 flex flex-col  p-3">
        <div className="flex flex-col gap-0.5 h-12 mb-3">
          <p>episode: {episode.episode}</p>
          <p>
            name:{" "}
            {episode.name.length > 13
              ? episode.name.substring(0, 13) + "..."
              : episode.name}
          </p>
          <h2 className="font-bold">characters</h2>
        </div>
        <div className="h-24 scrollBar">
          <div className="flex flex-col gap-0.5">
            {characters &&
              [characters].flat().map((character: ICharacter) => {
                return (
                  <div className="flex items-center gap-2" key={character.id}>
                    <div className="w-5 h-5 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={character.image}
                        alt={character.name}
                      />
                    </div>
                    <p>
                      {character.name.length > 13
                        ? character.name.substring(0, 13) + "..."
                        : character.name}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
