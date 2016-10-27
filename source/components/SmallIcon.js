import React from "react"
import {PropTypes} from "react"

import {SvgElement} from "./index"

import c from "classnames"
import s from "../stylesheet"

const SmallIcon = ({name, theme, ...passingProps}) => (
  <SvgElement
    {...passingProps}
    viewBox="0 0 18 18"
    width="1.2em"
    height="1.2em">
    <g className={c(
        s.fill((theme === "light") ? "white" : "gray"),
      )}>
      <IconSwitch name={name} />
    </g>
  </SvgElement>
)

const IconSwitch = ({name}) => {
  switch (name) {
    case "_empty": return <path />
    case "add": return <path d="M8 8H3v2h5v5h2v-5h5V8h-5V3H8v5z" />
    case "assign": return <path d="M12 6V4a1 1 0 0 0-.99-1H6.99A.992.992 0 0 0 6 4v2H3.01C2.45 6 2 6.446 2 6.998v7.004c0 .55.45.998 1.007.998h11.986c.556 0 1.007-.446 1.007-.998V6.998A.998.998 0 0 0 14.99 6H12zm-2 0H8V5h2v1z" />
    case "checked": return <path d="M5.95413065,7.60411692 L14.9541307,7.60411692 L14.9541307,10.6041169 L2.95413065,10.6041169 L2.95413065,9.10411692 L2.95413065,3.85411692 L5.95413065,3.85411692 L5.95413065,7.60411692 Z" transform="translate(8.954131, 7.229117) rotate(-45.000000) translate(-8.954131, -7.229117)" />
    case "delete": return <path d="M5 7h8v8.002c0 .55-.453.998-.997.998H5.997A.997.997 0 0 1 5 15.002V7zm1.5-3H4v2h10V4h-2.5L11 3H7l-.5 1z" />
    case "download": return <path d="M11 8l-.015-5H7.11v5H4l4.974 5L14 8h-3zm-8 6v2h12v-2H3z"/>
    case "edit": return <path d="M10.378 4.82l2.83 2.83-6.365 6.364h-2.83v-2.83l6.365-6.363zm1.414-1.413a1 1 0 0 1 1.42.007l1.402 1.4c.394.395.4 1.028.007 1.422l-.706.707-2.83-2.83.708-.706z" />
    case "expand": return <path d="M9.043 8.828L11.87 6l1.415 1.414-4.242 4.243-.707-.707L4.8 7.414 6.214 6l2.83 2.828z" />
    case "expandMessages": return <path d="M9.043 5.328l-2.83 2.83L4.8 6.742 9.043 2.5l.707.707 3.535 3.536-1.414 1.414-2.827-2.83zm0 7.34L11.87 9.84l1.415 1.414-4.242 4.243-.707-.707L4.8 11.254 6.214 9.84l2.83 2.828z" />
    case "hire": return <path d="M7.098 9.616l6.364-6.364 2.12 2.12L7.1 13.86l-1.06-1.06-3.713-3.713 2.12-2.12L7.1 9.614z" />
    case "move": return <path d="M15.057 8.013l.982.98-5.835 5.835-1.962-1.962 2.365-2.366H3v-3h7.62L8.243 5.123l1.962-1.962 4.852 4.853z" />
    case "notificationsOff": return <path d="M14.156 13.178L6.362 5.133 4.714 3.435 3.9 4.25l1.795 1.794v.006c-.333.635-.513 1.385-.513 2.192v3.205L3.9 12.73v.64h8.8l1.283 1.283.814-.815-.64-.66zM9.028 15.3c.712 0 1.282-.57 1.282-1.282H7.746c0 .71.57 1.282 1.282 1.282zm3.846-4.692v-2.36c0-1.974-1.05-3.615-2.884-4.05V3.76a.96.96 0 0 0-.962-.962.96.96 0 0 0-.96.962v.435c-.097.02-.187.052-.27.077-.065.02-.13.045-.193.07H7.6c-.008 0-.008 0-.014.007a5.343 5.343 0 0 0-.436.2s-.006 0-.006.006l5.73 6.052z" />
    case "notificationsOn": return <path d="M9.028 15.3c.705 0 1.282-.577 1.282-1.282H7.746c0 .705.57 1.282 1.282 1.282zm3.846-7.05c0-1.97-1.05-3.617-2.884-4.053v-.435a.96.96 0 0 0-.962-.962.96.96 0 0 0-.96.962v.435C6.227 4.633 5.18 6.274 5.18 8.25v3.204L3.9 12.736v.64h10.256v-.64l-1.282-1.282V8.25z" />
    case "position": return <path d="M12 6V4a1 1 0 0 0-.99-1H6.99A.992.992 0 0 0 6 4v2H3.01C2.45 6 2 6.446 2 6.998v7.004c0 .55.45.998 1.007.998h11.986c.556 0 1.007-.446 1.007-.998V6.998A.998.998 0 0 0 14.99 6H12zm-2 0H8V5h2v1z" />
    case "reject": return <path d="M9 6.88L5.818 3.696l-2.12 2.12L6.877 9 3.7 12.182l2.12 2.12L9 11.123l3.182 3.18 2.12-2.12L11.123 9l3.18-3.182-2.12-2.12L9 6.877z" />
    case "revert": return <path d="M5.828 8H11.5c.83 0 1.5.67 1.5 1.51v.98c0 .836-.672 1.51-1.5 1.51H4v2h8v-.035a3.506 3.506 0 0 0 3-3.474v-.98a3.5 3.5 0 0 0-3-3.475V6H5.828l1.83-1.828-1.415-1.415L2 7l.707.707 3.536 3.536 1.414-1.415L5.827 8z"/>
    case "unassign": return <path d="M3.94 6h-.93C2.45 6 2 6.446 2 6.998v7.004c0 .55.45.998 1.007.998h9.932l1.53 1.53 1.06-1.06L3.06 3 2 4.06 3.94 6zM6 3.94a.99.99 0 0 1 .99-.94h4.017A1 1 0 0 1 12 4v2h2.99a.998.998 0 0 1 1.01.998v6.94L6.002 3.942zM10 6H8V5h2v1z" />
    default: return <path />
  }
}

SmallIcon.propTypes = {
  name: PropTypes.oneOf([
    "_empty",
    "add",
    "assign",
    "checked",
    "comment",
    "delete",
    "download",
    "edit",
    "expand",
    "expandMessages",
    "hire",
    "move",
    "notificationsOff",
    "notificationsOn",
    "position",
    "reject",
    "revert",
    "unassign",
  ]),
  theme: PropTypes.oneOf([
    "light",
  ]),
}

export default SmallIcon
