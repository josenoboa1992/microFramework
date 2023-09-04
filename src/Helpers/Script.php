<?php

namespace Helpers;

use Config\UrlBase;

class Script
{    
                    
    /*******************************Script necesarios para Datatable*****************************************/
    public static function scriptDatatable()
    {
        echo "<script src='" .UrlBase::urlBase. "/public/libs/datatables/datatables.min.js'></script>";
        echo "<script src='" .UrlBase::urlBase. "/public/libs/datatables/dataTables.buttons.js'></script>";
        echo "<script src='" .UrlBase::urlBase. "/public/libs/datatables/jszip.min.js'></script>";       
        echo "<script src='" .UrlBase::urlBase. "/public/libs/datatables/buttons.html5.min.js'></script>";      
        echo "<script src='" .UrlBase::urlBase. "/public/libs/datatables/dataTables.responsive.min.js'></script>";   
        echo "<script src='" .UrlBase::urlBase. "/public/libs/datatables/responsive.bootstrap.min.js'></script>";                  
    }



    /**************************************Cambiar script dinamicamente*******************************/
    public static function changeScript()
    {
        if (isset($_GET['route'])) {
            $params = explode("/", $_GET['route']);

            if ($params[0] == "user") {
                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-3.6.0.min.js'></script>";
                self::scriptDatatable();
                echo "<script src='" . UrlBase::urlBase. "/src/Pages/user/user.js' type='module'></script>";
            } else if ($params[0] == "product") {
                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-3.6.0.min.js'></script>";
                self::scriptDatatable();
                echo "<script src='" . UrlBase::urlBase. "/src/Pages/product/product.js' type='module'></script>";
            }else if ($params[0]=="company"){

                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-3.6.0.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/src/Pages/company/company.js' type='module'></script>";
                self::scriptDatatable();
            } else if ($params[0]=="order") {

                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-3.6.0.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/src/Pages/order/order.js' type='module'></script>";
                self::scriptDatatable();

            }else if ($params[0]=="trans") {

                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-3.6.0.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-ui.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/src/Pages/trans/trans.js' type='module'></script>";
                self::scriptDatatable();

            }else if ($params[0]=="deposit") {

                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-3.6.0.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-ui.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/src/Pages/deposit/deposit.js' type='module'></script>";
                self::scriptDatatable();

            }else if ($params[0]=="sale") {

                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-3.6.0.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-ui.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/src/Pages/sale/sale.js' type='module'></script>";
                self::scriptDatatable();

            }else if ($params[0]=="lock") {
                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-3.6.0.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-ui.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/src/Pages/lock/lock.js' type='module'></script>";
                self::scriptDatatable();
            }else if ($params[0]=="fact-sale") {
                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-3.6.0.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-ui.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/src/Pages/fact-sale/fact-sale.js' type='module'></script>";
                self::scriptDatatable();
            }else if ($params[0]=="admin-user") {
                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-3.6.0.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/public/libs/jquery/jquery-ui.min.js'></script>";
                echo "<script src='" . UrlBase::urlBase. "/src/Pages/admin-user/admin-user.js' type='module'></script>";
                self::scriptDatatable();
            }
        }
    }
}
