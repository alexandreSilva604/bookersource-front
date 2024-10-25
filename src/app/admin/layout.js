export default function AdminLayout({ children }) {

    return (
        <html lang="en">
            <body>
                <div className="app-wrapper">
                <nav className="app-header navbar navbar-expand bg-body">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item"> <a className="nav-link" data-lte-toggle="sidebar" href="#" role="button"> <i className="bi bi-list"></i> </a> </li>
                            <li className="nav-item d-none d-md-block"> <a href="#" className="nav-link">Home</a> </li>
                            <li className="nav-item d-none d-md-block"> <a href="#" className="nav-link">Contact</a> </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"> <a className="nav-link" data-widget="navbar-search" href="#" role="button"> <i className="bi bi-search"></i> </a> </li>
                            <li className="nav-item dropdown"> <a className="nav-link" data-bs-toggle="dropdown" href="#"> <i className="bi bi-chat-text"></i> <span className="navbar-badge badge text-bg-danger">3</span> </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end"> <a href="#" className="dropdown-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0"> <img src="../../dist/assets/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 rounded-circle me-3" /> </div>
                                            <div className="flex-grow-1">
                                                <h3 className="dropdown-item-title">
                                                    Brad Diesel
                                                    <span className="float-end fs-7 text-danger"><i className="bi bi-star-fill"></i></span>
                                                </h3>
                                                <p className="fs-7">Call me whenever you can...</p>
                                                <p className="fs-7 text-secondary"> <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div> <a href="#" className="dropdown-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0"> <img src="../../dist/assets/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 rounded-circle me-3" /> </div>
                                            <div className="flex-grow-1">
                                                <h3 className="dropdown-item-title">
                                                    John Pierce
                                                    <span className="float-end fs-7 text-secondary"> <i className="bi bi-star-fill"></i> </span>
                                                </h3>
                                                <p className="fs-7">I got your message bro</p>
                                                <p className="fs-7 text-secondary"> <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div> <a href="#" className="dropdown-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0"> <img src="../../dist/assets/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 rounded-circle me-3" /> </div>
                                            <div className="flex-grow-1">
                                                <h3 className="dropdown-item-title">
                                                    Nora Silvester
                                                    <span className="float-end fs-7 text-warning"> <i className="bi bi-star-fill"></i> </span>
                                                </h3>
                                                <p className="fs-7">The subject goes here</p>
                                                <p className="fs-7 text-secondary"> <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div> <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown"> <a className="nav-link" data-bs-toggle="dropdown" href="#"> <i className="bi bi-bell-fill"></i> <span className="navbar-badge badge text-bg-warning">15</span> </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end"> <span className="dropdown-item dropdown-header">15 Notifications</span>
                                    <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"> <i className="bi bi-envelope me-2"></i> 4 new messages
                                        <span className="float-end text-secondary fs-7">3 mins</span> </a>
                                    <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"> <i className="bi bi-people-fill me-2"></i> 8 friend requests
                                        <span className="float-end text-secondary fs-7">12 hours</span> </a>
                                    <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"> <i className="bi bi-file-earmark-fill me-2"></i> 3 new reports
                                        <span className="float-end text-secondary fs-7">2 days</span> </a>
                                    <div className="dropdown-divider"></div> <a href="#" className="dropdown-item dropdown-footer">
                                        See All Notifications
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item"> <a className="nav-link" href="#" data-lte-toggle="fullscreen"> <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen"></i> <i data-lte-icon="minimize" className="bi bi-fullscreen-exit" style={{display: 'none'}}></i> </a> </li>
                            <li className="nav-item dropdown user-menu"> <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <img src="../../dist/assets/img/user2-160x160.jpg" className="user-image rounded-circle shadow" alt="User Image" /> <span className="d-none d-md-inline">Alexander Pierce</span> </a>
                                <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                    <li className="user-header text-bg-primary"> <img src="../../dist/assets/img/user2-160x160.jpg" className="rounded-circle shadow" alt="User Image" />
                                        <p>
                                            Alexander Pierce - Web Developer
                                            <small>Member since Nov. 2023</small>
                                        </p>
                                    </li>
                                    <li className="user-body">
                                        <div className="row">
                                            <div className="col-4 text-center"> <a href="#">Followers</a> </div>
                                            <div className="col-4 text-center"> <a href="#">Sales</a> </div>
                                            <div className="col-4 text-center"> <a href="#">Friends</a> </div>
                                        </div>
                                    </li>
                                    <li className="user-footer"> <a href="#" className="btn btn-default btn-flat">Profile</a> <a href="#" className="btn btn-default btn-flat float-end">Sign out</a> </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
                    <div className="sidebar-brand"> <a href="./index.html" className="brand-link"> <img src="../../dist/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image opacity-75 shadow" /><span className="brand-text fw-light">AdminLTE 4</span> </a> </div>
                    <div className="sidebar-wrapper">
                        <nav className="mt-2">
                            <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                                <li className="nav-item menu-open"> <a href="#" className="nav-link active"> <i className="nav-icon bi bi-speedometer"></i>
                                        <p>
                                            Dashboard
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="./index.html" className="nav-link active"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Dashboard v1</p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./index2.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Dashboard v2</p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./index3.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Dashboard v3</p>
                                            </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-item"> <a href="./generate/theme.html" className="nav-link"> <i className="nav-icon bi bi-palette"></i>
                                        <p>Theme Generate</p>
                                    </a> </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-box-seam-fill"></i>
                                        <p>
                                            Widgets
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="./widgets/small-box.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Small Box</p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./widgets/info-box.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>info Box</p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./widgets/cards.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Cards</p>
                                            </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-clipboard-fill"></i>
                                        <p>
                                            Layout Options
                                            <span className="nav-badge badge text-bg-secondary me-3">6</span> <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="./layout/unfixed-sidebar.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Default Sidebar</p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./layout/fixed-sidebar.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Fixed Sidebar</p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./layout/layout-custom-area.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Layout <small>+ Custom Area </small></p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./layout/sidebar-mini.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Sidebar Mini</p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./layout/collapsed-sidebar.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Sidebar Mini <small>+ Collapsed</small></p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./layout/logo-switch.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Sidebar Mini <small>+ Logo Switch</small></p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./layout/layout-rtl.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Layout RTL</p>
                                            </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-tree-fill"></i>
                                        <p>
                                            UI Elements
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="./UI/general.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>General</p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./UI/icons.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Icons</p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./UI/timeline.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Timeline</p>
                                            </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-pencil-square"></i>
                                        <p>
                                            Forms
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="./forms/general.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>General Elements</p>
                                            </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-table"></i>
                                        <p>
                                            Tables
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="./tables/simple.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Simple Tables</p>
                                            </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-header">EXAMPLES</li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-box-arrow-in-right"></i>
                                        <p>
                                            Auth
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-box-arrow-in-right"></i>
                                                <p>
                                                    Version 1
                                                    <i className="nav-arrow bi bi-chevron-right"></i>
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"> <a href="./examples/login.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                        <p>Login</p>
                                                    </a> </li>
                                                <li className="nav-item"> <a href="./examples/register.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                        <p>Register</p>
                                                    </a> </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-box-arrow-in-right"></i>
                                                <p>
                                                    Version 2
                                                    <i className="nav-arrow bi bi-chevron-right"></i>
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"> <a href="./examples/login-v2.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                        <p>Login</p>
                                                    </a> </li>
                                                <li className="nav-item"> <a href="./examples/register-v2.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                        <p>Register</p>
                                                    </a> </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"> <a href="./examples/lockscreen.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Lockscreen</p>
                                            </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-header">DOCUMENTATIONS</li>
                                <li className="nav-item"> <a href="./docs/introduction.html" className="nav-link"> <i className="nav-icon bi bi-download"></i>
                                        <p>Installation</p>
                                    </a> </li>
                                <li className="nav-item"> <a href="./docs/layout.html" className="nav-link"> <i className="nav-icon bi bi-grip-horizontal"></i>
                                        <p>Layout</p>
                                    </a> </li>
                                <li className="nav-item"> <a href="./docs/color-mode.html" className="nav-link"> <i className="nav-icon bi bi-star-half"></i>
                                        <p>Color Mode</p>
                                    </a> </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-ui-checks-grid"></i>
                                        <p>
                                            Components
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="./docs/components/main-header.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Main Header</p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="./docs/components/main-sidebar.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Main Sidebar</p>
                                            </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-filetype-js"></i>
                                        <p>
                                            Javascript
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="./docs/javascript/treeview.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Treeview</p>
                                            </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-item"> <a href="./docs/browser-support.html" className="nav-link"> <i className="nav-icon bi bi-browser-edge"></i>
                                        <p>Browser Support</p>
                                    </a> </li>
                                <li className="nav-item"> <a href="./docs/how-to-contribute.html" className="nav-link"> <i className="nav-icon bi bi-hand-thumbs-up-fill"></i>
                                        <p>How To Contribute</p>
                                    </a> </li>
                                <li className="nav-item"> <a href="./docs/faq.html" className="nav-link"> <i className="nav-icon bi bi-question-circle-fill"></i>
                                        <p>FAQ</p>
                                    </a> </li>
                                <li className="nav-item"> <a href="./docs/license.html" className="nav-link"> <i className="nav-icon bi bi-patch-check-fill"></i>
                                        <p>License</p>
                                    </a> </li>
                                <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle-fill"></i>
                                        <p>Level 1</p>
                                    </a> </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle-fill"></i>
                                        <p>
                                            Level 1
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Level 2</p>
                                            </a> </li>
                                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>
                                                    Level 2
                                                    <i className="nav-arrow bi bi-chevron-right"></i>
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-record-circle-fill"></i>
                                                        <p>Level 3</p>
                                                    </a> </li>
                                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-record-circle-fill"></i>
                                                        <p>Level 3</p>
                                                    </a> </li>
                                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-record-circle-fill"></i>
                                                        <p>Level 3</p>
                                                    </a> </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                                <p>Level 2</p>
                                            </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle-fill"></i>
                                        <p>Level 1</p>
                                    </a> </li>
                                <li className="nav-header">LABELS</li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle text-danger"></i>
                                        <p className="text">Important</p>
                                    </a> </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle text-warning"></i>
                                        <p>Warning</p>
                                    </a> </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle text-info"></i>
                                        <p>Informational</p>
                                    </a> </li>
                            </ul>
                        </nav>
                    </div>
                </aside> 
                <main className="app-main">
                    <div className="app-content-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3 className="mb-0">Dashboard</h3>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-end">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Dashboard
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-content">
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                </main>
                <footer className="app-footer">
                    <div className="float-end d-none d-sm-inline">Anything you want</div><strong>
                        Copyright &copy; 2014-2024&nbsp;
                        <a href="https://adminlte.io" className="text-decoration-none">AdminLTE.io</a>.
                    </strong>
                    All rights reserved.
                </footer>
            </div>
        </body>
        </html>
    )
}