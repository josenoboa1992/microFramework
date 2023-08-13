
<div class="card m-3" style="border:1px solid gray; box-shadow: 1px 2px 5px;">

    <div class="card-header color-card text-gray">
        <strong style="font-size:20px;">Administrar Pagos</strong>
    </div>

    <div class="card-body">
        <!--Aqui se muestran los errores-->
        <div class="alert mt-3" role="alert" style="display: none;" id="messageDepositDelete">
        </div>

        <button class="btn style-button mb-3" id="btnDepositSave"><i class="fas fa-coins me-2"></i>Registrar</button>
        <div class="row">

            <div class="col-lg-12 col-sm-12" style="background-color:#fdfdfd; border-radius:5px; box-shadow: 1px 1px 3px;">
                <br>
                <div class="table-responsive">
                    <table class="table table-hover table-bordered" style="width:100%;" id="depositTable">
                        <thead class="color-card text-gray">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">#Client</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Monto</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Estado</th>
                            <th scope="col">ACCIONES</th>
                        </tr>
                        </thead>
                        <tbody id="depositTableBody">
                        </tbody>
                    </table>
                </div>
            </div>
        </div><!--end row-->
    </div><!--end card-body -->
    <div class="card-footer text-muted">
        <button class="btn btn-outline-success" id="btnReloadDepositTable" type="submit"><i class="fa fa-sync mr-2" aria-hidden="true"></i>Actualizar</button>
    </div>
</div><!--end card-->
