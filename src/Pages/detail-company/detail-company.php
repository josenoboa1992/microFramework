
<main>
    <div class="card container-transaction p-5 overflow-x-scroll">
        <div class="alert bg-white p-3 mt-3" role="alert">
            <h3 class="text-gray">Reporte Empresa</h3>
        </div>

        <!-- Date Filter -->
        <form id="formFechaSaleClient">
            <table>
                <tr>
                    Generar PDF
                    <td>
                        <button id="generar_PDF_companyCliente"  class="btn form-file-button btn-sm">  <i class="fas fa-file-pdf text-red"></i> PDF</button>
                    </td>
                </tr>
            </table>
        </form>
        <hr>
        <!-- Table -->
        <table id='Tabla_fact_companyClient' class="table table-striped" style="width:100%">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre_Empresa</th>
                <th>Usuario</th>
                <th>Nombre</th>
                <th>Documento</th>
                <th>Balance Disponible</th>
                <th>Balance Pendiente</th>

            </tr>
            </thead>
            <tfoot> <!-- Pie de tabla para los totales -->

            </tfoot>
        </table>
    </div>
</main>
