

<div class="card mt-3" style="background-color:#fdfdfd; border-radius:5px; box-shadow: 1px 1px 3px;">

    <div class="card-header color-card text-gray fw-bold">
        Ordenes
    </div>
    <ul class="nav nav-tabs m-3" id="myTab">
        <li class="nav-item">
            <a class="nav-link active green-tab" data-bs-toggle="tab" href="#tab1">
                <i class="fa fa-spinner"></i>Pendiente
                <span class="badge bg-secondary" id="tab1Counter">0</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab2">
                <i class="fa fa-forward"></i>Proceso
                <span class="badge bg-secondary" id="tab2Counter">0</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab3">
                <i class="fa fa-check"></i>Listo
                <span class="badge bg-secondary" id="tab3Counter">0</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab4">
                <i class="fa fa-truck"></i>Completado
                <span class="badge bg-secondary" id="tab4Counter">0</span>
            </a>
        </li>
    </ul>


    <div class="tab-content">
        <div id="tab1" class="tab-pane fade show active">
            <div class="container mt-5 orden-card">
                <div class="row" id="cardContend">
                    <!-- Supongamos que tenemos una lista de productos y clientes -->
                    <!-- Cada elemento del array "productos" contiene información de un producto -->

                    <!-- Agrega más tarjetas aquí para cada producto y cliente que quieras mostrar -->

                </div>
            </div>
        </div>   <!--     fin de tab 1-->
        <div id="tab2" class="tab-pane fade">
            <div class="container mt-5 orden-card">
                <div class="row" id="cardContend-process">

                    <!-- Cada elemento del array "productos" contiene información de un producto -->

                    <!-- Agrega más tarjetas aquí para cada producto y cliente que quieras mostrar -->

                </div>
            </div>
        </div>
        <div id="tab3" class="tab-pane fade">
            <div class="container mt-5 orden-card">
                <div class="row" id="cardContend-ready">

                    <!-- Cada elemento del array "productos" contiene información de un producto -->

                    <!-- Agrega más tarjetas aquí para cada producto y cliente que quieras mostrar -->

                </div>
            </div>
        </div>
        <div id="tab4" class="tab-pane fade">
            <div class="container mt-5 orden-card">
                <div class="row" id="cardContend-completed">

                    <!-- Cada elemento del array "productos" contiene información de un producto -->

                    <!-- Agrega más tarjetas aquí para cada producto y cliente que quieras mostrar -->

                </div>
            </div>
        </div>




    </div>