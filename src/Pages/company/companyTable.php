
<div class="card m-3" style="border:1px solid gray; box-shadow: 1px 2px 5px;">

    <div class="card-header color-card text-gray">
        <strong style="font-size:20px;">Administrar Empresa</strong>
    </div>

    <div class="card-body">
            <!--Aqui se muestran los errores-->
            <div class="alert mt-3" role="alert" style="display: none;" id="messageCompanyDelete">
            </div>

            <button class="btn style-button mb-3" id="btnCompanySave"><i class="fa fa-user mr-2"></i>Registrar</button>
            <div class="row">

                <div class="col-lg-12 col-sm-12" style="background-color:#fdfdfd; border-radius:5px; box-shadow: 1px 1px 3px;">
                <br>
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered" style="width:100%;" id="companyTable">
                            <thead class="color-card text-gray">
                                <tr>
                                    <th scope="col">Cod</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Tipo Documento</th>
                                    <th scope="col">Representante</th>
                                    <th scope="col">CORREO</th>
                                    <th scope="col">Cantidad Empleado</th>
                                    <th scope="col">TELÉFONO</th>
                                    <th scope="col">ESTADO</th>
                                    <th scope="col">ACCIONES</th>
                                </tr>
                                </thead>
                                <tbody id="companyTableBody">
                                </tbody>
                        </table>
                    </div>
                </div>
            </div><!--end row-->
    </div><!--end card-body -->
    <div class="card-footer text-muted">
         <button class="btn btn-outline-successsuccess" id="btnReloadCompanyTable" type="submit"><i class="fa fa-sync mr-2" aria-hidden="true"></i>Actualizar</button>
    </div>
</div><!--end card-->
