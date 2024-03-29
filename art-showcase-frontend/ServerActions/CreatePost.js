"use server";

export default async function CreatePost(formData, token, userData, postInfo, imgNames) {

  const response = await fetch(`${process.env.BACKEND_URL}/add-post`, {
    method: "post",
    headers: {
      Authorization: "Bearer " + token,
      userId: userData.userId,
      email: userData.email,
      name: userData.name,
      profilePicUrl: userData.profilePicUrl,
      title: postInfo.title,
      description: postInfo.description,
      imgNames: JSON.stringify(imgNames)
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Http error! status: ${response.status}");
  }
  const result = await response.json();
  

  
  return result;
}
