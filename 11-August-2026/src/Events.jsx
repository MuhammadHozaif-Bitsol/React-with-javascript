import React from "react";

export default function Events() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}
