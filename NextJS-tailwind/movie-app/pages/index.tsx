import { Hero } from "@/components/Hero";
import axios from "axios";

type moviesProps = {
  movies: {
    name: string;
  }
}

export default function Home({movies}: moviesProps) {
  console.log(movies);
  return (
    <>
      <Hero/>
    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);

  return {
    props: {
      movies: res.data
    }
  }
}

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1