<?php
restrictaccessMenu_mlkns();
function restrictaccessMenu_mlkns(){
if (!isset($_SESSION)) {
  session_start();
}
$MM_authorizedUsers = "";
$MM_donotCheckaccess = "true";

// *** Restrict Access To Page: Grant or deny access to this page
function isAuthorized_menu_fmks($strUsers, $strGroups, $UserName, $UserGroup) { 
  // For security, start by assuming the visitor is NOT authorized. 
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
if (!((isset($_SESSION['MM_Username'])) && (isAuthorized_menu_fmks("",$MM_authorizedUsers, $_SESSION['MM_Username'], $_SESSION['MM_UserGroup'])))) {   
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

include('../template/functions/menuLinks.php');
if($_GET['t']!=''){
$tablename=$_GET['t'];
}  
?><?php

function codeDate ($date) {
	$tab = explode ("-", $date);
	$r = $tab[1]."/".$tab[2]."/".$tab[0];
	return $r;
}

		  
			
 ///Alert
//read data
$findgygrp=strtoupper(trim($_GET['findgroup']));
$maxrows='';//' Limit 15 ';

$pk=explode('_',$tablename);
$whereclause='';
if($_GET['acn']){
   $whereclause=" WHERE $tablename.".$pk[1]."_id=".$_GET['id'];
}


if(($_GET['acn'])&&($tablename=='housing_housingtenant')){
   $whereclause=" and  pt.housingtenant_id=".$_GET['id'];
}
if(($tablename=='housing_housinglandlord')){
   //$whereclause=" Where housing_housinglandlord.voided!=1";
}
if(($_GET['acn'])&&($tablename=='housing_housinglandlord')){
   $whereclause=" Where housing_housinglandlord.housinglandlord_id=".$_GET['id'];
}
$orderbyclause=" order by $tablename.".$pk[1]."_id desc " ;
if($tablename=='housing_housingtenant'){
$orderbyclause=' order by pt.housingtenant_id desc ';
}
 if($_GET['searhfield']){
 $searhfield=trim($_GET['searhfield']);
 $searhvalue=trim($_GET['searhvalue']);
 //echo $_GET['searhfield'].$_GET['searhvalue'];
 $additionalparams=" $searhfield like '%$searhvalue%'";
   //$whereclause=" WHERE $pk[1]_id=".$_GET['id'];
   }
   if($whereclause){
		   if($additionalparams){
		  $whereclause.='  AND '.$additionalparams ;
		   }
   }else{
		   if($additionalparams){
		   $whereclause = " WHERE $additionalparams ";
		   }
   }
///
$dynamicTableActive=$_GET['dyt'];
//$dynamicField='';
$dynamicTable=$_SESSION['syownerid'.$tablename];

if($dynamicTableActive){
$dynamicField=$_SESSION['syowneridfield'.$tablename];
}else{
$dynamicField='';
}
$searchNotificationsRevisedSQL=reviseSQLToDynamic($tablename,$dynamicTableActive,$dynamicField);


if($_GET['rptsrd']){
$searchNotificationsRevisedSQL=$_SESSION['reporting_SQL'];
$orderbyclause='';
$maxrows='';
}



////////////////////////
//=1&sc=$selcols&dt=$displytype&dtt=$dtable
if($_GET['dnvgrid']){
$selcols=$_GET['sc'];
$dtable=$_GET['dtt'];
$searchNotificationsRevisedSQL= " select $selcols from $dtable ";
$replacefullname="CONCAT(admin_person.first_name,' ',admin_person.middle_name,' ',admin_person.last_name ) person_fullname";

$searchNotificationsRevisedSQL=str_replace('person_fullname',$replacefullname,$searchNotificationsRevisedSQL);


$orderbyclause='';
$maxrows='';
}
//////////////////////
if($_GET['txvivr']){
$searchNotificationsRevisedSQL=$_SESSION['employeeSQLDetails'];

//echo $searchNotificationsRevisedSQL;
$orderbyclause='';
$maxrows='';
}


//dysqlrpt=1&sc=$selcols&dt=$displytype&dtt=$sql

//dynamic reports
if($_GET['dysqlrpt']){
$sqlrpt=trim($_GET['dtt']);
$searchNotificationsRevisedSQL=$_SESSION[$sqlrpt];
$orderbyclause='';
$maxrows='';
}
if($_GET['pssmr']){
$searchNotificationsRevisedSQL=$_SESSION['payperiodsummary'];

//echo $searchNotificationsRevisedSQL;
$orderbyclause='';
$maxrows='';
}

if($_GET['vpslp']){
$searchNotificationsRevisedSQL=$_SESSION["periodpayslips"];

//echo $searchNotificationsRevisedSQL;
$orderbyclause='';
$maxrows='';
}

if($_GET['acctransgrid']){
$searchNotificationsRevisedSQL=$_SESSION['bankcashtrans'];
$orderbyclause='';
$maxrows='';
}


if($_GET['temprcds']){
//$searchNotificationsRevisedSQL=$_SESSION['bankcashtrans'];
$searchNotificationsRevisedSQL=$_SESSION['employeeSQLDetails'];
$orderbyclause='';
$maxrows='';
}

if($_GET['mprcds']){
//$searchNotificationsRevisedSQL=$_SESSION['bankcashtrans'];
$searchNotificationsRevisedSQL=$_SESSION['managepatientrcds'];
$orderbyclause='';
$maxrows='';
}
if($_GET['pmrrcds']){
//$searchNotificationsRevisedSQL=$_SESSION['bankcashtrans'];
if($_GET['fa']=='NOT APPROVED'){
//doctors view
$appwhere=" and medicallab_queue.queue_id  not in (select medicallab_resultreview.queue_id
from medicallab_resultreview where ucase(is_approved) like 'APPROVED' AND  medicallab_resultreview.voided=0) ";
$searchNotificationsRevisedSQL=str_replace('{approvalwhere}',$appwhere,$_SESSION['combinedPatientData']);
//$searchNotificationsRevisedSQL=$_SESSION['combinedPatientData'];
}
if($_GET['fa']=='APPROVED'){
$appwhere=" and medicallab_queue.queue_id  in (select medicallab_resultreview.queue_id
from medicallab_resultreview where ucase(is_approved) like 'APPROVED' and  medicallab_resultreview.voided=0) ";
$searchNotificationsRevisedSQL=str_replace('{approvalwhere}',$appwhere,$_SESSION['combinedPatientData']);

}

if($_GET['fa']=='pending reviews'){
$appwhere=" and medicallab_queue.queue_id  in (select medicallab_resultreview.queue_id
from medicallab_resultreview where ucase(is_approved) like 'FALSE' and  medicallab_resultreview.voided=0) ";
$searchNotificationsRevisedSQL=str_replace('{approvalwhere}',$appwhere,$_SESSION['combinedPatientData']);
}
//$searchNotificationsRevisedSQL=$_SESSION['patientQueueInfo'];

//echo $searchNotificationsRevisedSQL;
$orderbyclause='';
$maxrows='';
}
if(($_GET['acctransindiv'])||($_POST['acctransindiv']=='acctransindiv')){

$searchNotificationsRevisedSQL=$_SESSION['generalaccpayments'];

if(($_GET['icad'])||($_POST['icad'])){
		if($_POST['icad']) 
		$accountID=$_POST['icad'];
	    if($_GET['icad']) 
		$accountID=$_GET['icad'];


$query=$searchNotificationsRevisedSQL;
$accounts_cashtranswhere=" WHERE accounts_cashtrans.accaccount_id='".$accountID."'  AND accounts_cashtrans.voided=0";
$accounts_banktranswhere=" WHERE accounts_compcashdeposit.accaccount_id='".$accountID."'  AND accounts_compcashdeposit.voided=0";
$accounts_checkregister=" WHERE accounts_checkregister.accaccount_id='".$accountID."' AND accounts_checkregister.voided=0";
$directTransferwhere=" WHERE accounts_directtransferin.accaccount_id='".$accountID."' AND accounts_directtransferin.voided=0";

$query=str_replace('{cashwhere}',$accounts_cashtranswhere,$query);
$query=str_replace('{checkwhere}',$accounts_checkregister,$query);
$query=str_replace('{bankwhere}',$accounts_banktranswhere,$query);
$query=str_replace('{directTransferwhere}',$directTransferwhere,$query);


$searchNotificationsRevisedSQL=$query;


}
$orderbyclause='';
$maxrows='';
}

//Payments to clients/suppliers
if($_POST['acctransindiv'])
echo $_POST['acctransindiv']."=======Was founded meee";
if(($_GET['indcustpay'])||($_POST['acctransindiv']=='indcustpay')){

$searchNotificationsRevisedSQL=$_SESSION['checkpaymentsummary'];

if(($_GET['icad'])||($_POST['icad'])){
		if($_POST['icad']) 
		$accountID=$_POST['icad'];
	    if($_GET['icad']) 
		$accountID=$_GET['icad'];


$query=$searchNotificationsRevisedSQL;
$directTransfer="  accounts_directtransferout.accaccount_id='".$accountID."'";
$accounts_cashtranswhere="  accounts_cashtrans.accaccount_id='".$accountID."'"; 
$accounts_cashDepostwhere="  accounts_custcashdeposit.accaccount_id='".$accountID."'";
$accounts_CheckTrhaswhere="   accounts_custcheckregister.accaccount_id='".$accountID."'";
$checkDeposit="   accounts_custcheckregister.accaccount_id='".$accountID."'";
$query=str_replace('{cashTrahs}',$accounts_cashtranswhere,$query);
$query=str_replace('{cashDeposit}',$accounts_cashDepostwhere,$query);
$query=str_replace('{custCheckTrahs}',$accounts_CheckTrhaswhere,$query);
$query=str_replace('{custCheckDepostTrahs}',$checkDeposit,$query);
$query=str_replace('{directTransfer}',$directTransfer,$query);
$searchNotificationsRevisedSQL=$query;
//echo $query;

}
$orderbyclause='';
$maxrows='';
}
//Insurance info

if($_GET['insrptdbn']){
$acWhere=" where insurance_insurancedebitnote.voided!=1 ";
if($_GET['dbna']=='APPROVED'){
$acWhere.=" and insurance_insurancedebitnote.insurancedebitnote_id  in (select insurance_approvedbnote.insurancedebitnote_id
from insurance_approvedbnote where ucase(is_approved) like 'APPROVED' and  insurance_approvedbnote.voided=0) ";

}


$searchNotificationsRevisedSQL=str_replace("{where}",$acWhere,$_SESSION["debitNoteSQL"]);
$orderbyclause='';
}
if($_GET['insrpt']){
$acWhere=" where insurance_insurancedebitnote.voided!=1 ";
$orderbyclause='';
//tenant,landlord


if(trim($_GET['findinsured'])){

$acWhere.=" AND CONCAT(admin_person.last_name,' ',admin_person.first_name,' ',admin_person.middle_name ) like '%".trim($_GET['findinsured'])."%'";
}

if(trim($_GET['findunderwriter'])){
$acWhere.=" AND insurance_underwriter.underwriter_name like '%".trim($_GET['findunderwriter'])."%'";

}

if(trim($_GET['findusername'])){

		if(trim($_GET['findusername'])=='ALL'){
		//do not filter
		}else{
		$acWhere.=" AND insurance_insurancedebitnote.created_by='".trim($_GET['findusername'])."'";
		}

}

if((trim($_GET['findperiod_from']))&&(trim($_GET['findperiod_to']))){
$acWhere.=" AND insurance_insurancedebitnote.date_created  Between '".trim($_GET['findperiod_from'])."'  AND '".trim($_GET['findperiod_to'])."'";
}
$searchNotificationsRevisedSQL=str_replace("{where}",$acWhere,$_SESSION["debitNoteSQL"]);

}
//Tenant data
if($_GET['htdtls']){
$acWhere=" where admin_person.person_id=pt.person_id ";
$orderbyclause='';
//tenant,landlord
if(trim($_GET['findtenant'])){
$acWhere.=" AND pt.tenant like '%".trim($_GET['findtenant'])."%'";
}
if(trim($_GET['findlandlord'])){
$acWhere.=" AND CONCAT(admin_person.last_name,' ',admin_person.first_name,' ',admin_person.middle_name ) like '%".trim($_GET['findlandlord'])."%'";
}

if(trim($_GET['findusername'])){

		if(trim($_GET['findusername'])=='ALL'){
		//do not filter
		}else{
		$acWhere.=" AND pt.created_by='".trim($_GET['findusername'])."'";
		}

}

if((trim($_GET['findperiod_from']))&&(trim($_GET['findperiod_to']))){
$acWhere.=" AND pt.date_created  Between '".trim($_GET['findperiod_from'])."'  AND '".trim($_GET['findperiod_to'])."'";
}
$searchNotificationsRevisedSQL=str_replace("{where}",$acWhere,$_SESSION["hosingTenantSql"]);
          //echo $searchNotificationsRevisedSQL
}

//Housing Landlords
if($_GET['htllctrss']){
$acWhere=" where housing_housinglandlord.voided!=1 ";
$orderbyclause='';
//tenant,landlord
if(trim($_GET['findperson'])){
$acWhere.=" AND CONCAT(admin_person.last_name,' ',admin_person.first_name,' ',admin_person.middle_name ) like '%".trim($_GET['findperson'])."%'";
}


if(trim($_GET['findusername'])){

		if(trim($_GET['findusername'])=='ALL'){
		//do not filter
		}else{
		$acWhere.=" AND housing_housinglandlord.created_by='".trim($_GET['findusername'])."'";
		}

}

if((trim($_GET['findperiod_from']))&&(trim($_GET['findperiod_to']))){
$acWhere.=" AND housing_housinglandlord.date_created  Between '".trim($_GET['findperiod_from'])."'  AND '".trim($_GET['findperiod_to'])."'";
}
$searchNotificationsRevisedSQL=str_replace("{where}",$acWhere,$_SESSION["housinglandlordSearchSQL"]);

}
//Trans summary
if($_GET['trsmry']){
$orderbyclause='';
$searchNotificationsRevisedSQL=$_SESSION['cashCheckSummary'];
$orderbyclause='';
$maxrows='';
$acWhere='';

//Replace by Date and user
if((trim($_GET['findperson']))||(trim($_GET['findusername']))||(trim($_GET['findperiod_from']))||(trim($_GET['findperiod_to']))){

			if(trim($_GET['findperson'])){
			$acWhere=" WHERE p.person_fullname like '%".trim($_GET['findperson'])."%'";
			}
			
			if(trim($_GET['findusername'])){
			
					if(trim($_GET['findusername'])=='ALL'){
					//do not filter
					}else{
							if($acWhere){
							$acWhere.=" AND cc.created_by='".trim($_GET['findusername'])."'";
							}else{
							$acWhere.=" WHERE cc.created_by='".trim($_GET['findusername'])."'";
							}
					}
			
			}
			if((trim($_GET['findperiod_from']))&&(trim($_GET['findperiod_to']))){
			
			if($acWhere){
      $acWhere.=" AND cc.date_created  Between '".trim($_GET['findperiod_from'])."'  AND '".trim($_GET['findperiod_to'])."'";
				}else{
      $acWhere.=" WHERE cc.date_created  Between '".trim($_GET['findperiod_from'])."'  AND '".trim($_GET['findperiod_to'])."'";

							}
			
			
			}
			if(trim($_GET['findperiod_to'])){
			
			}

}

$searchNotificationsRevisedSQL=str_replace("{andsearch}",$acWhere,$searchNotificationsRevisedSQL);

//////////////////////////
}
//Cash transactions
if($_GET['cstss']){
$orderbyclause='';
$searchNotificationsRevisedSQL=$_SESSION['accounts_cashtrans_SearchSQL'];
$orderbyclause='';
$maxrows='';
$acWhere='';
//

if((trim($_GET['findperson']))||(trim($_GET['findusername']))||(trim($_GET['findperiod_from']))||(trim($_GET['findperiod_to']))){

			if(trim($_GET['findperson'])){
			$acWhere=" AND p.person_fullname like '%".trim($_GET['findperson'])."%'";
			}
			
			if(trim($_GET['findusername'])){
			
					if(trim($_GET['findusername'])=='ALL'){
					//do not filter
					}else{
					$acWhere.=" AND c.created_by='".trim($_GET['findusername'])."'";
					}
			
			}
			if((trim($_GET['findperiod_from']))&&(trim($_GET['findperiod_to']))){
			$acWhere.=" AND c.date_created  Between '".trim($_GET['findperiod_from'])."'  AND '".trim($_GET['findperiod_to'])."'";
			}
			if(trim($_GET['findperiod_to'])){
			
			}

}
$searchNotificationsRevisedSQL=str_replace("{and}",$acWhere,$_SESSION['accounts_cashtrans_SearchSQL']);
//$searchNotificationsRevisedSQL=$searchNotificationsRevisedSQL." LIMIT 10";
$whereclause='';
//$searchNotificationsRevisedSQL=str_replace("where .voided!=1"," ",$searchNotificationsRevisedSQL);
//where .voided!=1
//echo $searchNotificationsRevisedSQL.'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP';
//$searchNotificationsRevisedSQL= $searchNotificationsRevisedSQL.' limit 20';

}
if($_GET['prlemdt']){
$fielddata=fillPrimaryData('designer_queryfield',2); 
$searchNotificationsRevisedSQL=$fielddata['query'];
$orderbyclause='';
$maxrows='';
}

if($findgygrp){
		if ($whereclause){
		$whereclause.=$whereclause. " AND ucase(admin_table.table_name) like '$findgygrp%'";
		}
		else{
		$whereclause=" WHERE ucase(admin_table.table_name) like '$findgygrp%'";
		}
}

$searchNotifications=$searchNotificationsRevisedSQL.$whereclause.$orderbyclause.$maxrows;


if ($whereclause){

//echo $searchNotifications;
};

 //echo $searchNotifications. "\n\n\n\n\n\n";
$alertQueryResults=mysql_query( $searchNotifications) or die ($searchNotifications);
$cntAlert=mysql_num_rows($alertQueryResults);
if($cntAlert<=0){
//$searchNotifications=$_SESSION[$tablename."_SearchSQL"].$maxrows;
$searchNotifications=reviseSQLToDynamic($tablename,$dynamicTable,$dynamicField);
$searchNotifications=$searchNotifications.$orderbyclause.$maxrows;

//echo $searchNotifications.'  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
$alertQueryResults=mysql_query( $searchNotifications)or die ($searchNotifications);
}
    $alertArr='';
	$ctn=0;
	$alertrevised='';
          //while($alert=mysql_fetch_array($alertQueryResults))
		  
		  while($e=mysql_fetch_assoc($alertQueryResults))

                  $output[]=$e;

              $vrjsn=json_encode($output);
         //$var='"total":'.$cntAlert.',"offset": 0,'.  '"muresults:'.$vrjsn;
		 
		 print  $vrjsn;
        mysql_close();
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  /*{
				$alert_id=$alert['alert_id'];
				$alert_name=$alert['alert_name'];
				$is_active=$alert['is_active'];
				$success_status=$alert['success_status'];
				$alert_description=$alert['alert_description'];
				$alert_date=$alert['alert_date'];
				$alertrevised=codeDate ($alert['alert_date']);

		  $ctn++;
		  if($cntAlert==$ctn){
		  $ed='';
		  }else{
		  $ed=',';
		  }
		   $alertArr.="[".$alert_id
		   .",'".$alert_name."','".$is_active."','".$success_status."','".$alert_description."','".$alertrevised."']".$ed;
		   
		  }
$alertArrstr= '['.$alertArr.']';*/
//print $alertArrstr;
//print $alertArrstr;
        
    ?>