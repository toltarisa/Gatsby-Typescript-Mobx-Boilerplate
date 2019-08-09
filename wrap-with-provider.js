import React from "react"
import { Provider } from "mobx-react"
import MyStore from "./src/stores/index"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => <Provider store={MyStore}>{element}</Provider>
