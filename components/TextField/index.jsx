import React from "react"
import cx from "classnames"

const TextField = ({ label, type, name, placeholder, errors, register }) => {
  let error = errors?.[name]
  let id = name

  const Component =
    type !== "textarea" ? (
      <input
        id={id}
        className={cx(
          "h-16 w-full px-4 focus:outline-none pt-6 transition-colors transition-shadow shadow-sm text-on-primary0 border border-gray-300 duration-200 rounded-md focus:shadow-none focus:ring-0",
          {
            "focus:ring-2 focus:ring-blue-300 focus:border-blue-400": !error,
            "border-red-400 focus:ring-2 focus:ring-red-300 focus:border-red-400":
              error,
          }
        )}
        {...register(name)}
        name={name}
        placeholder={placeholder}
      />
    ) : (
      <textarea
        id={id}
        className={cx(
          "h-16 w-full px-4 h-[150px] resize-none focus:outline-none pt-6 transition-colors transition-shadow shadow-sm text-on-primary0 border border-gray-300 duration-200 rounded-md focus:shadow-none focus:ring-0",
          {
            "focus:ring-2 focus:ring-blue-300 focus:border-blue-400": !error,
            "border-red-400 focus:ring-2 focus:ring-red-300 focus:border-red-400":
              error,
          }
        )}
        {...register(name)}
        name={name}
        placeholder={placeholder}
      />
    )

  return (
    <div className="relative text-field w-full mb-1">
      <label
        className={cx(
          "absolute left-4 top-2 text-sm leading-normal font-semibold text-slate-grey"
        )}
        htmlFor={id}
      >
        {label}
      </label>

      {Component}
      <span
        className={cx(
          "block text-sm font-bold text-red-500 ml-1 transition-opacity duration-200",
          {
            "opacity-0": !error,
            "opacity-1": error,
          }
        )}
      >
        {error?.message}&nbsp;
      </span>
    </div>
  )
}

TextField.displayName = "TextField"

export default TextField
