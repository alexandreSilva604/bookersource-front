'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }) {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, [])

    return (
        <html lang="en">
            
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>BookerSource Admin</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css" integrity="sha256-tXJfXfp6Ewt1ilPzLDtQnJV4hclT9XuaZUKyUvmyr+Q=" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/styles/overlayscrollbars.min.css" integrity="sha256-dSokZseQNT08wYEWiz5iLI8QPlKxG+TswNRD8k35cpg=" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.css" integrity="sha256-Qsx5lrStHZyR9REqhUF8iQt73X06c8LGIUPzpOhwRrI=" crossorigin="anonymous" />
                <link rel="stylesheet" href="./css/adminlte.min.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.css" integrity="sha256-4MX+61mt9NVvvuPjUWdUdyfZfxSB1/Rf9WtqRHgG5S0=" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/css/jsvectormap.min.css" integrity="sha256-+uGLJmmTKOqBr+2E6KDYs/NRsHxSkONXFHUL0fy2O/4=" crossorigin="anonymous" />
            </head>
            {
                isLoaded
                ?
                <body>
                    <div className="app-wrapper">
                        <nav className="app-header navbar navbar-expand bg-body">
                            <div className="container-fluid">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item dropdown user-menu"> 
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> 
                                            <img src="/img/AdminLTELogo.png" className="user-image rounded-circle shadow" alt="User Image" /> 
                                            <span className="d-none d-md-inline">User</span> 
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                            <li className="user-header text-bg-primary"> 
                                                <img src="/img/AdminLTELogo.png" className="rounded-circle shadow" alt="User Image" />
                                                <p>User</p>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="light">
                            <div className="sidebar-brand"> 
                                <Link href="/admin/" className="brand-link"> 
                                    <span className="brand-text fw-light">BookerSource Admin</span> 
                                </Link> 
                            </div>
                            <div className="sidebar-wrapper">
                                <nav className="mt-2">
                                    <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                                        <li className="nav-header">PAGES</li>
                                        <li className="nav-item"> 
                                            <Link href="/admin/" className="nav-link"> 
                                                <i className="nav-icon bi bi-house"></i>
                                                <p>Home</p>
                                            </Link> 
                                        </li>
                                        <li className="nav-item"> 
                                            <Link href="/admin/users" className="nav-link"> 
                                                <i className="nav-icon bi bi-person"></i>
                                                <p>Users</p>
                                            </Link> 
                                        </li>
                                        <li className="nav-item"> 
                                            <Link href="/admin/hotels" className="nav-link"> 
                                                <i className="nav-icon bi bi-clipboard"></i>
                                                <p>Hotels</p>
                                            </Link> 
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </aside> 
                        <main className="app-main">
                            <div className="app-content">
                                <div className="container-fluid">
                                    {children}
                                </div>
                            </div>
                        </main>
                        <footer className="app-footer">
                            <strong>
                                Copyright &copy; 2024-2024&nbsp;
                                BookerSource.
                            </strong>
                            &nbsp;All rights reserved.
                        </footer>
                    </div>
                    <script src="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js" integrity="sha256-H2VM7BKda+v2Z4+DRy69uknwxjyDRhszjXFhsL4gD3w=" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha256-whL0tQWoY1Ku1iskqPFvmZ+CHsvmRWx/PIoEvIeWh4I=" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha256-YMa+wAM6QkVyz999odX7lPRxkoYAan8suedu4k2Zur8=" crossorigin="anonymous"></script>
                    <script src="/js/adminlte.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js" integrity="sha256-ipiJrswvAR4VAx/th+6zWsdeYmVae0iJuiR+6OqHJHQ=" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.min.js" integrity="sha256-+vh8GkaU7C9/wbSLIcwq82tQ2wTf44aOHA8HlBMwRI8=" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/js/jsvectormap.min.js" integrity="sha256-/t1nN2956BT869E6H4V1dnt0X5pAQHPytli+1nTZm2Y=" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/maps/world.js" integrity="sha256-XPpPaZlU8S/HWf7FZLAncLg2SAkP8ScUTII89x9D3lY=" crossorigin="anonymous"></script>
                </body>
                :
                <></>
            }
        </html>
    )
}