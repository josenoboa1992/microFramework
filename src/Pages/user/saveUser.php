<div class="card mt-3 m-3" style="border:1px solid gray; box-shadow: 1px 2px 5px;" id="UserSave">

    <div class="card-header color-card text-white">
        <strong style=" font-size:20px;">Registrar Nuevo Usuario</strong>
    </div>
<?php $user_id=$_SESSION['user_id'];?>
    <form id="frmSaveUser">
        <div class="card-body">
            <div class="row">
                <input type="hidden" id="user_id" value="<?php echo $user_id;?>">

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="username">Usuario</label>
                        <input type="text" class="form-control" name="username" id="username" placeholder="Ingrese su usuario" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" class="form-control" name="name" id="name" placeholder="Ingrese su nombre" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="lastname">Apellido</label>
                        <input type="text" class="form-control" name="lastname" id="lastname" placeholder="Ingrese su apellido" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="company">Compañía</label>
                        <select class="form-control" name="company" id="company" required>

                        </select>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" name="password" id="password" placeholder="Ingrese su contraseña" required>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="confirmPassword">Confirmar Contraseña</label>
                        <input type="password" class="form-control" name="confirmPassword" id="confirmPassword" placeholder="Repita su contraseña" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="type_document">Tipo de Documento</label>
                        <select class="form-control" name="type_document" id="type_document" required>
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
                        <input type="text" class="form-control" name="document" id="document" placeholder="Ingrese el número de documento" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="phone">Teléfono</label>
                        <input type="text" class="form-control" name="phone" id="phone" placeholder="Ingrese su número de teléfono" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="Ingrese su correo electrónico" required>
                    </div>
                </div>

                <div class="col-lg-2">
                    <div class="form-group">
                        <label for="privilege_user">Rol</label>
                        <select class="form-control" name="role" id="rol">

                        </select>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="gender">Género</label>
                        <select class="form-control" name="gender" id="gender">
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="address">Dirección</label>
                        <input type="text" class="form-control" name="address" id="address" placeholder="Ingrese su dirección" required>
                    </div>
                </div>

                <!-- <div class="col-lg-4">
                    <div class="form-group">
                        <label for="estate_user">Estado</label>
                        <select class="form-control" name="estado" id="estado">
                            <option>activo</option>
                            <option>inactivo</option>
                        </select>
                    </div>
                </div> -->



                <div class="col-lg-4">
                    <div class="form-group">
                        <label> Ayuda</label>
                        <br>
                        <button type="button" class="btn btn-outline-dark" id="btnprivilegeabout" data-bs-toggle="modal" data-bs-target="#modalAboutPrivilege">
                            Ver privilegio
                        </button>
                    </div>
                </div>

                <!--Aqui se muestran los errores-->
                <div class="alert mt-3" role="alert" style="display: none;" id="errorSaveUser">
                </div>

            </div>

        </div>
        <!--end card-body -->

        <div class="card-footer text-muted">
            <button class="btn btn-outline-success" id="btnUserRegister" type="submit"><i class="fa fa-plus mr-2" aria-hidden="true"></i>Registrar</button>
            <button class="btn btn-outline-success" id="btnUserEnable"><i class="fa fa-unlock mr-2" aria-hidden="true"></i>Habilitar</button>
            <button class="btn btn-outline-dark" id="btnUserDisabled"><i class="fa fa-lock mr-2" aria-hidden="true"></i>Deshabilitar</button>
            <button class="btn btn-outline-dark" id="btnUserClear"><i class="fa fa-trash mr-2" aria-hidden="true"></i>Limpiar</button>
            <button class="btn btn-outline-dark" id="btnCloseUserSave"><i class="fas fa-eye-slash mr-2"></i>Ocultar</button>
        </div>
    </form>

</div>
<!--end card-->
