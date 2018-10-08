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
?><?php
include('../template/functions/sms/sms_functions.php');
include('../template/functions/menuLinks.php');
$statusAction=$_GET['statusAction'];

/*if($statusAction=='sendit'){
$msgbox="Ext.Msg.alert('Success', '' + msgout + '\"');";
echo 
'
function respondToclient(){
msgout'."='Send Successfully';
$msgbox
};
respondToclient();
";
}*/
//SELECT effective_date , DATE_add(effective_date, INTERVAL 14  DAY) AS 'pay_before'  FROM sms_smsinvalid;
$currStatus=getSystemStatus();
if(($statusAction=='sendit')&&($currStatus=='ON')){


$campanyDetail=fillPrimaryData('admin_company',1);
  $companyname=$campanyDetail['company_name'];
  
 
if($companyname=='One Acre Fund'){
//******OAF

	$qry="SELECT 
	      smshandleoaf_id,fname,fid,phone_number,amount_paid,balance,as_at
           FROM  sms_smshandleoaf order by smshandleoaf_id asc";
	$resultsSelect=mysql_query($qry) or die('Could not execute the query');
	$cntreg_stmnt=mysql_num_rows($resultsSelect);
		if($cntreg_stmnt>0){
		
$created_by= $_SESSION['my_useridloggened'];
$date_created=date('Y-m-d');
$uuid=gen_uuid();
$stdcolumnsinster="date_created,changed_by,date_changed,voided,voided_by,date_voided,uuid";
$stdcolumnsvals="'$date_created','$changed_by','$date_changed','$voided','$voided_by','$date_voided','$uuid'";
				while($rws=mysql_fetch_array($resultsSelect)){
				$count++;
				$smshandleoaf_id=$rws['smshandleoaf_id'];
				$fid=$rws['fid'];
				$phone_number=$rws['phone_number'];
				$amount_paid=$rws['amount_paid'];
				$fname=$rws['fname'];
				//$amount_paid=$rws['amount_paid'];
				$balance=$rws['balance'];
				$as_at=$rws['as_at'];
				
				//$message="Please pay Nzoia Water via M-Pesa PayBill No. 548600 $message for Connection No: $ac Before $billdate Thanks for your continued support";
				
				$smsArrayDetails=fillPrimaryData('sms_smsmsgcust',1);
				$custmsg=$smsArrayDetails['message'];
				$usecustmsg=trim(strtoupper($smsArrayDetails['status']));
				
				if($usecustmsg=='ON'){
				
				$messagecut=str_replace('{fid}',$fid,$custmsg); 
				$message=str_replace('{fname}',$fname,$messagecut);
				$message=str_replace('{paid}',$amount_paid,$message);
				$message=str_replace('{balance}',$balance,$message);
				$message=str_replace('{stmtdate}',$as_at,$message);
				
				}
				$currStatus=getSystemStatus();
				if($currStatus=='ON'){
				SendSms($phone_number, $message, $debug=false);
				$insertSQl= "Insert into sms_processedsmsoaf (fname,
											fid,
											phone_number,
											amount_paid,
											balance,
											created_by,
											date_created,
											changed_by,
											date_changed,
											voided,
											voided_by,
											date_voided,
											uuid,
											sys_track
											) values ('$fname',
											'$fid',
											'$phone_number',
											'$amount',
											'$balance',
											'$created_by',
											'$date_created',
											'$changed_by',
											'$date_changed',
											'$voided',
											'$voided_by',
											'$date_voided',
											'$uuid',
											'$sys_track')";
				
				$results=mysql_query($insertSQl) or die('Could not execute the query');
				
				//delete from handler
				$deleteSQl= "Delete from  sms_smshandleoaf where smshandleoaf_id=$smshandleoaf_id";
				$results=mysql_query($deleteSQl) or die('Could not execute the query');
				}
				////insert into processed sms table
				
				//echo 'Sending '. $count.' of '.$cntreg_stmnt;
	        }

      }
////////////////////////////////////////////////////
}else
{
   ///
   
	
	$qry="SELECT smshandle_id,connection_number, phone_number, amount, pay_before FROM  sms_smshandle order by smshandle_id asc";
	$resultsSelect=mysql_query($qry) or die('Could not execute the query');
	$cntreg_stmnt=mysql_num_rows($resultsSelect);

		if($cntreg_stmnt>0){
		
$created_by= $_SESSION['my_useridloggened'];
$date_created=date('Y-m-d');
$uuid=gen_uuid();
$stdcolumnsinster="date_created,changed_by,date_changed,voided,voided_by,date_voided,uuid";
$stdcolumnsvals="'$date_created','$changed_by','$date_changed','$voided','$voided_by','$date_voided','$uuid'";
				while($rws=mysql_fetch_array($resultsSelect)){
				$count++;
				$smshandle_id=$rws['smshandle_id'];
				$ac=$rws['connection_number'];
				$connection_number=$rws['connection_number'];
				$phone_number=$rws['phone_number'];
				$message=$rws['amount'];
				$billdate=$rws['pay_before'];
				
				//$message="Please pay Nzoia Water via M-Pesa PayBill No. 548600 $message for Connection No: $ac Before $billdate Thanks for your continued support";
				
				$smsArrayDetails=fillPrimaryData('sms_smsmsgcust',1);
				$custmsg=$smsArrayDetails['message'];
				$usecustmsg=trim(strtoupper($smsArrayDetails['status']));
				
				if($usecustmsg=='ON'){
				$messagecut=str_replace('{connectionID}',$connection_number,$custmsg); 
				$message=str_replace('{amount}',$message,$messagecut);
				$message=str_replace('{bill_date}',$billdate,$message);
				}
				$currStatus=getSystemStatus();
				if($currStatus=='ON'){
			//	SendSms($phone_number, $message, $debug=false);
				$insertSQl= "Insert into sms_processedSMS (phone_number,connection_number,message,$stdcolumnsinster) values ('$phone_number','$connection_number','$message',$stdcolumnsvals)";
				
				$results=mysql_query($insertSQl) or die('Could not execute the query');
				//echo $insertSQl;
				//delete from handler
				$deleteSQl= "Delete from  sms_smshandle where smshandle_id=$smshandle_id";
				$results=mysql_query($deleteSQl) or die('Could not execute the query');
				}
				////insert into processed sms table
				
				//echo 'Sending '. $count.' of '.$cntreg_stmnt;
	        }

      }
	///
	}
}
if($statusAction=='view'){
$qry="SELECT *  FROM  sms_smshandle order by smshandle_id asc";

$results=mysql_query($qry) or die('Could not execute the query');

$cntreg_stmnt=mysql_num_rows($results);

	if($cntreg_stmnt>0){
	echo '<div id="SMSststatus">SMS Status show</div>';
	print"<table border='0' class=\"display\"><thead>";
	print "<tr><th align=\"left\">Phone Number</th><th align=\"left\">Name</th><th align=\"left\">
	<th align=\"left\">Message </th><th align=\"left\">Action</th></tr></thead><tbody>";
		while($rws=mysql_fetch_array($results)){
		$smshandle_id=$rws['smshandle_id'];
		$customer_name=$rws['customer_name'];
		$phone_number=$rws['phone_number'];
		$message=$rws['message'];
		
		
		print "<tr class=\"gradeX\"><td>$phone_number</td><td>$customer_name</td><td>
		<td>$message</td><td><a href='#' onClick=\"deleteRecepient('SMSststatus','$smshandle_id','Delete');sendSMS('Sms','view')\">Remove</a></td></tr>";
		
		
		/*print "$phone_number  $customer_name  
		$message  $pay_before $balance <a href='#' onClick=\"deleteRecepient('SMSststatus','$smshandle_id','Delete')\">Remove</a><br>";*/
		} 
	
	}
}

//print"<tbody></table>";
if($statusAction=='Delete'){
$smshandle_id=$_GET['smsid'];
$deleteSQl= "Delete from  sms_smshandle where smshandle_id=$smshandle_id";

//echo $deleteSQl;
$results=mysql_query($deleteSQl) or die('Could not execute the query');
}

if($statusAction=='SendINDiv'){

$reciepient=$_GET['reciepient'];
$message=$_GET['message'];
$effective_date=date('Y-m-d');
$firstdigit=substr($reciepient,0,1);
$numberLen=strlen($reciepient);

if($message){
	if(($numberLen==10)&&(is_numeric($reciepient))&&($firstdigit==0)){
	$insertSMSInd="Insert into sms_indsms(reciepient,message,$stdcolumnsinster) values ('$reciepient','$message',$stdcolumnsvals)";
	SendSms($reciepient, $message, $debug=false);
	$results=mysql_query($insertSMSInd) or die('Could not execute the query');
	echo 'SMS sent';
	}else{echo 'Invalid Phone Number';
	}
 }else{ echo 'Missing message';}
}
//send scheduled
if($statusAction=='rrspd'){
        $qry="SELECT *  FROM  sms_receivedrqts ";
		$results=mysql_query($qry) or die('Could not execute the query');
		$ctn=mysql_num_rows($results);
	if($ctn>0){
			while($rws=mysql_fetch_array($results)){
					$receivedrqts_id=$rws['receivedrqts_id'];
					$message_from=$rws['message_from'];
					$request_type=$rws['request_type'];
					$message_message=$rws['message_message'];
					$effective_date=$rws['effective_date'];
					
					/*$partial=substr($message_from,0,3);
					if($partial==254){
					$message_from='0'.substr($message_from,3,10);
					}*/
			$currStatus=getSystemStatus();
				if($currStatus=='ON'){
					SendSms($message_from, $message_message, $debug=false);
					markResponse($message_from,$message_message,$request_type);
					$deleteSQl= "Delete from  sms_receivedrqts where receivedrqts_id=$receivedrqts_id ";
					$resultsDel=mysql_query($deleteSQl) or die('Could not execute the query');
				}
			}
		}

}
//sendbtsms Ext.Msg.alert('Success', '' + msgout +"."' '"."');

?>