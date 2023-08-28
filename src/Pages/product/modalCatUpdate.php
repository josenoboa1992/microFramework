<!-- The Modal -->
<div class="modal" id="updateCat">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header text-gray">
                <h4 class="modal-title">Actualizar Categoría</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
    <form id="frmUpdateCat">
                <div class="card-body">
                    <div class="row">

                        <!-- Hidden input field for user_id -->
                        <input type="hidden" id="idCat" name="ID">
                        <input type="hidden" id="imageUrlCat" name="imageUrl">
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="Name">Nombre</label>
                                <input type="text" class="form-control" name="name" id="nameUpdateCat" placeholder="Nombre" required>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="formFile" class="form-label">Imagen de la Categoría</label>
                                <input class="form-control" type="file" id="imageUdateCategory" name="imageName" accept="image/jpeg,image/jpg,image/png" required>
                                <p>La imagen debe ser(jpg,jpeg,png), tamaño(min:10kb , max:500kb), dimensiones(200x200)</p>
                            </div>
                        </div>

                    <!--Aqui se muestran los errores-->
                    <div class="alert mt-3" role="alert" style="display: none;" id="errorUpdateCategory">
                    </div>
                </div><!-- Modal footer -->
                <div class="modal-footer">
                    <button  type="submit" class="btn btn-outline-success" id="btnUpdateSucessCat">Actualizar</button>
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" id="btnUpdateCloseCat">Cerrar</button>
                </div>
            </div>

     </form>
                </div>


        </div>
    </div>
</div>
