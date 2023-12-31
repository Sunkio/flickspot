import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const url = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_DB_API}`,
    },
    next: {
      revalidate: 10,
    },
  });
  return url.json();
}

export default async function Home() {
  const data: TrendingToday = await getData();

  // console.log(data);
  return (
    <main className='bg-white py-6 sm:py-8 lg:py-22 mt-8'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-10 md_mb-16'>
          <h2 className='mb4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>Top Trending Movies</h2>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8'>
          {data.results.map((movie: any) => (
            <div
              key={movie.id}
              className='flex flex-col overflow-hidden rounded-lg border active:border-amber-600 click-3d click-3d:active bg-white'
            >
              <Link href={`/movie/${movie.id}`}>
                <div
                  className='group relative block h-48 overflow-hidden bg-gray-100
                       md:h-64'
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    width={500}
                    height={'500'}
                    alt='movie banner image'
                    className="transition duration-200 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className='flex flex-1 flex-col p-4 sm:p-6'>
                  <h2 className='mb-2 text-lg font-semibold text-gray-800 hover:text-amber-600'>{movie.title}</h2>
                  <p className='text-gray-500 line-clamp-3'>{movie.overview}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
