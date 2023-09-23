
<div class="card m-3" style="border:1px solid gray; box-shadow: 1px 2px 5px;">

    <div class="card-header color-card text-gray">
        <strong style="font-size:20px;">Ordenes por Empresas</strong>
    </div>

    <div class="card-body">
        <!--Aqui se muestran los errores-->
        <div class="alert mt-3" role="alert" style="display: none;" id="messageOrderCompany">
        </div>

        <div class="row">

            <div class="col-lg-12 col-sm-12" style="background-color:#fdfdfd; border-radius:5px; box-shadow: 1px 1px 3px;">
                <br>
                <div class="table-responsive">
                    <table class="table table-hover table-bordered" style="width:100%;" id="orderCompanyTable">
                        <thead class="color-card text-gray">
                        <tr>
                            <th scope="col" class="text-success font-weight-bold">ID</th>
                            <th scope="col" class="text-success font-weight-bold">Empresa</th>
                            <th scope="col" class="text-success font-weight-bold">Ordenes</th>

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
