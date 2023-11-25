"use client"

import {Provider} from "react-redux";
import {store} from "./store";


export default function providers({children}) {
  return (
    <Provider>
        {children}
    </Provider>
  )
}
