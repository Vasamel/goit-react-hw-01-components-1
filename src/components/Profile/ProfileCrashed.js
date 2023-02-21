// import PropTypes from 'prop-types';
// import {FiUser, FiMail, FiGlobe, FiUsers, FiTv, FiThumbsUp} from 'react-icons/fi';


// import {
//     ProfileContainer,
//     AvatarImg,
//     Description,
//     Stats,
//     StatsFollowers,
//     StatsViews,
//     StatsLikes,
//   } from './Profile.styled';

// export const Profile = ({
//     userInfo: {
//       username,
//       tag,
//       location,
//       avatar,
//       stats: { followers, views, likes },
//     },
//   }) => {
//     return (
//       <ProfileContainer key={username}>
//         <Description>
//           <AvatarImg src={avatar} alt={username} />
//           <p><FiUser/> {username}</p>
//           <p><FiMail/> {tag}</p>
//           <p><FiGlobe/> {location}</p>
//         </Description>
  
//         <Stats>
//           <StatsFollowers>
//             <span>Followers</span>
//             <span><FiUsers/> {followers}</span>
//           </StatsFollowers>
//           <StatsViews>
//             <span>Views</span>
//             <span><FiTv/> {views}</span>
//           </StatsViews>
//           <StatsLikes>
//             <span>Likes</span>
//             <span><FiThumbsUp/> {likes}</span>
//           </StatsLikes>
//         </Stats>
//       </ProfileContainer>
//     );
//   };

//   Profile.propTypes = {
//     userInfo: PropTypes.shape({
//       username: PropTypes.string.isRequired,
//       tag: PropTypes.string.isRequired,
//       location: PropTypes.string.isRequired,
//       avatar: PropTypes.string.isRequired,
//       stats: PropTypes.shape({
//         followers: PropTypes.number.isRequired,
//         views: PropTypes.number.isRequired,
//         likes: PropTypes.number.isRequired,
//       }),
//     }).isRequired,
//   };