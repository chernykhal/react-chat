import PropTypes from "prop-types";
import differenceInHours from "date-fns/differenceInHours";
import format from "date-fns/format";

const Time = ({ date }) => {
  const dateDifference = differenceInHours(new Date(), new Date(date));
  if (dateDifference < 24) {
    return format(new Date(date), "p");
  } else if (dateDifference >= 24 && dateDifference < 168) {
    return format(new Date(date), "iiii");
  } else if (dateDifference >= 168 && dateDifference < 8760) {
    return format(new Date(date), "dd/MM");
  } else if (dateDifference >= 8760) {
    return format(new Date(date), "d/MM/y");
  }
};

Time.propTypes = {
  date: PropTypes.string,
};

export default Time;
