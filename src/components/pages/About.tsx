import * as React from "react";
import ILinkToProps from "../routing/ILinkToProps";
import useSideBar from "../Contexts/useSideBar";

import UserIcon from "@material-ui/icons/Group";
import AdminIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import WizardIcon from "@material-ui/icons/School";
import NestIcon from "@material-ui/icons/ArtTrack";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const navigation: ILinkToProps[] = [
    { to: "/", text: "Home", icon: <HomeIcon /> },
    { to: "/users", text: "Users", icon: <UserIcon /> },
    { to: "/users?id=1", text: "Admin", icon: <AdminIcon /> },
    { to: "/wizard", text: "Wizard", icon: <WizardIcon /> },
    { to: "/nest", text: "Nesting", icon: <NestIcon /> },
  ];
  useSideBar(navigation);

  return <h3>About</h3>;
}
