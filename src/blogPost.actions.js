export const actionTypes = {
  TOGGLE_DISPLAY: '[BlogPost] Toggle Display'
}

export function toggleDisplay() {
  return {
    type: actionTypes.TOGGLE_DISPLAY
  }
}