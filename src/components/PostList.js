import React, { useEffect } from "react";
import { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { GlobalContext } from "../store/GlobalProvider";
import SinglePost from "./SinglePost";
import noUserImg from "../images/user.png";
function PostList() {
  const { user } = React.useContext(GlobalContext);
  const { docs } = useFirestore(`twitterImages/user/${user.email}`);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setPosts(docs);

    return () => {
      setPosts(null);
    };
  }, [docs]);

  return (
    <div className="POSTLIST">
      {posts &&
        posts.map((post) => (
          <SinglePost
            key={post.createdAt}
            postedImg={post.url}
            caption={post.caption}
            userAddress={user.email}
            username={user.displayName}
            userImg={user.photoURL || noUserImg}
          />
        ))}
    </div>
  );
}

export default PostList;
