import React from "react";

export const Small = React.memo(({ value }) => {
    console.log("me volvi a g¿dibujar :(");
    return (
        <small>{ value }</small>
    )
})
