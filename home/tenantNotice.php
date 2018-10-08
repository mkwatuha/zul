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
  if (isset($QUERY_STRING) && strlen($QUERY_STRING)>0) 
  $MM_referrer .= "?" . $QUERY_STRING;
  $MM_restrictGoTo = $MM_restrictGoTo. $MM_qsChar . "accesscheck=" . urlencode($MM_referrer);
  header("Location: ". $MM_restrictGoTo); 
  exit;
}
}
require_once('../Connections/cf4_HH.php');
require_once('../template/functions/menuLinks.php');
createTenancyAgreements();
function createTenancyAgreements(){

$housinglandlord_id=trim($_POST['housinglandlord_id']);
$housingtenant_id=trim($_POST['housingtenant_id']);
$termination_reason=trim($_POST['termination_reason']);
$termination_date=trim($_POST['termination_date']);
$sys_track=trim($_POST['typeT']);
$terminationnotice_date=trim($_POST['terminationnotice_date']);
$date_created=date('Y-m-d');
$created_by=trim($_SESSION['my_useridloggened']);
$uuid=gen_uuid();
if($terminationnotice_date) {
$noticeDateCol="termination_notice_date,";
$noticedateVar="'$terminationnotice_date',";
}

$insertSql="Insert Into housing_tenancytermnotice(
            housinglandlord_id	,
            housingtenant_id	,
            termination_reason	,
            termination_date	,
            ".$noticeDateCol."
            created_by	,
            date_created	,
            uuid	,
            sys_track) values('$housinglandlord_id',
            '$housingtenant_id',
            '$termination_reason',
            '$termination_date',
            ".$noticedateVar."
            '$created_by',
            '$date_created',
            '$uuid',
            '$sys_track')	
        ";
        
//Ext.Msg.ERROR
        
        
        
        
                        if($sys_track=='Vacated'){
                        $track=checkDuplicateNotices($housinglandlord_id,$housingtenant_id,$sys_track);
                           if(!$track){
                                     $Rcd_tbody_results = mysql_query($insertSql) or die(mysql_error());
                                     $lastsaved=mysql_insert_id();
                                       if($lastsaved){
                                       updateTenancy($housingtenant_id,$housinglandlord_id,'Vaccated:',trim($termination_date));
                                       echo "tnoticeNotification('Termination Details Saved!','Success!','Ext.Msg.INFO');";
                                       
                                       }
                                     }else{
                                        echo "showCustErrorMessage('Termination Details Exist!','Notice Exist!')";
                                     }
                        }
                        
                        if($sys_track=='Notice'){
                        $track=checkDuplicateNotices($housinglandlord_id,$housingtenant_id,$sys_track);
                           if(!$track){
                                     $Rcd_tbody_results = mysql_query($insertSql) or die(mysql_error());
                                     $lastsaved=mysql_insert_id();
                                       if($lastsaved){
                                      updateTenancy($housingtenant_id,$housinglandlord_id,'Vaccates on:',trim($termination_date));
                                       echo "tnoticeNotification('Termination Details Saved!','Success!','Ext.Msg.INFO');";
                                       
                                       }
                                     }else{
                                     
                                      echo "showCustErrorMessage('Termination Notice Exist!','Notice Exist!')";
                                     }
                        }
        
         
        }
        function checkDuplicateNotices($housinglandlord_id,$housingtenant_id,$sys_track){
               $insertSql="select sys_track from housing_tenancytermnotice where
              housinglandlord_id=		'$housinglandlord_id' and	
              housingtenant_id=		'$housingtenant_id' And sys_track like '$sys_track'  order by date_created desc limit 1";
              $Rcd_tbody_results = mysql_query($insertSql) or die(mysql_error());
              $cntreg_stmnt=mysql_num_rows($Rcd_tbody_results);
              	if($cntreg_stmnt){
                     $count=0;
              	   
              	     $i=0;
              			while($foundrecordsarr=mysql_fetch_assoc($Rcd_tbody_results)){ 
              		  	$primayTrack=$foundrecordsarr['sys_track'];
                      }
              	}
         return $primayTrack;
        }
        
        function updateTenancy($housingtenant_id,$housinglandlord_id,$sys_track,$dated){
        
         $insertSql=" update housing_housingtenant set sys_track='$sys_track',date_changed='$dated'  where housinglandlord_id=		'$housinglandlord_id' and	
              housingtenant_id=		'$housingtenant_id'";
              $Rcd_tbody_results = mysql_query($insertSql) or die(mysql_error());
        }
        
?>