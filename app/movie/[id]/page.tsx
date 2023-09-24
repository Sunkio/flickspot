import {revalidatePath} from "next/cache";
import {db} from "@/app/db";
import SubmitButton from "@/components/SubmitButton";


export const revalidate = 0

async function getData(id: string) {
  const data = await db.comment.findMany({
    where: {
      movieId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

async function postData(formData: FormData) {
    "use server";

    const data = await db.comment.create({
        data: {
            message: formData.get('comment') as string,
            movieId: formData.get("id") as string,
        }
    });

    revalidatePath("/movie/[id]");
}

const Page = async ({params} : {params: {id: string}})  => {
  const data = await getData(params.id);

  return (
      <div className="rounded-lg border p-3">
        <h2 className="text-xl font-semibold mb-5">Your Opinion</h2>
        <div>
          <form action={postData}>
            <textarea name="comment" placeholder="Add your comment..." className="w-full border border-teal-500 rounded-lg p-2"></textarea>
              <input type="hidden" name="id" value={params.id} />
              <SubmitButton />
          </form>
        </div>
        <div className="mt-5 flex flex-col gap-y-3">
            {data.map((post) => (
                <div key={post.id}>
                    <p>{post.message}</p>
                </div>

            ))}
        </div>
      </div>
  );
};

export default Page;
