import { Box } from "@mui/material"
import { TextInput } from "@ory/themes"
import { useEffect, useState } from "react"

import { NodeInputProps } from "./helpers"

export function NodeInputDefault<T>(props: NodeInputProps) {
  const { node, attributes, value = "", setValue, disabled } = props
  const [isError, setIsError] = useState(node.messages.length > 0)

  useEffect(() => {
    setIsError(node.messages.length > 0)
  }, [node.messages.length])

  // Some attributes have dynamic JavaScript - this is for example required for WebAuthn.
  const onClick = () => {
    // This section is only used for WebAuthn. The script is loaded via a <script> node
    // and the functions are available on the global window level. Unfortunately, there
    // is currently no better way than executing eval / function here at this moment.
    if (attributes.onclick) {
      const run = new Function(attributes.onclick)
      run()
    }
  }

  // Render a generic text input field.
  return (
    <div style={{ position: "relative" }}>
      <TextInput
        className="my-text-input"
        style={{
          border: isError ? "1px solid #F24867" : "none",
          backgroundColor: "#37374F",
          height: "44px",
          color: "#fff",
          caretColor: "#fff",
          borderRadius: "8px",
        }}
        placeholder={node.meta.label?.text}
        // title={node.meta.label?.text}
        onClick={onClick}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        type={attributes.type}
        name={attributes.name}
        value={value}
        disabled={attributes.disabled || disabled}
        help={node.messages.length > 0}
        state={
          node.messages.find(({ type }) => type === "error")
            ? "error"
            : undefined
        }
        subtitle={
          <>
            {node.messages.map(({ type, text, id }, k) => {
              let displayText = text
              if (text.includes("is missing")) {
                // const field = text.split(" ")[1]
                displayText = "This field is required, please fill it out."
              }
              return (
                <span
                  key={`${id}-${k}`}
                  data-testid={`ui/message/${id}`}
                  style={{ color: "#F24867", fontSize: "13px" }}
                >
                  {displayText}
                </span>
              )
            })}
          </>
        }
      />
      <span
        style={{
          color: "#CA4AE8",
          fontSize: "16px",
          fontFamily: "open sans",
          position: "absolute",
          top: "55px",
        }}
      >
        {attributes.name === "password" ? "Forgot password?" : ""}
      </span>
    </div>
  )
}
