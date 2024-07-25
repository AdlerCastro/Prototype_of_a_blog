'use server'

export async function getPostById(_id: string) {
  try {
    console.log('Resgatando o post com ID:', _id);
    const res = await fetch(`http://localhost:3000/api/getPostById/${_id}`);
    console.log(res)

    if (!res.ok) {
      console.log('Response status:', res.status);
      throw new Error(`Falha ao resgatar o post! status: ${res.status}`);
    }

    const post = await res.json()

    return post;

  } catch (e: any) {
    throw new Error(e.message);
  }
}