import { getNodeLabel } from "@ory/integrations/ui"
import { Button } from "@ory/themes"

import { NodeInputProps } from "./helpers"

export function NodeInputSubmit<T>({
  node,
  attributes,
  disabled,
}: NodeInputProps) {
  // console.log(getNodeLabel(node))
  return (
    <>
      <Button
        style={{
          backgroundColor: "#A62BC3",
          borderRadius: "8px",
          height: "44px",
        }}
        name={attributes.name}
        value={attributes.value || ""}
        disabled={attributes.disabled || disabled}
      >
        {getNodeLabel(node) === "Sign in" ? "Login" : getNodeLabel(node)}
      </Button>
    </>
  )
}
