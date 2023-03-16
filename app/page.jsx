
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
import Movie from "./Movie";

export default async function Home() {
  // const { API_KEY } = process.env;
   const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
   
   const res = await data.json()
   
  return (
    <main  >
    

<div className="grid gap-16 grid-cols-fluid" > 
{
  res.results.map((movie)=>{
    return(
      <Movie
      key={movie.id}
      id = {movie.id}
      title={movie.title}
      poster_path={movie.poster_path}
      release_date={movie.release_date}
      />
      )
      
      
    })
}
    </div>
    </main>
  )
}
