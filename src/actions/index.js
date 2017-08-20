export const NAVOPTION = 'NAVOPTION';
export function navClickedOption (navOption) {
  return {
    type: NAVOPTION,
    navOption
  }
}
