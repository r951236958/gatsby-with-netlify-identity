// import { Divider } from "@react-md/divider"
import { TextIconSpacing } from "@react-md/icon"
// import { List } from "@react-md/list"
// import { MenuItemLink } from "@react-md/menu"
// import { Link as RouterLink } from "gatsby"
import React from "react"
import myList from "./myList"

const LinkList = () => {
  // const MenuLink = props => <MenuItemLink {...props} component={RouterLink} />
  return (
    <>
      <ul className="lg:w-1/2 w-full border border-gray-400 border-opacity-60 divide-y-2 divide-gray-400 divide-opacity-60 rounded my-3 mx-auto">
        {myList.map(({ link, name, icon }) => (
          <>
            <li
              className="my-2 text-gray-300 hover:text-white hover:bg-gray-900 hover:bg-opacity-30"
              key={name}
            >
              <a href={link} className="mx-2 text-base flex px-3 py-4 pl-3">
                <TextIconSpacing className="mr-4" icon={icon}>
                  {name}
                </TextIconSpacing>
              </a>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}
export default LinkList
