import React from "react";

function Button({ disabled, buttonName}) {
    return (
        <>
            <button
                type={"button"}
                disabled={disabled}
                onClick={() => console.log(buttonName)}>
                {buttonName}
            </button>
        </>
    );
};

export default Button;