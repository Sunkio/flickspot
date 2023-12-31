'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className='bg-amber-600 active:bg-amber-700 click-3d click-3d:active px-4 py-2 rounded-lg text-white'
    >
      {pending ? <>loading...</> : <>Publish</>}
    </button>
  );
};

export default SubmitButton;
