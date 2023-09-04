+<!-- The Modal -->
<div class="modal" id="updateGarnish">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header text-gray">
                <h4 class="modal-title">Actualizar Guarnición</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
    <form id="frmUpdateGarnish">
                <div class="card-body">
                    <div class="row">

                        <input type="hidden" class="form-control" name="product_id" id="productUpdateGarnish" placeholder="Nombre" required>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="Name">Nombre</label>
                                <input type="text" class="form-control" name="name" id="nameUpdateGarnish" placeholder="Nombre" required>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="Name">Precio</label>
                                <input type="number" class="form-control" name="price" step="0.01" id="priceUpdateGarnish" placeholder="Nombre" required>
                            </div>
                        </div>




                        <!--Aqui se muestran los errores-->
                    <div class="alert mt-3" role="alert" style="display: none;" id="errorUpdateGarnish">
                    </div>
                </div><!-- Modal footer -->
                <div class="modal-footer">
                    <button  type="submit" class="btn btn-outline-success" id="btnUpdateSucessgarnish">Actualizar</button>
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" id="btnUpdateClosegarnish">Cerrar</button>
                </div>
            </div>

     </form>
                </div>


        </div>
    </div>
</div>
