import React from "react";

import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import CreditCardIcon from "@material-ui/icons/CreditCard";

import styles from "./index.module.scss";

const InforBar = () => {
	return (
		<div className={styles.infobar}>
			<div className="container">
				<div className={styles["infobar-itens"]}>
					<div className={styles["infobar-itens__item"]}>
						<LocalShippingIcon fontSize="small" />
						Delivery apenas para Joinville
					</div>
					<div className={styles["infobar-itens__item"]}>
						<LocalOfferIcon fontSize="small" />
						Desconto de 10% nas compras acima de R$200,00
					</div>
					<div className={styles["infobar-itens__item"]}>
						<CreditCardIcon fontSize="small" />
						Pague em até 12x no cartão
					</div>
				</div>
			</div>
		</div>
	);
};

export default InforBar;
