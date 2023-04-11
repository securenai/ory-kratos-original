import { getNodeLabel } from "@ory/integrations/ui"
import { Button } from "@ory/themes"

import Apple from "../../public/images/login_icons/Apple"
import Google from "../../public/images/login_icons/Google"

import { NodeInputProps } from "./helpers"

export function NodeInputSubmit<T>({
  node,
  attributes,
  disabled,
}: NodeInputProps) {
  console.log(getNodeLabel(node))
  const type = getNodeLabel(node).includes("Google")
    ? "Google"
    : getNodeLabel(node).includes("Facebook")
    ? "Apple"
    : "default"
  // console.log(attributes.name)
  const defaultStyle = {
    backgroundColor: "#A62BC3",
    borderRadius: "8px",
    height: "44px",
  }

  const GoogleBtn = {
    width: "44px",
    height: "44px",
    backgroundColor: "transparent",
    position: "absolute",
    marginTop: "320px",
    paddingTop: "8px",
  }

  const AppleBtn = {
    width: "44px",
    height: "44px",
    backgroundColor: "transparent",
    position: "absolute",
    marginLeft: "70px",
    marginTop: "320px",
    paddingTop: "8px",
  }

  return (
    <>
      <Button
        style={
          type === "Google"
            ? GoogleBtn
            : type === "Apple"
            ? AppleBtn
            : defaultStyle
        }
        name={attributes.name}
        value={attributes.value || ""}
        disabled={attributes.disabled || disabled}
      >
        {getNodeLabel(node) === "Sign in" ? (
          "Login"
        ) : getNodeLabel(node).includes("Google") ? (
          <Google />
        ) : getNodeLabel(node).includes("Facebook") ? (
          <Apple />
        ) : (
          getNodeLabel(node)
        )}
      </Button>
    </>
  )
}
