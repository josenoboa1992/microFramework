<div class="modal fade" id="modalUserUpdate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header text-gray">
        <input type="hidden" id="userID">
        <h5 class="modal-title fw-bold text-gray" id="Modalupdate">Actualizar Usuario</h5>
      </div>
      <div class="modal-body">

          <form id="frmUpdateUser">
              <div class="card-body">
                  <div class="row">

                      <div class="col-lg-10">
                          <div class="form-group">
                              <label for="username">Usuario</label>
                              <input type="text" class="form-control" name="username" id="usernameupdate" placeholder="Ingrese su usuario" required>
                          </div>
                      </div>

                      <div class="col-lg-5">
                          <div class="form-group">
                              <label for="name">Nombre</label>
                              <input type="text" class="form-control" name="name" id="nameupdate" placeholder="Ingrese su nombre" required>
                          </div>
                      </div>

                      <div class="col-lg-5">
                          <div class="form-group">
                              <label for="lastname">Apellido</label>
                              <input type="text" class="form-control" name="lastname" id="lastnameupdate" placeholder="Ingrese su apellido" required>
                          </div>
                      </div>



                      <div class="col-lg-5">
                          <div class="form-group">
                              <label for="password">Contraseña</label>
                              <input type="password" class="form-control" name="password" id="passwordupdate" placeholder="Ingrese su contraseña" required>
                          </div>
                      </div>
                      <div class="col-lg-5">
                          <div class="form-group">
                              <label for="confirmPassword">Confirmar Contraseña</label>
                              <input type="password" class="form-control" name="confirmPassword" id="confirmPasswordupdate" placeholder="Repita su contraseña" required>
                          </div>
                      </div>
                      <div class="col-lg-5">
                          <div class="form-group">
                              <label for="company">Compañía</label>
                              <select class="form-control" name="company" id="companyupdate" required>

                              </select>
                          </div>
                      </div>

                      <div class="col-lg-5">
                          <div class="form-group">
                              <label for="type_document">Tipo de Documento</label>
                              <select class="form-control" name="type_document" id="type_documentupdate" required>
                                  <option value="passport">Pasaporte</option>
                                  <option value="ced">Cédula</option>
                                  <option value="license">Licencia</option>
                                  <!-- Agrega más opciones según sea necesario -->
                              </select>
                          </div>
                      </div>

                      <div class="col-lg-5">
                          <div class="form-group">
                              <label for="document">Número de Documento</label>
                              <input type="text" class="form-control" name="document" id="documentupdate" placeholder="Ingrese el número de documento" required>
                          </div>
                      </div>

                      <div class="col-lg-5">
                          <div class="form-group">
                              <label for="phone">Teléfono</label>
                              <input type="text" class="form-control" name="phone" id="phoneupdate" placeholder="Ingrese su número de teléfono" required>
                          </div>
                      </div>

                      <div class="col-lg-7">
                          <div class="form-group">
                              <label for="email">Correo Electrónico</label>
                              <input type="email" class="form-control" name="email" id="emailupdate" placeholder="Ingrese su correo electrónico" required>
                          </div>
                      </div>

                      <div class="col-lg-2">
                          <div class="form-group">
                              <label for="privilege_user">Rol</label>
                              <select class="form-control" name="role" id="rolupdate">

                              </select>
                          </div>
                      </div>

                      <div class="col-lg-4">
                          <div class="form-group">
                              <label for="gender">Género</label>
                              <select class="form-control" name="gender" id="genderupdate">
                                  <option value="M">Masculino</option>
                                  <option value="F">Femenino</option>
                              </select>
                          </div>
                      </div>

                      <div class="col-lg-10">
                          <div class="form-group">
                              <label for="address">Dirección</label>
                              <input type="text" class="form-control" name="address" id="addressupdate" placeholder="Ingrese su dirección" required>
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
                      <div class="alert mt-3" role="alert" style="display: none;" id="errorSaveUser">
                      </div>

                  </div>

              </div>
              <!--end card-body -->
              <div class="modal-footer">
                  <button type="button" class="btn btn-outline-danger" id="btnCloseUserUpdate" data-bs-dismiss="modal">Cerrar</button>
                  <button type="submit" class="btn btn-outline-success" id="btnUserUpdate">Actualizar</button>
              </div>

          </form>

      </div>

    </div>
  </div>
</div>