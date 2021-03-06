<?php
require('fpdf.php');
require_once('../Connections/cf4_HH.php'); 
include('../template/functions/menuLinks.php');
$employeeid=$_GET['t'];

class pdf extends FPDF
{
function Header(){
	$this->setFont('Arial','B',14);
	
$year='/2011';

$this->setY(10);

$this->cell(0,8,'Laserview Info Systems',0,1,'C');
//$this->Image('images/moi.jpg',175,30,27,23);
$this->cell(0,8,'P.O Box 817 Nairobi',0,1,'C');
$this->cell(0,8,'Tax Deduction Card for the Year 2011',0,0,'C');

$this->Ln(10);


		
	}
	
function Footer(){
	
	//Position at 2.5 cm from bottom
    $this->SetY(-50);
    //Arial italic 8
    $this->SetFont('Courier','',10);
    $this->cell(48,5,'Total Tax(COL.L) Ksh.',0,0,'L');
	$this->cell(35,5,'','B',1,'L');
	$this->Ln(5);
	$this->cell(70,5,'Total Chargeable Pay(COL.H) Ksh.',0,0,'L');
	$this->cell(35,5,'','B',1,'L');
	
	$this->setY(-20);
	//set font for the footer
	$this->setfont('Courier','',8);
	$this->cell(0,5,'Laserview Info Systems',0,1,'C');
	$this->Ln(4);
		
	}
function load_data(){
require('tax_table.php');
require('config.php');

$sql_id="SELECT distinct employee_id from hs_hr_employee";
$qry_id=mysql_query($sql_id);
$id_array=array();

while($results_id=mysql_fetch_array($qry_id)){
$id_array[]=$results_id['employee_id'];
}
foreach($id_array as $empID){
	
$sql_name="SELECT  emp_lastname,emp_firstname, emp_middle_name from hs_hr_employee where employee_id=$empID";
$qry_name=mysql_query($sql_name);
$results_name=mysql_fetch_array($qry_name);
$fname=$results_name['emp_firstname'];
$lname=$results_name['emp_lastname'];
$mname=$results_name['emp_middle_name'];

//$this->setY(20);
$this->setFont('Courier','B',10);

$this->cell(35,5,'Employee No:','BTL',0,'R');
$this->cell(35,5,$empID,'BT',0,'L');
$this->cell(35,5,'Last Name:','BT',0,'R');
$this->cell(35,5,$lname,'BT',0,'L');
$this->cell(35,5,'First Name:','BT',0,'R');
$this->cell(35,5,$fname,'BT',0,'L');
$this->cell(35,5,'Middle Name:','BT',0,'R');
$this->cell(36,5,$mname,'BTR',1,'L');

/*$this->SetFont('Courier','',10);

$this->cell(180,5,'Employer\'s Name........................',0,0,'L');
$this->cell(40,5,'Employer\'s PIN',0,0,'R');
$this->cell(40,8,'',1,1,'L');

$this->cell(180,5,'Employees Main Name........................',0,1,'L');
$this->Ln(2);

$this->cell(180,5,'Employees other Name'.$empID,0,0,'L');
$this->cell(40,5,'Employee\'s PIN',0,0,'R');
$this->cell(40,8,'',1,1,'L');
$this->Ln(2);*/
$this->SetFont('Courier','',8);
//Drawing rectangles:row one
$this->rect(10,41,16,18);
$this->rect(26,41,17,18);
$this->rect(43,41,17,18);
$this->rect(60,41,20,18);
$this->rect(80,41,18,18);
$this->rect(98,41,44,18);
$this->rect(142,41,17,18);
$this->rect(159,41,26,18);
$this->rect(185,41,23,18);
$this->rect(208,41,25,18);
$this->rect(233,41,24,18);
$this->rect(257,41,17,18);
$this->rect(274,41,17,18);

//Drawing rectangles:row two

$this->rect(10,59,16,20);
$this->rect(26,59,17,20);
$this->rect(43,59,17,20);
$this->rect(60,59,20,20);
$this->rect(80,59,18,20);
$this->rect(98,59,44,8);
$this->rect(98,67,15,12);
$this->rect(113,67,16,12);
$this->rect(129,67,13,12);
$this->rect(142,59,17,20);
$this->rect(159,59,26,20);
$this->rect(185,59,23,8);
$this->rect(185,67,23,12);
$this->rect(208,59,25,8);
$this->rect(208,67,25,12);
$this->rect(233,59,24,8);
$this->rect(233,67,41,12);
$this->rect(257,59,17,8);
$this->rect(274,59,17,8);
$this->rect(274,67,17,12);

//printing the last portion of the header
$this->cell(16,4,'MONTH',0,0,'L');
$this->cell(17,4,'Basic',0,0,'L');
$this->cell(17,4,'Benefits',0,0,'L');
$this->cell(20,4,'Value',0,0,'L');
$this->cell(18,4,'Total',0,0,'L');
$this->cell(44,4,'Defined Contribution',0,0,'L');
$this->cell(17,4,'Savings',0,0,'L');
$this->cell(26,4,'Retirement',0,0,'L');
$this->cell(23,4,'Chargeable',0,0,'L');
$this->cell(25,4,'Tax',0,0,'L');
$this->cell(24,4,'Monthly',0,0,'L');
$this->cell(17,4,'Insurance',0,0,'L');
$this->cell(17,4,'P.A.Y.E',0,1,'L');

$this->cell(16,4,'',0,0,'L');
$this->cell(17,4,'Pay',0,0,'L');
$this->cell(17,4,'Non-Cash',0,0,'L');
$this->cell(20,4,'of Quarters',0,0,'L');
$this->cell(18,4,'Gross Pay',0,0,'L');
$this->cell(44,4,'Retirement Scheme',0,0,'L');
$this->cell(17,4,'Plan',0,0,'L');
$this->cell(26,4,'Contribution &',0,0,'L');
$this->cell(23,4,'Pay',0,0,'L');
$this->cell(25,4,'Charged',0,0,'L');
$this->cell(24,4,'Relief',0,0,'L');
$this->cell(17,4,'Relief',0,0,'L');
$this->cell(17,4,'Tax',0,1,'L');

$this->cell(16,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(20,4,'',0,0,'L');
$this->cell(18,4,'A+B+C',0,0,'L');
$this->cell(44,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(26,4,'Savings plan',0,0,'L');
$this->cell(23,4,'',0,0,'L');
$this->cell(25,4,'',0,0,'L');
$this->cell(24,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(17,4,'',0,1,'L');
//$this->cell(1);

$this->cell(16,6,'',0,0,'L');
$this->cell(17,6,'Kshs.',0,0,'L');
$this->cell(17,6,'Kshs.',0,0,'L');
$this->cell(20,6,'Kshs.',0,0,'L');
$this->cell(18,6,'Kshs.',0,0,'L');
$this->cell(44,6,'Kshs.',0,0,'L');
$this->cell(17,6,'Kshs.',0,0,'L');
$this->cell(26,6,'Kshs.',0,0,'L');
$this->cell(23,6,'Kshs.',0,0,'L');
$this->cell(25,6,'Kshs.',0,0,'L');
$this->cell(24,6,'Kshs.',0,0,'L');
$this->cell(17,6,'Kshs.',0,0,'L');
$this->cell(17,6,'Kshs.',0,1,'L');


$this->cell(16,4,'',0,0,'L');
$this->cell(17,4,'A',0,0,'L');
$this->cell(17,4,'B',0,0,'L');
$this->cell(20,4,'C',0,0,'L');
$this->cell(18,4,'D',0,0,'L');
$this->cell(44,4,'E',0,0,'C');
$this->cell(17,4,'F',0,0,'L');
$this->cell(26,4,'G',0,0,'L');
$this->cell(23,4,'H',0,0,'L');
$this->cell(25,4,'J',0,0,'L');
$this->cell(24,4,'K',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(17,4,'L',0,1,'L');

$this->cell(16,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(20,4,'',0,0,'L');
$this->cell(18,4,'',0,0,'L');
$this->cell(44,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(26,4,'',0,0,'L');
$this->cell(23,4,'',0,0,'L');
$this->cell(25,4,'',0,0,'L');
$this->cell(24,4,'1162',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(17,4,'',0,1,'L');


$this->cell(16,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(20,4,'',0,0,'L');
$this->cell(18,4,'',0,0,'L');
$this->cell(15,4,'E1',0,0,'L');
$this->cell(16,4,'E2',0,0,'L');
$this->cell(13,4,'E3',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(26,4,'',0,0,'L');
$this->cell(23,4,'',0,0,'L');
$this->cell(25,4,'',0,0,'L');
$this->cell(24,4,'Total',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(17,4,'',0,1,'L');

$this->cell(16,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(20,4,'',0,0,'L');
$this->cell(18,4,'',0,0,'L');
$this->cell(15,4,'30%',0,0,'L');
$this->cell(16,4,'Actual',0,0,'L');
$this->cell(13,4,'Legal',0,0,'L');
$this->cell(17,4,'Amount',0,0,'L');
$this->cell(26,4,'The lowest of',0,0,'L');
$this->cell(23,4,'',0,0,'L');
$this->cell(25,4,'',0,0,'L');
$this->cell(24,4,'Kshs. 1162',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(17,4,'',0,1,'L');

$this->cell(16,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(20,4,'',0,0,'L');
$this->cell(18,4,'',0,0,'L');
$this->cell(15,4,'of A',0,0,'L');
$this->cell(16,4,'Cont',0,0,'L');
$this->cell(13,4,'Limit',0,0,'L');
$this->cell(17,4,'Deposited',0,0,'L');
$this->cell(26,4,'E added to F',0,0,'L');
$this->cell(23,4,'',0,0,'L');
$this->cell(25,4,'',0,0,'L');
$this->cell(24,4,'',0,0,'L');
$this->cell(17,4,'',0,0,'L');
$this->cell(17,4,'',0,1,'L');


$sql="SELECT Basic_sal,Benefits,Quarters,E2,E3,saving_plan,monthly_relief FROM employees";
$results_qry=mysql_query($sql) or die('Could not execute the query');
$basic=array();
$benefits=array();
$quartervalue=array();
$e2=array();
$e3=array();
$saving_plan=array();
$relief=array();

while($results=mysql_fetch_array($results_qry)){
//define array of data
$size=sizeof($results);
$basic[]=$results['Basic_sal'];
$benefits[]=$results['Benefits'];
$quartervalue[]=$results['Quarters'];
$e2[]=$results['E2'];
$e3[]=$results['E3'];
$saving_plan[]=$results['saving_plan'];
$relief[]=$results['monthly_relief'];

}//end while
$fill=true;
for($i=0;$i<sizeof($basic);$i++){
$basic_sal=$basic[$i];

$ben=$benefits[$i];
$quarter_value=$quartervalue[$i];
$gross=$basic_sal +$ben + $quarter_value;
$e1=(30/100 * $basic_sal);
$E2=$e2[$i];
$E3=$e3[$i];
$monthly_relief=$relief[$i];
$savingPlan=$saving_plan[$i];
$ret_cont_sav_plan=(min($e1,$E2,$E3) + $savingPlan);
$chargeable_pay=($gross - $ret_cont_sav_plan);
$taxpaid=calculate_tax($chargeable_pay);
$paye=($taxpaid-$monthly_relief);

$this->SetFillColor(200, 255, 220);
$this->SetTextColor(10);
$this->SetFont( 'Courier', 'B', 8 );



$this->cell(16,4,'',1,0,'L',$fill);
$this->cell(17,4,number_format($basic_sal),1,0,'R',$fill);
$this->cell(17,4,number_format($ben),1,0,'R',$fill);
$this->cell(20,4,number_format($quarter_value),1,0,'R',$fill);
$this->cell(18,4,number_format($gross),1,0,'R',$fill);
$this->cell(15,4,number_format($e1),1,0,'R',$fill);
$this->cell(16,4,number_format($E2),1,0,'R',$fill);
$this->cell(13,4,number_format($E3),1,0,'R',$fill);
$this->cell(17,4,number_format($savingPlan),1,0,'R',$fill);
$this->cell(26,4,number_format($ret_cont_sav_plan),1,0,'R',$fill);
$this->cell(23,4,number_format($chargeable_pay),1,0,'R',$fill);
$this->cell(25,4,number_format($taxpaid),1,0,'R',$fill);
$this->cell(41,4,number_format($monthly_relief),1,0,'R',$fill);

$this->cell(17,4,number_format($paye),1,1,'R',$fill);

 $fill=!$fill;

}//end for


$this->Ln(500);

	}
	
	
}
}
$pdf=new PDF('L');
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Courier','',8);
$pdf->load_data();
$pdf->SetFont('Arial','',8);
$pdf->Output();
?>