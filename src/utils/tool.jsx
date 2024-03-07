export const isEqual = (obj1, obj2) => {
  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of properties is different
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if the values of each property are equal
  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !isEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
};

function isObject(object) {
  return object != null && typeof object === "object";
}
