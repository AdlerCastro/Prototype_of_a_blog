'use server'

export async function getPosts() {

    try {
        const res = await fetch("http://localhost:3000/api/getPosts")

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const posts = await res.json()
        // posts.results.forEach((post:any, index:any) => {
        //     post.id = index + 1;
        // })

        return posts;
        
    } catch (e:any) {
        return{
            error: e.message
        }
    }
  }