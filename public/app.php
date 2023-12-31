<?php
use Config\UrlBase;
use Core\Auth;
use Core\Route;
use Helpers\Script;

$view = Route::route();

if ($view === 'login') {
   require './src/Pages/login/login.php';
} else if ($view === '404') {
   require './src/Pages/404/404.php';
} else {
   Auth::accessMain();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="shortcut icon" href="<?php echo UrlBase::urlBase;?>/public/img/icon.svg">
    <title>WORLDINGFOODS</title>
    <link href="<?php echo UrlBase::urlBase;?>/public/css/styles.css" rel="stylesheet" />
    <link href="<?php echo UrlBase::urlBase;?>/public/css/mdb.min.css" rel="stylesheet" />
    <link href="<?php echo UrlBase::urlBase;?>/public/libs/datatables/responsive.bootstrap.min.css" rel="stylesheet" />
    <link href="<?php echo UrlBase::urlBase;?>/public/libs/jquery/jquery-ui.min.css" rel="stylesheet" />
</head>

<body class="sb-nav-fixed">
   
    <!--Navbar-->
    <?php require './src/Pages/components/navbar.php'; ?>

    <!--Modal Change Password-->
    <?php require './src/Pages/components/modalChangePassword.php'; ?>

    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <?php if ($_SESSION['rol']==1){ ;?>
                        <a class="nav-link collapsed text-green" href="#" data-bs-toggle="collapse" data-bs-target="#collapseEmpresa" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon text-green"><i class="fas fa-building"></i></div>
                            Empresas
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <?php } ;?>
                        <div class="collapse" id="collapseEmpresa" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="<?php echo UrlBase::urlBase; ?>/company/">Administrar Empresas</a>
                            </nav>
                        </div>
                        <?php if ($_SESSION['rol']==1){ ;?>
                        <a class="nav-link collapsed text-green" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-user text-green"></i></div>
                            Usuarios
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <?php } ;?>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="<?php echo UrlBase::urlBase; ?>/user/">Administrar usuarios</a>
                            </nav>
                        </div>
                        <?php if ($_SESSION['rol']==1 || $_SESSION['rol']==2) { ;?>
                         <a class="nav-link collapsed text-green" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProduct" aria-expanded="false" aria-controls="collapsePages">
                            <div class="sb-nav-link-icon text-green"><i class="fas fa-shopping-cart"></i></div>
                            Productos
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <?php } ;?>
                        <div class="collapse" id="collapseProduct" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="<?php echo UrlBase::urlBase; ?>/product/">Administrar productos</a>
                            </nav>
                        </div>

                        <a class="nav-link collapsed text-green" href="#" data-bs-toggle="collapse" data-bs-target="#collapseOrder" aria-expanded="false" aria-controls="collapsePages">
                            <div class="sb-nav-link-icon text-green"><i class="fa fa-truck"></i></div>
                            Ordenes
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseOrder" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="<?php echo UrlBase::urlBase; ?>/order/">Administrar Ordenes</a>
                            </nav>
                        </div>
                        <?php if ($_SESSION['rol']==1 || $_SESSION['rol']==2) { ;?>
                        <a class="nav-link collapsed text-green" href="#" data-bs-toggle="collapse" data-bs-target="#collapseFinanza" aria-expanded="false" aria-controls="collapsePages">
                            <div class="sb-nav-link-icon text-green"><i class="fas fa-coins"></i></div>
                            Finanzas
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>

                        <?php };?>
                        <div class="collapse" id="collapseFinanza" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="<?php echo UrlBase::urlBase; ?>/trans/">Transacciones</a>
                            </nav>
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="<?php echo UrlBase::urlBase; ?>/deposit/">Depositos</a>
                            </nav>

                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="<?php echo UrlBase::urlBase; ?>/sale/">Ventas</a>
                            </nav>
                        </div>
                        <?php if ($_SESSION['rol']==1 || $_SESSION['rol']==2) { ;?>
                        <a class="nav-link collapsed text-green" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLock" aria-expanded="false" aria-controls="collapsePages">
                            <div class="sb-nav-link-icon text-green"><i class="fas fa-lock"></i></div>
                            Bloqueos
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>

                        <?php } ;?>
                        <div class="collapse" id="collapseLock" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="<?php echo UrlBase::urlBase; ?>/lock/">Administrar Horarios</a>
                            </nav>

                        </div>

                        <a class="nav-link collapsed text-green" href="#" data-bs-toggle="collapse" data-bs-target="#collapsefactoring" aria-expanded="false" aria-controls="collapsePages">
                            <div class="sb-nav-link-icon text-green"><i class="fas fa-file"></i></div>
                            Facturación
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapsefactoring" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="<?php echo UrlBase::urlBase; ?>/fact-sale/">Ventas</a>
                                <a class="nav-link" href="<?php echo UrlBase::urlBase; ?>/fact-company/">Empresas</a>
                            </nav>

                        </div>
                        <?php if ($_SESSION['rol']==1 ) { ;?>
                        <a class="nav-link collapsed text-green" href="#" data-bs-toggle="collapse" data-bs-target="#collapseRole" aria-expanded="false" aria-controls="collapsePages">
                            <div class="sb-nav-link-icon text-green"><i class="fas fa-key"></i></div>
                           Permisos
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <?php }; ?>
                        <div class="collapse" id="collapseRole" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="<?php echo UrlBase::urlBase; ?>/admin-user/">Roles</a>
                            </nav>

                        </div>

                        <!--                        <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">-->
<!--                            <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">-->
<!--                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">-->
<!--                                    Authentication-->
<!--                                    <div class="sb-sidenav-collapse-arrow"></div>-->
<!--                                </a>-->
<!---->
<!--                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">-->
<!--                                    Error-->
<!--                                    <div class="sb-sidenav-collapse-arrow"></div>-->
<!--                                </a>-->
<!--                            </nav>-->
<!--                        </div> -->
                      
                    </div>
                </div>
                <div class="sb-sidenav-footer">
                    <div class="small text-gray">Bienvenido: <strong><?php echo $_SESSION['nameUser'].' '.$_SESSION['lastNameUser']?></strong> </div>

                </div>
            </nav>
        </div>

        <div id="layoutSidenav_content">

            <main>
                <div class="container-fluid">
                    <?php include $view; ?>
                </div>
            </main>          

        </div>
    </div>

    <script src="<?php echo UrlBase::urlBase;?>/public/libs/bootstrap5/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="<?php echo UrlBase::urlBase;?>/public/libs/sweetalert/sweetalert.min.js"></script>
    <script src="<?php echo UrlBase::urlBase;?>/public/libs/fontawesome/all.min.js"></script>  
    <script src="<?php echo UrlBase::urlBase;?>/public/js/scripts.js" type="module"></script>


    <!--Cambiar script dinamicamente-->
    <?php Script::changeScript(); ?>

</body>

</html>
<!--Cerramos las etiquetas PHP del else-->
<?php
   }
?>
