export const ADD_TEA = 'ADD_TEA';

export default function addTea(tea) {
  return {
    type: ADD_TEA,
    payload: tea
  };
}
