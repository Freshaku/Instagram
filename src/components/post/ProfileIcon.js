import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
  getUserByUserId
} from '../../services/firebase';
import LoggedInUserContext from '../../context/logged-in-user';

export default function ProfileIcon({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId }, props) {
    const [followed, setFollowed] = useState(false);
    const { setActiveUser } = useContext(LoggedInUserContext);
    const { iconSize, storyBorder, image } = props;

  async function handleFollowUser() {
    setFollowed(true);
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollowers(profileDocId, userId, false);
    const [user] = await getUserByUserId(userId);
    setActiveUser(user);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomId = getRandomInt(1, 70);

  let profileImage = image
    ? image
    : `https://i.pravatar.cc/150?img=${randomId}`;

  return !followed ? (
    <div className={storyBorder ? "storyBorder" : ""}>
      <img
        className={`profileIcon big`}
        src={profileImage}
        alt="profile"
        onError={(e) => {
            e.target.src = `/images/avatars/default.png`;
          }}
      />
      <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
    </div>
  ) : null;
}

ProfileIcon.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired
};
