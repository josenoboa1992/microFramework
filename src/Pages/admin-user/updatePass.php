<!-- The Modal -->
<div class="modal" id="updateUserPass">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header text-gray">
                <h4 class="modal-title">Actualizar Contraseña</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form id="frmUpdatepass">
                    <div class="card-body">
                        <div class="row">

                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="user_idpass">ID</label>
                                    <input type="text" class="form-control" name="user_id" id="user_idpass" placeholder="usuario" readonly>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="newPassword">Nueva Contraseña</label>
                                    <input type="password" class="form-control" name="newPassword" id="newpasswordpass" placeholder="contraseña" required>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="confirmNewPassword">Confirmar Contraseña</label>
                                    <input type="password" class="form-control" name="confirmNewPassword" id="confirmNewPasswordpass" placeholder="contraseña" required>
                                </div>
                            </div>

                        <!--Aqui se muestran los errores-->
                        <div class="alert mt-3" role="alert" style="display: none;" id="errorUpdateUserPass">
                        </div>
                    </div><!-- Modal footer -->
                    <div class="modal-footer">
                        <button  type="submit" class="btn btn-outline-success" id="btnUpdateSucessPass">Actualizar</button>
                        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" id="btnUpdateCloseUserPass">Cerrar</button>
                    </div>
            </div>

            </form>
        </div>


    </div>
</div>
</div>
