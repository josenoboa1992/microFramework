
<div class="card mt-3" style="background-color:#fdfdfd; border-radius:5px; box-shadow: 1px 1px 3px; display: none" id="lock-table-product">

    <div class="card-header text-gray fw-bold">
        Administrar productos
    </div>

    <div class="card-body">
        <!--Aqui se muestran los errores-->
        <div class="alert mt-3" role="alert" style="display: none;" id="errorShowProductLock">
        </div>

        <div class="table-responsive">
            <table class="table table-hover table-bordered" style="width: 100%;" id="lockProTable">
                <thead class="color-card text-gray">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">Estado</th>

                    <th scope="col">ACCIONES</th>
                </tr>
                </thead>
                <tbody id="catTableBody">
                <div class="spinner-overlay">
                    <div class="spinner"></div>
                </div>

                </tbody>
                <div class="alert mt-3" role="alert" style="display: none;" id="errorProLock">
                </div>
            </table>
        </div>

    </div>

</div>
