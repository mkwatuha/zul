<?php
restrictaccess();
function restrictaccess(){
if (!isset($_SESSION)) {
  session_start();
}
$MM_authorizedUsers = "";
$MM_donotCheckaccess = "true";

// *** Restrict Access To Page: Grant or deny access to this page
function isAuthorized($strUsers, $strGroups, $UserName, $UserGroup) { 
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
if (!((isset($_SESSION['MM_Username'])) && (isAuthorized("",$MM_authorizedUsers, $_SESSION['MM_Username'], $_SESSION['MM_UserGroup'])))) {   
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
?><?php
require('createInvoice.php');
$irs=base64_decode($_GET['i']);
$arr=explode('|',$irs);
$tid=$arr[0];
$tpid=$arr[1];;
$tname=$arr[2];
$_SESSION['rptrptend']=$arr[3];
$_SESSION['rptrptref']=$arr[4];
$_SESSION['rptrptstart']=$arr[5];
$_SESSION['rptrptcontractdate']=$arr[6];
$_SESSION['rptrptpaid']=$arr[7];
$_SESSION['rptrptrent']=$arr[8];
$_SESSION['rptrptbf']=$arr[9];
$_SESSION['rptrptbal']=$arr[10]; 
$_SESSION['rptaccountcat']=$arr[11];
$_SESSION['rptrptwater_elec']=$arr[12]; 
$_SESSION['rptdeposit']=$arr[13];
$_SESSION['rptacccategory']=$arr[14];
$_SESSION['rptsyssource']=$arr[15];
$_SESSION['rptlandlordID']=$arr[16];
$_SESSION['rptaccountid']=$arr[17];
$_SESSION['rptcurrentrent']=$arr[18];
$_SESSION['statementType']='tenant';
$_SESSION['stmt_from']=$arr[19];
$_SESSION['stmt_to']=$arr[20];
$_SESSION['clandlord']=$arr[21];
 $_SESSION['rptrptname']=$tname;
 $prefferedContacts=getPrefferedContact('admin_person',$tpid);
 $_SESSION['rptphone']=$prefferedContacts['mobile_number'];
  $_SESSION['rptemailaddress']=$prefferedContacts['email_address']; 
  $_SESSION['rptpostaladdress']=$prefferedContacts['postal_address'];
$pdf=new PDF_MC_Table();
$pdf->SetWelcomeData();
$pdf->AddPage();
$pdf->SetFont('Arial','',14);
//$tbl=1;//trim($_GET['r']);
//$rpt=fillPrimaryData('designer_queryfield',$tbl);
//$_SESSION['rptlandlordID']
$_SESSION['bankcashtrans']="select 
concat(admin_person.first_name,'  ',
admin_person.middle_name,' ',
admin_person.last_name) received_from,
bp.accaccount_name ,
bp.syowner,
bp.syownerid,
bp.checkregister_name,
bp.check_number,
bp.accountscategory_id,
bp.amount,
bp.transaction_type,
bp.naration,
bp.payment_mode,
accounts_accountactivity.transaction_date,
date_format(accounts_accountactivity.transaction_date ,\"%d\/%b\/%Y\") ddate,
date_format(accounts_accountactivity.transaction_date ,\"%M\") cmonth,
date_format(accounts_accountactivity.transaction_date ,\"%d\") cday,
date_format(accounts_accountactivity.transaction_date ,\"%Y\") cyear
from
(select
accounts_accaccount.accaccount_name ,
accounts_accaccount.syowner,
accounts_accaccount.syownerid,
 accounts_checkregister.checkregister_name , 
accounts_checkregister.check_number ,
accounts_checkregister.amount , 
accounts_checkregister.transaction_type ,
 accounts_checkregister.naration ,
'Bank ' payment_mode

from accounts_checkregister
inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_checkregister.accaccount_id 
inner join  


{where}


union 
select
accounts_accaccount.accaccount_name ,
accounts_accaccount.syowner,
accounts_accaccount.syownerid,
 accounts_cashtrans.cashtrans_name , 
accounts_cashtrans.voucher_number  voucher_number,
accounts_cashtrans.amount , 
accounts_cashtrans.transaction_type ,
 accounts_cashtrans.naration ,
'Cash ' payment_mode

from accounts_cashtrans
inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_cashtrans.accaccount_id  
inner join payment_currency on payment_currency.currency_id = accounts_cashtrans.currency_id

{where}
) bp
inner join admin_person on admin_person.person_id=bp.syownerid

 {whereacactivity}
";
 $_SESSION['bankcashtrans']="
 select concat(admin_person.first_name,' ', admin_person.middle_name,' ', admin_person.last_name) received_from, 
bp.accaccount_name , 
bp.syowner, 
bp.syownerid, 
bp.checkregister_name, 
bp.check_number, 
bp.amount, bp.transaction_type, bp.naration, bp.payment_mode,   bp.transaction_date

from (select date_format(accounts_checkregister.date_created ,\"%d\/%b\/%Y\") transaction_date,accounts_accaccount.accaccount_name , accounts_accaccount.syowner, accounts_accaccount.syownerid, accounts_checkregister.checkregister_name , accounts_checkregister.check_number , accounts_checkregister.amount , accounts_checkregister.transaction_type , accounts_checkregister.naration , 'Bank ' payment_mode 

from accounts_checkregister inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_checkregister.accaccount_id 

 

{where} 

union select date_format(accounts_cashtrans.date_created ,\"%d\/%b\/%Y\") transaction_date,accounts_accaccount.accaccount_name , accounts_accaccount.syowner, accounts_accaccount.syownerid, accounts_cashtrans.cashtrans_name , accounts_cashtrans.voucher_number voucher_number, accounts_cashtrans.amount , accounts_cashtrans.transaction_type , accounts_cashtrans.naration , 'Cash ' payment_mode from accounts_cashtrans inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_cashtrans.accaccount_id inner join payment_currency on payment_currency.currency_id = accounts_cashtrans.currency_id 


{where} ) 
bp inner join admin_person on admin_person.person_id=bp.syownerid 

";

$_SESSION['bankcashtransbylandlord']="select 
concat(admin_person.first_name,'  ',
admin_person.middle_name,' ',
admin_person.last_name) received_from,
bp.accaccount_name ,
bp.transaction_date,
bp.syowner,
bp.syownerid,
bp.checkregister_name,
bp.check_number,
accounts_accountactivity.accountscategory_id,
bp.amount,
(bp.amount*0.1) commission,

bp.transaction_type,
bp.naration,
bp.payment_mode,
accounts_accountactivity.transaction_date,
date_format(accounts_accountactivity.transaction_date ,\"%d\/%b\/%Y\") ddate,
date_format(accounts_accountactivity.transaction_date ,\"%M\") cmonth,
date_format(accounts_accountactivity.transaction_date ,\"%d\") cday,
date_format(accounts_accountactivity.transaction_date ,\"%Y\") cyear
from
(select
accounts_checkregister.date_created 
accounts_accaccount.accaccount_name ,
accounts_accaccount.syowner,
accounts_accaccount.syownerid,
 accounts_checkregister.checkregister_name , 
'', accounts_checkregister.check_number , 
accounts_checkregister.amount , 
accounts_checkregister.transaction_type ,
 accounts_checkregister.naration ,
'Bank ' payment_mode

from accounts_checkregister
inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_checkregister.accaccount_id  

{where}


union 
select
accounts_accaccount.accaccount_name ,
accounts_accaccount.syowner,
accounts_accaccount.syownerid,
 accounts_cashtrans.cashtrans_name , 
accounts_cashtrans.voucher_number  voucher_number,  
accounts_cashtrans.amount , 
accounts_cashtrans.transaction_type ,
 accounts_cashtrans.naration ,
'Cash ' payment_mode

from accounts_cashtrans
inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_cashtrans.accaccount_id  
inner join payment_currency on payment_currency.currency_id = accounts_cashtrans.currency_id

{where}
) bp
inner join admin_person on admin_person.person_id=bp.syownerid

 {whereacactivity}
";
$_SESSION['bankcashtransbylandlord']="select concat(admin_person.first_name,' ', admin_person.middle_name,' ', admin_person.last_name) received_from, 
bp.accaccount_name , 
bp.syowner, 
bp.syownerid, 
bp.checkregister_name, 
bp.check_number, 
bp.amount, bp.transaction_type, bp.naration, bp.payment_mode

from (select accounts_accaccount.accaccount_name , accounts_accaccount.syowner, accounts_accaccount.syownerid, accounts_checkregister.checkregister_name , accounts_checkregister.check_number , accounts_checkregister.amount , accounts_checkregister.transaction_type , accounts_checkregister.naration , 'Bank ' payment_mode 

from accounts_checkregister 
inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_checkregister.accaccount_id 

{where} 

union select accounts_accaccount.accaccount_name , accounts_accaccount.syowner, accounts_accaccount.syownerid, accounts_cashtrans.cashtrans_name , accounts_cashtrans.voucher_number voucher_number, accounts_cashtrans.amount , accounts_cashtrans.transaction_type , accounts_cashtrans.naration , 'Cash ' payment_mode from accounts_cashtrans inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_cashtrans.accaccount_id inner join payment_currency on payment_currency.currency_id = accounts_cashtrans.currency_id 


{where} ) 
bp inner join admin_person on admin_person.person_id=bp.syownerid 

" ;
$_SESSION["cashbankcolscaptionstenant"]="
#^
Date^
Check/Voucher #^
amount^
Description^
Payment Mode

"; 
$_SESSION["cashbankcolwidthTenants"]="
AI|5,
transaction_date|35,
check_number|30,
amount|30,
naration|70,
payment_mode|25 
";


$report_caption=$_SESSION['cashbankcolscaptions'];//$rpt['report_caption'];
$section_caption='Reporting';//$rpt['section_caption'];
$column_width=$_SESSION['cashbankcolwidth'];//$rpt['column_width'];
$query=$_SESSION['bankcashtrans'];//$rpt['query'];
 $accwhere=" where  accounts_accaccount.syowner='admin_person' AND ucase(accounts_accaccount.accaccount_name) like '".strtoupper($_SESSION['rptrptref'])."'";
/* if((trim($_SESSION['stmt_to']))&&(trim($_SESSION['stmt_from']))){
$accwhere.=" AND accounts_accaccount.date_created  Between '".trim($_GET['findperiod_from'])."'  AND '".trim($_GET['findperiod_to'])."'";
} */
$query=str_replace('{where}',$accwhere,$query);

if((trim($_SESSION['stmt_to']))&&(trim($_SESSION['stmt_from']))){
$limitbyaccat_OP=" AND accounts_accountactivity.accountscategory_id='".$_SESSION['rptacccategory']."'";
$accwhereAcctivitydate_OLD=" $limitbyaccat AND accounts_accountactivity.transaction_date  Between '".trim($_SESSION['stmt_from'])."'  AND '".trim($_SESSION['stmt_to'])."'";
$query=str_replace('{whereacactivity}',$accwhereAcctivitydate,$query);
}else{
 $query=str_replace('{whereacactivity}','',$query);
}
      


//Limit by current landlord
$querybylld=$_SESSION['bankcashtransbylandlord'];
$landlordid=$_SESSION['rptlandlordID'];
 $accwhere=" where  accounts_accaccount.accaccount_name in (select  housingtenant_name from housing_housingtenant where housinglandlord_id='$landlordid') AND accounts_accountscategory.accountscategory_id=54 ";

$querybylandlord=str_replace('{where}',$accwhere,$querybylld);
$_SESSION['bankcashtransbylandlord']=$querybylandlord;
//  echo $querybylandlord;
//Summary by tenant

/*$querybylld=$_SESSION['calculateRent'];
$landlordid=$_SESSION['rptlandlordID'];
$accwhere=" where  accounts_accaccount.accaccount_name in (select  housingtenant_name from housing_housingtenant where housinglandlord_id='$landlordid' AND housing_housingtenant.voided=0)  ";
$querybylandlord=str_replace('{where}',$accwhere,$querybylld);
$_SESSION['landlordtenantsmmryqry']=$querybylandlord;*/
//////////////////////////////////////////////////////////////////

//expense summary


/*$accountidwhere=" AND accounts_accountactivity.accaccount_id='".$_SESSION['rptaccountid']."'";
$querybylandlord=str_replace('{where}',$accwhere,$_SESSION['landlordpropertyexpenses']);
$querybylandlord=str_replace('{whereaccount}',$accountidwhere,$querybylandlord);
$_SESSION['landlordpropertyexpenses']=$querybylandlord;*/
//echo $query;
$headercaptions=explode('^',$report_caption);
$finfo=explode(',',$_SESSION['cashbankcolwidthTenants']);
$x=0;
$widthdetails='';
$headerfields='';

foreach($finfo as $finfoitem){
$d=explode('|',$finfoitem);
$widthdetails[$x]=$d[1];
$headerfields[$x]=$d[0];
$x++;

}
$ctnI=0;
$gridfields='';
foreach($headerfields as $itu){

$gridfields.= ",{name:'".trim($itu)."'}";
				
}
//echo $gridfields;
$_SESSION['disbursementlqry']=$query;
$multidataColumns=LoadQueryData($query,$headerfields);
//echo $query;
//create headers
  $pdf->CreateAddressHeader();
  $pdf->tenantStatementHeader();
//$curY=$pdf->CreateQueryTableHeaders($headercaptions,$widthdetails);

//$pdf->createColumns($widthdetails,85,155);
$pdf->SetWidths($widthdetails);
$numofrows=sizeof($multidataColumns);
$headerde=sizeof($headerfields);
$myrow='';
$ic=0;
$islast='';
//for($kv=0;$kv<1;$kv++){
        $ic++;
		$cheklastRow=0;
    if($_SESSION['statementType']=='tenant'){
    	$pdf->SetY(86);
    }
    
		for($i=0;$i<$numofrows;$i++){
		            $cheklastRow++;
					  for($k=0;$k<=$headerde;$k++){
					   $myrow[$k]=$multidataColumns[$i][$k];
					   }
						
						
						
	if(($ic==1)&&($cheklastRow==$numofrows)){
		$islast=1;
		}else{
		$islast=0;
		}
		//$pdf->Row($myrow,$widthdetails,$islast);
		$pdf->Row($myrow,$widthdetails,$headercoldetails,$islast,$showLines,$xLoc);
 }
//}
$xintent=100;
$labelwidth=35;

$pdf->getTotalPages();
$pdf->Output();
?>
