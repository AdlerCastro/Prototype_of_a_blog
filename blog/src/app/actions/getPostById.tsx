'use server'

export async function getPostById(_id: any) {
  try {
    const res = await fetch(`/api/getPosts/getPostById/${_id}`);
    console.log('Resgatando o post com ID:', _id);

    if (!res.ok) {
      console.log('Response status:', res.status);
      throw new Error('Falha ao resgatar o post');
    }

    const posts = await res.json()

    return posts;

  } catch (e:any) {
    return{
        error: e.message
    }
  }
}