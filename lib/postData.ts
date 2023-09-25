import { db } from '@/app/db';
import { revalidatePath } from 'next/cache';

export async function postData(formData: FormData) {
  'use server';

  const data = await db.comment.create({
    data: {
      message: formData.get('comment') as string,
      movieId: formData.get('id') as string,
    },
  });

  revalidatePath('/movie/[id]');
}
