
<main>
    <div class="card container-transaction p-5 overflow-x-scroll">
        <div class="alert bg-white p-3 mt-3" role="alert">
            <h3 class="text-gray">Reporte Empresa</h3>
        </div>

        <!-- Date Filter -->
        <form id="formFechaSale">
            <table>
                <tr>
                    Generar PDF
                    <td>
                        <button id="generar_PDF_company"  class="btn form-file-button btn-sm">  <i class="fas fa-file-pdf text-red"></i> PDF</button>
                    </td>
                </tr>
            </table>
        </form>
        <hr>
        <!-- Table -->
        <table id='Tabla_fact_company' class="table table-striped" style="width:100%">
            <thead>
            <tr>
                <th>ID</th>
                <th>Empresa</th>
                <th>Empleado</th>
                <th>Balance Pendiente</th>

            </tr>
            </thead>
            <tfoot> <!-- Pie de tabla para los totales -->

            </tfoot>
        </table>
    </div>
</main>
