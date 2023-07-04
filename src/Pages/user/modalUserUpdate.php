<!-- The Modal -->
<div class="modal" id="updateUser">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header text-gray">
                <h4 class="modal-title">Actualizar Usuario</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
    <form id="frmUpdateUsuario">
                <div class="card-body">
                    <div class="row">

                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="username">Usuario</label>
                                <input type="text" class="form-control" name="username" id="username-update" placeholder="usuario" required>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="Name">Nombre</label>
                                <input type="text" class="form-control" name="name" id="name-update" placeholder="Nombre" required>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="lastname">Apellido</label>
                                <input type="text" class="form-control" name="lastname" id="lastname-update" placeholder="apellido" required>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="company">Compañía</label>
                                <select class="form-control" name="company" id="company-update" required>

                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" class="form-control" name="password" id="password-update" placeholder="contraseña" readonly>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="type_document">Tipo de Documento</label>
                                <select class="form-control" name="type_document" id="type_document-update" required>
                                    <option value="passport">Pasaporte</option>
                                    <option value="ced">Cédula</option>
                                    <option value="license">Licencia</option>
                                    <!-- Agrega más opciones según sea necesario -->
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="document">Número de Documento</label>
                                <input type="text" class="form-control" name="document" id="document-update" placeholder="documento" required>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="phone">Teléfono</label>
                                <input type="text" class="form-control" name="phone" id="phone-update" placeholder="teléfono" required>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="email">Correo Electrónico</label>
                                <input type="email" class="form-control" name="email" id="email-update" placeholder="electrónico" required>
                            </div>
                        </div>

                        <div class="col-lg-2">
                            <div class="form-group">
                                <label for="privilege_user">Rol</label>
                                <select class="form-control" name="role" id="rol-update">

                                </select>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="gender">Género</label>
                                <select class="form-control" name="gender" id="gender-update">
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="address">Dirección</label>
                                <input type="text" class="form-control" name="address" id="address-update" placeholder="Ingrese su dirección" required>
                            </div>
                        </div>

                    </div>
                    <!--Aqui se muestran los errores-->
                    <div class="alert mt-3" role="alert" style="display: none;" id="errorUpdateUser">
                    </div>
                </div><!-- Modal footer -->
                <div class="modal-footer">
                    <button  type="submit" class="btn btn-outline-success" id="btnUpdateSucess">Actualizar</button>
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" id="btnUpdateCloseUser">Cerrar</button>
                </div>
            </div>

     </form>
                </div>


        </div>
    </div>
</div>
