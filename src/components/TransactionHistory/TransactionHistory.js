import PropTypes from 'prop-types';
import {Transactions} from './TransactionHistory.styled';


export const TransactionHistory = ({transactions}) => {
    return (
        <Transactions>
            <thead>
                <tr>
                    <th style={{ color: 'green', fontSize: '20px', }}>Type</th>
                    <th style={{ color: 'green', fontSize: '20px', }}>Amount</th>
                    <th style={{ color: 'green', fontSize: '20px', }}>Currency</th>
                </tr>
            </thead>

            <tbody>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
        </Transactions>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };