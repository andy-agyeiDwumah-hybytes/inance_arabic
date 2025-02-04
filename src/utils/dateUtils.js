// Constants
import { MESSAGECOOLDOWN } from "../constants/Constants";

export const checkDateDifference = serverTimestamp => {
  // Convert to string
  const todayDateAsStrFormatted = new Date().toLocaleDateString("en-GB");
  // Convert to dates
  const todayDateAsDateFormatted = new Date(todayDateAsStrFormatted);
  const serverTimestampAsDateFormatted = new Date(serverTimestamp);
  // Get difference in days
  const diffTime = Math.abs(
    todayDateAsDateFormatted - serverTimestampAsDateFormatted
  );
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  // console.log(diffDays);
  // If difference in days is more than the message cooldown, return true
  if (diffDays < MESSAGECOOLDOWN) return false;
  return true;
};
