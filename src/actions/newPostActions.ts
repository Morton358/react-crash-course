import { redirect } from 'react-router-dom';

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const postData = {
    name: formData.get('name') as string,
    text: formData.get('text') as string,
  };
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  return redirect('/');
}
