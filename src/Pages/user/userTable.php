<div class="card m-3" style="border:1px solid gray; box-shadow: 1px 2px 5px;">

    <div class="card-header color-card text-gray">
        <strong style="font-size:20px;">Administrar Usuarios</strong>
    </div>

    <div class="card-body">   
            <!--Aqui se muestran los errores-->
            <div class="alert mt-3" role="alert" style="display: none;" id="messageUserDelete">
            </div>

            <button class="btn style-button mb-3" id="btnUserSave"><i class="fa fa-user mr-2"></i> Registrar</button>
            <div class="row">   
                
                <div class="col-lg-12 col-sm-12" style="background-color:#fdfdfd; border-radius:5px; box-shadow: 1px 1px 3px;">
                <br>
                    <div class="table-responsive">          
                        <table class="table table-hover table-bordered" style="width:100%;" id="userTable">
                            <thead class="color-card text-gray">
                                <tr>
                                    <th scope="col">Cod</th>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Genero</th>
                                    <th scope="col">Documento</th>
                                    <th scope="col">Correo</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">Empresa</th>
                                    <th scope="col">Teléfono</th>
                                    <th scope="col">Puntos</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col">Acciones</th>
                                </tr>
                                </thead>
                                <tbody id="userTableBody">
                                <div class="spinner-overlay">
                                    <div class="spinner"></div>
                                </div>
                                </tbody>
                        </table>
                    </div>
                </div>              
            </div><!--end row-->        
    </div><!--end card-body -->
    <div class="card-footer text-muted">
         <button class="btn btn-outline-successsuccess" id="btnReloadUserTable" type="submit"><i class="fa fa-sync mr-2" aria-hidden="true"></i>Actualizar</button>
    </div>  
</div><!--end card-->
