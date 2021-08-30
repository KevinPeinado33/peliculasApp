import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';

import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';

export const useMovies = () => {

    const [ isLoading, setIsLoading] = useState(true);

    const [ peliculasEnCine, setPeliculasEnCine ] = useState<Movie[]>( [] );

    const geMovies = async () => {

        const response = await movieDB.get<MovieDBNowPlaying>('/now_playing');

        setPeliculasEnCine( response.data.results );
        setIsLoading( false );

    }

    useEffect( () => { geMovies(); }, [] );

    return { peliculasEnCine, isLoading };

}
