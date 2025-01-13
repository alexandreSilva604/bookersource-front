'use client'

import localFont from "next/font/local";
import "./globals.css";
import TopBar from "./components/topbar";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import UserContext from "./context/userContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {

    const [user, setUser] = useState(null);
    const [userChecked, setUserChecked] = useState(false);

    function loadUser() {

      let loggedUser = null;

      if (typeof localStorage != "undefined") {
        loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      }

      setUser(loggedUser);
      setUserChecked(true);
    }

    useEffect(() => {
      loadUser();
    }, []);
  
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>BookerSource</title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
                <link href="/css/styles.css" rel="stylesheet" />
            </head>
            <body className={styles.bodyStyling}>
              {
                userChecked ?
                <UserContext.Provider value={user}>
                  <TopBar />
                  {children}
                  <footer className="py-5">
                    <div className="container"><p className="m-0 text-center text-white">Copyright &copy; BookerSource 2024</p></div>
                  </footer>
                </UserContext.Provider>
                :
                <div>
                  <div className="spinner-border" role="status" style={{margin: 20}}></div>
                </div>
              }
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
              <script src="/js/scripts.js"></script>
            </body>
        </html>
    )
}
