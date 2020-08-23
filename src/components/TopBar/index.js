import React from "react";

import PersonIcon from "@material-ui/icons/Person";
import LocationIcon from "@material-ui/icons/LocationOn";
import { ReactComponent as WhatsAppIcon } from "../../assets/svg/whatsapp.svg";

import styles from "./index.module.scss";

const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar__item}>
        <WhatsAppIcon
          width="14"
          style={{ marginLeft: "5px", marginRight: "5px" }}
        />
        (47) 9 9999-9999
      </div>
      <div className={styles.topbar__item}>
        <PersonIcon />
        Arethusa
      </div>
      <div className={styles.topbar__item}>
        <LocationIcon />
        Bom Retiro - Joinville, SC
      </div>
    </div>
  );
};

export default TopBar;
