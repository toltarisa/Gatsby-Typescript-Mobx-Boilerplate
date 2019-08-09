

import React, { ReactNode } from "react"
import Menu from './menu';


import "./layout.css"
interface IProps {
  children: ReactNode
}
const Layout = ({ children }: IProps) => {
 
  return (
    <>
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
