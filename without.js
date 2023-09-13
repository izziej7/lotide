// Return a subset of the array source, removing unwanted elements specified in itemsToRemove
const without = function(source, itemsToRemove) {
  const arrayAfterRemoved = [];
  for (const item of source) {
    if (!remove(item, itemsToRemove)) {
      arrayAfterRemoved.push(item);
    }
  }
  return arrayAfterRemoved;
};

// Helper function: return whether a source element must be removed
const remove = function(sourceItem, itemsToRemove) {
  for (const item of itemsToRemove) {
    if (sourceItem === item) {
      return true;
    }
  }
  return false;
};

module.exports = without;