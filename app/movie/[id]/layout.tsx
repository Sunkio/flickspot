import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

async function getData(id: string) {
  const url = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_DB_API}`,
    },
    next: {
      revalidate: 60,
    },
  });

  return url.json();
}
const Movie = async ({ params, children }: { params: { id: string }; children: ReactNode }) => {
  const data: Movie = await getData(params.id);

  return (
    <main className='min-h-screen p-10'>
      <div className='h-[40vh] relative'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          fill
          alt='Image of movie'
          className='object-cover w-full rounded-lg'
        />
      </div>
      <h1 className='text-4xl font-bold text-center pt-5'>{data.title}</h1>
      <div className='flex gap-x-10 mt-10'>
        <div className='w-1/2 font-medium'>
          <h2>
            <span className='underline'>Homepage:</span>{' '}
            <Link href={data.homepage} target='_blank'>
              Link
            </Link>
          </h2>
          <h2>
            <span className='underline'>Original Language</span> {data.original_language}
          </h2>
          <p>
            <span className='underline'>Overview</span> {data.overview}
          </p>
          <p>
            <span className='underline'>Release Date:</span> {data.release_date}
          </p>
        </div>
        <div className='w-1/2 font-medium bg-gray-100'>{children}</div>
      </div>
    </main>
  );
};

export default Movie;
