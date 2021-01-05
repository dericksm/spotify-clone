import React from "react";
import "./SideBar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function SideBar() {
  const [{playlists}, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="/images/spotify-sidebar-logo.jpg"
        alt="SideBar Logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home"/>
      <SidebarOption Icon={SearchIcon} title="Search"/>
      <SidebarOption Icon={LibraryMusicIcon} title="Library"/>

      <br/>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr/>

      {playlists?.items?.map(playlist => (        
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default SideBar;
