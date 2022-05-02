import PropTypes from 'prop-types';
import Profile from './Profile';

function ProfileList({ items }) {
  return (
    <Profile
      username={items.username}
      tag={items.tag}
      location={items.location}
      avatar={items.avatar}
      stats={items.stats}
    />
  );
}
Profile.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ProfileList;
