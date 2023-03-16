import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Movie = ({  id  ,title , poster_path, release_date}) => {
    const imagePath = `https://image.tmdb.org/t/p/original`
  return (
    <div>
        <p>{id}</p>
        <h1>{title}</h1>
        <p>{release_date}</p>
        <Link href={`/${id}`} >
            <Image src={imagePath + poster_path} alt={title} width = {500} height = {600} />
        </Link>
    </div>
  )
}

export default Movie