import { client } from "../libs/sanity/index";
export async function getPosts() {
  return await client.fetch(
    `*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`,
  );
}
export async function getPost(slug:any) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    },
  );
}

export async function getAnimal(slug:any) {
  return await client.fetch(
    `*[_type == "animal" && slug.current == $slug][0]`,
    {
      slug,
    },
  );
}

export async function getAnimals() {
  return await client.fetch(
    `*[_type == "animal" && defined(slug.current)] | order(_createdAt desc)`,
  );
}