import s from './Statistics.module.css';
import PropTypes from 'prop-types';
function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statlist}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={s.item} key={id}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}> {percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics;
