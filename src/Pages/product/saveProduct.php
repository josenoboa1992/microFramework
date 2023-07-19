

<div class="card mt-3" style="background-color:#fdfdfd; border-radius:5px; box-shadow: 1px 1px 3px;">

  <div class="card-header color-card text-gray fw-bold">
    Registro
  </div>

    <ul class="nav nav-tabs m-3">
        <li class="nav-item">
            <a class="nav-link active green-tab" data-bs-toggle="tab" href="#tab1"  onclick="mostrarTabla('table-category')">Categoría</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab2"  onclick="mostrarTabla('table-product')">Producto</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab3" onclick="mostrarTabla('table-garnish')" >Guarnición</a>
        </li>
    </ul>

    <div class="tab-content">
        <div id="tab1" class="tab-pane fade show active">
            <form id="frmCategory" enctype="multipart/form-data">
                <div class="card-body">
                    <!--Aqui se muestran los errores-->
                    <div class="alert mt-3" role="alert" style="display: none;" id="errorSaveProduct">
                    </div>

                    <div class="row">

                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="form-group" class="form-label float-left">Nombre</label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="nombre del producto" required>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="formFile" class="form-label">Imagen del producto</label>
                                <input class="form-control" type="file" id="product" name="imageName" accept="image/jpeg,image/jpg,image/png" required>
                                <p>La imagen debe ser(jpg,jpeg,png), tamaño(min:10kb , max:500kb), dimensiones(200x200)</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="card-footer text-muted">
                    <button class="btn btn-success" id="btncategory" type="submit"><i class="fa fa-plus mr-2" aria-hidden="true"></i>Registrar</button>
                </div>
            </form>
    </div>   <!--     fin de tab 1-->
        <div id="tab2" class="tab-pane fade">
            <form id="frmSaveProduct" enctype="multipart/form-data">
                <div class="card-body">
                    <!--Aqui se muestran los errores-->
                    <div class="alert mt-3" role="alert" style="display: none;" id="errorSaveProduct">
                    </div>

                    <div class="row">

                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="form-group" class="form-label float-left">Nombre</label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="nombre del producto" required>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="form-group">
                                <label for="privilege_user" class="form-label">Categoría</label>
                                <select class="form-control" name="role" id="rol">

                                </select>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="form-group" class="form-label float-left">Precio</label>
                                <input type="number" class="form-control" id="price" name="price" placeholder="precio" required>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1" class="form-label">Descripción</label>
                                <textarea class="form-control" id="description" name="description" rows="3" placeholder="Máximo 30 caracteres" required></textarea>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="formFile" class="form-label">Imagen del producto</label>
                                <input class="form-control" type="file" id="product" name="imageName" accept="image/jpeg,image/jpg,image/png" required>
                                <p>La imagen debe ser(jpg,jpeg,png), tamaño(min:10kb , max:500kb), dimensiones(200x200)</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="card-footer text-muted">
                    <button class="btn btn-success" id="btnSaveProduct" type="submit"><i class="fa fa-plus mr-2" aria-hidden="true"></i>Registrar</button>
                </div>
            </form>
        </div>
        <div id="tab3" class="tab-pane fade">
            <form id="frmCategory" enctype="multipart/form-data">
                <div class="card-body">
                    <!--Aqui se muestran los errores-->
                    <div class="alert mt-3" role="alert" style="display: none;" id="errorSaveProduct">
                    </div>

                    <div class="row">
                        <div class="col-lg-2">
                            <div class="form-group">
                                <label for="privilege_user" class="form-label">Producto</label>
                                <select class="form-control" name="role" id="rol">

                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="form-group" class="form-label float-left">Nombre</label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="nombre del producto" required>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="form-group" class="form-label float-left">Precio</label>
                                <input type="number" class="form-control" id="price" name="price" placeholder="precio" required>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="card-footer text-muted">
                    <button class="btn btn-success" id="btncategory" type="submit"><i class="fa fa-plus mr-2" aria-hidden="true"></i>Registrar</button>
                </div>
            </form>
        </div>




    </div>





</div>
<script>
    function mostrarTabla(tabla) {
        let tableCategory = document.getElementById("table-category");
        let tableProduct = document.getElementById("table-product");
        let tableGarnish = document.getElementById("table-garnish");

        // Ocultar todas las tablas primero
        tableCategory.style.display = "none";
        tableProduct.style.display = "none";
        tableGarnish.style.display = "none";

        // Mostrar la tabla correspondiente
        if (tabla === 'table-category') {
            tableCategory.style.display = "block";
        } else if (tabla === 'table-product') {
            tableProduct.style.display = "block";
        } else if (tabla === 'table-garnish') {
            tableGarnish.style.display = "block";
        }
    }




</script>
