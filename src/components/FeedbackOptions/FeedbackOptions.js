import PropTypes from "prop-types";
import {
  FeedbackList,
  FeedbackListItem,
  Button,
} from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackList>
      {options.map((name) => {
        const btnName = name[0].toUpperCase() + name.slice(1);
        return (
          <FeedbackListItem key={name}>
            <Button type="button" onClick={() => onLeaveFeedback(name)}>
              {btnName}
            </Button>
          </FeedbackListItem>
        );
      })}
    </FeedbackList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
