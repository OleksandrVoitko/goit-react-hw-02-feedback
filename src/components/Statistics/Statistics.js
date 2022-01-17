import PropTypes from "prop-types";
import {
  StatisticsList,
  StatisticsListItem,
  TotalStatisticsItem,
} from "./Statistics.styled";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsList>
      <StatisticsListItem>Good: {good}</StatisticsListItem>
      <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>
      <StatisticsListItem>Bad: {bad}</StatisticsListItem>
      <br></br>
      <TotalStatisticsItem>Total: {total}</TotalStatisticsItem>
      <TotalStatisticsItem>
        Positive feedback: {positivePercentage}%
      </TotalStatisticsItem>
    </StatisticsList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
