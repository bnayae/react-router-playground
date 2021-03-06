import * as React from "react";
import { useState } from "react";
import ILinkToProps from "../routing/ILinkToProps";
import useRouter from "../routing/useRouter";
import { Link } from "react-router-dom";
import useSideBar from "../Contexts/useSideBar";
import LinkTo from "../routing/LinkTo";

import WizardIcon from "@material-ui/icons/School";
import UserIcon from "@material-ui/icons/Group";
import AboutIcon from "@material-ui/icons/Announcement";
import NestIcon from "@material-ui/icons/ArtTrack";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const navigation: ILinkToProps[] = [
    { to: "/users", text: "Users", icon: <UserIcon /> },
    { to: "/wizard", text: "Wizard", icon: <WizardIcon /> },
    { to: "/nest", text: "Nesting", icon: <NestIcon /> },
    { to: "/about", text: "About", icon: <AboutIcon /> },
  ];
  useSideBar(navigation);
  const [search, setSearch] = useState("");

  const { location } = useRouter();

  return (
    <>
      <h3>Home</h3>
      <p>current location = {location.pathname}</p>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <Link to={`/search?q=${search}`}> Search</Link>
      {/* <LinkTo to="/props" text="With Properties" NOT WORKING: props={{ title: "From Home", count: seconds }} /> */}
      <LinkTo to="/props" text="With Properties" />
    </>
  );
}
