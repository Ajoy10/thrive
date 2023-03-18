import moment from "moment";

export default function format(date) {
  console.log(date);
  return moment.utc(date).local().startOf("seconds").fromNow();
}
