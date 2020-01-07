export const arrayToMap = arr => new Map(arr.map(item => [item.id, item]));

export const mapToArray = map => Array.from(map.values());

/**
 * @param {QuestionFeature} feature
 * @param {object} props
 * @return {QuestionFeature}
 */
export const updateFeatureProps = (feature, props) => Object.assign({},
  feature,
  {
    properties: Object.assign({}, feature.properties, props),
  }
);

/**
 * Converts a duration into a readable string
 *
 * @param {number} millis - a period of time in milliseconds
 * @return {string}
 */
export const getIntervalAsWords = millis => {
  const minutes = Math.round(millis / 1000 / 60);
  if (minutes < 2) return '1 minute';
  if (minutes < 50) return `${minutes} minutes`;

  const hours = Math.round(minutes / 60);
  if (hours < 2) return '1 hour';
  if (hours < 20) return `${hours} hours`;

  const days = Math.round(hours / 24);
  if (days < 2) return '1 day';
  if (days < 6) return `${days} days`;

  const weeks = Math.round(days / 7);
  if (weeks < 2) return 'a week';
  if (weeks < 3) return 'a week and a bit';
  if (weeks < 4) return `${weeks} weeks`;

  const months = Math.round(days / 30);
  if (months < 2) return 'a month';
  if (months < 11) return `${months} months`;

  const years = Math.round(days / 365);
  if (years < 2) return 'a year';

  return `${years} years`;
};