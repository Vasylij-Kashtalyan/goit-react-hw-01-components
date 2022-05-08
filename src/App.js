import './App.css';
import Container from './components/Container/Container';

import Profile from './components/ProfSocialNet/Profile';
import user from './data/user.json';

import Statistics from './components/SectionStatistics/Statistics';
import data from './data/data.json';

import Friends from './components/FriendList/Friends';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import tranzactions from './data/tranzactions.json';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <Friends friends={friends} />
      <TransactionHistory items={tranzactions} />
    </Container>
  );
}
