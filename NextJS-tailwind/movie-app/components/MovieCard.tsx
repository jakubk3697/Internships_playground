import Image from 'next/image'
import Link from 'next/link'

interface keyable {
    [key: string]: any;
}

export const MovieCard = ({ movie }: keyable) => {
    return (
        <>
            <Link href={`movie/${movie.id}`}>
                <div key={movie.id} className="bg-white shadow-sm rounded-md cursor-pointer">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        width={800}
                        height={800}
                        alt={movie.title}
                        className="rounded-t-md"
                    />
                    <div className="px-6 py-2">
                        <div className="font-bold text-xl mb-1">{movie.title}</div>
                        <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}