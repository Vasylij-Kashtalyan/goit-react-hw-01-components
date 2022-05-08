import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import getRandomHexColor from '../../utils/getRandomColor';

function TransactionHistory({ items }) {
  return (
    <table
      className={s.transactionHistory}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.transaction}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={s.history} key={id}>
              <td className={s.historyTrans}>{type}</td>
              <td className={s.historyTrans}>{amount}</td>
              <td className={s.historyTrans}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.ropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
