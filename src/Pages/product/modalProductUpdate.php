<!-- The Modal -->
<div class="modal" id="updatePro">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header text-gray">
                <h4 class="modal-title">Actualizar Producto</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
                <?php $user_id=$_SESSION['user_id']; ?>
            <!-- Modal body -->
            <div class="modal-body">
                <form id="frmUpdatePro">
                    <div class="card-body">
                        <div class="row">

                            <!-- Hidden input field for user_id -->
                            <input type="hidden" id="idproUpdate" name="user_id" value="<?= $user_id?>">
                            <input type="hidden" id="idcatPro" name="category_id">
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="Name">Nombre</label>
                                    <input type="text" class="form-control" name="name" id="nameProUpdate" placeholder="Nombre" required>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="Name">Descripción</label>
                                    <input type="text" class="form-control" name="description" id="descriptionPro" placeholder="Nombre" required>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="Name">Precio</label>
                                    <input type="number" class="form-control" name="price" id="priceProUpdate" placeholder="Nombre" required>
                                </div>
                            </div>




                            <!--Aqui se muestran los errores-->
                            <div class="alert mt-3" role="alert" style="display: none;" id="errorUpdatePro">
                            </div>
                        </div><!-- Modal footer -->
                        <div class="modal-footer">
                            <button  type="submit" class="btn btn-outline-success" id="btnproUpdate">Actualizar</button>
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" id="btnUpdateClosePro">Cerrar</button>
                        </div>
                    </div>

                </form>
            </div>


        </div>
    </div>
</div>
