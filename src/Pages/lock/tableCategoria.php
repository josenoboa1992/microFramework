
<div class="card mt-3" style="background-color:#fdfdfd; border-radius:5px; box-shadow: 1px 1px 3px; display: none" id="table-lock-category">

    <div class="card-header text-gray fw-bold">
        Administrar Categorías
    </div>

    <div class="card-body">
        <div class="allcheck">
            <label for=""  id="checkboxContainer"></label>
        </div>
        <!--Aqui se muestran los errores-->
        <div class="alert mt-3" role="alert" style="display: none;" id="errorShowCategory">
        </div>

        <div class="table-responsive">

            <table class="table table-hover table-bordered" style="width: 100%;" id="lockCatTable">

                <thead class="color-card text-gray">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Estado</th>

                    <th scope="col">Acciones</th>
                </tr>
                </thead>
                <tbody id="catTableBody">


                </tbody>

                <div class="alert mt-3" role="alert" style="display: none;" id="errorCat">
                </div>
            </table>

        </div>

    </div>

</div>
