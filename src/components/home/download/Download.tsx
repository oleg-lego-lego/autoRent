import React from 'react';
import appstore from "../../../images/download/appstore.svg";
import googleApp from "../../../images/download/googleapp.svg";
import {DownloadApp} from "./DownloadApp";

export const Download = () => {
    return (
        <section className="download__section">
            <div className="container">
                <div className="download__text">
                    <h2>Download our app to get most out of it</h2>
                    <p>
                        Thrown shy denote ten ladies though ask saw. Or by to he going
                        think order event music. Incommode so intention defective at
                        convinced. Led income months itself and houses you.
                    </p>
                    <div className="download__btn">
                        <DownloadApp hrefApp={'https://play.google.com/store/apps'} img={googleApp}/>
                        <DownloadApp hrefApp={'https://www.apple.com/ru/app-store'} img={appstore}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

