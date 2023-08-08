import React from 'react';
import {NavbarLink} from "./NavbarLink";
import {PATH} from "../../App";

type NavbarNavigationPropsType = {
    openNav: (openValue: boolean) => void
    openValue: boolean
}

export const NavbarNavigation = (props: NavbarNavigationPropsType) => {
    return (
        <>
            <NavbarLink title={'Home'} to={PATH.HOME} openNav={props.openNav} openValue={props.openValue}/>
            <NavbarLink title={'About'} to={PATH.ABOUT} openNav={props.openNav} openValue={props.openValue}/>
            <NavbarLink title={'Car Models'} to={PATH.MODELS} openNav={props.openNav} openValue={props.openValue}/>
            <NavbarLink title={'Comment'} to={PATH.COMMENT} openNav={props.openNav} openValue={props.openValue}/>
            <NavbarLink title={'Contact'} to={PATH.CONTACT} openNav={props.openNav} openValue={props.openValue}/>
            <NavbarLink title={'Favorites'} to={PATH.FAVORITES} openNav={props.openNav} openValue={props.openValue}/>
            <NavbarLink title={'Login'} to={PATH.LOGIN_ACCOUNT} openNav={props.openNav} openValue={props.openValue}/>
        </>
    );
};
