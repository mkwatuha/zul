<?php
						$_SESSION["accounts_accaccount_SearchSQL"]="
						
						select accounts_accaccount.accaccount_id , accounts_accaccount.accaccount_name , accounts_accaccount.accountname , accounts_accaccount.syowner , accounts_accaccount.syownerid , accounts_accaccount.opening_balance , accounts_accaccount.closing_balance , accounts_accaccount.credit_limit , accounts_accaccount.nature , accounts_accaccount.created_by , accounts_accaccount.date_created , accounts_accaccount.changed_by , accounts_accaccount.date_changed , accounts_accaccount.voided , accounts_accaccount.voided_by , accounts_accaccount.date_voided , accounts_accaccount.uuid , accounts_accaccount.sys_track , accounts_accaccount.balance_type  from accounts_accaccount
						
						";
						$_SESSION["accounts_accountactivity_SearchSQL"]="
						
						select accounts_accountactivity.accountactivity_id , accounts_accountactivity.accountactivity_name , accounts_accountscategory.accountscategory_id , accounts_accountscategory.accountscategory_name , accounts_accaccount.accaccount_id , accounts_accaccount.accaccount_name , payment_currency.currency_id , payment_currency.currency_name , accounts_accountactivity.amount , accounts_accountactivity.transaction_type , accounts_accountactivity.transaction_date , accounts_accountactivity.naration , accounts_accountactivity.created_by , accounts_accountactivity.date_created , accounts_accountactivity.changed_by , accounts_accountactivity.date_changed , accounts_accountactivity.voided , accounts_accountactivity.voided_by , accounts_accountactivity.date_voided , accounts_accountactivity.uuid , accounts_accountactivity.sys_track  from accounts_accountactivity  inner join accounts_accountscategory on accounts_accountscategory.accountscategory_id = accounts_accountactivity.accountscategory_id  inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_accountactivity.accaccount_id  inner join payment_currency on payment_currency.currency_id = accounts_accountactivity.currency_id
						
						";
						$_SESSION["accounts_accountactivitymaster_SearchSQL"]="
						
						select accounts_accountactivitymaster.accountactivitymaster_id , accounts_accountactivitymaster.accountactivitymaster_name , accounts_accountactivitymaster.voucher_number , accounts_accountactivitymaster.voucher_type , accounts_accountactivitymaster.delivery_date , accounts_accountactivitymaster.total_quantity , accounts_accountactivitymaster.total_amount , accounts_accountactivitymaster.grant_total , payment_currency.currency_id , payment_currency.currency_name , accounts_accountactivitymaster.rate , accounts_accountactivitymaster.naration , accounts_accountactivitymaster.created_by , accounts_accountactivitymaster.date_created , accounts_accountactivitymaster.changed_by , accounts_accountactivitymaster.date_changed , accounts_accountactivitymaster.voided , accounts_accountactivitymaster.voided_by , accounts_accountactivitymaster.date_voided , accounts_accountactivitymaster.uuid , accounts_accountactivitymaster.sys_track  from accounts_accountactivitymaster  inner join payment_currency on payment_currency.currency_id = accounts_accountactivitymaster.currency_id
						
						";
						$_SESSION["accounts_accountscategory_SearchSQL"]="
						
						select accounts_accountscategory.accountscategory_id , accounts_chartofaccounts.chartofaccounts_id , accounts_chartofaccounts.chartofaccounts_name , accounts_accountscategory.accountscategory_name , accounts_accountscategory.code_number , accounts_accountscategory.description , accounts_accountscategory.created_by , accounts_accountscategory.date_created , accounts_accountscategory.changed_by , accounts_accountscategory.date_changed , accounts_accountscategory.voided , accounts_accountscategory.voided_by , accounts_accountscategory.date_voided , accounts_accountscategory.uuid , accounts_accountscategory.sys_track  from accounts_accountscategory  inner join accounts_chartofaccounts on accounts_chartofaccounts.chartofaccounts_id = accounts_accountscategory.chartofaccounts_id
						
						";
						$_SESSION["accounts_acsetting_SearchSQL"]="
						
						select accounts_acsetting.acsetting_id , accounts_acsetting.acsetting_name , accounts_acsetting.acsetting_description , accounts_acsetting.created_by , accounts_acsetting.date_created , accounts_acsetting.changed_by , accounts_acsetting.date_changed , accounts_acsetting.voided , accounts_acsetting.voided_by , accounts_acsetting.date_voided , accounts_acsetting.uuid , accounts_acsetting.sys_track  from accounts_acsetting
						
						";
						$_SESSION["accounts_banktrans_SearchSQL"]="
						
						select accounts_banktrans.banktrans_id , accounts_accaccount.accaccount_id , accounts_accaccount.accaccount_name , accounts_banktrans.banktrans_name , accounts_banktrans.voucher_number , accounts_banktrans.amount , accounts_banktrans.naration , bank_bankaccount.bankaccount_id , bank_bankaccount.bankaccount_name , accounts_accountscategory.accountscategory_id , accounts_accountscategory.accountscategory_name , accounts_banktrans.transaction_type , accounts_banktrans.created_by , accounts_banktrans.date_created , accounts_banktrans.changed_by , accounts_banktrans.date_changed , accounts_banktrans.voided , accounts_banktrans.voided_by , accounts_banktrans.date_voided , accounts_banktrans.uuid , accounts_banktrans.sys_track  from accounts_banktrans  inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_banktrans.accaccount_id  inner join bank_bankaccount on bank_bankaccount.bankaccount_id = accounts_banktrans.bankaccount_id  inner join accounts_accountscategory on accounts_accountscategory.accountscategory_id = accounts_banktrans.accountscategory_id
						
						";
						$_SESSION["accounts_cashtrans_SearchSQL"]="
						
						select accounts_cashtrans.cashtrans_id , accounts_accaccount.accaccount_id , accounts_accaccount.accaccount_name , accounts_cashtrans.cashtrans_name , accounts_cashtrans.voucher_number , accounts_accountscategory.accountscategory_id , accounts_accountscategory.accountscategory_name , payment_currency.currency_id , payment_currency.currency_name , accounts_cashtrans.amount , accounts_cashtrans.transaction_type , accounts_cashtrans.naration , accounts_cashtrans.created_by , accounts_cashtrans.date_created , accounts_cashtrans.changed_by , accounts_cashtrans.date_changed , accounts_cashtrans.voided , accounts_cashtrans.voided_by , accounts_cashtrans.date_voided , accounts_cashtrans.uuid , accounts_cashtrans.sys_track  from accounts_cashtrans  inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_cashtrans.accaccount_id  inner join accounts_accountscategory on accounts_accountscategory.accountscategory_id = accounts_cashtrans.accountscategory_id  inner join payment_currency on payment_currency.currency_id = accounts_cashtrans.currency_id
						
						";
						$_SESSION["accounts_chartofaccounts_SearchSQL"]="
						
						select accounts_chartofaccounts.chartofaccounts_id , accounts_chartofaccounts.chartofaccounts_name , accounts_chartofaccounts.code_number , accounts_chartofaccounts.description , accounts_chartofaccounts.created_by , accounts_chartofaccounts.date_created , accounts_chartofaccounts.changed_by , accounts_chartofaccounts.date_changed , accounts_chartofaccounts.voided , accounts_chartofaccounts.voided_by , accounts_chartofaccounts.date_voided , accounts_chartofaccounts.uuid , accounts_chartofaccounts.sys_track  from accounts_chartofaccounts
						
						";
						$_SESSION["accounts_checkdeposit_SearchSQL"]="
						
						select accounts_checkdeposit.checkdeposit_id , accounts_checkdeposit.checkdeposit_name , accounts_checkregister.checkregister_id , accounts_checkregister.checkregister_name , accounts_checkdeposit.date_banked , bank_bankaccount.bankaccount_id , bank_bankaccount.bankaccount_name , accounts_checkdeposit.date_cleared , accounts_checkdeposit.created_by , accounts_checkdeposit.date_created , accounts_checkdeposit.changed_by , accounts_checkdeposit.date_changed , accounts_checkdeposit.voided , accounts_checkdeposit.voided_by , accounts_checkdeposit.date_voided , accounts_checkdeposit.uuid , accounts_checkdeposit.sys_track  from accounts_checkdeposit  inner join accounts_checkregister on accounts_checkregister.checkregister_id = accounts_checkdeposit.checkregister_id  inner join bank_bankaccount on bank_bankaccount.bankaccount_id = accounts_checkdeposit.bankaccount_id
						
						";
						$_SESSION["accounts_checkissue_SearchSQL"]="
						
						select accounts_checkissue.checkissue_id , accounts_checkissue.checkissue_name , accounts_checkpayment.checkpayment_id , accounts_checkpayment.checkpayment_name , accounts_checkissue.date_issued , accounts_checkissue.issue_mode , accounts_checkissue.issue_details , accounts_checkissue.issued_by , accounts_checkissue.created_by , accounts_checkissue.date_created , accounts_checkissue.changed_by , accounts_checkissue.date_changed , accounts_checkissue.voided , accounts_checkissue.voided_by , accounts_checkissue.date_voided , accounts_checkissue.uuid , accounts_checkissue.sys_track  from accounts_checkissue  inner join accounts_checkpayment on accounts_checkpayment.checkpayment_id = accounts_checkissue.checkpayment_id
						
						";
						$_SESSION["accounts_checkissueschedule_SearchSQL"]="
						
						select accounts_checkissueschedule.checkissueschedule_id , accounts_checkissueschedule.checkissueschedule_name , accounts_checkpayment.checkpayment_id , accounts_checkpayment.checkpayment_name , accounts_checkissueschedule.planned_issuedate , accounts_checkissueschedule.created_by , accounts_checkissueschedule.date_created , accounts_checkissueschedule.changed_by , accounts_checkissueschedule.date_changed , accounts_checkissueschedule.voided , accounts_checkissueschedule.voided_by , accounts_checkissueschedule.date_voided , accounts_checkissueschedule.uuid , accounts_checkissueschedule.sys_track  from accounts_checkissueschedule  inner join accounts_checkpayment on accounts_checkpayment.checkpayment_id = accounts_checkissueschedule.checkpayment_id
						
						";
						$_SESSION["accounts_checkpayment_SearchSQL"]="
						
						select accounts_checkpayment.checkpayment_id , accounts_checkpayment.checkpayment_name , .account_id , .account_name , bank_bankaccount.bankaccount_id , bank_bankaccount.bankaccount_name , accounts_checkpayment.amount , accounts_checkpayment.check_date , accounts_checkpayment.narration , accounts_checkpayment.created_by , accounts_checkpayment.date_created , accounts_checkpayment.changed_by , accounts_checkpayment.date_changed , accounts_checkpayment.voided , accounts_checkpayment.voided_by , accounts_checkpayment.date_voided , accounts_checkpayment.uuid , accounts_checkpayment.sys_track  from accounts_checkpayment  inner join  on .account_id = accounts_checkpayment.account_id  inner join bank_bankaccount on bank_bankaccount.bankaccount_id = accounts_checkpayment.bankaccount_id
						
						";
						$_SESSION["accounts_checkregister_SearchSQL"]="
						
						select accounts_checkregister.checkregister_id , accounts_checkregister.checkregister_name , accounts_accaccount.accaccount_id , accounts_accaccount.accaccount_name , accounts_checkregister.bank , accounts_checkregister.branch , accounts_checkregister.check_details , accounts_checkregister.check_number , accounts_checkregister.check_date , payment_currency.currency_id , payment_currency.currency_name , accounts_checkregister.amount , accounts_checkregister.transaction_type , accounts_checkregister.naration , accounts_checkregister.created_by , accounts_checkregister.date_created , accounts_checkregister.changed_by , accounts_checkregister.date_changed , accounts_checkregister.voided , accounts_checkregister.voided_by , accounts_checkregister.date_voided , accounts_checkregister.uuid , accounts_checkregister.sys_track  from accounts_checkregister  inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_checkregister.accaccount_id  inner join payment_currency on payment_currency.currency_id = accounts_checkregister.currency_id
						
						";
						$_SESSION["accounts_checkreplacement_SearchSQL"]="
						
						select accounts_checkreplacement.checkreplacement_id , accounts_checkreplacement.checkreplacement_name , accounts_checkregister.checkregister_id , accounts_checkregister.checkregister_name , accounts_checkreplacement.date_replaced , accounts_checkreplacement.replacement_reason , accounts_checkreplacement.created_by , accounts_checkreplacement.date_created , accounts_checkreplacement.changed_by , accounts_checkreplacement.date_changed , accounts_checkreplacement.voided , accounts_checkreplacement.voided_by , accounts_checkreplacement.date_voided , accounts_checkreplacement.uuid , accounts_checkreplacement.sys_track  from accounts_checkreplacement  inner join accounts_checkregister on accounts_checkregister.checkregister_id = accounts_checkreplacement.checkregister_id
						
						";
						$_SESSION["accounts_checkreplacementout_SearchSQL"]="
						
						select accounts_checkreplacementout.checkreplacementout_id , accounts_checkreplacementout.checkreplacementout_name , accounts_checkpayment.checkpayment_id , accounts_checkpayment.checkpayment_name , accounts_checkreplacementout.date_replaced , accounts_checkreplacementout.replacement_reason , accounts_checkreplacementout.created_by , accounts_checkreplacementout.date_created , accounts_checkreplacementout.changed_by , accounts_checkreplacementout.date_changed , accounts_checkreplacementout.voided , accounts_checkreplacementout.voided_by , accounts_checkreplacementout.date_voided , accounts_checkreplacementout.uuid , accounts_checkreplacementout.sys_track  from accounts_checkreplacementout  inner join accounts_checkpayment on accounts_checkpayment.checkpayment_id = accounts_checkreplacementout.checkpayment_id
						
						";
						$_SESSION["accounts_compcashdeposit_SearchSQL"]="
						
						select accounts_compcashdeposit.compcashdeposit_id , accounts_compcashdeposit.compcashdeposit_name , accounts_accaccount.accaccount_id , accounts_accaccount.accaccount_name , bank_bankaccount.bankaccount_id , bank_bankaccount.bankaccount_name , accounts_compcashdeposit.amount , accounts_compcashdeposit.date_banked , accounts_compcashdeposit.transaction_type , accounts_compcashdeposit.naration , accounts_compcashdeposit.created_by , accounts_compcashdeposit.date_created , accounts_compcashdeposit.changed_by , accounts_compcashdeposit.date_changed , accounts_compcashdeposit.voided , accounts_compcashdeposit.voided_by , accounts_compcashdeposit.date_voided , accounts_compcashdeposit.uuid , accounts_compcashdeposit.sys_track  from accounts_compcashdeposit  inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_compcashdeposit.accaccount_id  inner join bank_bankaccount on bank_bankaccount.bankaccount_id = accounts_compcashdeposit.bankaccount_id
						
						";
						$_SESSION["accounts_custcashdeposit_SearchSQL"]="
						
						select accounts_custcashdeposit.custcashdeposit_id , accounts_custcashdeposit.custcashdeposit_name , accounts_accaccount.accaccount_id , accounts_accaccount.accaccount_name , accounts_custcashdeposit.amount , bank_bankaccount.bankaccount_id , bank_bankaccount.bankaccount_name , accounts_custcashdeposit.date_banked , accounts_custcashdeposit.transaction_type , accounts_custcashdeposit.naration , accounts_custcashdeposit.created_by , accounts_custcashdeposit.date_created , accounts_custcashdeposit.changed_by , accounts_custcashdeposit.date_changed , accounts_custcashdeposit.voided , accounts_custcashdeposit.voided_by , accounts_custcashdeposit.date_voided , accounts_custcashdeposit.uuid , accounts_custcashdeposit.sys_track  from accounts_custcashdeposit  inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_custcashdeposit.accaccount_id  inner join bank_bankaccount on bank_bankaccount.bankaccount_id = accounts_custcashdeposit.bankaccount_id
						
						";
						$_SESSION["accounts_custcheckdeposit_SearchSQL"]="
						
						select accounts_custcheckdeposit.custcheckdeposit_id , accounts_custcheckdeposit.custcheckdeposit_name , accounts_custcheckregister.custcheckregister_id , accounts_custcheckregister.custcheckregister_name , accounts_custcheckdeposit.date_banked , bank_bankaccount.bankaccount_id , bank_bankaccount.bankaccount_name , accounts_custcheckdeposit.date_cleared , accounts_custcheckdeposit.created_by , accounts_custcheckdeposit.date_created , accounts_custcheckdeposit.changed_by , accounts_custcheckdeposit.date_changed , accounts_custcheckdeposit.voided , accounts_custcheckdeposit.voided_by , accounts_custcheckdeposit.date_voided , accounts_custcheckdeposit.uuid , accounts_custcheckdeposit.sys_track  from accounts_custcheckdeposit  inner join accounts_custcheckregister on accounts_custcheckregister.custcheckregister_id = accounts_custcheckdeposit.custcheckregister_id  inner join bank_bankaccount on bank_bankaccount.bankaccount_id = accounts_custcheckdeposit.bankaccount_id
						
						";
						$_SESSION["accounts_custcheckregister_SearchSQL"]="
						
						select accounts_custcheckregister.custcheckregister_id , accounts_custcheckregister.custcheckregister_name , accounts_accaccount.accaccount_id , accounts_accaccount.accaccount_name , bank_bankaccount.bankaccount_id , bank_bankaccount.bankaccount_name , accounts_custcheckregister.check_details , accounts_custcheckregister.check_number , accounts_custcheckregister.check_date , accounts_custcheckregister.amount , accounts_custcheckregister.transaction_type , accounts_custcheckregister.naration , accounts_custcheckregister.created_by , accounts_custcheckregister.date_created , accounts_custcheckregister.changed_by , accounts_custcheckregister.date_changed , accounts_custcheckregister.voided , accounts_custcheckregister.voided_by , accounts_custcheckregister.date_voided , accounts_custcheckregister.uuid , accounts_custcheckregister.sys_track  from accounts_custcheckregister  inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_custcheckregister.accaccount_id  inner join bank_bankaccount on bank_bankaccount.bankaccount_id = accounts_custcheckregister.bankaccount_id
						
						";
						$_SESSION["accounts_directtransferin_SearchSQL"]="
						
						select accounts_directtransferin.directtransferin_id , accounts_directtransferin.directtransferin_name , accounts_accaccount.accaccount_id , accounts_accaccount.accaccount_name , accounts_directtransferin.company_account , accounts_directtransferin.client_account , accounts_directtransferin.amount , accounts_directtransferin.date_transferred , accounts_directtransferin.transaction_type , accounts_directtransferin.naration , accounts_directtransferin.created_by , accounts_directtransferin.date_created , accounts_directtransferin.changed_by , accounts_directtransferin.date_changed , accounts_directtransferin.voided , accounts_directtransferin.voided_by , accounts_directtransferin.date_voided , accounts_directtransferin.uuid , accounts_directtransferin.sys_track  from accounts_directtransferin  inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_directtransferin.accaccount_id
						
						";
						$_SESSION["accounts_directtransferout_SearchSQL"]="
						
						select accounts_directtransferout.directtransferout_id , accounts_directtransferout.directtransferout_name , accounts_accaccount.accaccount_id , accounts_accaccount.accaccount_name , accounts_directtransferout.company_account , accounts_directtransferout.client_account , accounts_directtransferout.amount , accounts_directtransferout.date_transferred , accounts_directtransferout.transaction_type , accounts_directtransferout.naration , accounts_directtransferout.created_by , accounts_directtransferout.date_created , accounts_directtransferout.changed_by , accounts_directtransferout.date_changed , accounts_directtransferout.voided , accounts_directtransferout.voided_by , accounts_directtransferout.date_voided , accounts_directtransferout.uuid , accounts_directtransferout.sys_track  from accounts_directtransferout  inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_directtransferout.accaccount_id
						
						";
						$_SESSION["accounts_invoice_SearchSQL"]="
						
						select accounts_invoice.invoice_id , accounts_invoice.invoice_name , accounts_accaccount.accaccount_id , accounts_accaccount.accaccount_name , accounts_invoice.description , accounts_invoice.invoice_date , accounts_invoice.created_by , accounts_invoice.date_created , accounts_invoice.changed_by , accounts_invoice.date_changed , accounts_invoice.voided , accounts_invoice.voided_by , accounts_invoice.date_voided , accounts_invoice.uuid , accounts_invoice.sys_track  from accounts_invoice  inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_invoice.accaccount_id
						
						";
						$_SESSION["accounts_invoiceitems_SearchSQL"]="
						
						select accounts_invoiceitems.invoiceitems_id , accounts_invoice.invoice_id , accounts_invoice.invoice_name , form_item.item_id , form_item.item_name , accounts_invoiceitems.transaction_date , accounts_invoiceitems.Qty , accounts_invoiceitems.description , accounts_invoiceitems.created_by , accounts_invoiceitems.date_created , accounts_invoiceitems.changed_by , accounts_invoiceitems.date_changed , accounts_invoiceitems.voided , accounts_invoiceitems.voided_by , accounts_invoiceitems.date_voided , accounts_invoiceitems.uuid , accounts_invoiceitems.sys_track  from accounts_invoiceitems  inner join accounts_invoice on accounts_invoice.invoice_id = accounts_invoiceitems.invoice_id  inner join form_item on form_item.item_id = accounts_invoiceitems.item_id
						
						";
						$_SESSION["accounts_receipt_SearchSQL"]="
						
						select accounts_receipt.receipt_id , accounts_receipt.receipt_name , accounts_accaccount.accaccount_id , accounts_accaccount.accaccount_name , accounts_receipt.receipt_date , accounts_receipt.trans_ref , accounts_receipt.created_by , accounts_receipt.date_created , accounts_receipt.changed_by , accounts_receipt.date_changed , accounts_receipt.voided , accounts_receipt.voided_by , accounts_receipt.date_voided , accounts_receipt.uuid , accounts_receipt.sys_track  from accounts_receipt  inner join accounts_accaccount on accounts_accaccount.accaccount_id = accounts_receipt.accaccount_id
						
						";
						$_SESSION["accounts_receiptitems_SearchSQL"]="
						
						select accounts_receiptitems.receiptitems_id , accounts_receipt.receipt_id , accounts_receipt.receipt_name , accounts_receiptitems.amount , accounts_receiptitems.description , accounts_receiptitems.created_by , accounts_receiptitems.date_created , accounts_receiptitems.changed_by , accounts_receiptitems.date_changed , accounts_receiptitems.voided , accounts_receiptitems.voided_by , accounts_receiptitems.date_voided , accounts_receiptitems.uuid , accounts_receiptitems.sys_track  from accounts_receiptitems  inner join accounts_receipt on accounts_receipt.receipt_id = accounts_receiptitems.receipt_id
						
						";
						$_SESSION["admin_activitystatus_SearchSQL"]="
						
						select admin_activitystatus.activitystatus_id , admin_activitystatus.activitystatus_name , admin_activitystatus.activitystatus_status , admin_activitystatus.created_by , admin_activitystatus.date_created , admin_activitystatus.changed_by , admin_activitystatus.date_changed , admin_activitystatus.voided , admin_activitystatus.voided_by , admin_activitystatus.date_voided , admin_activitystatus.uuid , admin_activitystatus.sys_track  from admin_activitystatus
						
						";
						$_SESSION["admin_adminuser_SearchSQL"]="
						
						select admin_adminuser.adminuser_id , admin_person.person_id , admin_person.person_name , admin_adminuser.username , admin_adminuser.password , admin_adminuser.status , admin_adminuser.created_by , admin_adminuser.date_created , admin_adminuser.changed_by , admin_adminuser.date_changed , admin_adminuser.voided , admin_adminuser.voided_by , admin_adminuser.date_voided , admin_adminuser.uuid , admin_adminuser.sys_track  from admin_adminuser  inner join admin_person on admin_person.person_id = admin_adminuser.person_id
						
						";
						$_SESSION["admin_aggrigate_SearchSQL"]="
						
						select admin_aggrigate.aggrigate_id , admin_aggrigate.aggrigate_name , admin_aggrigate.aggrigate_description , admin_aggrigate.created_by , admin_aggrigate.date_created , admin_aggrigate.changed_by , admin_aggrigate.date_changed , admin_aggrigate.voided , admin_aggrigate.voided_by , admin_aggrigate.date_voided , admin_aggrigate.uuid , admin_aggrigate.sys_track  from admin_aggrigate
						
						";
						$_SESSION["admin_autofill_SearchSQL"]="
						
						select admin_autofill.autofill_id , admin_autofill.autofill_name , admin_autofill.primary_tablelist , admin_autofill.is_visible , admin_autofill.regex , admin_autofill.editable , admin_autofill.min_len , admin_autofill.max_len , admin_autofill.caption , admin_autofill.fieldname , admin_autofill.prefix , admin_autofill.surfix , admin_autofill.digit_number , admin_autofill.fill_combination , admin_autofill.inf , admin_autofill.created_by , admin_autofill.date_created , admin_autofill.changed_by , admin_autofill.date_changed , admin_autofill.voided , admin_autofill.voided_by , admin_autofill.date_voided , admin_autofill.uuid , admin_autofill.sys_track  from admin_autofill
						
						";
						$_SESSION["admin_company_SearchSQL"]="
						
						select admin_company.company_id , admin_company.company_name , admin_company.pin_number , admin_company.vat_number , admin_company.incorp_date , admin_company.building , admin_company.location_description , admin_company.street , admin_company.mobile , admin_company.tel , admin_company.fax , admin_company.postal_address , admin_company.postal_code , admin_company.town , admin_company.email_address2 , admin_company.email_address , admin_company.website , admin_company.comment , admin_company.created_by , admin_company.date_created , admin_company.changed_by , admin_company.date_changed , admin_company.voided , admin_company.voided_by , admin_company.date_voided , admin_company.uuid , admin_company.sys_track  from admin_company
						
						";
						$_SESSION["admin_companycontact_SearchSQL"]="
						
						select admin_companycontact.companycontact_id , admin_company.company_id , admin_company.company_name , admin_person.person_id , admin_person.person_name , admin_companycontact.preferred , admin_companycontact.status , admin_companycontact.created_by , admin_companycontact.date_created , admin_companycontact.changed_by , admin_companycontact.date_changed , admin_companycontact.voided , admin_companycontact.voided_by , admin_companycontact.date_voided , admin_companycontact.uuid , admin_companycontact.sys_track  from admin_companycontact  inner join admin_company on admin_company.company_id = admin_companycontact.company_id  inner join admin_person on admin_person.person_id = admin_companycontact.person_id
						
						";
						$_SESSION["admin_companydept_SearchSQL"]="
						
						select admin_companydept.companydept_id , admin_company.company_id , admin_company.company_name , admin_dept.dept_id , admin_dept.dept_name , .location_id , .location_name , admin_companydept.description , admin_companydept.Status , admin_companydept.created_by , admin_companydept.date_created , admin_companydept.changed_by , admin_companydept.date_changed , admin_companydept.voided , admin_companydept.voided_by , admin_companydept.date_voided , admin_companydept.uuid , admin_companydept.sys_track  from admin_companydept  inner join admin_company on admin_company.company_id = admin_companydept.company_id  inner join admin_dept on admin_dept.dept_id = admin_companydept.dept_id  inner join  on .location_id = admin_companydept.location_id
						
						";
						$_SESSION["admin_contactdetails_SearchSQL"]="
						
						select admin_contactdetails.contactdetails_id , admin_contactdetails.syowner , admin_contactdetails.syownerid , admin_contactdetails.email_address , admin_contactdetails.mobile_number , admin_contactdetails.postal_address , admin_contactdetails.physical_address , admin_contactdetails.fax , admin_contactdetails.telephone , admin_contactdetails.preferred , admin_contactdetails.created_by , admin_contactdetails.date_created , admin_contactdetails.changed_by , admin_contactdetails.date_changed , admin_contactdetails.voided , admin_contactdetails.voided_by , admin_contactdetails.date_voided , admin_contactdetails.uuid , admin_contactdetails.sys_track  from admin_contactdetails
						
						";
						$_SESSION["admin_controller_SearchSQL"]="
						
						select admin_controller.controller_id , admin_controller.tablename , admin_controller.groupfolder , admin_controller.displaygroup , admin_controller.displaysubgroup , admin_controller.infsubgroup , admin_controller.showgroup , admin_controller.infgroup , admin_controller.showgroupposition , admin_controller.defaultgrouptable , admin_controller.tablecaption , admin_controller.fieldname , admin_controller.gridwidth , admin_controller.fieldcaption , admin_controller.detailsvisiblepdf , admin_controller.pdfvisible , admin_controller.position , admin_controller.menuposition , admin_controller.colnwidth , admin_controller.dataformat , admin_controller.dispaytype , admin_controller.required , admin_controller.caption_position , admin_controller.control_position , admin_controller.infwidth , admin_controller.infhieght , admin_controller.infpos , admin_controller.infshow , admin_controller.displaysize , admin_controller.primarykeyidentifier , admin_controller.isautoincrement , admin_controller.accessrights , admin_controller.created_by , admin_controller.date_created , admin_controller.changed_by , admin_controller.date_changed , admin_controller.voided , admin_controller.voided_by , admin_controller.date_voided , admin_controller.uuid , admin_controller.sys_track  from admin_controller
						
						";
						$_SESSION["admin_custom_SearchSQL"]="
						
						select admin_custom.custom_id , admin_custom.tablename , admin_custom.fieldname , admin_custom.stored_value , admin_custom.display_caption , admin_custom.displaytype , admin_custom.created_by , admin_custom.date_created , admin_custom.changed_by , admin_custom.date_changed , admin_custom.voided , admin_custom.voided_by , admin_custom.date_voided , admin_custom.uuid , admin_custom.sys_track  from admin_custom
						
						";
						$_SESSION["admin_dept_SearchSQL"]="
						
						select admin_dept.dept_id , admin_dept.dept_name , .location_id , .location_name , admin_dept.description , admin_dept.effective_dt , admin_dept.created_by , admin_dept.date_created , admin_dept.changed_by , admin_dept.date_changed , admin_dept.voided , admin_dept.voided_by , admin_dept.date_voided , admin_dept.uuid , admin_dept.sys_track  from admin_dept  inner join  on .location_id = admin_dept.location_id
						
						";
						$_SESSION["admin_displaytype_SearchSQL"]="
						
						select admin_displaytype.displaytype_id , admin_displaytype.displaytype_name , admin_displaytype.created_by , admin_displaytype.date_created , admin_displaytype.changed_by , admin_displaytype.date_changed , admin_displaytype.voided , admin_displaytype.voided_by , admin_displaytype.date_voided , admin_displaytype.uuid , admin_displaytype.sys_track  from admin_displaytype
						
						";
						$_SESSION["admin_generaview_SearchSQL"]="
						
						select admin_generaview.generaview_id , designer_sview.sview_id , designer_sview.sview_name , admin_role.role_id , admin_role.role_name , designer_tblgroup.tblgroup_id , designer_tblgroup.tblgroup_name , admin_generaview.menu_caption , admin_generaview.status , admin_generaview.created_by , admin_generaview.date_created , admin_generaview.changed_by , admin_generaview.date_changed , admin_generaview.voided , admin_generaview.voided_by , admin_generaview.date_voided , admin_generaview.uuid , admin_generaview.sys_track  from admin_generaview  inner join designer_sview on designer_sview.sview_id = admin_generaview.sview_id  inner join admin_role on admin_role.role_id = admin_generaview.role_id  inner join designer_tblgroup on designer_tblgroup.tblgroup_id = admin_generaview.tblgroup_id
						
						";
						$_SESSION["admin_groupcategory_SearchSQL"]="
						
						select admin_groupcategory.groupcategory_id , admin_groupcategory.groupcategory_name , admin_groupcategory.description , admin_groupcategory.created_by , admin_groupcategory.date_created , admin_groupcategory.changed_by , admin_groupcategory.date_changed , admin_groupcategory.voided , admin_groupcategory.voided_by , admin_groupcategory.date_voided , admin_groupcategory.uuid , admin_groupcategory.sys_track  from admin_groupcategory
						
						";
						$_SESSION["admin_minmax_SearchSQL"]="
						
						select admin_minmax.minmax_id , admin_minmax.tablename , admin_minmax.fieldname , admin_minmax.minvalue , admin_minmax.maxvalue , admin_minmax.currentvalue , admin_minmax.notificationCreteria , admin_minmax.created_by , admin_minmax.date_created , admin_minmax.changed_by , admin_minmax.date_changed , admin_minmax.voided , admin_minmax.voided_by , admin_minmax.date_voided , admin_minmax.uuid , admin_minmax.sys_track  from admin_minmax
						
						";
						$_SESSION["admin_month_SearchSQL"]="
						
						select admin_month.month_id , admin_month.month_name , admin_month.created_by , admin_month.date_created , admin_month.changed_by , admin_month.date_changed , admin_month.voided , admin_month.voided_by , admin_month.date_voided , admin_month.uuid , admin_month.sys_track  from admin_month
						
						";
						$_SESSION["admin_pcategoryattribute_SearchSQL"]="
						
						select admin_pcategoryattribute.pcategoryattribute_id , admin_pcategoryattribute.pcategoryattribute_name , admin_pcategoryattribute.description , admin_pcategoryattribute.created_by , admin_pcategoryattribute.date_created , admin_pcategoryattribute.changed_by , admin_pcategoryattribute.date_changed , admin_pcategoryattribute.voided , admin_pcategoryattribute.voided_by , admin_pcategoryattribute.date_voided , admin_pcategoryattribute.uuid , admin_pcategoryattribute.sys_track  from admin_pcategoryattribute
						
						";
						$_SESSION["admin_person_SearchSQL"]="
						
						select admin_person.person_id , admin_person.person_name , admin_person.first_name , admin_person.middle_name , admin_person.last_name , admin_person.idorpassport_number , admin_person.dob , admin_person.pin , admin_person.gender , admin_person.status , admin_person.created_by , admin_person.date_created , admin_person.changed_by , admin_person.date_changed , admin_person.voided , admin_person.voided_by , admin_person.date_voided , admin_person.uuid , admin_person.sys_track  from admin_person
						
						";
						$_SESSION["admin_personattribute_SearchSQL"]="
						
						select admin_personattribute.persontypeattribute_id , admin_pcategoryattribute.pcategoryattribute_id , admin_pcategoryattribute.pcategoryattribute_name , admin_personattribute.attribute_value , admin_person.person_id , admin_person.person_name , admin_personattribute.created_by , admin_personattribute.date_created , admin_personattribute.changed_by , admin_personattribute.date_changed , admin_personattribute.voided , admin_personattribute.voided_by , admin_personattribute.date_voided , admin_personattribute.uuid , admin_personattribute.sys_track  from admin_personattribute  inner join admin_pcategoryattribute on admin_pcategoryattribute.pcategoryattribute_id = admin_personattribute.pcategoryattribute_id  inner join admin_person on admin_person.person_id = admin_personattribute.person_id
						
						";
						$_SESSION["admin_personcategoryattribute_SearchSQL"]="
						
						select admin_personcategoryattribute.personcategoryattribute_id , admin_pcategoryattribute.pcategoryattribute_id , admin_pcategoryattribute.pcategoryattribute_name , admin_personttypecategory.personttypecategory_id , admin_personttypecategory.personttypecategory_name , admin_personcategoryattribute.created_by , admin_personcategoryattribute.date_created , admin_personcategoryattribute.changed_by , admin_personcategoryattribute.date_changed , admin_personcategoryattribute.voided , admin_personcategoryattribute.voided_by , admin_personcategoryattribute.date_voided , admin_personcategoryattribute.uuid , admin_personcategoryattribute.sys_track  from admin_personcategoryattribute  inner join admin_pcategoryattribute on admin_pcategoryattribute.pcategoryattribute_id = admin_personcategoryattribute.pcategoryattribute_id  inner join admin_personttypecategory on admin_personttypecategory.personttypecategory_id = admin_personcategoryattribute.personttypecategory_id
						
						";
						$_SESSION["admin_persondept_SearchSQL"]="
						
						select admin_persondept.persondept_id , admin_dept.dept_id , admin_dept.dept_name , admin_person.person_id , admin_person.person_name , admin_persondept.start_dt , admin_persondept.end_dt , admin_persondept.is_active , admin_persondept.comments , admin_persondept.created_by , admin_persondept.date_created , admin_persondept.changed_by , admin_persondept.date_changed , admin_persondept.voided , admin_persondept.voided_by , admin_persondept.date_voided , admin_persondept.uuid , admin_persondept.sys_track  from admin_persondept  inner join admin_dept on admin_dept.dept_id = admin_persondept.dept_id  inner join admin_person on admin_person.person_id = admin_persondept.person_id
						
						";
						$_SESSION["admin_persongroup_SearchSQL"]="
						
						select admin_persongroup.persongroup_id , admin_persongroup.persongroup_name , admin_persongroup.description , admin_persongroup.created_by , admin_persongroup.date_created , admin_persongroup.changed_by , admin_persongroup.date_changed , admin_persongroup.voided , admin_persongroup.voided_by , admin_persongroup.date_voided , admin_persongroup.uuid , admin_persongroup.sys_track  from admin_persongroup
						
						";
						$_SESSION["admin_persongroupcategory_SearchSQL"]="
						
						select admin_persongroupcategory.persongroupcategory_id , admin_persongroupcategory.persongroupcategory_name , admin_groupcategory.groupcategory_id , admin_groupcategory.groupcategory_name , admin_persongroup.persongroup_id , admin_persongroup.persongroup_name , admin_persongroupcategory.description , admin_persongroupcategory.created_by , admin_persongroupcategory.date_created , admin_persongroupcategory.changed_by , admin_persongroupcategory.date_changed , admin_persongroupcategory.voided , admin_persongroupcategory.voided_by , admin_persongroupcategory.date_voided , admin_persongroupcategory.uuid , admin_persongroupcategory.sys_track  from admin_persongroupcategory  inner join admin_groupcategory on admin_groupcategory.groupcategory_id = admin_persongroupcategory.groupcategory_id  inner join admin_persongroup on admin_persongroup.persongroup_id = admin_persongroupcategory.persongroup_id
						
						";
						$_SESSION["admin_personpersontype_SearchSQL"]="
						
						select admin_personpersontype.personpersontype_id , admin_personpersontype.personpersontype_name , admin_personttypecategory.personttypecategory_id , admin_personttypecategory.personttypecategory_name , admin_person.person_id , admin_person.person_name , admin_personpersontype.created_by , admin_personpersontype.date_created , admin_personpersontype.changed_by , admin_personpersontype.date_changed , admin_personpersontype.voided , admin_personpersontype.voided_by , admin_personpersontype.date_voided , admin_personpersontype.uuid , admin_personpersontype.sys_track  from admin_personpersontype  inner join admin_personttypecategory on admin_personttypecategory.personttypecategory_id = admin_personpersontype.personttypecategory_id  inner join admin_person on admin_person.person_id = admin_personpersontype.person_id
						
						";
						$_SESSION["admin_personttypecategory_SearchSQL"]="
						
						select admin_personttypecategory.personttypecategory_id , admin_personttypecategory.personttypecategory_name , admin_personttypecategory.status , admin_personttypecategory.created_by , admin_personttypecategory.date_created , admin_personttypecategory.changed_by , admin_personttypecategory.date_changed , admin_personttypecategory.voided , admin_personttypecategory.voided_by , admin_personttypecategory.date_voided , admin_personttypecategory.uuid , admin_personttypecategory.sys_track  from admin_personttypecategory
						
						";
						$_SESSION["admin_photo_SearchSQL"]="
						
						select admin_photo.photo_id , admin_photo.photo_name , admin_photo.source_tablelist , admin_photo.source_ref , admin_photo.prefered , admin_photo.created_by , admin_photo.date_created , admin_photo.changed_by , admin_photo.date_changed , admin_photo.voided , admin_photo.voided_by , admin_photo.date_voided , admin_photo.uuid , admin_photo.sys_track  from admin_photo
						
						";
						$_SESSION["admin_privilege_SearchSQL"]="
						
						select admin_privilege.privilege_id , admin_privilege.privilege_name , .statestetus_id , .statestetus_name , admin_privilege.section , admin_privilege.refid , admin_privilege.created_by , admin_privilege.date_created , admin_privilege.changed_by , admin_privilege.date_changed , admin_privilege.voided , admin_privilege.voided_by , admin_privilege.date_voided , admin_privilege.uuid , admin_privilege.sys_track  from admin_privilege  inner join  on .statestetus_id = admin_privilege.statestetus_id
						
						";
						$_SESSION["admin_rangetype_SearchSQL"]="
						
						select admin_rangetype.rangetype_id , admin_rangetype.rangetype_name , admin_rangetype.type_description , admin_rangetype.created_by , admin_rangetype.date_created , admin_rangetype.changed_by , admin_rangetype.date_changed , admin_rangetype.voided , admin_rangetype.voided_by , admin_rangetype.date_voided , admin_rangetype.uuid , admin_rangetype.sys_track  from admin_rangetype
						
						";
						$_SESSION["admin_role_SearchSQL"]="
						
						select admin_role.role_id , admin_role.role_name , admin_role.description , admin_role.created_by , admin_role.date_created , admin_role.changed_by , admin_role.date_changed , admin_role.voided , admin_role.voided_by , admin_role.date_voided , admin_role.uuid , admin_role.sys_track  from admin_role
						
						";
						$_SESSION["admin_rolenotification_SearchSQL"]="
						
						select admin_rolenotification.rolenotification_id , admin_role.role_id , admin_role.role_name , admin_rolenotificationevent.rolenotificationevent_id , admin_rolenotificationevent.rolenotificationevent_name , admin_table.table_id , admin_table.table_name , admin_rolenotification.notificationtype , admin_rolenotification.notification_order , admin_rolenotification.awaits_activity , admin_rolenotification.success , admin_rolenotification.failure , admin_rolenotification.undetermined , admin_rolenotification.comments , admin_rolenotification.created_by , admin_rolenotification.date_created , admin_rolenotification.changed_by , admin_rolenotification.date_changed , admin_rolenotification.voided , admin_rolenotification.voided_by , admin_rolenotification.date_voided , admin_rolenotification.uuid , admin_rolenotification.sys_track  from admin_rolenotification  inner join admin_role on admin_role.role_id = admin_rolenotification.role_id  inner join admin_rolenotificationevent on admin_rolenotificationevent.rolenotificationevent_id = admin_rolenotification.rolenotificationevent_id  inner join admin_table on admin_table.table_id = admin_rolenotification.table_id
						
						";
						$_SESSION["admin_rolenotificationevent_SearchSQL"]="
						
						select admin_rolenotificationevent.rolenotificationevent_id , admin_rolenotificationevent.rolenotificationevent_name , admin_rolenotificationevent.description , admin_rolenotificationevent.created_by , admin_rolenotificationevent.date_created , admin_rolenotificationevent.changed_by , admin_rolenotificationevent.date_changed , admin_rolenotificationevent.voided , admin_rolenotificationevent.voided_by , admin_rolenotificationevent.date_voided , admin_rolenotificationevent.uuid , admin_rolenotificationevent.sys_track  from admin_rolenotificationevent
						
						";
						$_SESSION["admin_rolenotificationhist_SearchSQL"]="
						
						select admin_rolenotificationhist.rolenotificationhist_id , admin_rolenotificationhist.rolenotificationhist_name , admin_rolenotificationevent.rolenotificationevent_id , admin_rolenotificationevent.rolenotificationevent_name , admin_rolenotificationhist.notification_details , admin_rolenotificationhist.actioned_by , admin_rolenotificationhist.action , admin_rolenotificationhist.primary_tablelist , admin_table.table_id , admin_table.table_name , admin_rolenotificationhist.recordid , admin_rolenotificationhist.status , admin_rolenotificationhist.comment , admin_rolenotificationhist.created_by , admin_rolenotificationhist.date_created , admin_rolenotificationhist.changed_by , admin_rolenotificationhist.date_changed , admin_rolenotificationhist.voided , admin_rolenotificationhist.voided_by , admin_rolenotificationhist.date_voided , admin_rolenotificationhist.uuid , admin_rolenotificationhist.sys_track  from admin_rolenotificationhist  inner join admin_rolenotificationevent on admin_rolenotificationevent.rolenotificationevent_id = admin_rolenotificationhist.rolenotificationevent_id  inner join admin_table on admin_table.table_id = admin_rolenotificationhist.table_id
						
						";
						$_SESSION["admin_roleperson_SearchSQL"]="
						
						select admin_roleperson.roleperson_id , admin_person.person_id , admin_person.person_name , admin_role.role_id , admin_role.role_name , admin_roleperson.created_by , admin_roleperson.date_created , admin_roleperson.changed_by , admin_roleperson.date_changed , admin_roleperson.voided , admin_roleperson.voided_by , admin_roleperson.date_voided , admin_roleperson.uuid , admin_roleperson.sys_track  from admin_roleperson  inner join admin_person on admin_person.person_id = admin_roleperson.person_id  inner join admin_role on admin_role.role_id = admin_roleperson.role_id
						
						";
						$_SESSION["admin_roleprivilege_SearchSQL"]="
						
						select admin_roleprivilege.roleprivilege_id , admin_role.role_id , admin_role.role_name , admin_roleprivilege.privilegeid , admin_roleprivilege.activity , admin_roleprivilege.created_by , admin_roleprivilege.date_created , admin_roleprivilege.changed_by , admin_roleprivilege.date_changed , admin_roleprivilege.voided , admin_roleprivilege.voided_by , admin_roleprivilege.date_voided , admin_roleprivilege.uuid , admin_roleprivilege.sys_track  from admin_roleprivilege  inner join admin_role on admin_role.role_id = admin_roleprivilege.role_id
						
						";
						$_SESSION["admin_rolerole_SearchSQL"]="
						
						select admin_rolerole.rolerole_id , admin_role.role_id , admin_role.role_name , admin_rolerole.parent_role , admin_rolerole.created_by , admin_rolerole.date_created , admin_rolerole.changed_by , admin_rolerole.date_changed , admin_rolerole.voided , admin_rolerole.voided_by , admin_rolerole.date_voided , admin_rolerole.uuid , admin_rolerole.sys_track  from admin_rolerole  inner join admin_role on admin_role.role_id = admin_rolerole.role_id
						
						";
						$_SESSION["admin_schart_SearchSQL"]="
						
						select admin_schart.schart_id , designer_charttype.charttype_id , designer_charttype.charttype_name , admin_schart.schart_name , admin_schart.chart_position , admin_schart.tablelist , admin_schart.fieldlist_xaxis , admin_schart.xaxiscaption , admin_schart.fieldlist_yaxis , designer_aggrigate.aggrigate_id , designer_aggrigate.aggrigate_name , admin_rangetype.rangetype_id , admin_rangetype.rangetype_name , admin_schart.range_begin , admin_schart.yaxiscaption , admin_schart.range_end , designer_viewmode.viewmode_id , designer_viewmode.viewmode_name , admin_schart.created_by , admin_schart.date_created , admin_schart.changed_by , admin_schart.date_changed , admin_schart.voided , admin_schart.voided_by , admin_schart.date_voided , admin_schart.uuid , admin_schart.sys_track  from admin_schart  inner join designer_charttype on designer_charttype.charttype_id = admin_schart.charttype_id  inner join designer_aggrigate on designer_aggrigate.aggrigate_id = admin_schart.aggrigate_id  inner join admin_rangetype on admin_rangetype.rangetype_id = admin_schart.rangetype_id  inner join designer_viewmode on designer_viewmode.viewmode_id = admin_schart.viewmode_id
						
						";
						$_SESSION["admin_statement_SearchSQL"]="
						
						select admin_statement.statement_id , admin_statement.tablename , admin_statement.statement_caption , admin_statement.statement_link , admin_statement.show_identifier , admin_statement.first_only , admin_statement.pdfvisible , admin_statement.position , admin_statement.created_by , admin_statement.date_created , admin_statement.changed_by , admin_statement.date_changed , admin_statement.voided , admin_statement.voided_by , admin_statement.date_voided , admin_statement.uuid , admin_statement.sys_track  from admin_statement
						
						";
						$_SESSION["admin_systemvariable_SearchSQL"]="
						
						select admin_systemvariable.systemvariable_id , admin_systemvariable.systemvariable_name , admin_systemvariable.created_by , admin_systemvariable.date_created , admin_systemvariable.changed_by , admin_systemvariable.date_changed , admin_systemvariable.voided , admin_systemvariable.voided_by , admin_systemvariable.date_voided , admin_systemvariable.uuid , admin_systemvariable.sys_track  from admin_systemvariable
						
						";
						$_SESSION["admin_table_SearchSQL"]="
						
						select admin_table.table_id , admin_table.table_name , admin_table.table_caption , admin_table.statement_caption , admin_table.flexcolumn , admin_table.gridwidth , admin_table.gridhieght , admin_table.formheight , admin_table.orderpos , admin_table.created_by , admin_table.date_created , admin_table.changed_by , admin_table.date_changed , admin_table.voided , admin_table.voided_by , admin_table.date_voided , admin_table.uuid , admin_table.sys_track  from admin_table
						
						";
						$_SESSION["admin_user_SearchSQL"]="
						
						select admin_user.id , .employee_id , .employee_name , admin_user.userid , admin_user.user_password , admin_user.UserName , admin_user.user_priviledge , admin_user.security_question , admin_user.security_q_answer , .usergroup_id , .usergroup_name , admin_user.user_active_status , admin_user.created_by , admin_user.date_created , admin_user.changed_by , admin_user.date_changed , admin_user.voided , admin_user.voided_by , admin_user.date_voided , admin_user.uuid , admin_user.sys_track  from admin_user  inner join  on .employee_id = admin_user.employee_id  inner join  on .usergroup_id = admin_user.usergroup_id
						
						";
						$_SESSION["admin_workticket_SearchSQL"]="
						
						select admin_workticket.workticket_id , admin_workticket.workticket_name , admin_rolenotificationhist.rolenotificationhist_id , admin_rolenotificationhist.rolenotificationhist_name , admin_person.person_id , admin_person.person_name , admin_workticket.description , admin_workticket.created_by , admin_workticket.date_created , admin_workticket.changed_by , admin_workticket.date_changed , admin_workticket.voided , admin_workticket.voided_by , admin_workticket.date_voided , admin_workticket.uuid , admin_workticket.sys_track  from admin_workticket  inner join admin_rolenotificationhist on admin_rolenotificationhist.rolenotificationhist_id = admin_workticket.rolenotificationhist_id  inner join admin_person on admin_person.person_id = admin_workticket.person_id
						
						";
						$_SESSION["asset_assetitem_SearchSQL"]="
						
						select asset_assetitem.assetitem_id , asset_assetitem.assetitem_name , form_item.item_id , form_item.item_name , .itemmaincategory_id , .itemmaincategory_name , .itemcategory_id , .itemcategory_name , asset_assetitem.location , asset_assetitem.syowner , asset_assetitem.syownerid , asset_assetitem.serial_number , asset_assetitem.barcode , asset_assetitem.purchase_date , asset_assetitem.depreciation_startdate , asset_assetitem.po_reference , .timeperiodtype_id , .timeperiodtype_name , asset_assetitem.waranty_period , asset_assetitem.original_cost , .depreciationmethod_id , .depreciationmethod_name , asset_assetitem.created_by , asset_assetitem.date_created , asset_assetitem.changed_by , asset_assetitem.date_changed , asset_assetitem.voided , asset_assetitem.voided_by , asset_assetitem.date_voided , asset_assetitem.uuid , asset_assetitem.sys_track  from asset_assetitem  inner join form_item on form_item.item_id = asset_assetitem.item_id  inner join  on .itemmaincategory_id = asset_assetitem.itemmaincategory_id  inner join  on .itemcategory_id = asset_assetitem.itemcategory_id  inner join  on .timeperiodtype_id = asset_assetitem.timeperiodtype_id  inner join  on .depreciationmethod_id = asset_assetitem.depreciationmethod_id
						
						";
						$_SESSION["bank_bankaccount_SearchSQL"]="
						
						select bank_bankaccount.bankaccount_id , bank_bankaccount.syowner , bank_bankaccount.syownerid , bank_bankaccount.bankaccount_name , bank_bankaccount.bank , payment_currency.currency_id , payment_currency.currency_name , bank_bankaccount.branch , bank_bankaccount.description , bank_bankaccount.created_by , bank_bankaccount.date_created , bank_bankaccount.changed_by , bank_bankaccount.date_changed , bank_bankaccount.voided , bank_bankaccount.voided_by , bank_bankaccount.date_voided , bank_bankaccount.uuid , bank_bankaccount.sys_track  from bank_bankaccount  inner join payment_currency on payment_currency.currency_id = bank_bankaccount.currency_id
						
						";
						$_SESSION["bank_bankstatement_SearchSQL"]="
						
						select bank_bankstatement.bankstatement_id , bank_bankaccount.bankaccount_id , bank_bankaccount.bankaccount_name , bank_bankstatement.bankstatement_name , bank_bankstatement.from_date , bank_bankstatement.to_date , bank_bankstatement.amount , bank_bankstatement.status , bank_bankstatement.attachment , bank_bankstatement.created_by , bank_bankstatement.date_created , bank_bankstatement.changed_by , bank_bankstatement.date_changed , bank_bankstatement.voided , bank_bankstatement.voided_by , bank_bankstatement.date_voided , bank_bankstatement.uuid , bank_bankstatement.sys_track  from bank_bankstatement  inner join bank_bankaccount on bank_bankaccount.bankaccount_id = bank_bankstatement.bankaccount_id
						
						";
						$_SESSION["bank_bankstmntitems_SearchSQL"]="
						
						select bank_bankstmntitems.bankstmntitems_id , bank_bankstatement.bankstatement_id , bank_bankstatement.bankstatement_name , bank_bankstmntitems.transaction_date , bank_bankstmntitems.transaction_type , bank_bankstmntitems.amount , bank_bankstmntitems.status , bank_bankstmntitems.created_by , bank_bankstmntitems.date_created , bank_bankstmntitems.changed_by , bank_bankstmntitems.date_changed , bank_bankstmntitems.voided , bank_bankstmntitems.voided_by , bank_bankstmntitems.date_voided , bank_bankstmntitems.uuid , bank_bankstmntitems.sys_track  from bank_bankstmntitems  inner join bank_bankstatement on bank_bankstatement.bankstatement_id = bank_bankstmntitems.bankstatement_id
						
						";
						$_SESSION["bank_chequeissue_SearchSQL"]="
						
						select bank_chequeissue.chequeissue_id , bank_chequeissue.syowner , bank_chequeissue.syownerid , bank_chequeissue.chequedetails , bank_chequeissue.chequeissue_name , bank_chequeissue.cheque_number , bank_chequeissue.cheque_date , bank_chequeissue.amount , bank_chequeissue.status , bank_chequeissue.created_by , bank_chequeissue.date_created , bank_chequeissue.changed_by , bank_chequeissue.date_changed , bank_chequeissue.voided , bank_chequeissue.voided_by , bank_chequeissue.date_voided , bank_chequeissue.uuid , bank_chequeissue.sys_track  from bank_chequeissue
						
						";
						$_SESSION["com_batchemail_SearchSQL"]="
						
						select com_batchemail.batchemail_id , com_batchemail.batchemail_name , admin_persongroup.persongroup_id , admin_persongroup.persongroup_name , com_batchemail.subject , com_batchemail.body , com_batchemail.transaction_date , com_batchemail.created_by , com_batchemail.date_created , com_batchemail.changed_by , com_batchemail.date_changed , com_batchemail.voided , com_batchemail.voided_by , com_batchemail.date_voided , com_batchemail.uuid , com_batchemail.sys_track  from com_batchemail  inner join admin_persongroup on admin_persongroup.persongroup_id = com_batchemail.persongroup_id
						
						";
						$_SESSION["com_emailsettings_SearchSQL"]="
						
						select com_emailsettings.emailsettings_id , com_emailsettings.email_address , com_emailsettings.password , com_emailsettings.port , com_emailsettings.host , com_emailsettings.send_from , com_emailsettings.SMT_secure , com_emailsettings.SMPT_authentication , com_emailsettings.preferred , com_emailsettings.comment , com_emailsettings.created_by , com_emailsettings.date_created , com_emailsettings.changed_by , com_emailsettings.date_changed , com_emailsettings.voided , com_emailsettings.voided_by , com_emailsettings.date_voided , com_emailsettings.uuid , com_emailsettings.sys_track  from com_emailsettings
						
						";
						$_SESSION["com_sendemail_SearchSQL"]="
						
						select com_sendemail.sendemail_id , com_sendemail.syowner , com_sendemail.syownerid , com_sendemail.email_subject , com_sendemail.email_body , com_sendemail.attachments , com_sendemail.created_by , com_sendemail.date_created , com_sendemail.changed_by , com_sendemail.date_changed , com_sendemail.voided , com_sendemail.voided_by , com_sendemail.date_voided , com_sendemail.uuid , com_sendemail.sys_track  from com_sendemail
						
						";
						$_SESSION["designer_aggrigate_SearchSQL"]="
						
						select designer_aggrigate.aggrigate_id , designer_aggrigate.aggrigate_name , designer_aggrigate.aggrigate_description , designer_aggrigate.created_by , designer_aggrigate.date_created , designer_aggrigate.changed_by , designer_aggrigate.date_changed , designer_aggrigate.voided , designer_aggrigate.voided_by , designer_aggrigate.date_voided , designer_aggrigate.uuid , designer_aggrigate.sys_track  from designer_aggrigate
						
						";
						$_SESSION["designer_aggrigatetype_SearchSQL"]="
						
						select designer_aggrigatetype.aggrigatetype_id , designer_aggrigatetype.aggrigatetype_name , designer_aggrigatetype.created_by , designer_aggrigatetype.date_created , designer_aggrigatetype.changed_by , designer_aggrigatetype.date_changed , designer_aggrigatetype.voided , designer_aggrigatetype.voided_by , designer_aggrigatetype.date_voided , designer_aggrigatetype.uuid , designer_aggrigatetype.sys_track  from designer_aggrigatetype
						
						";
						$_SESSION["designer_categorizeother_SearchSQL"]="
						
						select designer_categorizeother.categorizeother_id , designer_categorizeother.categorizeother_name , designer_othercategory.othercategory_id , designer_othercategory.othercategory_name , designer_categorizeother.created_by , designer_categorizeother.date_created , designer_categorizeother.changed_by , designer_categorizeother.date_changed , designer_categorizeother.voided , designer_categorizeother.voided_by , designer_categorizeother.date_voided , designer_categorizeother.uuid , designer_categorizeother.sys_track  from designer_categorizeother  inner join designer_othercategory on designer_othercategory.othercategory_id = designer_categorizeother.othercategory_id
						
						";
						$_SESSION["designer_charttype_SearchSQL"]="
						
						select designer_charttype.charttype_id , designer_charttype.charttype_name , designer_charttype.charttype_description , designer_charttype.created_by , designer_charttype.date_created , designer_charttype.changed_by , designer_charttype.date_changed , designer_charttype.voided , designer_charttype.voided_by , designer_charttype.date_voided , designer_charttype.uuid , designer_charttype.sys_track  from designer_charttype
						
						";
						$_SESSION["designer_combocustomization_SearchSQL"]="
						
						select designer_combocustomization.combocustomization_id , designer_combocustomization.combo_tablelist , designer_combocustomization.fieldvalue , designer_combocustomization.othervalues , designer_combocustomization.created_by , designer_combocustomization.date_created , designer_combocustomization.changed_by , designer_combocustomization.date_changed , designer_combocustomization.voided , designer_combocustomization.voided_by , designer_combocustomization.date_voided , designer_combocustomization.uuid , designer_combocustomization.sys_track  from designer_combocustomization
						
						";
						$_SESSION["designer_crdbdeterminant_SearchSQL"]="
						
						select designer_crdbdeterminant.crdbdeterminant_id , designer_crdbdeterminant.credit_tablelist , designer_crdbdeterminant.debit_tablelist , designer_crdbdeterminant.created_by , designer_crdbdeterminant.date_created , designer_crdbdeterminant.changed_by , designer_crdbdeterminant.date_changed , designer_crdbdeterminant.voided , designer_crdbdeterminant.voided_by , designer_crdbdeterminant.date_voided , designer_crdbdeterminant.uuid , designer_crdbdeterminant.sys_track  from designer_crdbdeterminant
						
						";
						$_SESSION["designer_custfunc_SearchSQL"]="
						
						select designer_custfunc.custfunc_id , designer_custfunc.custfunc_name , designer_custfunc.func_tablelist , designer_custfunc.created_by , designer_custfunc.date_created , designer_custfunc.changed_by , designer_custfunc.date_changed , designer_custfunc.voided , designer_custfunc.voided_by , designer_custfunc.date_voided , designer_custfunc.uuid , designer_custfunc.sys_track  from designer_custfunc
						
						";
						$_SESSION["designer_datatype_SearchSQL"]="
						
						select designer_datatype.datatype_id , designer_datatype.datatype_name , designer_datatype.created_by , designer_datatype.date_created , designer_datatype.changed_by , designer_datatype.date_changed , designer_datatype.voided , designer_datatype.voided_by , designer_datatype.date_voided , designer_datatype.uuid , designer_datatype.sys_track  from designer_datatype
						
						";
						$_SESSION["designer_fasttbldesign_SearchSQL"]="
						
						select designer_fasttbldesign.fasttbldesign_id , designer_sview.sview_id , designer_sview.sview_name , designer_fasttbldesign.primary_tablelist , designer_fasttbldesign.secondary_tablelist , designer_fasttbldesign.tabcaption , designer_fasttbldesign.tab_index , designer_fasttbldesign.created_by , designer_fasttbldesign.date_created , designer_fasttbldesign.changed_by , designer_fasttbldesign.date_changed , designer_fasttbldesign.voided , designer_fasttbldesign.voided_by , designer_fasttbldesign.date_voided , designer_fasttbldesign.uuid , designer_fasttbldesign.sys_track  from designer_fasttbldesign  inner join designer_sview on designer_sview.sview_id = designer_fasttbldesign.sview_id
						
						";
						$_SESSION["designer_fieldcustomization_SearchSQL"]="
						
						select designer_fieldcustomization.fieldcustomization_id , designer_fieldcustomization.field_tablelist , designer_fieldcustomization.current_fieldname , structure_displaytype.displaytype_id , structure_displaytype.displaytype_name , designer_fieldcustomization.caption , designer_fieldcustomization.is_visible , designer_fieldcustomization.num_cols , designer_fieldcustomization.options , designer_fieldcustomization.created_by , designer_fieldcustomization.date_created , designer_fieldcustomization.changed_by , designer_fieldcustomization.date_changed , designer_fieldcustomization.voided , designer_fieldcustomization.voided_by , designer_fieldcustomization.date_voided , designer_fieldcustomization.uuid , designer_fieldcustomization.sys_track  from designer_fieldcustomization  inner join structure_displaytype on structure_displaytype.displaytype_id = designer_fieldcustomization.displaytype_id
						
						";
						$_SESSION["designer_flexcolumn_SearchSQL"]="
						
						select designer_flexcolumn.flexcolum_id , designer_flexcolumn.primary_tablelist , designer_flexcolumn.options_tablelist , designer_flexcolumn.orderby , designer_flexcolumn.default_section , designer_flexcolumn.created_by , designer_flexcolumn.date_created , designer_flexcolumn.changed_by , designer_flexcolumn.date_changed , designer_flexcolumn.voided , designer_flexcolumn.voided_by , designer_flexcolumn.date_voided , designer_flexcolumn.uuid , designer_flexcolumn.sys_track  from designer_flexcolumn
						
						";
						$_SESSION["designer_gender_SearchSQL"]="
						
						select designer_gender.gender_id , designer_gender.gender_name , designer_gender.created_by , designer_gender.date_created , designer_gender.changed_by , designer_gender.date_changed , designer_gender.voided , designer_gender.voided_by , designer_gender.date_voided , designer_gender.uuid , designer_gender.sys_track  from designer_gender
						
						";
						$_SESSION["designer_grouptbls_SearchSQL"]="
						
						select designer_grouptbls.grouptbls_id , designer_tblgroup.tblgroup_id , designer_tblgroup.tblgroup_name , designer_grouptbls.tblgroup_tablelist , designer_grouptbls.orderpos , designer_grouptbls.table_caption , designer_grouptbls.menu , designer_grouptbls.statement , designer_grouptbls.created_by , designer_grouptbls.date_created , designer_grouptbls.changed_by , designer_grouptbls.date_changed , designer_grouptbls.voided , designer_grouptbls.voided_by , designer_grouptbls.date_voided , designer_grouptbls.uuid , designer_grouptbls.sys_track  from designer_grouptbls  inner join designer_tblgroup on designer_tblgroup.tblgroup_id = designer_grouptbls.tblgroup_id
						
						";
						$_SESSION["designer_othercategory_SearchSQL"]="
						
						select designer_othercategory.othercategory_id , designer_othercategory.othercategory_name , designer_othercategory.created_by , designer_othercategory.date_created , designer_othercategory.changed_by , designer_othercategory.date_changed , designer_othercategory.voided , designer_othercategory.voided_by , designer_othercategory.date_voided , designer_othercategory.uuid , designer_othercategory.sys_track  from designer_othercategory
						
						";
						$_SESSION["designer_othermenu_SearchSQL"]="
						
						select designer_othermenu.othermenu_id , designer_othercategory.othercategory_id , designer_othercategory.othercategory_name , admin_role.role_id , admin_role.role_name , designer_tblgroup.tblgroup_id , designer_tblgroup.tblgroup_name , designer_othermenu.menu_caption , designer_othermenu.status , designer_othermenu.created_by , designer_othermenu.date_created , designer_othermenu.changed_by , designer_othermenu.date_changed , designer_othermenu.voided , designer_othermenu.voided_by , designer_othermenu.date_voided , designer_othermenu.uuid , designer_othermenu.sys_track  from designer_othermenu  inner join designer_othercategory on designer_othercategory.othercategory_id = designer_othermenu.othercategory_id  inner join admin_role on admin_role.role_id = designer_othermenu.role_id  inner join designer_tblgroup on designer_tblgroup.tblgroup_id = designer_othermenu.tblgroup_id
						
						";
						$_SESSION["designer_preaggrigate_SearchSQL"]="
						
						select designer_preaggrigate.preaggrigate_id , designer_preaggrigate.preaggrigate_name , designer_preaggrigate.created_by , designer_preaggrigate.date_created , designer_preaggrigate.changed_by , designer_preaggrigate.date_changed , designer_preaggrigate.voided , designer_preaggrigate.voided_by , designer_preaggrigate.date_voided , designer_preaggrigate.uuid , designer_preaggrigate.sys_track  from designer_preaggrigate
						
						";
						$_SESSION["designer_queryfield_SearchSQL"]="
						
						select designer_queryfield.queryfield_id , reports_reportview.reportview_id , reports_reportview.reportview_name , designer_queryfield.report_caption , designer_queryfield.section_caption , designer_queryfield.column_width , designer_queryfield.query , designer_queryfield.created_by , designer_queryfield.date_created , designer_queryfield.changed_by , designer_queryfield.date_changed , designer_queryfield.voided , designer_queryfield.voided_by , designer_queryfield.date_voided , designer_queryfield.uuid , designer_queryfield.sys_track  from designer_queryfield  inner join reports_reportview on reports_reportview.reportview_id = designer_queryfield.reportview_id
						
						";
						$_SESSION["designer_relationship_SearchSQL"]="
						
						select designer_relationship.relationship_id , designer_relationship.relationship_name , designer_relationship.description , designer_relationship.created_by , designer_relationship.date_created , designer_relationship.changed_by , designer_relationship.date_changed , designer_relationship.voided , designer_relationship.voided_by , designer_relationship.date_voided , designer_relationship.uuid , designer_relationship.sys_track  from designer_relationship
						
						";
						$_SESSION["designer_relationshipstatus_SearchSQL"]="
						
						select designer_relationshipstatus.relationshipstatus_id , designer_relationshipstatus.relationshipstatus_name , designer_relationshipstatus.description , designer_relationshipstatus.created_by , designer_relationshipstatus.date_created , designer_relationshipstatus.changed_by , designer_relationshipstatus.date_changed , designer_relationshipstatus.voided , designer_relationshipstatus.voided_by , designer_relationshipstatus.date_voided , designer_relationshipstatus.uuid , designer_relationshipstatus.sys_track  from designer_relationshipstatus
						
						";
						$_SESSION["designer_resultdisplay_SearchSQL"]="
						
						select designer_resultdisplay.resultdisplay_id , designer_resultdisplay.resultdisplay_name , designer_resultdisplay.description , designer_resultdisplay.created_by , designer_resultdisplay.date_created , designer_resultdisplay.changed_by , designer_resultdisplay.date_changed , designer_resultdisplay.voided , designer_resultdisplay.voided_by , designer_resultdisplay.date_voided , designer_resultdisplay.uuid , designer_resultdisplay.sys_track  from designer_resultdisplay
						
						";
						$_SESSION["designer_sectparent_SearchSQL"]="
						
						select designer_sectparent.sectparent_id , designer_sectparent.sectparent_tablelist , designer_sectparent.child_tablelist , designer_sectparent.created_by , designer_sectparent.date_created , designer_sectparent.changed_by , designer_sectparent.date_changed , designer_sectparent.voided , designer_sectparent.voided_by , designer_sectparent.date_voided , designer_sectparent.uuid , designer_sectparent.sys_track  from designer_sectparent
						
						";
						$_SESSION["designer_sform_SearchSQL"]="
						
						select designer_sform.sform_id , designer_sform.sform_name , designer_sform.active , designer_sform.description , designer_sform.created_by , designer_sform.date_created , designer_sform.changed_by , designer_sform.date_changed , designer_sform.voided , designer_sform.voided_by , designer_sform.date_voided , designer_sform.uuid , designer_sform.sys_track  from designer_sform
						
						";
						$_SESSION["designer_sview_SearchSQL"]="
						
						select designer_sview.sview_id , designer_sview.sview_name , designer_sview.context_menu , designer_sview.main_caption , designer_sview.created_by , designer_sview.date_created , designer_sview.changed_by , designer_sview.date_changed , designer_sview.voided , designer_sview.voided_by , designer_sview.date_voided , designer_sview.uuid , designer_sview.sys_track  from designer_sview
						
						";
						$_SESSION["designer_sysaction_SearchSQL"]="
						
						select designer_sysaction.sysaction_id , designer_sysaction.sysaction_name , designer_sysaction.description , designer_sysaction.created_by , designer_sysaction.date_created , designer_sysaction.changed_by , designer_sysaction.date_changed , designer_sysaction.voided , designer_sysaction.voided_by , designer_sysaction.date_voided , designer_sysaction.uuid , designer_sysaction.sys_track  from designer_sysaction
						
						";
						$_SESSION["designer_sysmodules_SearchSQL"]="
						
						select designer_sysmodules.sysmodules_id , designer_sysmodules.sysmodules_name , designer_sysmodules.created_by , designer_sysmodules.date_created , designer_sysmodules.changed_by , designer_sysmodules.date_changed , designer_sysmodules.voided , designer_sysmodules.voided_by , designer_sysmodules.date_voided , designer_sysmodules.uuid , designer_sysmodules.sys_track  from designer_sysmodules
						
						";
						$_SESSION["designer_systemclass_SearchSQL"]="
						
						select designer_systemclass.systemclass_id , designer_systemclass.systemclass_name , designer_systemclass.created_by , designer_systemclass.date_created , designer_systemclass.changed_by , designer_systemclass.date_changed , designer_systemclass.voided , designer_systemclass.voided_by , designer_systemclass.date_voided , designer_systemclass.uuid , designer_systemclass.sys_track  from designer_systemclass
						
						";
						$_SESSION["designer_sytable_SearchSQL"]="
						
						select designer_sytable.sytable_id , designer_sytable.sytable_tablelist , designer_sytable.invisible , designer_sytable.created_by , designer_sytable.date_created , designer_sytable.changed_by , designer_sytable.date_changed , designer_sytable.voided , designer_sytable.voided_by , designer_sytable.date_voided , designer_sytable.uuid , designer_sytable.sys_track  from designer_sytable
						
						";
						$_SESSION["designer_tableaction_SearchSQL"]="
						
						select designer_tableaction.tableaction_id , designer_tableaction.primary_tablelist , designer_sysaction.sysaction_id , designer_sysaction.sysaction_name , designer_resultdisplay.resultdisplay_id , designer_resultdisplay.resultdisplay_name , designer_tableaction.activity_stage , designer_tableaction.created_by , designer_tableaction.date_created , designer_tableaction.changed_by , designer_tableaction.date_changed , designer_tableaction.voided , designer_tableaction.voided_by , designer_tableaction.date_voided , designer_tableaction.uuid , designer_tableaction.sys_track  from designer_tableaction  inner join designer_sysaction on designer_sysaction.sysaction_id = designer_tableaction.sysaction_id  inner join designer_resultdisplay on designer_resultdisplay.resultdisplay_id = designer_tableaction.resultdisplay_id
						
						";
						$_SESSION["designer_tabmngr_SearchSQL"]="
						
						select designer_tabmngr.tabmngr_id , designer_sform.sform_id , designer_sform.sform_name , designer_sview.sview_id , designer_sview.sview_name , designer_tabmngr.displaycolumns , designer_tabmngr.collapsible , designer_tabmngr.hideLabel , designer_tabmngr.collapsed , designer_tabmngr.is_primary , designer_tabmngr.tablelist_secondary , designer_tabmngr.secondary_position , designer_tabmngr.display_caption , designer_viewmode.viewmode_id , designer_viewmode.viewmode_name , designer_viewicon.viewicon_id , designer_viewicon.viewicon_name , designer_tabmngr.fieldlist_visible , designer_tabmngr.created_by , designer_tabmngr.date_created , designer_tabmngr.changed_by , designer_tabmngr.date_changed , designer_tabmngr.voided , designer_tabmngr.voided_by , designer_tabmngr.date_voided , designer_tabmngr.uuid , designer_tabmngr.sys_track  from designer_tabmngr  inner join designer_sform on designer_sform.sform_id = designer_tabmngr.sform_id  inner join designer_sview on designer_sview.sview_id = designer_tabmngr.sview_id  inner join designer_viewmode on designer_viewmode.viewmode_id = designer_tabmngr.viewmode_id  inner join designer_viewicon on designer_viewicon.viewicon_id = designer_tabmngr.viewicon_id
						
						";
						$_SESSION["designer_tblgroup_SearchSQL"]="
						
						select designer_tblgroup.tblgroup_id , designer_tblgroup.tblgroup_name , designer_tblgroup.caption , designer_tblgroup.created_by , designer_tblgroup.date_created , designer_tblgroup.changed_by , designer_tblgroup.date_changed , designer_tblgroup.voided , designer_tblgroup.voided_by , designer_tblgroup.date_voided , designer_tblgroup.uuid , designer_tblgroup.sys_track  from designer_tblgroup
						
						";
						$_SESSION["designer_tblrelation_SearchSQL"]="
						
						select designer_tblrelation.tblrelation_id , admin_person.person_id , admin_person.person_name , designer_tblrelation.personrelated_to , designer_relationship.relationship_id , designer_relationship.relationship_name , designer_relationshipstatus.relationshipstatus_id , designer_relationshipstatus.relationshipstatus_name , designer_tblrelation.created_by , designer_tblrelation.date_created , designer_tblrelation.changed_by , designer_tblrelation.date_changed , designer_tblrelation.voided , designer_tblrelation.voided_by , designer_tblrelation.date_voided , designer_tblrelation.uuid , designer_tblrelation.sys_track  from designer_tblrelation  inner join admin_person on admin_person.person_id = designer_tblrelation.person_id  inner join designer_relationship on designer_relationship.relationship_id = designer_tblrelation.relationship_id  inner join designer_relationshipstatus on designer_relationshipstatus.relationshipstatus_id = designer_tblrelation.relationshipstatus_id
						
						";
						$_SESSION["designer_tblsubgrp_SearchSQL"]="
						
						select designer_tblsubgrp.tblsubgrp_id , designer_tblsubgrp.tblsubgrp_name , designer_tblsubgrp.created_by , designer_tblsubgrp.date_created , designer_tblsubgrp.changed_by , designer_tblsubgrp.date_changed , designer_tblsubgrp.voided , designer_tblsubgrp.voided_by , designer_tblsubgrp.date_voided , designer_tblsubgrp.uuid , designer_tblsubgrp.sys_track  from designer_tblsubgrp
						
						";
						$_SESSION["designer_tblsummary_SearchSQL"]="
						
						select designer_tblsummary.tblsummary_id , designer_tblsummary.aggrigate_tablelist , designer_tblsummary.aggrigate_field , designer_tblsummary.aggrigate_caption , designer_aggrigatetype.aggrigatetype_id , designer_aggrigatetype.aggrigatetype_name , designer_preaggrigate.preaggrigate_id , designer_preaggrigate.preaggrigate_name , designer_tblsummary.is_visible , designer_tblsummary.created_by , designer_tblsummary.date_created , designer_tblsummary.changed_by , designer_tblsummary.date_changed , designer_tblsummary.voided , designer_tblsummary.voided_by , designer_tblsummary.date_voided , designer_tblsummary.uuid , designer_tblsummary.sys_track  from designer_tblsummary  inner join designer_aggrigatetype on designer_aggrigatetype.aggrigatetype_id = designer_tblsummary.aggrigatetype_id  inner join designer_preaggrigate on designer_preaggrigate.preaggrigate_id = designer_tblsummary.preaggrigate_id
						
						";
						$_SESSION["designer_viewicon_SearchSQL"]="
						
						select designer_viewicon.viewicon_id , designer_viewicon.viewicon_name , designer_viewicon.viewicon_image , designer_viewicon.created_by , designer_viewicon.date_created , designer_viewicon.changed_by , designer_viewicon.date_changed , designer_viewicon.voided , designer_viewicon.voided_by , designer_viewicon.date_voided , designer_viewicon.uuid , designer_viewicon.sys_track  from designer_viewicon
						
						";
						$_SESSION["designer_viewmode_SearchSQL"]="
						
						select designer_viewmode.viewmode_id , designer_viewmode.viewmode_name , designer_viewmode.viewmode_status , designer_viewmode.created_by , designer_viewmode.date_created , designer_viewmode.changed_by , designer_viewmode.date_changed , designer_viewmode.voided , designer_viewmode.voided_by , designer_viewmode.date_voided , designer_viewmode.uuid , designer_viewmode.sys_track  from designer_viewmode
						
						";
						$_SESSION["designer_viewphoto_SearchSQL"]="
						
						select designer_viewphoto.viewphoto_id , designer_sview.sview_id , designer_sview.sview_name , designer_viewphoto.show_photo , designer_viewphoto.created_by , designer_viewphoto.date_created , designer_viewphoto.changed_by , designer_viewphoto.date_changed , designer_viewphoto.voided , designer_viewphoto.voided_by , designer_viewphoto.date_voided , designer_viewphoto.uuid , designer_viewphoto.sys_track  from designer_viewphoto  inner join designer_sview on designer_sview.sview_id = designer_viewphoto.sview_id
						
						";
						$_SESSION["housing_housinglandlord_SearchSQL"]="
						
						select housing_housinglandlord.housinglandlord_id , housing_housinglandlord.housinglandlord_name , admin_person.person_id , admin_person.person_name , housing_housinglandlord.contract_day , admin_month.month_id , admin_month.month_name , housing_housinglandlord.contract_year , housing_housinglandlord.term_period , housing_housinglandlord.term_months , housing_housinglandlord.commission , housing_housinglandlord.commission_alternative , housing_housinglandlord.excess_amount , housing_housinglandlord.payment_day , housing_housinglandlord.property , housing_housinglandlord.contract_dated , housing_rentperiod.rentperiod_id , housing_rentperiod.rentperiod_name , housing_housinglandlord.created_by , housing_housinglandlord.date_created , housing_housinglandlord.changed_by , housing_housinglandlord.date_changed , housing_housinglandlord.voided , housing_housinglandlord.voided_by , housing_housinglandlord.date_voided , housing_housinglandlord.uuid , housing_housinglandlord.sys_track  from housing_housinglandlord  inner join admin_person on admin_person.person_id = housing_housinglandlord.person_id  inner join admin_month on admin_month.month_id = housing_housinglandlord.month_id  inner join housing_rentperiod on housing_rentperiod.rentperiod_id = housing_housinglandlord.rentperiod_id
						
						";
						$_SESSION["housing_housinglandlordgrp_SearchSQL"]="
						
						select housing_housinglandlordgrp.housinglandlordgrp_id , housing_housinglandlordgrp.housinglandlordgrp_name , admin_persongroup.persongroup_id , admin_persongroup.persongroup_name , housing_housinglandlordgrp.contract_day , admin_month.month_id , admin_month.month_name , housing_housinglandlordgrp.contract_year , housing_housinglandlordgrp.term_period , housing_housinglandlordgrp.term_months , housing_housinglandlordgrp.commission , housing_housinglandlordgrp.commission_alternative , housing_housinglandlordgrp.excess_amount , housing_housinglandlordgrp.payment_day , housing_housinglandlordgrp.property , housing_housinglandlordgrp.contract_dated , housing_rentperiod.rentperiod_id , housing_rentperiod.rentperiod_name , housing_housinglandlordgrp.created_by , housing_housinglandlordgrp.date_created , housing_housinglandlordgrp.changed_by , housing_housinglandlordgrp.date_changed , housing_housinglandlordgrp.voided , housing_housinglandlordgrp.voided_by , housing_housinglandlordgrp.date_voided , housing_housinglandlordgrp.uuid , housing_housinglandlordgrp.sys_track  from housing_housinglandlordgrp  inner join admin_persongroup on admin_persongroup.persongroup_id = housing_housinglandlordgrp.persongroup_id  inner join admin_month on admin_month.month_id = housing_housinglandlordgrp.month_id  inner join housing_rentperiod on housing_rentperiod.rentperiod_id = housing_housinglandlordgrp.rentperiod_id
						
						";
						$_SESSION["housing_housingtenant_SearchSQL"]="
						
						select housing_housingtenant.housingtenant_id , housing_housingtenant.housingtenant_name , admin_person.person_id , admin_person.person_name , housing_housinglandlord.housinglandlord_id , housing_housinglandlord.housinglandlord_name , housing_housingtenant.contract_day , admin_month.month_id , admin_month.month_name , housing_housingtenant.contract_year , housing_housingtenant.property_description , housing_housingtenant.rent , housing_housingtenant.deposit , housing_housingtenant.electricity_water , housing_rentperiod.rentperiod_id , housing_rentperiod.rentperiod_name , housing_housingtenant.deposit_description , housing_housingtenant.tenancy_period , housing_housingtenant.period_starts , housing_housingtenant.period_startdate , housing_housingtenant.period_months , housing_housingtenant.contract_dated , housing_housingtenant.created_by , housing_housingtenant.date_created , housing_housingtenant.changed_by , housing_housingtenant.date_changed , housing_housingtenant.voided , housing_housingtenant.voided_by , housing_housingtenant.date_voided , housing_housingtenant.uuid , housing_housingtenant.sys_track  from housing_housingtenant  inner join admin_person on admin_person.person_id = housing_housingtenant.person_id  inner join housing_housinglandlord on housing_housinglandlord.housinglandlord_id = housing_housingtenant.housinglandlord_id  inner join admin_month on admin_month.month_id = housing_housingtenant.month_id  inner join housing_rentperiod on housing_rentperiod.rentperiod_id = housing_housingtenant.rentperiod_id
						
						";
						$_SESSION["housing_landlordadvance_SearchSQL"]="
						
						select housing_landlordadvance.landlordadvance_id , housing_housinglandlord.housinglandlord_id , housing_housinglandlord.housinglandlord_name , housing_landlordadvance.vourcher_number , housing_landlordadvance.amount , housing_landlordadvance.date_advanced , housing_landlordadvance.created_by , housing_landlordadvance.date_created , housing_landlordadvance.changed_by , housing_landlordadvance.date_changed , housing_landlordadvance.voided , housing_landlordadvance.voided_by , housing_landlordadvance.date_voided , housing_landlordadvance.uuid , housing_landlordadvance.sys_track  from housing_landlordadvance  inner join housing_housinglandlord on housing_housinglandlord.housinglandlord_id = housing_landlordadvance.housinglandlord_id
						
						";
						$_SESSION["housing_property_SearchSQL"]="
						
						select housing_property.property_id , housing_property.property_name , housing_property.Description , housing_property.Location , housing_property.Initial_Value , housing_property.created_by , housing_property.date_created , housing_property.changed_by , housing_property.date_changed , housing_property.voided , housing_property.voided_by , housing_property.date_voided , housing_property.uuid , housing_property.sys_track  from housing_property
						
						";
						$_SESSION["housing_propertyexpenses_SearchSQL"]="
						
						select housing_propertyexpenses.propertyexpenses_id , housing_housingtenant.housingtenant_id , housing_housingtenant.housingtenant_name , housing_propertyexpenses.expense_description , housing_propertyexpenses.amount , housing_propertyexpenses.expense_date , housing_propertyexpenses.created_by , housing_propertyexpenses.date_created , housing_propertyexpenses.changed_by , housing_propertyexpenses.date_changed , housing_propertyexpenses.voided , housing_propertyexpenses.voided_by , housing_propertyexpenses.date_voided , housing_propertyexpenses.uuid , housing_propertyexpenses.sys_track  from housing_propertyexpenses  inner join housing_housingtenant on housing_housingtenant.housingtenant_id = housing_propertyexpenses.housingtenant_id
						
						";
						$_SESSION["housing_propertyperson_SearchSQL"]="
						
						select housing_propertyperson.propertyperson_id , housing_propertyunitcategorytype.propertyunitcategorytype_id , housing_propertyunitcategorytype.propertyunitcategorytype_name , admin_person.person_id , admin_person.person_name , housing_propertyperson.created_by , housing_propertyperson.date_created , housing_propertyperson.changed_by , housing_propertyperson.date_changed , housing_propertyperson.voided , housing_propertyperson.voided_by , housing_propertyperson.date_voided , housing_propertyperson.uuid , housing_propertyperson.sys_track  from housing_propertyperson  inner join housing_propertyunitcategorytype on housing_propertyunitcategorytype.propertyunitcategorytype_id = housing_propertyperson.propertyunitcategorytype_id  inner join admin_person on admin_person.person_id = housing_propertyperson.person_id
						
						";
						$_SESSION["housing_propertyunit_SearchSQL"]="
						
						select housing_propertyunit.propertyunit_id , housing_propertyunit.propertyunit_name , housing_propertyunit.description , housing_propertyunit.created_by , housing_propertyunit.date_created , housing_propertyunit.changed_by , housing_propertyunit.date_changed , housing_propertyunit.voided , housing_propertyunit.voided_by , housing_propertyunit.uuid , housing_propertyunit.date_voided , housing_propertyunit.sys_track  from housing_propertyunit
						
						";
						$_SESSION["housing_propertyunitcategorytype_SearchSQL"]="
						
						select housing_propertyunitcategorytype.propertyunitcategorytype_id , housing_property.property_id , housing_property.property_name , housing_propertyunitcategorytype.propertyunitcategorytype_name , .timeperiodtype_id , .timeperiodtype_name , housing_propertyunitcategorytype.interval , housing_propertyunitcategorytype.rent , housing_propertyunitcategorytype.deposit , housing_propertyunitcategorytype.brooms , housing_propertyunitcategorytype.water , housing_propertyunitcategorytype.electricity , housing_propertyunitcategorytype.toilet , housing_propertyunitcategorytype.bathroom , housing_propertyunitcategorytype.kitchen , housing_propertyunitcategorytype.security , housing_propertyunitcategorytype.description , housing_propertyunitcategorytype.vacant , housing_propertyunitcategorytype.created_by , housing_propertyunitcategorytype.date_created , housing_propertyunitcategorytype.changed_by , housing_propertyunitcategorytype.date_changed , housing_propertyunitcategorytype.voided , housing_propertyunitcategorytype.voided_by , housing_propertyunitcategorytype.uuid , housing_propertyunitcategorytype.date_voided , housing_propertyunitcategorytype.sys_track  from housing_propertyunitcategorytype  inner join housing_property on housing_property.property_id = housing_propertyunitcategorytype.property_id  inner join  on .timeperiodtype_id = housing_propertyunitcategorytype.timeperiodtype_id
						
						";
						$_SESSION["housing_propertyunitcategorytypehist_SearchSQL"]="
						
						select housing_propertyunitcategorytypehist.propertyunitcategorytypehist_id , housing_property.property_id , housing_property.property_name , housing_propertyunitcategorytype.propertyunitcategorytype_id , housing_propertyunitcategorytype.propertyunitcategorytype_name , .timeperiodtype_id , .timeperiodtype_name , housing_propertyunitcategorytypehist.interval , housing_propertyunitcategorytypehist.rent , housing_propertyunitcategorytypehist.deposit , housing_propertyunitcategorytypehist.brooms , housing_propertyunitcategorytypehist.water , housing_propertyunitcategorytypehist.electricity , housing_propertyunitcategorytypehist.toilet , housing_propertyunitcategorytypehist.bathroom , housing_propertyunitcategorytypehist.kitchen , housing_propertyunitcategorytypehist.security , housing_propertyunitcategorytypehist.description , housing_propertyunitcategorytypehist.vacant , housing_propertyunitcategorytypehist.created_by , housing_propertyunitcategorytypehist.date_created , housing_propertyunitcategorytypehist.changed_by , housing_propertyunitcategorytypehist.date_changed , housing_propertyunitcategorytypehist.voided , housing_propertyunitcategorytypehist.voided_by , housing_propertyunitcategorytypehist.uuid , housing_propertyunitcategorytypehist.date_voided , housing_propertyunitcategorytypehist.sys_track  from housing_propertyunitcategorytypehist  inner join housing_property on housing_property.property_id = housing_propertyunitcategorytypehist.property_id  inner join housing_propertyunitcategorytype on housing_propertyunitcategorytype.propertyunitcategorytype_id = housing_propertyunitcategorytypehist.propertyunitcategorytype_id  inner join  on .timeperiodtype_id = housing_propertyunitcategorytypehist.timeperiodtype_id
						
						";
						$_SESSION["housing_rentperiod_SearchSQL"]="
						
						select housing_rentperiod.rentperiod_id , housing_rentperiod.rentperiod_name , housing_rentperiod.description , housing_rentperiod.created_by , housing_rentperiod.date_created , housing_rentperiod.changed_by , housing_rentperiod.date_changed , housing_rentperiod.voided , housing_rentperiod.voided_by , housing_rentperiod.date_voided , housing_rentperiod.uuid , housing_rentperiod.sys_track  from housing_rentperiod
						
						";
						$_SESSION["housing_tenancytermnotice_SearchSQL"]="
						
						select housing_tenancytermnotice.tenancytermnotice_id , housing_housinglandlord.housinglandlord_id , housing_housinglandlord.housinglandlord_name , housing_housingtenant.housingtenant_id , housing_housingtenant.housingtenant_name , housing_tenancytermnotice.termination_reason , housing_tenancytermnotice.termination_date , housing_tenancytermnotice.termination_notice_date , housing_tenancytermnotice.created_by , housing_tenancytermnotice.date_created , housing_tenancytermnotice.changed_by , housing_tenancytermnotice.date_changed , housing_tenancytermnotice.voided , housing_tenancytermnotice.voided_by , housing_tenancytermnotice.date_voided , housing_tenancytermnotice.uuid , housing_tenancytermnotice.sys_track  from housing_tenancytermnotice  inner join housing_housinglandlord on housing_housinglandlord.housinglandlord_id = housing_tenancytermnotice.housinglandlord_id  inner join housing_housingtenant on housing_housingtenant.housingtenant_id = housing_tenancytermnotice.housingtenant_id
						
						";
						$_SESSION["insurance_approvedbnote_SearchSQL"]="
						
						select insurance_approvedbnote.approveDBNote_id , insurance_insurancedebitnote.insurancedebitnote_id , insurance_insurancedebitnote.insurancedebitnote_name , insurance_approvedbnote.action_date , insurance_approvedbnote.comment , insurance_approvedbnote.is_approved , insurance_approvedbnote.created_by , insurance_approvedbnote.date_created , insurance_approvedbnote.changed_by , insurance_approvedbnote.date_changed , insurance_approvedbnote.voided , insurance_approvedbnote.voided_by , insurance_approvedbnote.date_voided , insurance_approvedbnote.uuid , insurance_approvedbnote.sys_track  from insurance_approvedbnote  inner join insurance_insurancedebitnote on insurance_insurancedebitnote.insurancedebitnote_id = insurance_approvedbnote.insurancedebitnote_id
						
						";
						$_SESSION["insurance_claimstatus_SearchSQL"]="
						
						select insurance_claimstatus.claimstatus_id , insurance_claimstatus.claimstatus_name , insurance_claimstatus.description , insurance_claimstatus.created_by , insurance_claimstatus.date_created , insurance_claimstatus.changed_by , insurance_claimstatus.date_changed , insurance_claimstatus.voided , insurance_claimstatus.voided_by , insurance_claimstatus.date_voided , insurance_claimstatus.uuid , insurance_claimstatus.sys_track  from insurance_claimstatus
						
						";
						$_SESSION["insurance_dbnotetransact_SearchSQL"]="
						
						select insurance_dbnotetransact.dbnotetransact_id , insurance_insurancedebitnote.insurancedebitnote_id , insurance_insurancedebitnote.insurancedebitnote_name , insurance_dbnotetransact.dbnotetransact_name , insurance_dbnotetransact.receipt_number , insurance_dbnotetransact.receipt_amount , insurance_dbnotetransact.receipt_date , insurance_dbnotetransact.created_by , insurance_dbnotetransact.date_created , insurance_dbnotetransact.changed_by , insurance_dbnotetransact.date_changed , insurance_dbnotetransact.voided , insurance_dbnotetransact.voided_by , insurance_dbnotetransact.date_voided , insurance_dbnotetransact.uuid , insurance_dbnotetransact.sys_track  from insurance_dbnotetransact  inner join insurance_insurancedebitnote on insurance_insurancedebitnote.insurancedebitnote_id = insurance_dbnotetransact.insurancedebitnote_id
						
						";
						$_SESSION["insurance_dnpolicyfinance_SearchSQL"]="
						
						select insurance_dnpolicyfinance.dnpolicyfinance_id , insurance_policyfinance.policyfinance_id , insurance_policyfinance.policyfinance_name , insurance_insurancedebitnote.insurancedebitnote_id , insurance_insurancedebitnote.insurancedebitnote_name , insurance_dnpolicyfinance.bank , insurance_dnpolicyfinance.check_number , insurance_dnpolicyfinance.amount , insurance_dnpolicyfinance.check_date , insurance_dnpolicyfinance.created_by , insurance_dnpolicyfinance.date_created , insurance_dnpolicyfinance.changed_by , insurance_dnpolicyfinance.date_changed , insurance_dnpolicyfinance.voided , insurance_dnpolicyfinance.voided_by , insurance_dnpolicyfinance.date_voided , insurance_dnpolicyfinance.uuid , insurance_dnpolicyfinance.sys_track  from insurance_dnpolicyfinance  inner join insurance_policyfinance on insurance_policyfinance.policyfinance_id = insurance_dnpolicyfinance.policyfinance_id  inner join insurance_insurancedebitnote on insurance_insurancedebitnote.insurancedebitnote_id = insurance_dnpolicyfinance.insurancedebitnote_id
						
						";
						$_SESSION["insurance_insuranceclass_SearchSQL"]="
						
						select insurance_insuranceclass.insuranceclass_id , insurance_insuranceclass.insuranceclass_name , insurance_insuranceclass.description , insurance_insuranceclass.created_by , insurance_insuranceclass.date_created , insurance_insuranceclass.changed_by , insurance_insuranceclass.date_changed , insurance_insuranceclass.voided , insurance_insuranceclass.voided_by , insurance_insuranceclass.date_voided , insurance_insuranceclass.uuid , insurance_insuranceclass.sys_track  from insurance_insuranceclass
						
						";
						$_SESSION["insurance_insurancedebitnote_SearchSQL"]="
						
						select insurance_insurancedebitnote.insurancedebitnote_id , insurance_insurancedebitnote.insurancedebitnote_name , insurance_insurancedebitnote.policy_number , insurance_underwriter.underwriter_id , insurance_underwriter.underwriter_name , admin_person.person_id , admin_person.person_name , insurance_insurancedebitnote.other_details , payment_currency.currency_id , payment_currency.currency_name , insurance_insurancedebitnote.pcf , insurance_insurancedebitnote.training_levy , insurance_insurancedebitnote.stamp_duty , insurance_insurancedebitnote.wtax , insurance_insurancedebitnote.created_by , insurance_insurancedebitnote.date_created , insurance_insurancedebitnote.changed_by , insurance_insurancedebitnote.date_changed , insurance_insurancedebitnote.voided , insurance_insurancedebitnote.voided_by , insurance_insurancedebitnote.date_voided , insurance_insurancedebitnote.uuid , insurance_insurancedebitnote.sys_track  from insurance_insurancedebitnote  inner join insurance_underwriter on insurance_underwriter.underwriter_id = insurance_insurancedebitnote.underwriter_id  inner join admin_person on admin_person.person_id = insurance_insurancedebitnote.person_id  inner join payment_currency on payment_currency.currency_id = insurance_insurancedebitnote.currency_id
						
						";
						$_SESSION["insurance_insurancedebitnoteitems_SearchSQL"]="
						
						select insurance_insurancedebitnoteitems.insurancedebitnoteitems_id , insurance_insuranceclass.insuranceclass_id , insurance_insuranceclass.insuranceclass_name , insurance_insurancedebitnote.insurancedebitnote_id , insurance_insurancedebitnote.insurancedebitnote_name , insurance_policyscope.policyscope_id , insurance_policyscope.policyscope_name , insurance_insurancedebitnoteitems.period_from , insurance_insurancedebitnoteitems.period_to , insurance_insurancedebitnoteitems.description , insurance_insurancedebitnoteitems.basic_premium , insurance_insurancedebitnoteitems.commission , insurance_insurancedebitnoteitems.amount_insured , insurance_insurancedebitnoteitems.created_by , insurance_insurancedebitnoteitems.date_created , insurance_insurancedebitnoteitems.changed_by , insurance_insurancedebitnoteitems.date_changed , insurance_insurancedebitnoteitems.voided , insurance_insurancedebitnoteitems.voided_by , insurance_insurancedebitnoteitems.date_voided , insurance_insurancedebitnoteitems.uuid , insurance_insurancedebitnoteitems.sys_track  from insurance_insurancedebitnoteitems  inner join insurance_insuranceclass on insurance_insuranceclass.insuranceclass_id = insurance_insurancedebitnoteitems.insuranceclass_id  inner join insurance_insurancedebitnote on insurance_insurancedebitnote.insurancedebitnote_id = insurance_insurancedebitnoteitems.insurancedebitnote_id  inner join insurance_policyscope on insurance_policyscope.policyscope_id = insurance_insurancedebitnoteitems.policyscope_id
						
						";
						$_SESSION["insurance_lossstatus_SearchSQL"]="
						
						select insurance_lossstatus.lossstatus_id , insurance_lossstatus.lossstatus_name , insurance_lossstatus.description , insurance_lossstatus.created_by , insurance_lossstatus.date_created , insurance_lossstatus.changed_by , insurance_lossstatus.date_changed , insurance_lossstatus.voided , insurance_lossstatus.voided_by , insurance_lossstatus.date_voided , insurance_lossstatus.uuid , insurance_lossstatus.sys_track  from insurance_lossstatus
						
						";
						$_SESSION["insurance_motorisk_SearchSQL"]="
						
						select insurance_motorisk.motorisk_id , insurance_insurancedebitnote.insurancedebitnote_id , insurance_insurancedebitnote.insurancedebitnote_name , insurance_motorisk.registration_number , insurance_motorisk.year_manufactured , insurance_motorisk.chasis_number , insurance_motorisk.engine_number , insurance_motorisk.carrying_capacity , insurance_motorisk.tons , insurance_motorisk.make , insurance_motorisk.description , insurance_motorisk.created_by , insurance_motorisk.date_created , insurance_motorisk.changed_by , insurance_motorisk.date_changed , insurance_motorisk.voided , insurance_motorisk.voided_by , insurance_motorisk.date_voided , insurance_motorisk.uuid , insurance_motorisk.sys_track  from insurance_motorisk  inner join insurance_insurancedebitnote on insurance_insurancedebitnote.insurancedebitnote_id = insurance_motorisk.insurancedebitnote_id
						
						";
						$_SESSION["insurance_policy_SearchSQL"]="
						
						select insurance_policy.policy_id , insurance_underwriter.underwriter_id , insurance_underwriter.underwriter_name , insurance_policy.syowner , insurance_policy.syownerid , insurance_policy.Business , insurance_policy.policy_name , insurance_policy.BasicPremium , insurance_policy.TrainingLevy , insurance_policy.PCF , insurance_policy.CommissionRate , insurance_policy.s_duty , insurance_policy.status , insurance_policy.w_tax , insurance_policy.GeographicalArea , insurance_policy.Scope , insurance_policy.document_no , insurance_policy.cover_from , insurance_policy.cover_to , insurance_policy.created_by , insurance_policy.date_created , insurance_policy.changed_by , insurance_policy.date_changed , insurance_policy.voided , insurance_policy.voided_by , insurance_policy.date_voided , insurance_policy.uuid , insurance_policy.sys_track  from insurance_policy  inner join insurance_underwriter on insurance_underwriter.underwriter_id = insurance_policy.underwriter_id
						
						";
						$_SESSION["insurance_policyclaims_SearchSQL"]="
						
						select insurance_policyclaims.policyclaims_id , insurance_policyclaims.policyclaims_name , insurance_policy.policy_id , insurance_policy.policy_name , insurance_lossstatus.lossstatus_id , insurance_lossstatus.lossstatus_name , insurance_policyclaims.NatureOfLoss , insurance_policyclaims.DateOfLoss , insurance_policyclaims.created_by , insurance_policyclaims.date_created , insurance_policyclaims.changed_by , insurance_policyclaims.date_changed , insurance_policyclaims.voided , insurance_policyclaims.voided_by , insurance_policyclaims.date_voided , insurance_policyclaims.uuid , insurance_policyclaims.sys_track  from insurance_policyclaims  inner join insurance_policy on insurance_policy.policy_id = insurance_policyclaims.policy_id  inner join insurance_lossstatus on insurance_lossstatus.lossstatus_id = insurance_policyclaims.lossstatus_id
						
						";
						$_SESSION["insurance_policyclaimstatus_SearchSQL"]="
						
						select insurance_policyclaimstatus.policyclaimstatus_id , insurance_policyclaims.policyclaims_id , insurance_policyclaims.policyclaims_name , insurance_claimstatus.claimstatus_id , insurance_claimstatus.claimstatus_name , insurance_policyclaimstatus.created_by , insurance_policyclaimstatus.date_created , insurance_policyclaimstatus.changed_by , insurance_policyclaimstatus.date_changed , insurance_policyclaimstatus.voided , insurance_policyclaimstatus.voided_by , insurance_policyclaimstatus.date_voided , insurance_policyclaimstatus.uuid , insurance_policyclaimstatus.sys_track  from insurance_policyclaimstatus  inner join insurance_policyclaims on insurance_policyclaims.policyclaims_id = insurance_policyclaimstatus.policyclaims_id  inner join insurance_claimstatus on insurance_claimstatus.claimstatus_id = insurance_policyclaimstatus.claimstatus_id
						
						";
						$_SESSION["insurance_policycompensation_SearchSQL"]="
						
						select insurance_policycompensation.compensation_id , insurance_policyclaims.policyclaims_id , insurance_policyclaims.policyclaims_name , insurance_policycompensation.Amount , insurance_policycompensation.status , insurance_policycompensation.created_by , insurance_policycompensation.date_created , insurance_policycompensation.changed_by , insurance_policycompensation.date_changed , insurance_policycompensation.voided , insurance_policycompensation.voided_by , insurance_policycompensation.date_voided , insurance_policycompensation.uuid , insurance_policycompensation.sys_track  from insurance_policycompensation  inner join insurance_policyclaims on insurance_policyclaims.policyclaims_id = insurance_policycompensation.policyclaims_id
						
						";
						$_SESSION["insurance_policydoc_SearchSQL"]="
						
						select insurance_policydoc.policydoc_id , insurance_policy.policy_id , insurance_policy.policy_name , insurance_policydoc.policydoc_name , insurance_policydoc.doc_type , insurance_policydoc.created_by , insurance_policydoc.date_created , insurance_policydoc.changed_by , insurance_policydoc.date_changed , insurance_policydoc.voided , insurance_policydoc.voided_by , insurance_policydoc.date_voided , insurance_policydoc.uuid , insurance_policydoc.sys_track  from insurance_policydoc  inner join insurance_policy on insurance_policy.policy_id = insurance_policydoc.policy_id
						
						";
						$_SESSION["insurance_policyfinance_SearchSQL"]="
						
						select insurance_policyfinance.policyfinance_id , insurance_policyfinance.policyfinance_name , insurance_policyfinance.description , insurance_policyfinance.created_by , insurance_policyfinance.date_created , insurance_policyfinance.changed_by , insurance_policyfinance.date_changed , insurance_policyfinance.voided , insurance_policyfinance.voided_by , insurance_policyfinance.date_voided , insurance_policyfinance.uuid , insurance_policyfinance.sys_track  from insurance_policyfinance
						
						";
						$_SESSION["insurance_policygroup_SearchSQL"]="
						
						select insurance_policygroup.policygroup_id , insurance_policygroup.policygroup_name , insurance_policygroup.description , insurance_policygroup.created_by , insurance_policygroup.date_created , insurance_policygroup.changed_by , insurance_policygroup.date_changed , insurance_policygroup.voided , insurance_policygroup.voided_by , insurance_policygroup.date_voided , insurance_policygroup.uuid , insurance_policygroup.sys_track  from insurance_policygroup
						
						";
						$_SESSION["insurance_policygroupperson_SearchSQL"]="
						
						select insurance_policygroupperson.policygroupperson_id , insurance_policygroup.policygroup_id , insurance_policygroup.policygroup_name , admin_person.person_id , admin_person.person_name , insurance_policygroupperson.description , insurance_policygroupperson.created_by , insurance_policygroupperson.date_created , insurance_policygroupperson.changed_by , insurance_policygroupperson.date_changed , insurance_policygroupperson.voided , insurance_policygroupperson.voided_by , insurance_policygroupperson.date_voided , insurance_policygroupperson.uuid , insurance_policygroupperson.sys_track  from insurance_policygroupperson  inner join insurance_policygroup on insurance_policygroup.policygroup_id = insurance_policygroupperson.policygroup_id  inner join admin_person on admin_person.person_id = insurance_policygroupperson.person_id
						
						";
						$_SESSION["insurance_policypaymentmode_SearchSQL"]="
						
						select insurance_policypaymentmode.policypaymentmode_id , insurance_policypaymentmode.policypaymentmode_name , insurance_policypaymentmode.description , insurance_policypaymentmode.created_by , insurance_policypaymentmode.date_created , insurance_policypaymentmode.changed_by , insurance_policypaymentmode.date_changed , insurance_policypaymentmode.voided , insurance_policypaymentmode.voided_by , insurance_policypaymentmode.date_voided , insurance_policypaymentmode.uuid , insurance_policypaymentmode.sys_track  from insurance_policypaymentmode
						
						";
						$_SESSION["insurance_policyrenewal_SearchSQL"]="
						
						select insurance_policyrenewal.policyrenewal_id , insurance_policy.policy_id , insurance_policy.policy_name , insurance_policyrenewal.Business , insurance_policyrenewal.policy_name , insurance_policyrenewal.BasicPremium , insurance_policyrenewal.TrainingLevy , insurance_policyrenewal.PCF , insurance_policyrenewal.CommissionRate , insurance_policyrenewal.s_duty , insurance_policyrenewal.status , insurance_policyrenewal.w_tax , insurance_policyrenewal.GeographicalArea , insurance_policyrenewal.Scope , insurance_policyrenewal.document_no , insurance_policyrenewal.cover_from , insurance_policyrenewal.cover_to , insurance_policyrenewal.created_by , insurance_policyrenewal.date_created , insurance_policyrenewal.changed_by , insurance_policyrenewal.date_changed , insurance_policyrenewal.voided , insurance_policyrenewal.voided_by , insurance_policyrenewal.date_voided , insurance_policyrenewal.uuid , insurance_policyrenewal.sys_track  from insurance_policyrenewal  inner join insurance_policy on insurance_policy.policy_id = insurance_policyrenewal.policy_id
						
						";
						$_SESSION["insurance_policyrisk_SearchSQL"]="
						
						select insurance_policyrisk.policyrisk_id , .risk_id , .risk_name , insurance_policy.policy_id , insurance_policy.policy_name , insurance_policyrisk.Insured_Value , insurance_policyrisk.comment , insurance_policyrisk.attachment , insurance_policyrisk.created_by , insurance_policyrisk.date_created , insurance_policyrisk.changed_by , insurance_policyrisk.date_changed , insurance_policyrisk.voided , insurance_policyrisk.voided_by , insurance_policyrisk.date_voided , insurance_policyrisk.uuid , insurance_policyrisk.sys_track  from insurance_policyrisk  inner join  on .risk_id = insurance_policyrisk.risk_id  inner join insurance_policy on insurance_policy.policy_id = insurance_policyrisk.policy_id
						
						";
						$_SESSION["insurance_policyscope_SearchSQL"]="
						
						select insurance_policyscope.policyscope_id , insurance_policyscope.policyscope_name , insurance_policyscope.description , insurance_policyscope.created_by , insurance_policyscope.date_created , insurance_policyscope.changed_by , insurance_policyscope.date_changed , insurance_policyscope.voided , insurance_policyscope.voided_by , insurance_policyscope.date_voided , insurance_policyscope.uuid , insurance_policyscope.sys_track  from insurance_policyscope
						
						";
						$_SESSION["insurance_policytype_SearchSQL"]="
						
						select insurance_policytype.policytype_id , insurance_policytype.policytype_name , insurance_policytype.description , insurance_policytype.created_by , insurance_policytype.date_created , insurance_policytype.changed_by , insurance_policytype.date_changed , insurance_policytype.voided , insurance_policytype.voided_by , insurance_policytype.date_voided , insurance_policytype.uuid , insurance_policytype.sys_track  from insurance_policytype
						
						";
						$_SESSION["insurance_underwriter_SearchSQL"]="
						
						select insurance_underwriter.underwriter_id , insurance_underwriter.underwriter_name , insurance_underwriter.created_by , insurance_underwriter.date_created , insurance_underwriter.changed_by , insurance_underwriter.date_changed , insurance_underwriter.voided , insurance_underwriter.voided_by , insurance_underwriter.date_voided , insurance_underwriter.uuid , insurance_underwriter.sys_track  from insurance_underwriter
						
						";
						$_SESSION["insurance_underwriterpolicytype_SearchSQL"]="
						
						select insurance_underwriterpolicytype.underwriterpolicytype_id , insurance_underwriter.underwriter_id , insurance_underwriter.underwriter_name , insurance_policytype.policytype_id , insurance_policytype.policytype_name , insurance_underwriterpolicytype.description , insurance_underwriterpolicytype.created_by , insurance_underwriterpolicytype.date_created , insurance_underwriterpolicytype.changed_by , insurance_underwriterpolicytype.date_changed , insurance_underwriterpolicytype.voided , insurance_underwriterpolicytype.voided_by , insurance_underwriterpolicytype.date_voided , insurance_underwriterpolicytype.uuid , insurance_underwriterpolicytype.sys_track  from insurance_underwriterpolicytype  inner join insurance_underwriter on insurance_underwriter.underwriter_id = insurance_underwriterpolicytype.underwriter_id  inner join insurance_policytype on insurance_policytype.policytype_id = insurance_underwriterpolicytype.policytype_id
						
						";
						$_SESSION["journals_receipt_SearchSQL"]="
						
						select journals_receipt.receipt_id , journals_receipt.receipt_name , .account_id , .account_name , journals_receipt.description , journals_receipt.amount , journals_receipt.created_by , journals_receipt.date_created , journals_receipt.changed_by , journals_receipt.date_changed , journals_receipt.voided , journals_receipt.voided_by , journals_receipt.date_voided , journals_receipt.uuid , journals_receipt.sys_track  from journals_receipt  inner join  on .account_id = journals_receipt.account_id
						
						";
						$_SESSION["mobile_businesstrack_SearchSQL"]="
						
						select mobile_businesstrack.businesstrack_id , mobile_businesstrack.1 , mobile_businesstrack.2 , mobile_businesstrack.3 , mobile_businesstrack.4 , mobile_businesstrack.5 , mobile_businesstrack.6 , mobile_businesstrack.7 , mobile_businesstrack.8 , mobile_businesstrack.9 , mobile_businesstrack.10 , mobile_businesstrack.11 , mobile_businesstrack.file_name , mobile_businesstrack.phone_imei , mobile_businesstrack.interview_start , mobile_businesstrack.interview_end , mobile_businesstrack.date_collected , mobile_businesstrack.created_by , mobile_businesstrack.date_created , mobile_businesstrack.changed_by , mobile_businesstrack.date_changed , mobile_businesstrack.voided , mobile_businesstrack.voided_by , mobile_businesstrack.date_voided , mobile_businesstrack.uuid , mobile_businesstrack.sys_track  from mobile_businesstrack
						
						";
						$_SESSION["mobile_chtishousehold_SearchSQL"]="
						
						select mobile_chtishousehold.chtishousehold_id , mobile_chtishousehold.GPS , mobile_chtishousehold.s01 , mobile_chtishousehold.s03 , mobile_chtishousehold.H , mobile_chtishousehold.s6 , mobile_chtishousehold.s7 , mobile_chtishousehold.s12 , mobile_chtishousehold.s16 , mobile_chtishousehold.102A , mobile_chtishousehold.102B , mobile_chtishousehold.103 , mobile_chtishousehold.103B , mobile_chtishousehold.104 , mobile_chtishousehold.105 , mobile_chtishousehold.106A , mobile_chtishousehold.106B , mobile_chtishousehold.107 , mobile_chtishousehold.108C , mobile_chtishousehold.102AB , mobile_chtishousehold.108D , mobile_chtishousehold.110 , mobile_chtishousehold.111A , mobile_chtishousehold.111B , mobile_chtishousehold.112 , mobile_chtishousehold.113A , mobile_chtishousehold.113B , mobile_chtishousehold.114 , mobile_chtishousehold.115a , mobile_chtishousehold.115b , mobile_chtishousehold.116 , mobile_chtishousehold.202A , mobile_chtishousehold.202B , mobile_chtishousehold.203A , mobile_chtishousehold.203B , mobile_chtishousehold.203C , mobile_chtishousehold.203D , mobile_chtishousehold.204A , mobile_chtishousehold.204B , mobile_chtishousehold.205A , mobile_chtishousehold.205B , mobile_chtishousehold.206 , mobile_chtishousehold.207 , mobile_chtishousehold.207B , mobile_chtishousehold.208 , mobile_chtishousehold.208B , mobile_chtishousehold.209 , mobile_chtishousehold.210 , mobile_chtishousehold.211 , mobile_chtishousehold.211B , mobile_chtishousehold.222A , mobile_chtishousehold.222A1 , mobile_chtishousehold.222B , mobile_chtishousehold.222CA , mobile_chtishousehold.222CB , mobile_chtishousehold.222CC , mobile_chtishousehold.222CD , mobile_chtishousehold.222CE , mobile_chtishousehold.222CF , mobile_chtishousehold.222CG , mobile_chtishousehold.223 , mobile_chtishousehold.224 , mobile_chtishousehold.225 , mobile_chtishousehold.226 , mobile_chtishousehold.226B , mobile_chtishousehold.227 , mobile_chtishousehold.227B , mobile_chtishousehold.228 , mobile_chtishousehold.229 , mobile_chtishousehold.230 , mobile_chtishousehold.232 , mobile_chtishousehold.232B , mobile_chtishousehold.233 , mobile_chtishousehold.234 , mobile_chtishousehold.235 , mobile_chtishousehold.235B , mobile_chtishousehold.236A , mobile_chtishousehold.236B , mobile_chtishousehold.236C , mobile_chtishousehold.236CA , mobile_chtishousehold.236CB , mobile_chtishousehold.236CC , mobile_chtishousehold.236CD , mobile_chtishousehold.236CE , mobile_chtishousehold.236CF , mobile_chtishousehold.236CG , mobile_chtishousehold.301 , mobile_chtishousehold.302 , mobile_chtishousehold.303 , mobile_chtishousehold.304 , mobile_chtishousehold.305 , mobile_chtishousehold.s21 , mobile_chtishousehold.307 , mobile_chtishousehold.308 , mobile_chtishousehold.309 , mobile_chtishousehold.310 , mobile_chtishousehold.311 , mobile_chtishousehold.312 , mobile_chtishousehold.313 , mobile_chtishousehold.313B , mobile_chtishousehold.316b , mobile_chtishousehold.401.A , mobile_chtishousehold.401.B , mobile_chtishousehold.401.C , mobile_chtishousehold.401.D , mobile_chtishousehold.401.E , mobile_chtishousehold.401.EB , mobile_chtishousehold.402 , mobile_chtishousehold.402B , mobile_chtishousehold.403 , mobile_chtishousehold.403B , mobile_chtishousehold.404 , mobile_chtishousehold.405 , mobile_chtishousehold.405B , mobile_chtishousehold.406 , mobile_chtishousehold.406B , mobile_chtishousehold.407 , mobile_chtishousehold.407B , mobile_chtishousehold.408 , mobile_chtishousehold.408B , mobile_chtishousehold.409 , mobile_chtishousehold.409B , mobile_chtishousehold.s11 , mobile_chtishousehold.file_name , mobile_chtishousehold.phone_imei , mobile_chtishousehold.interview_start , mobile_chtishousehold.interview_end , mobile_chtishousehold.date_collected , mobile_chtishousehold.created_by , mobile_chtishousehold.date_created , mobile_chtishousehold.changed_by , mobile_chtishousehold.date_changed , mobile_chtishousehold.voided , mobile_chtishousehold.voided_by , mobile_chtishousehold.date_voided , mobile_chtishousehold.uuid , mobile_chtishousehold.sys_track  from mobile_chtishousehold
						
						";
						$_SESSION["mobile_chtishouseholdrepeat_SearchSQL"]="
						
						select mobile_chtishouseholdrepeat.chtishouseholdrepeat_id , mobile_chtishousehold.chtishousehold_id , mobile_chtishousehold.chtishousehold_name , mobile_chtishouseholdrepeat.GPS , mobile_chtishouseholdrepeat.s01 , mobile_chtishouseholdrepeat.s03 , mobile_chtishouseholdrepeat.H , mobile_chtishouseholdrepeat.s6 , mobile_chtishouseholdrepeat.s7 , mobile_chtishouseholdrepeat.s12 , mobile_chtishouseholdrepeat.s16 , mobile_chtishouseholdrepeat.102A , mobile_chtishouseholdrepeat.102B , mobile_chtishouseholdrepeat.103 , mobile_chtishouseholdrepeat.103B , mobile_chtishouseholdrepeat.104 , mobile_chtishouseholdrepeat.105 , mobile_chtishouseholdrepeat.106A , mobile_chtishouseholdrepeat.106B , mobile_chtishouseholdrepeat.107 , mobile_chtishouseholdrepeat.108C , mobile_chtishouseholdrepeat.102AB , mobile_chtishouseholdrepeat.108D , mobile_chtishouseholdrepeat.110 , mobile_chtishouseholdrepeat.111A , mobile_chtishouseholdrepeat.111B , mobile_chtishouseholdrepeat.112 , mobile_chtishouseholdrepeat.113A , mobile_chtishouseholdrepeat.113B , mobile_chtishouseholdrepeat.114 , mobile_chtishouseholdrepeat.115a , mobile_chtishouseholdrepeat.115b , mobile_chtishouseholdrepeat.116 , mobile_chtishouseholdrepeat.202A , mobile_chtishouseholdrepeat.202B , mobile_chtishouseholdrepeat.203A , mobile_chtishouseholdrepeat.203B , mobile_chtishouseholdrepeat.203C , mobile_chtishouseholdrepeat.203D , mobile_chtishouseholdrepeat.204A , mobile_chtishouseholdrepeat.204B , mobile_chtishouseholdrepeat.205A , mobile_chtishouseholdrepeat.205B , mobile_chtishouseholdrepeat.206 , mobile_chtishouseholdrepeat.207 , mobile_chtishouseholdrepeat.207B , mobile_chtishouseholdrepeat.208 , mobile_chtishouseholdrepeat.208B , mobile_chtishouseholdrepeat.209 , mobile_chtishouseholdrepeat.210 , mobile_chtishouseholdrepeat.211 , mobile_chtishouseholdrepeat.211B , mobile_chtishouseholdrepeat.222A , mobile_chtishouseholdrepeat.222A1 , mobile_chtishouseholdrepeat.222B , mobile_chtishouseholdrepeat.222CA , mobile_chtishouseholdrepeat.222CB , mobile_chtishouseholdrepeat.222CC , mobile_chtishouseholdrepeat.222CD , mobile_chtishouseholdrepeat.222CE , mobile_chtishouseholdrepeat.222CF , mobile_chtishouseholdrepeat.222CG , mobile_chtishouseholdrepeat.223 , mobile_chtishouseholdrepeat.224 , mobile_chtishouseholdrepeat.225 , mobile_chtishouseholdrepeat.226 , mobile_chtishouseholdrepeat.226B , mobile_chtishouseholdrepeat.227 , mobile_chtishouseholdrepeat.227B , mobile_chtishouseholdrepeat.228 , mobile_chtishouseholdrepeat.229 , mobile_chtishouseholdrepeat.230 , mobile_chtishouseholdrepeat.232 , mobile_chtishouseholdrepeat.232B , mobile_chtishouseholdrepeat.233 , mobile_chtishouseholdrepeat.234 , mobile_chtishouseholdrepeat.235 , mobile_chtishouseholdrepeat.235B , mobile_chtishouseholdrepeat.236A , mobile_chtishouseholdrepeat.236B , mobile_chtishouseholdrepeat.236C , mobile_chtishouseholdrepeat.236CA , mobile_chtishouseholdrepeat.236CB , mobile_chtishouseholdrepeat.236CC , mobile_chtishouseholdrepeat.236CD , mobile_chtishouseholdrepeat.236CE , mobile_chtishouseholdrepeat.236CF , mobile_chtishouseholdrepeat.236CG , mobile_chtishouseholdrepeat.301 , mobile_chtishouseholdrepeat.302 , mobile_chtishouseholdrepeat.303 , mobile_chtishouseholdrepeat.304 , mobile_chtishouseholdrepeat.305 , mobile_chtishouseholdrepeat.s21 , mobile_chtishouseholdrepeat.307 , mobile_chtishouseholdrepeat.308 , mobile_chtishouseholdrepeat.309 , mobile_chtishouseholdrepeat.310 , mobile_chtishouseholdrepeat.311 , mobile_chtishouseholdrepeat.312 , mobile_chtishouseholdrepeat.313 , mobile_chtishouseholdrepeat.313B , mobile_chtishouseholdrepeat.316b , mobile_chtishouseholdrepeat.401.A , mobile_chtishouseholdrepeat.401.B , mobile_chtishouseholdrepeat.401.C , mobile_chtishouseholdrepeat.401.D , mobile_chtishouseholdrepeat.401.E , mobile_chtishouseholdrepeat.401.EB , mobile_chtishouseholdrepeat.402 , mobile_chtishouseholdrepeat.402B , mobile_chtishouseholdrepeat.403 , mobile_chtishouseholdrepeat.403B , mobile_chtishouseholdrepeat.404 , mobile_chtishouseholdrepeat.405 , mobile_chtishouseholdrepeat.405B , mobile_chtishouseholdrepeat.406 , mobile_chtishouseholdrepeat.406B , mobile_chtishouseholdrepeat.407 , mobile_chtishouseholdrepeat.407B , mobile_chtishouseholdrepeat.408 , mobile_chtishouseholdrepeat.408B , mobile_chtishouseholdrepeat.409 , mobile_chtishouseholdrepeat.409B , mobile_chtishouseholdrepeat.s11 , mobile_chtishouseholdrepeat.file_name , mobile_chtishouseholdrepeat.phone_imei , mobile_chtishouseholdrepeat.interview_start , mobile_chtishouseholdrepeat.interview_end , mobile_chtishouseholdrepeat.date_collected , mobile_chtishouseholdrepeat.created_by , mobile_chtishouseholdrepeat.date_created , mobile_chtishouseholdrepeat.changed_by , mobile_chtishouseholdrepeat.date_changed , mobile_chtishouseholdrepeat.voided , mobile_chtishouseholdrepeat.voided_by , mobile_chtishouseholdrepeat.date_voided , mobile_chtishouseholdrepeat.uuid , mobile_chtishouseholdrepeat.sys_track  from mobile_chtishouseholdrepeat  inner join mobile_chtishousehold on mobile_chtishousehold.chtishousehold_id = mobile_chtishouseholdrepeat.chtishousehold_id
						
						";
						$_SESSION["mobile_chtisindividual_SearchSQL"]="
						
						select mobile_chtisindividual.chtisindividual_id , mobile_chtisindividual.s01 , mobile_chtisindividual.s02 , mobile_chtisindividual.s04 , mobile_chtisindividual.s04B , mobile_chtisindividual.401 , mobile_chtisindividual.401A , mobile_chtisindividual.401B , mobile_chtisindividual.402 , mobile_chtisindividual.108C , mobile_chtisindividual.403 , mobile_chtisindividual.404 , mobile_chtisindividual.405 , mobile_chtisindividual.406 A , mobile_chtisindividual.406 , mobile_chtisindividual.407 , mobile_chtisindividual.408A , mobile_chtisindividual.408B , mobile_chtisindividual.409 , mobile_chtisindividual.410A , mobile_chtisindividual.410B , mobile_chtisindividual.411 , mobile_chtisindividual.412A , mobile_chtisindividual.412B , mobile_chtisindividual.413 , mobile_chtisindividual.414 , mobile_chtisindividual.s05 , mobile_chtisindividual.501 , mobile_chtisindividual.502 , mobile_chtisindividual.503 , mobile_chtisindividual.504 , mobile_chtisindividual.505 , mobile_chtisindividual.506 , mobile_chtisindividual.507 , mobile_chtisindividual.508A , mobile_chtisindividual.508B , mobile_chtisindividual.508C , mobile_chtisindividual.756 , mobile_chtisindividual.757A , mobile_chtisindividual.757B , mobile_chtisindividual.758A , mobile_chtisindividual.758B , mobile_chtisindividual.758B1 , mobile_chtisindividual.758B2 , mobile_chtisindividual.758B3 , mobile_chtisindividual.759 , mobile_chtisindividual.759B , mobile_chtisindividual.760 , mobile_chtisindividual.760B , mobile_chtisindividual.761 , mobile_chtisindividual.762 , mobile_chtisindividual.763 , mobile_chtisindividual.763B , mobile_chtisindividual.764 , mobile_chtisindividual.765 , mobile_chtisindividual.766 , mobile_chtisindividual.766B1 , mobile_chtisindividual.766B2 , mobile_chtisindividual.766B3 , mobile_chtisindividual.766B4 , mobile_chtisindividual.767 , mobile_chtisindividual.767B , mobile_chtisindividual.768 , mobile_chtisindividual.769 , mobile_chtisindividual.770 , mobile_chtisindividual.770B1 , mobile_chtisindividual.770B2 , mobile_chtisindividual.771 , mobile_chtisindividual.772 , mobile_chtisindividual.772B , mobile_chtisindividual.774 , mobile_chtisindividual.775 , mobile_chtisindividual.778B , mobile_chtisindividual.779 , mobile_chtisindividual.779B , mobile_chtisindividual.780 , mobile_chtisindividual.781 , mobile_chtisindividual.782 , mobile_chtisindividual.783 , mobile_chtisindividual.783B , mobile_chtisindividual.783BA , mobile_chtisindividual.783BB , mobile_chtisindividual.783BC , mobile_chtisindividual.783BD , mobile_chtisindividual.783BE , mobile_chtisindividual.784 , mobile_chtisindividual.i04 , mobile_chtisindividual.784A , mobile_chtisindividual.784B , mobile_chtisindividual.784C , mobile_chtisindividual.i08 , mobile_chtisindividual.784D , mobile_chtisindividual.784E , mobile_chtisindividual.784F , mobile_chtisindividual.784G , mobile_chtisindividual.i09 , mobile_chtisindividual.784H , mobile_chtisindividual.784I , mobile_chtisindividual.784J , mobile_chtisindividual.784K , mobile_chtisindividual.i10 , mobile_chtisindividual.784L , mobile_chtisindividual.i11 , mobile_chtisindividual.784M , mobile_chtisindividual.i12 , mobile_chtisindividual.784N , mobile_chtisindividual.784O , mobile_chtisindividual.784P , mobile_chtisindividual.784Q , mobile_chtisindividual.i13 , mobile_chtisindividual.784R , mobile_chtisindividual.i14 , mobile_chtisindividual.784S , mobile_chtisindividual.i15 , mobile_chtisindividual.784U , mobile_chtisindividual.784V , mobile_chtisindividual.784W , mobile_chtisindividual.784X , mobile_chtisindividual.16 , mobile_chtisindividual.i16 , mobile_chtisindividual.801 , mobile_chtisindividual.803a , mobile_chtisindividual.803b , mobile_chtisindividual.803bB , mobile_chtisindividual.804 , mobile_chtisindividual.805 , mobile_chtisindividual.805A , mobile_chtisindividual.805B , mobile_chtisindividual.805C , mobile_chtisindividual.805D , mobile_chtisindividual.805E , mobile_chtisindividual.805F , mobile_chtisindividual.805G , mobile_chtisindividual.805H , mobile_chtisindividual.805I , mobile_chtisindividual.805J , mobile_chtisindividual.805K , mobile_chtisindividual.805L , mobile_chtisindividual.805M , mobile_chtisindividual.806 , mobile_chtisindividual.807 , mobile_chtisindividual.808 , mobile_chtisindividual.809 , mobile_chtisindividual.809A , mobile_chtisindividual.809B , mobile_chtisindividual.809C , mobile_chtisindividual.809D , mobile_chtisindividual.809E , mobile_chtisindividual.809F , mobile_chtisindividual.809G , mobile_chtisindividual.810 , mobile_chtisindividual.812 , mobile_chtisindividual.812B , mobile_chtisindividual.813 , mobile_chtisindividual.814 , mobile_chtisindividual.815 , mobile_chtisindividual.816 , mobile_chtisindividual.817 , mobile_chtisindividual.818 , mobile_chtisindividual.819 , mobile_chtisindividual.820 , mobile_chtisindividual.821 , mobile_chtisindividual.821B , mobile_chtisindividual.822 , mobile_chtisindividual.822B , mobile_chtisindividual.823 , mobile_chtisindividual.825 , mobile_chtisindividual.825A , mobile_chtisindividual.825B , mobile_chtisindividual.825C , mobile_chtisindividual.826 , mobile_chtisindividual.i20 , mobile_chtisindividual.827A , mobile_chtisindividual.i21 , mobile_chtisindividual.827B , mobile_chtisindividual.827C , mobile_chtisindividual.829 , mobile_chtisindividual.824 , mobile_chtisindividual.830 , mobile_chtisindividual.831 , mobile_chtisindividual.832 , mobile_chtisindividual.833 , mobile_chtisindividual.833B , mobile_chtisindividual.835 , mobile_chtisindividual.836 , mobile_chtisindividual.836B , mobile_chtisindividual.837 , mobile_chtisindividual.837B , mobile_chtisindividual.838 , mobile_chtisindividual.839 , mobile_chtisindividual.840 , mobile_chtisindividual.i22 , mobile_chtisindividual.841A , mobile_chtisindividual.841AB , mobile_chtisindividual.i23 , mobile_chtisindividual.841B , mobile_chtisindividual.841BB , mobile_chtisindividual.843 , mobile_chtisindividual.844 , mobile_chtisindividual.845 , mobile_chtisindividual.846 , mobile_chtisindividual.846B , mobile_chtisindividual.i24 , mobile_chtisindividual.902 , mobile_chtisindividual.903 , mobile_chtisindividual.904 , mobile_chtisindividual.905 , mobile_chtisindividual.905B , mobile_chtisindividual.907 , mobile_chtisindividual.907B , mobile_chtisindividual.601 , mobile_chtisindividual.602 , mobile_chtisindividual.606 , mobile_chtisindividual.607 , mobile_chtisindividual.607B , mobile_chtisindividual.609 , mobile_chtisindividual.611 , mobile_chtisindividual.612 , mobile_chtisindividual.i098 , mobile_chtisindividual.i04A , mobile_chtisindividual.702 , mobile_chtisindividual.703 , mobile_chtisindividual.703B , mobile_chtisindividual.704 , mobile_chtisindividual.705 , mobile_chtisindividual.706 , mobile_chtisindividual.706B , mobile_chtisindividual.707 , mobile_chtisindividual.708 , mobile_chtisindividual.709 , mobile_chtisindividual.710 , mobile_chtisindividual.711 , mobile_chtisindividual.712 , mobile_chtisindividual.712B , mobile_chtisindividual.713 , mobile_chtisindividual.714 , mobile_chtisindividual.715 , mobile_chtisindividual.715B , mobile_chtisindividual.716 , mobile_chtisindividual.717 , mobile_chtisindividual.718 , mobile_chtisindividual.719 , mobile_chtisindividual.720 , mobile_chtisindividual.721 , mobile_chtisindividual.722 , mobile_chtisindividual.723 , mobile_chtisindividual.724 , mobile_chtisindividual.725 , mobile_chtisindividual.726 , mobile_chtisindividual.727 , mobile_chtisindividual.728 , mobile_chtisindividual.728B , mobile_chtisindividual.729 , mobile_chtisindividual.729B , mobile_chtisindividual.730 , mobile_chtisindividual.730B , mobile_chtisindividual.731 , mobile_chtisindividual.731B , mobile_chtisindividual.732 , mobile_chtisindividual.733 , mobile_chtisindividual.734 , mobile_chtisindividual.735 , mobile_chtisindividual.736 , mobile_chtisindividual.751 , mobile_chtisindividual.751B , mobile_chtisindividual.752 , mobile_chtisindividual.752B , mobile_chtisindividual.753 , mobile_chtisindividual.753B , mobile_chtisindividual.754 , mobile_chtisindividual.754B , mobile_chtisindividual.755 , mobile_chtisindividual.755B , mobile_chtisindividual.777 , mobile_chtisindividual.777B , mobile_chtisindividual.778 , mobile_chtisindividual.786 , mobile_chtisindividual.786B , mobile_chtisindividual.END , mobile_chtisindividual.file_name , mobile_chtisindividual.phone_imei , mobile_chtisindividual.interview_start , mobile_chtisindividual.interview_end , mobile_chtisindividual.date_collected , mobile_chtisindividual.created_by , mobile_chtisindividual.date_created , mobile_chtisindividual.changed_by , mobile_chtisindividual.date_changed , mobile_chtisindividual.voided , mobile_chtisindividual.voided_by , mobile_chtisindividual.date_voided , mobile_chtisindividual.uuid , mobile_chtisindividual.sys_track  from mobile_chtisindividual
						
						";
						$_SESSION["mobile_chtisindividualrepeat_SearchSQL"]="
						
						select mobile_chtisindividualrepeat.chtisindividualrepeat_id , mobile_chtisindividual.chtisindividual_id , mobile_chtisindividual.chtisindividual_name , mobile_chtisindividualrepeat.s01 , mobile_chtisindividualrepeat.s02 , mobile_chtisindividualrepeat.s04 , mobile_chtisindividualrepeat.s04B , mobile_chtisindividualrepeat.401 , mobile_chtisindividualrepeat.401A , mobile_chtisindividualrepeat.401B , mobile_chtisindividualrepeat.402 , mobile_chtisindividualrepeat.108C , mobile_chtisindividualrepeat.403 , mobile_chtisindividualrepeat.404 , mobile_chtisindividualrepeat.405 , mobile_chtisindividualrepeat.406 A , mobile_chtisindividualrepeat.406 , mobile_chtisindividualrepeat.407 , mobile_chtisindividualrepeat.408A , mobile_chtisindividualrepeat.408B , mobile_chtisindividualrepeat.409 , mobile_chtisindividualrepeat.410A , mobile_chtisindividualrepeat.410B , mobile_chtisindividualrepeat.411 , mobile_chtisindividualrepeat.412A , mobile_chtisindividualrepeat.412B , mobile_chtisindividualrepeat.413 , mobile_chtisindividualrepeat.414 , mobile_chtisindividualrepeat.s05 , mobile_chtisindividualrepeat.501 , mobile_chtisindividualrepeat.502 , mobile_chtisindividualrepeat.503 , mobile_chtisindividualrepeat.504 , mobile_chtisindividualrepeat.505 , mobile_chtisindividualrepeat.506 , mobile_chtisindividualrepeat.507 , mobile_chtisindividualrepeat.508A , mobile_chtisindividualrepeat.508B , mobile_chtisindividualrepeat.508C , mobile_chtisindividualrepeat.756 , mobile_chtisindividualrepeat.757A , mobile_chtisindividualrepeat.757B , mobile_chtisindividualrepeat.758A , mobile_chtisindividualrepeat.758B , mobile_chtisindividualrepeat.758B1 , mobile_chtisindividualrepeat.758B2 , mobile_chtisindividualrepeat.758B3 , mobile_chtisindividualrepeat.759 , mobile_chtisindividualrepeat.759B , mobile_chtisindividualrepeat.760 , mobile_chtisindividualrepeat.760B , mobile_chtisindividualrepeat.761 , mobile_chtisindividualrepeat.762 , mobile_chtisindividualrepeat.763 , mobile_chtisindividualrepeat.763B , mobile_chtisindividualrepeat.764 , mobile_chtisindividualrepeat.765 , mobile_chtisindividualrepeat.766 , mobile_chtisindividualrepeat.766B1 , mobile_chtisindividualrepeat.766B2 , mobile_chtisindividualrepeat.766B3 , mobile_chtisindividualrepeat.766B4 , mobile_chtisindividualrepeat.767 , mobile_chtisindividualrepeat.767B , mobile_chtisindividualrepeat.768 , mobile_chtisindividualrepeat.769 , mobile_chtisindividualrepeat.770 , mobile_chtisindividualrepeat.770B1 , mobile_chtisindividualrepeat.770B2 , mobile_chtisindividualrepeat.771 , mobile_chtisindividualrepeat.772 , mobile_chtisindividualrepeat.772B , mobile_chtisindividualrepeat.774 , mobile_chtisindividualrepeat.775 , mobile_chtisindividualrepeat.778B , mobile_chtisindividualrepeat.779 , mobile_chtisindividualrepeat.779B , mobile_chtisindividualrepeat.780 , mobile_chtisindividualrepeat.781 , mobile_chtisindividualrepeat.782 , mobile_chtisindividualrepeat.783 , mobile_chtisindividualrepeat.783B , mobile_chtisindividualrepeat.783BA , mobile_chtisindividualrepeat.783BB , mobile_chtisindividualrepeat.783BC , mobile_chtisindividualrepeat.783BD , mobile_chtisindividualrepeat.783BE , mobile_chtisindividualrepeat.784 , mobile_chtisindividualrepeat.i04 , mobile_chtisindividualrepeat.784A , mobile_chtisindividualrepeat.784B , mobile_chtisindividualrepeat.784C , mobile_chtisindividualrepeat.i08 , mobile_chtisindividualrepeat.784D , mobile_chtisindividualrepeat.784E , mobile_chtisindividualrepeat.784F , mobile_chtisindividualrepeat.784G , mobile_chtisindividualrepeat.i09 , mobile_chtisindividualrepeat.784H , mobile_chtisindividualrepeat.784I , mobile_chtisindividualrepeat.784J , mobile_chtisindividualrepeat.784K , mobile_chtisindividualrepeat.i10 , mobile_chtisindividualrepeat.784L , mobile_chtisindividualrepeat.i11 , mobile_chtisindividualrepeat.784M , mobile_chtisindividualrepeat.i12 , mobile_chtisindividualrepeat.784N , mobile_chtisindividualrepeat.784O , mobile_chtisindividualrepeat.784P , mobile_chtisindividualrepeat.784Q , mobile_chtisindividualrepeat.i13 , mobile_chtisindividualrepeat.784R , mobile_chtisindividualrepeat.i14 , mobile_chtisindividualrepeat.784S , mobile_chtisindividualrepeat.i15 , mobile_chtisindividualrepeat.784U , mobile_chtisindividualrepeat.784V , mobile_chtisindividualrepeat.784W , mobile_chtisindividualrepeat.784X , mobile_chtisindividualrepeat.16 , mobile_chtisindividualrepeat.i16 , mobile_chtisindividualrepeat.801 , mobile_chtisindividualrepeat.803a , mobile_chtisindividualrepeat.803b , mobile_chtisindividualrepeat.803bB , mobile_chtisindividualrepeat.804 , mobile_chtisindividualrepeat.805 , mobile_chtisindividualrepeat.805A , mobile_chtisindividualrepeat.805B , mobile_chtisindividualrepeat.805C , mobile_chtisindividualrepeat.805D , mobile_chtisindividualrepeat.805E , mobile_chtisindividualrepeat.805F , mobile_chtisindividualrepeat.805G , mobile_chtisindividualrepeat.805H , mobile_chtisindividualrepeat.805I , mobile_chtisindividualrepeat.805J , mobile_chtisindividualrepeat.805K , mobile_chtisindividualrepeat.805L , mobile_chtisindividualrepeat.805M , mobile_chtisindividualrepeat.806 , mobile_chtisindividualrepeat.807 , mobile_chtisindividualrepeat.808 , mobile_chtisindividualrepeat.809 , mobile_chtisindividualrepeat.809A , mobile_chtisindividualrepeat.809B , mobile_chtisindividualrepeat.809C , mobile_chtisindividualrepeat.809D , mobile_chtisindividualrepeat.809E , mobile_chtisindividualrepeat.809F , mobile_chtisindividualrepeat.809G , mobile_chtisindividualrepeat.810 , mobile_chtisindividualrepeat.812 , mobile_chtisindividualrepeat.812B , mobile_chtisindividualrepeat.813 , mobile_chtisindividualrepeat.814 , mobile_chtisindividualrepeat.815 , mobile_chtisindividualrepeat.816 , mobile_chtisindividualrepeat.817 , mobile_chtisindividualrepeat.818 , mobile_chtisindividualrepeat.819 , mobile_chtisindividualrepeat.820 , mobile_chtisindividualrepeat.821 , mobile_chtisindividualrepeat.821B , mobile_chtisindividualrepeat.822 , mobile_chtisindividualrepeat.822B , mobile_chtisindividualrepeat.823 , mobile_chtisindividualrepeat.825 , mobile_chtisindividualrepeat.825A , mobile_chtisindividualrepeat.825B , mobile_chtisindividualrepeat.825C , mobile_chtisindividualrepeat.826 , mobile_chtisindividualrepeat.i20 , mobile_chtisindividualrepeat.827A , mobile_chtisindividualrepeat.i21 , mobile_chtisindividualrepeat.827B , mobile_chtisindividualrepeat.827C , mobile_chtisindividualrepeat.829 , mobile_chtisindividualrepeat.824 , mobile_chtisindividualrepeat.830 , mobile_chtisindividualrepeat.831 , mobile_chtisindividualrepeat.832 , mobile_chtisindividualrepeat.833 , mobile_chtisindividualrepeat.833B , mobile_chtisindividualrepeat.835 , mobile_chtisindividualrepeat.836 , mobile_chtisindividualrepeat.836B , mobile_chtisindividualrepeat.837 , mobile_chtisindividualrepeat.837B , mobile_chtisindividualrepeat.838 , mobile_chtisindividualrepeat.839 , mobile_chtisindividualrepeat.840 , mobile_chtisindividualrepeat.i22 , mobile_chtisindividualrepeat.841A , mobile_chtisindividualrepeat.841AB , mobile_chtisindividualrepeat.i23 , mobile_chtisindividualrepeat.841B , mobile_chtisindividualrepeat.841BB , mobile_chtisindividualrepeat.843 , mobile_chtisindividualrepeat.844 , mobile_chtisindividualrepeat.845 , mobile_chtisindividualrepeat.846 , mobile_chtisindividualrepeat.846B , mobile_chtisindividualrepeat.i24 , mobile_chtisindividualrepeat.902 , mobile_chtisindividualrepeat.903 , mobile_chtisindividualrepeat.904 , mobile_chtisindividualrepeat.905 , mobile_chtisindividualrepeat.905B , mobile_chtisindividualrepeat.907 , mobile_chtisindividualrepeat.907B , mobile_chtisindividualrepeat.601 , mobile_chtisindividualrepeat.602 , mobile_chtisindividualrepeat.606 , mobile_chtisindividualrepeat.607 , mobile_chtisindividualrepeat.607B , mobile_chtisindividualrepeat.609 , mobile_chtisindividualrepeat.611 , mobile_chtisindividualrepeat.612 , mobile_chtisindividualrepeat.i098 , mobile_chtisindividualrepeat.i04A , mobile_chtisindividualrepeat.702 , mobile_chtisindividualrepeat.703 , mobile_chtisindividualrepeat.703B , mobile_chtisindividualrepeat.704 , mobile_chtisindividualrepeat.705 , mobile_chtisindividualrepeat.706 , mobile_chtisindividualrepeat.706B , mobile_chtisindividualrepeat.707 , mobile_chtisindividualrepeat.708 , mobile_chtisindividualrepeat.709 , mobile_chtisindividualrepeat.710 , mobile_chtisindividualrepeat.711 , mobile_chtisindividualrepeat.712 , mobile_chtisindividualrepeat.712B , mobile_chtisindividualrepeat.713 , mobile_chtisindividualrepeat.714 , mobile_chtisindividualrepeat.715 , mobile_chtisindividualrepeat.715B , mobile_chtisindividualrepeat.716 , mobile_chtisindividualrepeat.717 , mobile_chtisindividualrepeat.718 , mobile_chtisindividualrepeat.719 , mobile_chtisindividualrepeat.720 , mobile_chtisindividualrepeat.721 , mobile_chtisindividualrepeat.722 , mobile_chtisindividualrepeat.723 , mobile_chtisindividualrepeat.724 , mobile_chtisindividualrepeat.725 , mobile_chtisindividualrepeat.726 , mobile_chtisindividualrepeat.727 , mobile_chtisindividualrepeat.728 , mobile_chtisindividualrepeat.728B , mobile_chtisindividualrepeat.729 , mobile_chtisindividualrepeat.729B , mobile_chtisindividualrepeat.730 , mobile_chtisindividualrepeat.730B , mobile_chtisindividualrepeat.731 , mobile_chtisindividualrepeat.731B , mobile_chtisindividualrepeat.732 , mobile_chtisindividualrepeat.733 , mobile_chtisindividualrepeat.734 , mobile_chtisindividualrepeat.735 , mobile_chtisindividualrepeat.736 , mobile_chtisindividualrepeat.751 , mobile_chtisindividualrepeat.751B , mobile_chtisindividualrepeat.752 , mobile_chtisindividualrepeat.752B , mobile_chtisindividualrepeat.753 , mobile_chtisindividualrepeat.753B , mobile_chtisindividualrepeat.754 , mobile_chtisindividualrepeat.754B , mobile_chtisindividualrepeat.755 , mobile_chtisindividualrepeat.755B , mobile_chtisindividualrepeat.777 , mobile_chtisindividualrepeat.777B , mobile_chtisindividualrepeat.778 , mobile_chtisindividualrepeat.786 , mobile_chtisindividualrepeat.786B , mobile_chtisindividualrepeat.END , mobile_chtisindividualrepeat.file_name , mobile_chtisindividualrepeat.phone_imei , mobile_chtisindividualrepeat.interview_start , mobile_chtisindividualrepeat.interview_end , mobile_chtisindividualrepeat.date_collected , mobile_chtisindividualrepeat.created_by , mobile_chtisindividualrepeat.date_created , mobile_chtisindividualrepeat.changed_by , mobile_chtisindividualrepeat.date_changed , mobile_chtisindividualrepeat.voided , mobile_chtisindividualrepeat.voided_by , mobile_chtisindividualrepeat.date_voided , mobile_chtisindividualrepeat.uuid , mobile_chtisindividualrepeat.sys_track  from mobile_chtisindividualrepeat  inner join mobile_chtisindividual on mobile_chtisindividual.chtisindividual_id = mobile_chtisindividualrepeat.chtisindividual_id
						
						";
						$_SESSION["mobile_file_SearchSQL"]="
						
						select mobile_file.file_id , mobile_file.file_name , mobile_file.created_by , mobile_file.date_created , mobile_file.changed_by , mobile_file.date_changed , mobile_file.voided , mobile_file.voided_by , mobile_file.date_voided , mobile_file.uuid , mobile_file.sys_track  from mobile_file
						
						";
						$_SESSION["payment_bank_SearchSQL"]="
						
						select payment_bank.bank_id , payment_bank.bank_name , payment_bank.code , payment_bank.created_by , payment_bank.date_created , payment_bank.changed_by , payment_bank.date_changed , payment_bank.voided , payment_bank.voided_by , payment_bank.date_voided , payment_bank.uuid , payment_bank.sys_track  from payment_bank
						
						";
						$_SESSION["payment_currency_SearchSQL"]="
						
						select payment_currency.currency_id , payment_currency.currency_code , payment_currency.currency_name , payment_currency.exchange_rate , payment_currency.created_by , payment_currency.date_created , payment_currency.changed_by , payment_currency.date_changed , payment_currency.voided , payment_currency.voided_by , payment_currency.date_voided , payment_currency.uuid , payment_currency.sys_track  from payment_currency
						
						";
						$_SESSION["reports_report_SearchSQL"]="
						
						select reports_report.report_id , reports_report.report_name , reports_report.report_tablelist , admin_role.role_id , admin_role.role_name , reports_report.status_view , reports_report.description , reports_report.created_by , reports_report.date_created , reports_report.changed_by , reports_report.date_changed , reports_report.voided , reports_report.voided_by , reports_report.date_voided , reports_report.uuid , reports_report.sys_track  from reports_report  inner join admin_role on admin_role.role_id = reports_report.role_id
						
						";
						$_SESSION["reports_reportgroup_SearchSQL"]="
						
						select reports_reportgroup.reportgroup_id , reports_reportgroup.reportgroup_name , reports_reportgroup.created_by , reports_reportgroup.date_created , reports_reportgroup.changed_by , reports_reportgroup.date_changed , reports_reportgroup.voided , reports_reportgroup.voided_by , reports_reportgroup.date_voided , reports_reportgroup.uuid , reports_reportgroup.sys_track  from reports_reportgroup
						
						";
						$_SESSION["reports_reportsbygroup_SearchSQL"]="
						
						select reports_reportsbygroup.reportsbygroup_id , reports_reportgroup.reportgroup_id , reports_reportgroup.reportgroup_name , reports_reportview.reportview_id , reports_reportview.reportview_name , reports_reportsbygroup.created_by , reports_reportsbygroup.date_created , reports_reportsbygroup.changed_by , reports_reportsbygroup.date_changed , reports_reportsbygroup.voided , reports_reportsbygroup.voided_by , reports_reportsbygroup.date_voided , reports_reportsbygroup.uuid , reports_reportsbygroup.sys_track  from reports_reportsbygroup  inner join reports_reportgroup on reports_reportgroup.reportgroup_id = reports_reportsbygroup.reportgroup_id  inner join reports_reportview on reports_reportview.reportview_id = reports_reportsbygroup.reportview_id
						
						";
						$_SESSION["reports_reportview_SearchSQL"]="
						
						select reports_reportview.reportview_id , reports_reportview.reportview_name , reports_reportview.menu_caption , reports_reportview.report_caption , reports_reportview.description , reports_reportview.created_by , reports_reportview.date_created , reports_reportview.changed_by , reports_reportview.date_changed , reports_reportview.voided , reports_reportview.voided_by , reports_reportview.date_voided , reports_reportview.uuid , reports_reportview.sys_track  from reports_reportview
						
						";
						$_SESSION["reports_reportviewdefinition_SearchSQL"]="
						
						select reports_reportviewdefinition.reportviewdefinition_id , reports_reportviewdefinition.reportviewdefinition_name , reports_reportview.reportview_id , reports_reportview.reportview_name , admin_table.table_id , admin_table.table_name , designer_queryfield.queryfield_id , designer_queryfield.queryfield_name , reports_reportviewdefinition.report_caption , reports_reportviewdefinition.description , reports_reportviewdefinition.created_by , reports_reportviewdefinition.date_created , reports_reportviewdefinition.changed_by , reports_reportviewdefinition.date_changed , reports_reportviewdefinition.voided , reports_reportviewdefinition.voided_by , reports_reportviewdefinition.date_voided , reports_reportviewdefinition.uuid , reports_reportviewdefinition.sys_track  from reports_reportviewdefinition  inner join reports_reportview on reports_reportview.reportview_id = reports_reportviewdefinition.reportview_id  inner join admin_table on admin_table.table_id = reports_reportviewdefinition.table_id  inner join designer_queryfield on designer_queryfield.queryfield_id = reports_reportviewdefinition.queryfield_id
						
						";?>