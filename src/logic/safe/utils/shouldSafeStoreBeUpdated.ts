import { Map } from 'immutable'

import { SafeRecordProps } from 'src/logic/safe/store/models/safe'

// This function checks if an object is a Subset of a Safe State and that they have the same values
const isStateSubset = (superObj, subObj) => {
  return Object.keys(subObj).every((key) => {
    if (subObj[key] && typeof subObj[key] == 'object') {
      if (Map.isMap(subObj[key]) || subObj[key].size >= 0) {
        // If type is Immutable Map, List or Object we use Immutable equals
        return superObj[key].equals(subObj[key])
      }
      return isStateSubset(superObj[key], subObj[key])
    }
    return subObj[key] === superObj[key]
  })
}

export const shouldSafeStoreBeUpdated = (
  newSafeProps: Partial<SafeRecordProps>,
  oldSafeProps?: SafeRecordProps,
): boolean => {
  if (!oldSafeProps) return true

  return !isStateSubset(oldSafeProps, newSafeProps)
}
