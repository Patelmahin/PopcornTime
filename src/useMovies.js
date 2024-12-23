import {useState, useEffect} from "react";

const KEY = "80e49ca6"

export function useMovies(query,callback){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(function () {
        const controller = new AbortController();
        async function fetchMovies() {
          try {
              setIsLoading(true);
            setError("");
            const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`
                , { signal: controller.signal });
                if (!res.ok)
                    throw new Error("Something went wrong with fetching movies!!")
                const data = await res.json();
                if (data.Response === "False") throw new Error("Movie not found!")
                    setMovies(data.Search);
            setError("")
            console.log(data);
            
        }
        catch (err) {
            console.error(err.message);
            if (err.name !== "AbortError") {
                setError(err.message)
            }
        }
        finally {
            setIsLoading(false);
            
        }
    }
        if (query.length < 3) {
          setMovies([]);
          setError("");
          return;
        }
        fetchMovies();
        callback?.();
        return function () {
            controller.abort();
        }
      }, [query])
    
    return{movies,isLoading,error}
}