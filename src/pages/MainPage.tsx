import React from "react";
import { Header } from "../components/Header";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {Box, styled} from "@mui/material";
import { UserContent } from "../components/UserContent";
import {ActivationContent} from "../components/ActivationContent";
import {HomeContent} from "../components/HomeContent";

export const MainPage: React.FC = () => {
    const activeLink = useSelector((state: RootState) => state.link.activeLink);

    const renderContent = () => {
      switch (activeLink) {
        case "activation":
          return <ActivationContent/>;
        case "account":
          return <UserContent />;
        default:
          return <HomeContent/>;
      }
    };
    return (
      <div>
          <Header/>
        <Box p={4}>{renderContent()}</Box>
      </div>
    );
};
