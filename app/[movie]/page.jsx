import Image from "next/image";




export default async function Movie ({params}){

    const {movie} = params;
    const imagePath = `https://image.tmdb.org/t/p/original`
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US&page=1` );
   
        const res = await data.json();
    return(
        <div>
            <div>

            <h1 className="text-2xl" >{res.title}</h1>
            <h1 className="text-lg" >{res.release_date}</h1>
            <h2>Runtime: {res.runtime} minutes </h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-sm " >{res.status}</h2>
           
           <Image 
            className="my-12 w-full"
            src={imagePath + res.backdrop_path}
            width = {600}
            height = {600}
            priority
           />
           <p>{res.overview}</p>
            </div>

        </div>
    )
}