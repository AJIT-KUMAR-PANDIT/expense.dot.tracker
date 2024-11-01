import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import logo from '../assets/resources/img/icon.png'

export default function MySideBar(): JSX.Element {
  return (
    <Sidebar>
      <Menu>
        <br /> <br />
        <MenuItem className="text-xl h-[44px]">
          <img src={logo} className="h-[58px] w-[58px]" />
          <br />
          my.expense.tracker
        </MenuItem>
        <br /> <br />
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  )
}
