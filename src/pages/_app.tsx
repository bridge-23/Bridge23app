import type {AppProps} from "next/app";
import React from 'react';
import {ThirdwebProvider} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
//import Footer from "../components/Footer";
import {useEffect, useState} from 'react';
//import {BigNumber} from "ethers";
import '@sendbird/uikit-react/dist/index.css';
//import dynamic from 'next/dynamic';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {ThemeProvider} from '@mui/material/styles';
import theme from "../theme";
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "../dev";

const activeChain = "mumbai";

//const SendbirdApp = dynamic(() => import('@sendbird/uikit-react/App'), { ssr: false });

function MyApp({Component, pageProps}: AppProps) {
    /*const [page, setPage] = useState(1);
    const nftsPerPage = 50; // Example value
    const totalCount = BigNumber.from(100); // Example value, replace with your logic
    const loading = false; // Example value, replace with your logic*/

    useEffect(() => {
        //const clientId = process.env.CLIENT_ID;
        //const secretKey = process.env.SECRET_KEY;
        // Use the clientId and secretKey as needed in your application logic.
        // For example, you can pass them as props to other components or use them in API calls.
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <ThirdwebProvider activeChain={activeChain} clientId="a438ed0706431cf7f53ae4cdbee427a7">
                <Navbar/>

                <DevSupport ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
                >
                    <Component {...pageProps} />
                </DevSupport>

            </ThirdwebProvider>
        </ThemeProvider>
    );
}

export default MyApp;