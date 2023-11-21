import React from 'react';
import {NavbarLink} from "./NavbarLink";
import {useAppSelector} from "../../app/hooks/redux";
import {Logout} from "../logout/Logout";
import {PATH} from "../../app/PATH/PATH";


type NavbarNavigationPropsType = {
    openNav: (openValue: boolean) => void
    openValue: boolean
}

export const NavbarNavigation = (props: NavbarNavigationPropsType) => {
    const valueLogin = useAppSelector(state => state.auth.auth)
    const garageRedirect = valueLogin.map(el => el.redirectGarageValue).join('')

    return (
        <>
            <NavbarLink title={'Home'} to={PATH.HOME} openNav={props.openNav} openValue={props.openValue}/>
            <NavbarLink title={'About'} to={PATH.ABOUT} openNav={props.openNav} openValue={props.openValue}/>
            <NavbarLink title={'Car Models'} to={PATH.MODELS} openNav={props.openNav} openValue={props.openValue}/>
            <NavbarLink title={'Comment'} to={PATH.COMMENT} openNav={props.openNav} openValue={props.openValue}/>
            <NavbarLink title={'Contact'} to={PATH.CONTACT} openNav={props.openNav} openValue={props.openValue}/>
            <NavbarLink title={'Favorites'} to={PATH.FAVORITES} openNav={props.openNav} openValue={props.openValue}/>
            {!!garageRedirect ?
                <>
                    <NavbarLink title={'Garage'} to={PATH.GARAGE} openNav={props.openNav} openValue={props.openValue}/>
                    <Logout/>
                </>
                :
                <NavbarLink title={'Login'} to={PATH.LOGIN} openNav={props.openNav} openValue={props.openValue}/>
            }
        </>
    );
};
