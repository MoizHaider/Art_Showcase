import Post from "../../components/Post/Post";
import LoadMorePosts from "../../components/LoadMorePosts";
import EditProfileBtn from "../../components/profile/EditProfileBtn";
import CreatePostSection from "../../components/profile/CreatePostSection";
import { cookies } from "next/headers";
import NewPost from "../../components/profile/NewPost";
import GetProfilePosts from "@/ServerActions/GetProfilePosts";
import Image from "next/image";
import TypeWriter from "../../components/TypeWriter";
import { redirect } from "next/navigation";

async function page({ params: { id } }) {
  // the id is the id of the user created the post which might not be the current user.
  //------------------ not logged in redirect logic ------------------------------------------------
  let isToken = cookies().get("token");
  if (!isToken) {
    redirect("/login");
  }
  const isTokenVal = cookies().get("token").value;
  if (!isTokenVal) {
    // Redirect user to login page
    redirect("/login");
  }
  //------------------------------------------------------------------------------------------------
  const token = cookies().get("token").value;
  const userId = cookies().get("userId").value; // current user 
  const email = cookies().get("email").value;
  const name = cookies().get("name").value;
  const profilePicUrl = cookies().get("profilePicUrl").value;

  const currentUser = userId === id ? true : false;

  const data = await GetProfilePosts(1, id, token, true);

  const userData = {
    name,
    profilePicUrl,
  };
  const backendAddress = `${process.env.BACKEND_URL}/`;
  //grid grid-cols-profileDesktopGridCols items-start
  return (
    <>
      <div className="w-[100vw] ">
        <header className="col-start-1 col-end-3 w-screen h-screen flex flex-col items-center justify-center lg:justify-start relative">
          <div className="relative w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full mt-10 lg:mt-[100px]">
            <Image
              src={`${backendAddress + data.userData.profilePicUrl}`} // Replace with the actual path to your background image
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full rounded-full shadow-2xl border-white border-4 object-cover layout-fill"
            />
          </div>
          {/* Name and Title */}
          <div className="text-white text-center relative flex flex-col md:gap-y-2 z-10 mt-4">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold font-sans">
              {data.userData.name}
            </h1>
            <h2 className="text-xl sm:text-3xl md:text-3xl lg:text-3xl text-gray-300">
              {data.userData.title}
            </h2>
          </div>
          <Image
            src={`${backendAddress + data.userData.backgroundImgUrl}`} // Replace with the actual path to your full-width image
            alt="Full Width Image"
            layout="fill"
            objectFit="cover"
            className="z-[-1] absolute top-0 left-0 right-0 bottom-0"
          />
        </header>
        <div className="block lg:flex ">
          <main className="text-gray-800 lg:text-primary lg:w-[40%] xl:w-[35%] lg:sticky lg:top-0 lg:h-[100vh] lg:bg-gray-800  p-[1.5rem]">
            {/* <EditProfileBtn /> */}

            <div className="flex justify-end">
              {currentUser && (
                <CreatePostSection
                  token={token}
                  userId={userId}
                  email={email}
                  name={name}
                  profilePicUrl={profilePicUrl}
                  data={data}
                />
              )}
            </div>
            <div className="font-bold text-xl xs:text-2xl md:text-3xl">
              About
            </div>
            <div>{data.userData.about}</div>
            <div className="bg-gray-400 w-full absolute left-0 right-0 h-[1px] lg:hidden mt-4"></div>
          </main>
          <main className="w-full p-2 flex flex-col items-center  gap-y-10 ">
            <div className=" md:w-full  grid grid-cols-1 gap-y-5 justify-center">
              <NewPost data={data} userData={userData} />
              {data
                ? data.posts.length > 0
                  ? data.posts.map((post) => (
                      <Post
                        server={true}
                        userData={post.user}
                        postId={post._id}
                        title={post.title}
                        description={post.description}
                        likesCount={post.likesCount}
                        creationDate={post.creationDate}
                        commentsCount={post.commentsCount}
                        urls={post.urls}
                        key={post._id}
                        token={token}
                        liked={post.liked}
                        userId={userId}
                      />
                    ))
                  : null
                : null}
                <LoadMorePosts token={token} userId={id} location="profile" />
            </div>
            
          </main>
        </div>
      </div>
    </>
  );
}
export default page;
