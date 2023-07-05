<!-- The Modal -->
<?php use Config\UrlBase;?>
<div class="modal" id="detailsUser">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header text-gray">
                <h4 class="modal-title">Details Usuario</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body background-gray">
                <form id="frmUpdateUsuario">
                    <div class="card-body">


                        <div class="row">

                            <div class="col-md-3">
                                <div class="logo-detail">
                                <img src="<?php echo UrlBase::urlBase;?>public/img/sin-imge.jpg" alt="Avatar" class="rounded-circle img-fluid img-thumbnail">
                                <a class="detail-name" id="detailName"></a>

                                    <p class="detail-name" id="detailadmin">Admin</p>
                                </div>
                            </div>

                            <div class="col-md-5">

                                <div class="form-group row">
                                    <label for="nombre" class="col-sm-3 col-form-label">Usuario:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="detail-usuario" disabled>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="edad" class="col-sm-3 col-form-label">Nombre:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="detail-nombre" disabled>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="edad" class="col-sm-3 col-form-label">Apellidos:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="detail-apellidos" disabled>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="edad" class="col-sm-3 col-form-label">Genero:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="detail-genero" disabled>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="edad" class="col-sm-3 col-form-label">Documento:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="detail-document" disabled>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="edad" class="col-sm-3 col-form-label">Correo:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="detail-email" disabled>
                                    </div>
                                </div>



                        </div>
                        <div class="col-md-4">
                            <div class="form-group row">
                                <label for="edad" class="col-sm-3 col-form-label">Teléfono:</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="detail-telefono" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="profesion" class="col-sm-3 col-form-label">Pertenece empresa:</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="detail-company" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="ubicacion" class="col-sm-3 col-form-label">Ubicación:</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="location" disabled>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="ubicacion" class="col-sm-3 col-form-label">Puntos:</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="detail-punto" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="ubicacion" class="col-sm-3 col-form-label">Estado:</label>
                                <div class="col-sm-9">
                                    <a href="" id="status">Active</a>
                                </div>
                            </div>
                        </div>
                        </div>
                        <!--Aqui se muestran los errores-->
                        <div class="alert mt-3" role="alert" style="display: none;" id="errorUpdateUser">
                        </div>
                    </div><!-- Modal footer -->
                    <div class="modal-footer">

                        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" id="btnDetailCloseUser">Cerrar</button>
                    </div>
            </div>

            </form>
        </div>


    </div>
</div>
