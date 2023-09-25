export async function getMovieData(id: string) {
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
