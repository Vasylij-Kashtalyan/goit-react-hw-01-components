// import PropTypes from "prop-types"
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      <FriendListItem items={friends} />
      {/* <!-- Произвольное кол-во FriendListItem --> */}
    </ul>
  );
}

// FriendList.ropTypes = {
//     friends: PropTypes.arrayOf(
//         PropTypes.shape({
//             avatar: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             isOnline: PropTypes.bool.isRequired,
//             id: PropTypes.number.isRequired,
//         })
//     )
// }

export default FriendList;
