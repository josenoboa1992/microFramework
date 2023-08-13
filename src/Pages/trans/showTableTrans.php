
<main>
    <div class="container container-transaction">
        <div class="alert bg-white p-3 mt-3" role="alert">
          <h3 class="text-gray">Transacciones</h3>
        </div>

        <!-- Date Filter -->
        <form id="formFecha">
            <table>
                <tr>
                    <td>
                        <input type='text' readonly id='buscar_inicio' class="datepicker form-control form-control-sm" placeholder='Fecha Inicio'>
                    </td>
                    <td>
                        <input type='text' readonly id='buscar_fin' class="datepicker form-control form-control-sm" placeholder='Fecha fin'>
                    </td>
                    <td>
                        <input type='button' id="btn_search" value="Buscar" class="btn btn-success btn-sm">
                    </td>
                    <td>
                        <input type='button' id="btnLimpiar" value="Limpiar" class="btn btn-out-danger btn-sm">
                    </td>
                </tr>
            </table>
        </form>
        <hr>
        <!-- Table -->
        <table id='Tabla_personal' class="table table-striped" style="width:100%">
            <thead>
            <tr>
                <th>ID</th>
                <th>Descripcion</th>
                <th>Nombre</th>
                <th>Débito</th>
                <th>Crédito</th>
                <th>Fecha</th>
                <th>Hora</th>
            </tr>
            </thead>
            <tfoot> <!-- Pie de tabla para los totales -->
            <tr>
                <th class="debito-text" id="totalDebitos" colspan="1">Débito</th>
                <th class="credito-text" id="totalCreditos" colspan="1">Crédito</th>
                <th colspan="2">
            </tr>
            </tfoot>
        </table>
    </div>
</main>
