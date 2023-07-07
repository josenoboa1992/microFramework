<div class="card mt-3 m-3" style="border:1px solid gray; box-shadow: 1px 2px 5px;" id="companySave">

    <div class="card-header color-card text-white">
        <strong style=" font-size:20px;">Registrar Nuevo Usuario</strong>
    </div>

    <form id="frmSaveCompany">
        <div class="card-body">
            <div class="row">

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="username">Name</label>
                        <input type="text" class="form-control" name="name" id="name-company" placeholder="Nombre" required>
                    </div>
                </div>



                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="address">Dirección</label>
                        <input type="text" class="form-control" name="address" id="Company-address" placeholder="Dirección" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="contact">Contacto</label>
                        <input type="text" class="form-control" name="contact" id="Company-contact" placeholder="Contacto" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="phone">Teléfono</label>
                        <input type="text" class="form-control" name="phone" id="Company-phone" placeholder="Teléfono" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="type_document">Tipo de Documento</label>
                        <select class="form-control" name="type_document" id="Company-type-document">
                            <option value="registration">Registro</option>
                            <option value="license">Licencia</option>
                            <option value="rnc">RNC</option>
                        </select>
                    </div>
                </div>


                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="type_document">Documento</label>
                        <input type="text" class="form-control" name="document" id="Company-document" placeholder="Documento" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="representative">Representante</label>
                        <input type="text" class="form-control" name="representative" id="Company-representative" placeholder="Representante" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="email">Correo</label>
                        <input type="text" class="form-control" name="email" id="Company-email" placeholder="Correo" required>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="employee_count">Números de Empleados</label>
                        <input type="number" class="form-control" name="employee_count" id="Company-employee-count" placeholder="Número de Empleado" min="0" required>
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



                <!--Aqui se muestran los errores-->
                <div class="alert mt-3" role="alert" style="display: none;" id="errorSaveCompany">
                </div>

            </div>

        </div>
        <!--end card-body -->

        <div class="card-footer text-muted">
            <button class="btn btn-outline-success" id="btnCompanyRegister" type="submit"><i class="fa fa-plus mr-2" aria-hidden="true"></i>Registrar</button>
            <button class="btn btn-outline-success" id="btnCompanyEnable"><i class="fa fa-unlock mr-2" aria-hidden="true"></i>Habilitar</button>
            <button class="btn btn-outline-dark" id="btnCompanyDisabled"><i class="fa fa-lock mr-2" aria-hidden="true"></i>Deshabilitar</button>
            <button class="btn btn-outline-dark" id="btnCompanyClear"><i class="fa fa-trash mr-2" aria-hidden="true"></i>Limpiar</button>
            <button class="btn btn-outline-dark" id="btnCloseCompanySave"><i class="fas fa-eye-slash mr-2"></i>Ocultar</button>
        </div>
    </form>

</div>
<!--end card-->
