
// "use client";

// import { Sidebar } from "flowbite-react";
// import "@/app/globals.css"
// import { useState } from "react";
// import { Menulist } from "./Menu";
// import Link from "next/link";

// type MenuItem = {
//   name: string;
//   path: string;
//   icon: React.ElementType;
// }

// export default function SidebarComponent() {
//   const [menuList, setmenuList] = useState<MenuItem[]>(Menulist);
//   return (
//     <Sidebar aria-label="Default sidebar example">
//       <Sidebar.Items>
//         <Sidebar.ItemGroup>
//           {menuList.map((item, index) =>{
//             return (<Sidebar.Item key={index} as={Link} href={item.path} icon={item.icon}>
//             {item.name}
//           </Sidebar.Item>)
//           })}
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//     </Sidebar>
//   );
// }

"use client";

import { Sidebar } from "flowbite-react";
import "@/app/globals.css";
import { Menulist } from "./Menu";
import Link from "next/link";

export default function SidebarComponent() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {Menulist.map((item, index) => (
            <Sidebar.Item key={index} as={Link} href={item.path} icon={item.icon}>
              {item.name}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
