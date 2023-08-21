

<div class="card mt-3" style="background-color:#fdfdfd; border-radius:5px; box-shadow: 1px 1px 3px;">

    <div class="card-header color-card text-gray fw-bold">
        Administrar Bloqueos
    </div>
    <ul class="nav nav-tabs m-3" id="myTab">
        <li class="nav-item">
            <a class="nav-link active green-tab" data-bs-toggle="tab" href="#tab1" onclick="mostrarLock('table-lock-category')">
                <i class="fa fa-shopping-cart"></i>Categorías
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab2" onclick="mostrarLock('lock-table-product')">
                <i class="fa fa-luggage-cart"></i>Productos
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


    </div>

    <script>
        function mostrarLock(tabla) {
            let tableCategory = document.getElementById("table-lock-category");
            let tableProduct = document.getElementById("lock-table-product");

            // Ocultar todas las tablas primero
            tableCategory.style.display = "none";
            tableProduct.style.display = "none";


            // Mostrar la tabla correspondiente
            if (tabla === 'table-lock-category') {
                tableCategory.style.display = "block";
            } else if (tabla === 'lock-table-product') {
                tableProduct.style.display = "block";
            }
        }




    </script>
