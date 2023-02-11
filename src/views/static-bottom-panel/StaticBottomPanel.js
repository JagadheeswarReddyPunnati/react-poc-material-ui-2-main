import React from "react";
// core components
import GridItem from "../../material-ui-components/Grid/GridItem.js";
import GridContainer from "../../material-ui-components/Grid/GridContainer.js";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import Card from "../../material-ui-components/Card/Card.js"
import CardBody from "../../material-ui-components/Card/CardBody.js";

import styles from "../../assets/jss/material-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function StaticBottomPanel() {
    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardBody>
                        <p>IFMS provides sers in the maryland Department of Transportation (MDOT) with an enchancement to FMIS (Financial Management Information Systme) that providescontract compliance functionality, specifically addresing the needs of the MBE community, including staff and management. iFMS provides an enhanced user experinece through a wen-base user interface.</p>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
