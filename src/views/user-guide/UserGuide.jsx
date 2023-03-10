import React, { Fragment } from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "../../material-ui-components/Grid/GridItem.js";
import GridContainer from "../../material-ui-components/Grid/GridContainer.js";
import Card from "../../material-ui-components/Card/Card.js"
import CardHeader from "../../material-ui-components/Card/CardHeader.js";
import CardBody from "../../material-ui-components/Card/CardBody.js";
import StaticSidePanel from "../static-side-panel/StaticSidePanel.js"
import StaticBottomPanel from "../static-bottom-panel/StaticBottomPanel.js"
import styles from "../../assets/jss/material-react/views/dashboardStyle.js";
import UsersReduxThunk from "../users-redux-thunk/UsersReduxThunk.jsx";
import HooksUsersReduxThunk from "../users-redux-thunk/HooksUsersReduxThunk"
import UsersReduxSagas from "../users-redux-saga/UsersReduxSagas"
const useStyles = makeStyles(styles);

function UserGuide({ userData, fetchUsers }) {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={9}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>MaryLand StateStat</h4>
          </CardHeader>
          <CardBody>
            <h6>UserGuide Content </h6>
            <table>
              <tbody>
                <tr>
                  <td><UsersReduxThunk /></td>
                  <td> <HooksUsersReduxThunk />  </td>
                  <td><UsersReduxSagas /></td>
                </tr>
              </tbody>
            </table>
            <StaticBottomPanel />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <StaticSidePanel />
      </GridItem>
    </GridContainer>
  );
}

export default UserGuide;
