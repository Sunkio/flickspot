import { db } from '@/app/db';
import Image from 'next/image';
import Link from 'next/link';
import SubmitButton from '@/components/SubmitButton';
import { getMovieData } from '@/lib/getMovieData';
import { postData } from '@/lib/postData';

export const revalidate = 0;

async function getCommentData(id: string) {
  const data = await db.comment.findMany({
    where: {
      movieId: id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

const Page = async ({ params }: { params: { id: string } }) => {
  const movieData: Movie = await getMovieData(params.id);

  const commentData = await getCommentData(params.id);
  return (
    <main className='min-h-screen p-10 mt-8'>
      <div className='h-[40vh] relative'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
          fill
          alt='Image of movie'
          className='object-cover w-full rounded-lg'
        />
      </div>
      <h1 className='text-4xl font-bold text-center pt-5'>{movieData.title}</h1>
      <div className='flex gap-x-10 mt-10'>
        <div className='w-1/2 font-medium'>
          <h2>
            <span className='underline'>Homepage:</span>{' '}
            <Link href={movieData.homepage} target='_blank' className="hover:text-amber-600">
              Link
            </Link>
          </h2>
          <h2>
            <span className='underline'>Original Language</span> {movieData.original_language}
          </h2>
          <p>
            <span className='underline'>Overview</span> {movieData.overview}
          </p>
          <p>
            <span className='underline'>Release Date:</span> {movieData.release_date}
          </p>
        </div>
        <div className='w-1/2 font-medium rounded-lg border p-3'>
          <h2 className='text-xl font-semibold mb-5'>Your Opinion</h2>
          <div>
            <form action={postData}>
              <textarea
                name='comment'
                placeholder='Add your comment...'
                className='w-full border border-amber-600 rounded-lg p-2'
              ></textarea>
              <input type='hidden' name='id' value={params.id} />
              <SubmitButton />
            </form>
          </div>
          <div className='mt-5 flex flex-col gap-y-3'>
            {commentData.map((post) => (
              <div key={post.id}>
                <p>{post.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
