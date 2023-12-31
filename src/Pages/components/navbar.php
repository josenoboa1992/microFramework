<?php
use Config\UrlBase;
?>
<nav class="sb-topnav navbar navbar-expand navbar-dark color-card">
<!-- Navbar Brand-->
<a class="navbar-brand ps-3" href="<?php echo UrlBase::urlBase;?>">WORLDING<span>FOODS</span>
    <div class="content-title-log">
        <img src="<?php echo UrlBase::urlBase;?>public/img/LOGO.png" alt="">
    </div>
</a>

<!-- Sidebar Toggle-->
<button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 text-gray" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
<!-- Navbar Search-->
<form class="ms-auto me-0 me-md-3 my-2 my-md-0">

    <!-- Navbar-->
    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-gray" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i><?php echo $_SESSION['name']; ?></a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item text-gray" href="#" data-bs-toggle="modal" data-bs-target="#modalChangePassword">Cambiar Contraseña</a></li>
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item text-gray" id="closeSesion" href="<?php echo UrlBase::urlBase; ?>/src/Core/closeSession.php">Cerrar Sesión</a></li>
            </ul>
        </li>
    </ul>
</form>

</nav>
