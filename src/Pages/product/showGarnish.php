

<div class="card mt-3" style="background-color:#fdfdfd; border-radius:5px; box-shadow: 1px 1px 3px; display: none" id="table-garnish">

    <div class="card-header text-gray fw-bold">
        Guarnición de Productos
    </div>

    <div class="card-body">
        <!--Aqui se muestran los errores-->
        <div class="alert mt-3" role="alert" style="display: none;" id="errorShowGarnish">
        </div>

        <div class="table-responsive">
            <table class="table table-hover table-bordered" style="width: 100%;" id="garTable">
                <thead class="color-card text-gray">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">PRODUCTO</th>
                    <th scope="col">GUARNICIÓN</th>
                    <th scope="col">PRECIO</th>
                    <th scope="col">FECHA</th>
                    <th scope="col">ACCIONES</th>
                </tr>
                </thead>
                <tbody id="garTableBody">
                <div class="spinner-overlay">
                    <div class="spinner"></div>
                </div>
                </tbody>
            </table>
        </div>

    </div>

</div>
