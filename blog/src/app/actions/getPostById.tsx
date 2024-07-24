'use server'

export async function getPostById(_id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/getPostById/${_id}`);
    console.log(res)
    console.log('Resgatando o post com ID:', _id);

    if (!res.ok) {
      console.log('Response status:', res.status);
      throw new Error('Falha ao resgatar o post');
    }

    const post = await res.json()

    return post;

  } catch (e: any) {
    throw new Error(e.message);
  }
}