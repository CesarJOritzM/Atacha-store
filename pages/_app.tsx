import * as React from "react"
import { AppProps } from "next/app"
import { AuthProvider } from "../hooks/useAuth"
import Page from "../components/Page/Page"

import Router from "next/router"
import Head from "next/head"

import Nprogress from "nprogress"
import "nprogress/nprogress.css"
import "../assets/styles/global.scss"

Router.events.on("routeChangeStart", () => Nprogress.start())
Router.events.on("routeChangeComplete", () => Nprogress.done())
Router.events.on("routeChangeError", () => Nprogress.done())

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Atacha</title>
      </Head>
      <Page>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Page>
    </>
  )
}
