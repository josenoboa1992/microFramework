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
                <form id="frmUpdateCompany">
                    <div class="card-body">
                        <div class="row">

                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="username">Name</label>
                                    <input type="text" class="form-control" name="name" id="nameUpdatecompany" placeholder="Nombre" required>
                                </div>
                            </div>



                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="address">Dirección</label>
                                    <input type="text" class="form-control" name="address" id="CompanyUpdateaddress" placeholder="Dirección" required>
                                </div>
                            </div>


                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="phone">Teléfono</label>
                                    <input type="text" class="form-control" name="phone" id="CompanyUpdatephone" placeholder="Teléfono" required>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="type_document">Tipo de Documento</label>
                                    <select class="form-control" name="type_document" id="CompanyUpdate-type-document">
                                        <option value="registration">Registro</option>
                                        <option value="license">Licencia</option>
                                        <option value="rnc">RNC</option>
                                        <option value="ced">Cédula</option>
                                    </select>
                                </div>
                            </div>


                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="type_document">Documento</label>
                                    <input type="text" class="form-control" name="document" id="Company-update-document" placeholder="Documento" required>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="representative">Gestor</label>
                                    <input type="text" class="form-control" name="representative" id="Company-update-representative" placeholder="Representante" required>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="email">Correo</label>
                                    <input type="text" class="form-control" name="email" id="Company-update-email" placeholder="Correo" required>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="employee_count">Cantidad de Empleados</label>
                                    <input type="number" class="form-control" name="employee_count" id="Company-update-employee-count" placeholder="Número de Empleado" min="0" required>
                                </div>
                            </div>



                            <!--Aqui se muestran los errores-->
                            <div class="alert mt-3" role="alert" style="display: none;" id="errorUpdateCompany">
                            </div>

                        </div>

                    </div>
                <div class="modal-footer">
                    <button  type="submit" class="btn btn-outline-success" id="btnUpdateCompanySucess">Actualizar</button>
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" id="btnUpdateCloseCompany">Cerrar</button>
                </div>
            </div>

     </form>
                </div>


        </div>
    </div>
</div>
