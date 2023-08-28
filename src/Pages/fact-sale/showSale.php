
<main>
    <div class="card container-transaction p-5 overflow-x-scroll">
        <div class="alert bg-white p-3 mt-3" role="alert">
            <h3 class="text-gray">Reporte de venta.</h3>
        </div>

        <!-- Date Filter -->
        <form id="formFechaSale">
            <table>
                <tr>
                    <td>
                        <input type='text' readonly id='buscar_inicio_sale' class="datepicker form-control form-control-sm" placeholder='Fecha Inicio'>
                    </td>
                    <td>
                        <input type='text' readonly id='buscar_fin_sale' class="datepicker form-control form-control-sm" placeholder='Fecha fin'>
                    </td>
                    <td>
                        <input type='button' id="btn_search_sale" value="Buscar" class="btn btn-success btn-sm">
                    </td>
                    <td>
                        <input type='button' id="btnLimpiar_sale" value="Limpiar" class="btn btn-out-danger btn-sm">
                    </td>
                    <td>
                        <button id="generar PDF"  class="btn form-file-button btn-sm">  <i class="fas fa-file-pdf text-red"></i> PDF</button>
                    </td>
                </tr>
            </table>
        </form>
        <hr>
        <!-- Table -->
        <table id='Tabla_fact' class="table table-striped" style="width:100%">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Total</th>
                <th>Día</th>
                <th>Fecha</th>
                <th>Estado</th>

            </tr>
            </thead>
            <tfoot> <!-- Pie de tabla para los totales -->

            </tfoot>
        </table>
    </div>
</main>
