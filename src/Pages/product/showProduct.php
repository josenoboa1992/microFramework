<div class="card mt-3" style="background-color: #fdfdfd; border-radius: 5px; box-shadow: 1px 1px 3px; display: none;" id="table-product">
    <div class="card-header text-gray fw-bold">
        Productos registrados
    </div>
    <div class="card-body">
        <!-- Aquí se mostrarán los errores -->
        <div class="alert mt-3" role="alert" style="display: none;" id="errorShowProduct">
            <!-- The error messages will be shown here -->
        </div>

        <div class="table-responsive">
            <table class="table table-hover table-bordered" style="width: 100%;" id="proTable">
                <thead class="color-card text-gray">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">USUARIO</th>
                    <th scope="col">CATEGORÍA</th>
                    <th scope="col">PRODUCTO</th>
                    <th scope="col">DESCRIPCIÓN</th>
                    <th scope="col">PRECIO</th>
                    <th scope="col">IMAGEN</th>
                    <th scope="col">FECHA</th>
                    <th scope="col">ESTADO</th>

                    <th scope="col">ACCIONES</th>
                </tr>
                </thead>
                <tbody id="proTableBody">
                <div class="spinner-overlay">
                    <div class="spinner"></div>
                </div>
                </tbody>
            </table>
        </div>

    </div>
</div>
