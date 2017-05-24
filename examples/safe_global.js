/*  Purpose:
 *    Provide a safe icon component wrapper for use with global components.
 *  Installation:
 *    * Copy/paste this component into `app/assets/javascripts/`,
 *      or wherever you keep your modules
 *  Usage:
 *    import Icon from "path/to/safe_global.js"
 *    const MyComponent = () =>
 *      <div>
 *        <Icon idx="InterfacesIcon.ChevronDown" />
 *      </div>
 *  Expectations:
 *    If component icon exists on the global object, it will be used.
 *    If not, an error logged, and Bugsnag notified.
 */

export default ({ idx }) => {
  try {
    let C
    if ((C = eval(idx))) {
      return <C />
    } else {
      throw new ReferenceError(`\`${idx}\` is not a global defined component.`)
    }
  } catch (e) {
    console.error(e) /* eslint no-console: 0 */
    Bugsnag.notifyException(e)
    return <span />
  }
}
