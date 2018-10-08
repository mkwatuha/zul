<?php
function updateSMSScheduleFile($schedule,$schedulefile){
$photonamearr=explode('_',$photoname);
$sql="update sms_schedule set file_brouwse='$schedulefile' where schedule_name='$schedule'";
$alertQueryResults=mysql_query($sql);
}
?><?php
function getBillScheduleDate($schedule,$days){
$schedule=strtoupper(trim($schedule));
$sql="select  DATE_add(bill_date, INTERVAL $days  DAY) as 'pay_before' from sms_schedule where ucase(schedule_name)='$schedule'";


$query_Rcd_getbody= $sql;
$Rcd_tbody_results = mysql_query($query_Rcd_getbody) or die(mysql_error());
$cmdata='';
$pay_before='';
while ($rows=mysql_fetch_array($Rcd_tbody_results)){
$pay_before=$rows['pay_before'];
}

return trim($pay_before);

}

?><?php

function getSystemStatus(){
$sql="select current_mode from sms_systemmode limit 1";
$query_Rcd_getbody= $sql;
$Rcd_tbody_results = mysql_query($query_Rcd_getbody) or die(mysql_error());
$cmdata='';
$current_mode='';
while ($rows=mysql_fetch_array($Rcd_tbody_results)){
$current_mode=$rows['current_mode'];
}

return trim(strtoupper($current_mode));

}

?><?PHP
function markResponse($message_from,$message_message,$request_type){
$sms_autoresponse='';
$created_by=$_SESSION['my_useridloggened'];
$date_created=date('Y-m-d');
$uuid=gen_uuid();
$sms_receivedrqts="insert into sms_autoresponse(autoresponse_id,
						message_from,
						request_type,
						message_message,
						date_created,
						changed_by,
						date_changed,
						voided,
						voided_by,
						date_voided,
						uuid
						) values('$autoresponse_id',
						'$message_from',
						'$request_type',
						'$message_message',
						'$date_created',
						'$changed_by',
						'$date_changed',
						'$voided',
						'$voided_by',
						'$date_voided',
						'$uuid')";
						$qryresults= mysql_query($sms_receivedrqts) or die(mysql_error());
}
?><?php
function uplodeFileData($fileToUploade,$program,$schedule,$days){
$pay_before=getBillScheduleDate($schedule,$days);
if($program=='smsprogramming'){
$output = array('Pass' => 0, 'Fail' => 0);

ini_set('auto_detect_line_endings',1);


$handle = fopen($fileToUploade, 'r');
$countrowshdls=0;
$fileARR=explode('/',$fileToUploade);
updateSMSScheduleFile($schedule,$fileARR[1]);
while (($data = fgetcsv($handle, 1000, ',')) !== FALSE) {
$countrowshdls++;
$effectivedate=date('Y-m-d');
$connection_number = trim(mysql_real_escape_string($data[0]));
$amount= trim(mysql_real_escape_string($data[1]));
$phone_number= trim(mysql_real_escape_string($data[2]));
$pay_before=getBillScheduleDate($schedule,$days);
$as_at=getBillScheduleDate($schedule,$days);
//oaf
$campanyDetail=fillPrimaryData('admin_company',1);
  $companyname=$campanyDetail['company_name'];

if($companyname=='One Acre Fund'){
$fname = trim(mysql_real_escape_string($data[0]));
$fid= trim(mysql_real_escape_string($data[1]));
$amount= trim(mysql_real_escape_string($data[2]));
$balance= trim(mysql_real_escape_string($data[3]));
$phone_number= trim(mysql_real_escape_string($data[4]));
}
//$pay_before= trim(mysql_real_escape_string($data[3]));
$time = strtotime( $pay_before );

//$pay_before = date( 'Y-m-d', $time );


	if($countrowshdls>1){
	       // echo " first \n\n\n Con====$connection_number)&&($phone_number)&&($amount)\n\n\n".$insertSQl;
			if(($connection_number)&&($phone_number)&&($amount)){
			$firstdigit=substr($phone_number,0,1);
			if($firstdigit!=0){
			$phone_number='0'.$phone_number;
			}

    $created_by=$_SESSION['my_useridloggened'];
    $date_created=date('Y-m-d');
	$uuid=gen_uuid();


			$insertSQl= "Insert into sms_smshandle (connection_number,amount,phone_number,pay_before,
date_created,
changed_by,
date_changed,
voided,
voided_by,
date_voided,
uuid) values ('$connection_number','$amount','$phone_number','$pay_before',
'$date_created',
'$changed_by',
'$date_changed',
'$voided',
'$voided_by',
'$date_voided',
'$uuid')";





		$insertInvalidSQl= "Insert into sms_smsinvalid (connection_number,amount,phone_number,pay_before,date_created,
changed_by,
date_changed,
voided,
voided_by,
date_voided,
uuid) values ('$connection_number','$amount','$phone_number','$pay_before','$date_created',
'$changed_by',
'$date_changed',
'$voided',
'$voided_by',
'$date_voided',
'$uuid')";

//if oaf


if($companyname=='One Acre Fund'){

$insertSQl= "Insert into sms_smshandleoaf (
fname,
fid,
phone_number,
amount_paid,
balance,
as_at,
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
'$as_at',
'$created_by',
'$date_created',
'$changed_by',
'$date_changed',
'$voided',
'$voided_by',
'$date_voided',
'$uuid',
'$sys_track')";

$insertInvalidSQl= "Insert into sms_smsinvalidoaf (
fname,
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
}


       $numberLen=strlen($phone_number);

	if(($numberLen==10)&&(is_numeric($phone_number))){
	$Result1 = mysql_query($insertSQl) or die(mysql_error());
    }else{
	$Result1 = mysql_query($insertInvalidSQl) or die(mysql_error());
   }

			}
			 $connection_number='';
	 $phone_number='';
	 $amount='';
	 $pay_before='';
	}

}


}}

?><?php
//SERVER IP  eg localhost
$serverurl="http://localhost:5000/";
//HTTP REQUEST FUNCTION
function httpRequest($url){
    $pattern = "/http...([0-9a-zA-Z-.]*).([0-9]*).(.*)/";
    preg_match($pattern,$url,$args);
    $in = "";
    $fp = fsockopen("$args[1]", $args[2], $errno, $errstr, 30);
    if (!$fp) {
       return("$errstr ($errno)");
    } else {
        $out = "GET /$args[3] HTTP/1.1\r\n";
        $out .= "Host: $args[1]:$args[2]\r\n";
        $out .= "User-agent: Crowny PHP client\r\n";
        $out .= "Accept: */*\r\n";
        $out .= "Connection: Close\r\n\r\n";

        fwrite($fp, $out);
        while (!feof($fp)) {
           $in.=fgets($fp, 128);
        }
    }
    fclose($fp);
    return($in);
}


//SEND SMS FUNCTION
function SendSms($phone, $msg, $debug=false)
{
 	  global $serverurl;

   	  $url=$serverurl;
	  $url.= 'sendsms?';
      $url.= 'Recipient='.urlencode($phone);
      $url.= '&Message='.$msg;

	  //$url.= '&Message='.urlencode($msg);

       if ($debug) { echo "Request URL: <br>$url<br><br>"; }

      //Open the URL to send the message
      $response = httpRequest($url);
      if ($debug) {
           echo "Response: <br><pre>".
           str_replace(array("<",">"),array("&lt;","&gt;"),$response).
           "</pre><br>"; }

      return($response);
}



?>
<?php
function uploadScheduleFile($file_id, $folder="", $types="",$otherdetails) {
    if(!$_FILES[$file_id]['name']) return array('','No file specified');

    $file_title = $_FILES[$file_id]['name'];
    //Get file extension
    $ext_arr = split("\.",basename($file_title));
    $ext = strtolower($ext_arr[count($ext_arr)-1]); //Get the last extension

    //Not really uniqe - but for all practical reasons, it is
    $uniqer = substr(md5(uniqid(rand(),1)),0,5);
    $file_name = $uniqer . '_' .$otherdetails.$file_title;//Get Unique Name

    $all_types = explode(",",strtolower($types));
    if($types) {
        if(in_array($ext,$all_types));
        else {
            $result = "'".$_FILES[$file_id]['name']."' is not a valid file."; //Show error if any.
            return array('',$result);
        }
    }

    //Where the file must be uploaded to
    if($folder) $folder .= '/';//Add a '/' at the end of the folder
    $uploadfile = $folder . $file_name;

    $result = '';
    //Move the file from the stored location to the new location
    if (!move_uploaded_file($_FILES[$file_id]['tmp_name'], $uploadfile)) {
        $result = "Cannot upload the file '".$_FILES[$file_id]['name']."'"; //Show error if any.
        if(!file_exists($folder)) {
            $result .= " : Folder don't exist.";
        } elseif(!is_writable($folder)) {
            $result .= " : Folder not writable.";
        } elseif(!is_writable($uploadfile)) {
            $result .= " : File not writable.";
        }
        $file_name = '';

    } else {
        if(!$_FILES[$file_id]['size']) { //Check if the file is made
            @unlink($uploadfile);//Delete the Empty file
            $file_name = '';
            $result = "Empty file found - please use a valid file."; //Show the error message
        } else {
            chmod($uploadfile,0777);//Make it universally writable.
        }
    }

    return array($file_name,$result);
}
?>