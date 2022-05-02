import './App.css';
import ProfileList from './components/ProfSocialNet/ProfileList';
import user from './user.json';
import Container from './components/container/Container';
import Statistics from './components/SectionStatistics/Statistics';
import data from './data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import tranzactions from './tranzactions.json';

export default function App() {
  return (
    <Container>
      <ProfileList items={user} />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={tranzactions} />
    </Container>
  );
}
