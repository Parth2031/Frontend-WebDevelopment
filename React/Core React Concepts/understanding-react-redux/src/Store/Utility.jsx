// ! It is an Alternative Method for cleaning up Reducer Repeated Code ->

export const updateObject = (oldObject, updatedValues) =>
{
  return {
    ...oldObject,
    ...updatedValues
  };
}