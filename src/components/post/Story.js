import ProfileIcon from "./ProfileIcon";

function Story({ username }) {
  return (
    <div className="story storyBorder">
      <ProfileIcon iconSize="big storyBorder" storyBorder={true} />
      <span className="accountName">{username}</span>
    </div>
  );
}

export default Story;
