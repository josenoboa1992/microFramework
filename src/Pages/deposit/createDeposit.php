<div class="card mt-3 m-3" style="border:1px solid gray; box-shadow: 1px 2px 5px;" id="depositSave">

    <div class="card-header color-card text-gray">
        <strong style=" font-size:20px;">Registrar Nuevo Pago</strong>
    </div>

    <form id="frmSaveDeposit">
        <div class="card-body">
            <div class="row">

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="username">#Cliente</label>
                        <input type="text" class="form-control" name="client" id="client-deposit" placeholder="123" required>
                    </div>
                </div>



                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="address">Monto</label>
                        <input type="number" class="form-control" name="amount" id="monto-deposit" placeholder="0.00" min="0" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="contact">Descripción</label>
                        <input type="text" class="form-control" name="description" id="description-deposit" placeholder="Descripción" required>
                    </div>
                </div>




                <!--Aqui se muestran los errores-->
                <div class="alert mt-3" role="alert" style="display: none;" id="errorSaveDeposit">
                </div>

            </div>

        </div>
        <!--end card-body -->

        <div class="card-footer text-muted">
            <button class="btn btn-outline-success" id="registerDeposit" type="submit"><i class="fa fa-plus mr-2" aria-hidden="true"></i>Registrar</button>
            <button class="btn btn-outline-success" id="btnDepositEnable"><i class="fa fa-unlock mr-2" aria-hidden="true"></i>Habilitar</button>
            <button class="btn btn-outline-dark" id="btnDepositDisabled"><i class="fa fa-lock mr-2" aria-hidden="true"></i>Deshabilitar</button>
            <button class="btn btn-outline-dark" id="btnDepositClear"><i class="fa fa-trash mr-2" aria-hidden="true"></i>Limpiar</button>
            <button class="btn btn-outline-dark" id="btnCloseDepositSave"><i class="fas fa-eye-slash mr-2"></i>Ocultar</button>
        </div>
    </form>

</div>