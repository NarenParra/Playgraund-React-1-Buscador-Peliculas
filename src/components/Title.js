import React from "react";

//componente funcional puro
//destructuramos las props para sacar el title
export const Title = ({children}) => <h1 className="title">{children}</h1>;
