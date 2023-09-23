
<div class="card m-3" style="border:1px solid gray; box-shadow: 1px 2px 5px;">

    <div class="card-header color-card text-gray">
        <strong style="font-size:20px;">Lista de Ordenes</strong>
    </div>


    <div class="card-body">
        <!--Aqui se muestran los errores-->
        <button id="printLabels" class="btn-outline-success mb-3"><i class="fas fa-print"></i> Imprimir Etiquetas</button>

        <div class="select-state d-flex align-items-center">
        <label for="estadoOrden">Seleccionar Estado:</label>
        <select id="estadoOrden" class="form-control w-25">
            <option value="pending">Pendiente</option>
            <option value="process">En Progreso</option>
            <option value="ready">Listo</option>
            <option value="Completed">Completado</option>
        </select>
        <button id="updateEstado" class="btn btn-success m-2">Actualizar Estado</button>
        </div>
        <div class="alert mt-3" role="alert" style="display: none;" id="messageOrderCompany">
        </div>

        <div class="row">

            <div class="col-lg-12 col-sm-12" style="background-color:#fdfdfd; border-radius:5px; box-shadow: 1px 1px 3px;">
                <br>
                <div class="table-responsive">
                    <table class="table table-hover table-bordered" style="width:100%;" id="orderLitaTable">
                        <thead class="color-card text-gray">
                        <tr>
                            <th scope="col" class="text-success font-weight-bold">#Orden</th>
                            <th scope="col" class="text-success font-weight-bold">#Cliente</th>
                            <th scope="col" class="text-success font-weight-bold">Empresa</th>
                            <th scope="col" class="text-success font-weight-bold">Nombre</th>
                            <th scope="col" class="text-success font-weight-bold">Preparación</th>
                            <th scope="col" class="text-success font-weight-bold">Monto</th>
                            <th scope="col" class="text-success font-weight-bold">Dirección</th>
                            <th scope="col" class="text-success font-weight-bold">Teléfono</th>
                            <th scope="col" class="text-success font-weight-bold">Estado</th>
                            <th scope="col" class="text-success font-weight-bold">Fecha</th>

                        </tr>
                        </thead>
                        <tbody id="saleTableBody">


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
