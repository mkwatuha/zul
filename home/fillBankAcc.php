<?php
restrictaccessMenu();
function restrictaccessMenu(){
if (!isset($_SESSION)) {
  session_start();
}
$MM_authorizedUsers = "";
$MM_donotCheckaccess = "true";
// *** Restrict Access To Page: Grant or deny access to this page
function isAuthorized_menu($strUsers, $strGroups, $UserName, $UserGroup) { 
  // For security, start by assumiaccng the visitor is NOT authorized. 
  $isValid = False; 

  // When a visitor has logged into this site, the Session variable MM_Username set equal to their username. 
  // Therefore, we know that a user is NOT logged in if that Session variable is blank. 
  if (!empty($UserName)) { 
    // Besides being logged in, you may restrict access to only certain users based on an ID established when they login. 
    // Parse the strings into arrays. 
    $arrUsers = Explode(",", $strUsers); 
    $arrGroups = Explode(",", $strGroups); 
    if (in_array($UserName, $arrUsers)) { 
      $isValid = true; 
    } 
    // Or, you may restrict access to only certain users based on their username. 
    if (in_array($UserGroup, $arrGroups)) { 
      $isValid = true; 
    } 
    if (($strUsers == "") && true) { 
      $isValid = true; 
    } 
  } 
  return $isValid; 
}

$MM_restrictGoTo = "../index.php";
if (!((isset($_SESSION['MM_Username'])) && (isAuthorized_menu("",$MM_authorizedUsers, $_SESSION['MM_Username'], $_SESSION['MM_UserGroup'])))) {   
  $MM_qsChar = "?";
  $MM_referrer = $_SERVER['PHP_SELF'];
  if (strpos($MM_restrictGoTo, "?")) $MM_qsChar = "&";
  if (isset($QUERY_STRING) && strlen($QUERY_STRING) > 0) 
  $MM_referrer .= "?" . $QUERY_STRING;
  $MM_restrictGoTo = $MM_restrictGoTo. $MM_qsChar . "accesscheck=" . urlencode($MM_referrer);
  header("Location: ". $MM_restrictGoTo); 
  exit;
}
}
require_once('../Connections/cf4_HH.php');
require_once('../PHPMailer/class.phpmailer.php');
///sms
include('../template/functions/menuLinks.php');

//createFieldSets('admin_roleperson,admin_persondept,hrpayroll_empnhif,
//hrpayroll_empnssf,hrpayroll_rehire,hrpayroll_paygrades,pension_emppensioncontr');
if($_POST['pid']!=''){
		$foundrecordid=trim(strtoupper($_POST['q']));
		$category=trim($_POST['c']); 
		$pid=trim($_POST['pid']);
		$bacountde=getBankInfo($pid);
		$bankaccount_name=$bacountde['bankaccount_name'];
		$branch=$bacountde['branch'];
		$currency_id=$bacountde['currency_id'];
		$bank=$bacountde['bank_name'];
		$description=$bacountde['description'];
		
		
		$bankaccount_name=str_replace("\r", "\\n",$bankaccount_name);
		$bankaccount_name=str_replace("\r", "\\n",$bankaccount_name);
		
		$bank=str_replace("\r", "\\n",$bank);
		$bank=str_replace("\r", "\\n",$bank);
		
		$branch=str_replace("\r", "\\n",$branch);
		$branch=str_replace("\r", "\\n",$branch);
		
		
		$description=str_replace("\r", "\\n",$description);
		$description=str_replace("\r", "\\n",$description);
        $type=$_POST['type'];
				
       if($bankaccount_name){
	   //do nothing
	   }else{
	   $currency_id=1;
	   }
		
		echo "function fillAccountSummary(){";
		echo "
		Ext.getCmp('acbankaccount_name').setValue('$bankaccount_name');
		Ext.getCmp('acbank').setValue('$bank');
		Ext.getCmp('acbranch').setValue('$branch');
		Ext.getCmp('accurrency_id').setValue('$currency_id');
		Ext.getCmp('acdescription').setValue('$description');
		
		
		
		
		}
		fillAccountSummary();
		";
}
?>