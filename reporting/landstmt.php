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
//echo $_GET['i']; statement tenant

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
$_SESSION['rptaccountid']=436;//$arr[17];
$_SESSION['rptrptname']=$tname;
$_SESSION['ccaccountid']=$arr[0];
 $prefferedContacts=getPrefferedContact('admin_person',$tpid);
$_SESSION['rptphone']=$prefferedContacts['mobile_number'];
$_SESSION['rptemailaddress']=$prefferedContacts['email_address'];
$_SESSION['rptpostaladdress']=$prefferedContacts['postal_address'];

$_SESSION['statementType']='landlord';
////////////////////////
$querybylld=$_SESSION['calculateRent'];
$landlordid=$_SESSION['rptlandlordID'];
$accwhere=" where  accounts_accaccount.accaccount_name in (select  housingtenant_name from housing_housingtenant where housinglandlord_id='$landlordid' AND housing_housingtenant.voided=0)  ";
$querybylandlord=str_replace('{where}',$accwhere,$querybylld);

echo $querybylandlord;
$_SESSION['landlordtenantsmmryqry']=$querybylandlord;

$_SESSION['stmt_from']=$arr[19];
$_SESSION['stmt_to']=$arr[20];

//echo $_SESSION['landlordtenantsmmryqry'];
//////////////////////////////////////////////////////////////////

//expense summary
$accwhereex=" AND accounts_accaccount.accaccount_name in (select  housingtenant_name from housing_housingtenant where housinglandlord_id='$landlordid' AND housing_housingtenant.voided=0)  ";

$accountidwhere=" AND accounts_accountactivity.accaccount_id='".$_SESSION['rptaccountid']."'";
$querybylandlord=str_replace('{where}',$accwhereex,$_SESSION['landlordpropertyexpenses']);
$querybylandlord=str_replace('{whereaccount}',$accountidwhere,$querybylandlord);
$_SESSION['clandlordexpenses']=$querybylandlord;
////////////////////////
//echo $_SESSION['clandlordexpenses'];
///////////////////////////////Landlord information
$_SESSION['bankcashtransbylandlord']="
select
concat(admin_person.first_name,'  ',
admin_person.middle_name,' ',
admin_person.last_name) received_from,
bp.accaccount_name ,
bp.syowner,
bp.syownerid,
bp.banktrans_name,
bp.check_number,
bp.accountscategory_id,
bp.accountscategory_name,
bp.amount,
format((bp.amount*housing_housinglandlord.commission*0.01),2) commission,

bp.transaction_type,
bp.naration,
bp.payment_mode,
housing_housinglandlord.commission commission_rate,
accounts_accountactivity.transaction_date,
date_format(bp.transaction_date ,\"%d\/%b\/%Y\") ddate,
date_format(bp.transaction_date ,\"%M\") cmonth,
date_format(bp.transaction_date ,\"%d\") cday,
date_format(bp.transaction_date ,\"%Y\") cyear,
housing_housingtenant.rent,
housing_housingtenant.deposit+housing_housingtenant.electricity_water deposits,
housing_housingtenant.sys_track,

IF (housing_housingtenant.sys_track='Active', 'Occupied', concat(housing_housingtenant.sys_track,' ',date_format( housing_housingtenant.date_changed,\"%d\/%b\/%Y\")) ) AS statusinfo,

housing_housingtenant.electricity_water,

housing_housingtenant.housinglandlord_id
from
(
select
accounts_checkregister.date_created transaction_date,
accounts_accaccount.accaccount_name ,
accounts_accaccount.syowner,accounts_accaccount.syownerid,
accounts_checkregister.checkregister_name banktrans_name,
accounts_checkregister.check_number ,
54 accountscategory_id,
' ' accountscategory_name,
accounts_checkregister.amount,
accounts_checkregister.transaction_type ,
accounts_checkregister.naration ,
'Bank ' payment_mode
from accounts_checkregister


inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_checkregister.accaccount_id


{where}


union
select
accounts_cashtrans.date_created transaction_date,
accounts_accaccount.accaccount_name ,
accounts_accaccount.syowner,
accounts_accaccount.syownerid,
accounts_cashtrans.cashtrans_name ,
accounts_cashtrans.voucher_number  voucher_number,
accounts_accountscategory.accountscategory_id ,
accounts_accountscategory.accountscategory_name ,
accounts_cashtrans.amount ,
accounts_cashtrans.transaction_type ,
 accounts_cashtrans.naration ,
'Cash ' payment_mode

from accounts_cashtrans
inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_cashtrans.accaccount_id
inner join accounts_accountscategory on accounts_accountscategory.accountscategory_id = accounts_cashtrans.accountscategory_id
inner join payment_currency on payment_currency.currency_id = accounts_cashtrans.currency_id

{where}


) bp
inner join admin_person on admin_person.person_id=bp.syownerid
inner join housing_housingtenant on  bp.syownerid=housing_housingtenant.person_id
inner join housing_housinglandlord on housing_housinglandlord.housinglandlord_id = housing_housingtenant.housinglandlord_id
{limitlldactivity}
";
// $_SESSION['bankcashtransbylandlord']="select * from landlordstm_tmp2";
$_SESSION['bankcashtransbylandlord']=
"
select concat(admin_person.first_name,' ', admin_person.middle_name,' ', admin_person.last_name) received_from, bp.accaccount_name , bp.syowner, bp.syownerid, bp.banktrans_name, bp.check_number, bp.accountscategory_id, bp.accountscategory_name, bp.amount, format((bp.amount*housing_housinglandlord.commission*0.01),2) commission, bp.transaction_type, bp.naration, bp.payment_mode, housing_housinglandlord.commission commission_rate,
bp.transaction_date,
date_format(bp.transaction_date ,\"%d\/%b\/%Y\") ddate,
date_format(bp.transaction_date ,\"%M\") cmonth,
 date_format(bp.transaction_date ,\"%d\") cday,
 date_format(bp.transaction_date ,\"%Y\") cyear,
 housing_housingtenant.rent,
 housing_housingtenant.housingtenant_id,
 housing_housingtenant.period_startdate,
housing_housingtenant.period_months,
 housing_housingtenant.deposit+housing_housingtenant.electricity_water deposits,
 period_diff(date_format(housing_housingtenant.period_startdate,\"%Y%m\"),date_format(now(),\"%Y%m\")) months,
abs(period_diff(date_format(housing_housingtenant.period_startdate,\"%Y%m\"),date_format(now(),\"%Y%m\"))) *housing_housingtenant.rent totalpayable,
 housing_housingtenant.sys_track,
 IF (housing_housingtenant.sys_track='Active', 'Occupied',
 concat(housing_housingtenant.sys_track,' ',
 date_format( housing_housingtenant.date_changed,\"%d\/%b\/%Y\")) ) AS statusinfo,
 housing_housingtenant.electricity_water, housing_housingtenant.housinglandlord_id from (

select
accounts_checkregister.date_created transaction_date,
accounts_accaccount.accaccount_name ,
accounts_accaccount.syowner,accounts_accaccount.syownerid,
accounts_checkregister.checkregister_name banktrans_name,
accounts_checkregister.check_number ,
54 accountscategory_id,
' ' accountscategory_name,
accounts_checkregister.amount,
accounts_checkregister.transaction_type ,
accounts_checkregister.naration ,
'Bank ' payment_mode
from accounts_checkregister inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_checkregister.accaccount_id
{where}

union select
accounts_cashtrans.date_created transaction_date,
accounts_accaccount.accaccount_name , accounts_accaccount.syowner,
accounts_accaccount.syownerid, accounts_cashtrans.cashtrans_name ,
accounts_cashtrans.voucher_number voucher_number,
accounts_accountscategory.accountscategory_id ,
accounts_accountscategory.accountscategory_name , accounts_cashtrans.amount ,
accounts_cashtrans.transaction_type , accounts_cashtrans.naration , 'Cash ' payment_mode
from accounts_cashtrans
inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_cashtrans.accaccount_id
inner join accounts_accountscategory on accounts_accountscategory.accountscategory_id = accounts_cashtrans.accountscategory_id
inner join payment_currency on payment_currency.currency_id = accounts_cashtrans.currency_id
{where}) bp
inner join admin_person on admin_person.person_id=bp.syownerid inner join housing_housingtenant on bp.syownerid=housing_housingtenant.person_id

inner join housing_housinglandlord on housing_housinglandlord.housinglandlord_id = housing_housingtenant.housinglandlord_id

{limitlldactivity}


" ;

$_SESSION['sumpaidcommission']="
select
format(sum(bp.amount),2) totalpaid,
format(sum((bp.amount*housing_housinglandlord.commission*0.01)),2) totaL_comm,
format(sum(bp.amount)-sum(bp.amount*housing_housinglandlord.commission*0.01),2) net
from
(select
accounts_accaccount.accaccount_name ,
accounts_accaccount.syowner,
accounts_accaccount.syownerid,
 accounts_banktrans.banktrans_name ,
' ' check_number ,
 accounts_accountscategory.accountscategory_id ,
accounts_accountscategory.accountscategory_name ,
accounts_banktrans.amount ,
accounts_banktrans.transaction_type ,
 accounts_banktrans.naration ,
'Bank ' payment_mode

from accounts_banktrans
inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_banktrans.accaccount_id
inner join accounts_accountscategory on accounts_accountscategory.accountscategory_id = accounts_banktrans.accountscategory_id

{where}


union
select
accounts_accaccount.accaccount_name ,
accounts_accaccount.syowner,
accounts_accaccount.syownerid,
accounts_cashtrans.cashtrans_name ,
accounts_cashtrans.voucher_number  voucher_number,
accounts_accountscategory.accountscategory_id ,
accounts_accountscategory.accountscategory_name ,
accounts_cashtrans.amount ,
accounts_cashtrans.transaction_type ,
 accounts_cashtrans.naration ,
'Cash ' payment_mode

from accounts_cashtrans
inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_cashtrans.accaccount_id
inner join accounts_accountscategory on accounts_accountscategory.accountscategory_id = accounts_cashtrans.accountscategory_id
inner join payment_currency on payment_currency.currency_id = accounts_cashtrans.currency_id

{where}


) bp
inner join admin_person on admin_person.person_id=bp.syownerid
inner join housing_housingtenant on  bp.syownerid=housing_housingtenant.person_id
inner join accounts_accountactivity on accounts_accountactivity.accountactivity_name=bp.banktrans_name
inner join housing_housinglandlord on housing_housinglandlord.housinglandlord_id = housing_housingtenant.housinglandlord_id
{limitlldactivity}
";

$_SESSION['cashbankcolscaptions']="
#^
Received From^
A/C ^
Check/Voucher #^
amount^
Trans. Type^
Description^
Payment Mode
";
$_SESSION['cashbankcolwidth']="
AI|5,
received_from|40,
accaccount_name |25,
check_number|25,
amount|20,
transaction_type|10,
naration|50,
payment_mode|20
";

$_SESSION["landlordstmcols"]="
AI|5,
received_from|30,
deposits|14,
rent|14,
amount|14,
naration|33,
ddate|16,
amount_bal|15,
commission_rate|12,
commission|23,
statusinfo|18"  ;

$_SESSION["disbursementsHeader"]="
#^
Name^
Deposits^
Rent^
Paid^
Details^
Date^
Balance^
Rate^
Commission^
Satus
";
$report_caption=$_SESSION['cashbankcolscaptions'];//$rpt['report_caption'];
$section_caption='Reporting';//$rpt['section_caption'];
$column_width=$_SESSION['cashbankcolwidth'];//$rpt['column_width'];
$query=$_SESSION['bankcashtrans'];//$rpt['query'];
//echo $_SESSION['bankcashtrans'];
 $accwhere=" where  accounts_accaccount.syowner='admin_person' AND ucase(accounts_accaccount.accaccount_name) like '".strtoupper($_SESSION['rptrptref'])."' AND accounts_accountscategory.accountscategory_id='".$_SESSION['rptacccategory']."'";
$query=str_replace('{where}',$accwhere,$query);

//summing commission and paid

  //***************************
  $querybylldPC=$_SESSION['sumpaidcommission'];
$landlordid=$_SESSION['rptlandlordID'];
 $accwhere=" where  accounts_accaccount.accaccount_name
 in (select  housingtenant_name from housing_housingtenant where housinglandlord_id='$landlordid')
";
// AND accounts_accountscategory.accountscategory_id=54


if((trim($_SESSION['stmt_to']))&&(trim($_SESSION['stmt_from']))){

$accwhereAcctivitydate=" AND accounts_accountactivity.transaction_date  Between '".trim($_SESSION['stmt_from'])."'  AND '".trim($_SESSION['stmt_to'])."'";
$querybylldPC=str_replace('{limitlldactivity}',$accwhereAcctivitydate,$querybylldPC);
$query=str_replace('{whereacactivity}',$accwhereAcctivitydate,$query);
}else{
 $querybylldPC=str_replace('{limitlldactivity}','',$querybylldPC);
 //$query=str_replace('{whereacactivity}','',$query);
}
$querybylldPC=str_replace('{where}',$accwhere,$querybylldPC);
$_SESSION['commTotalpaid']= $querybylldPC;

//echo $querybylldPC;

  //***************************

//end of summary calculation
//Limit by current landlord
$querybylld=$_SESSION['bankcashtransbylandlord'];
$landlordid=$_SESSION['rptlandlordID'];
 $accwhere=" where  accounts_accaccount.accaccount_name
 in (select  housingtenant_name from housing_housingtenant where housinglandlord_id='$landlordid')
 ";
 //AND accounts_accountscategory.accountscategory_id=54


if((trim($_SESSION['stmt_to']))&&(trim($_SESSION['stmt_from']))){

$accwhereAcctivitydate=" AND bp.transaction_date  Between '".trim($_SESSION['stmt_from'])."'  AND '".trim($_SESSION['stmt_to'])."'";
$querybylld=str_replace('{limitlldactivity}',$accwhereAcctivitydate,$querybylld);
$query=str_replace('{whereacactivity}',$accwhereAcctivitydate,$query);
}else{
 $querybylld=str_replace('{limitlldactivity}','',$querybylld);
 $query=str_replace('{whereacactivity}','',$query);
}
$querybylandlord=str_replace('{where}',$accwhere,$querybylld);
$_SESSION['bankcashtransbylandlord']=$querybylandlord;

//echo $querybylandlord;

$headercaptions=explode('^',$report_caption);
$finfo=explode(',',$column_width);
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
///////////////////////////////////////landlord information
$pdf=new PDF_MC_Table();
$pdf->SetWelcomeData();
$pdf->AddPage();
$pdf->SetFont('Arial','',14);
$xintent=100;
$labelwidth=35;
$pdf->createDisbursement();
$pdf-> createExpenses();
$pdf->displayPaidCom();

$pdf->createRentCollections();
$pdf-> createSummaryByTenant();
$totalPages=$pdf->getTotalPages();


$pdf->Output();
?>
