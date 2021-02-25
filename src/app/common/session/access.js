import { composeAccess } from '@cranium/access'
import get from 'lodash/get'

export const F_PROTECTED = 'F_PROTECTED'
export const F_UNAUTHORISED = 'F_UNAUTHORISED'

export default composeAccess(
  (props) => get(props, 'session.data.email') ? F_PROTECTED : F_UNAUTHORISED
)
