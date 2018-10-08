

// admin activitystatus

function gridViewadmin_activitystatus(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_activitystatus = Ext.get('gridViewadmin_activitystatus');	

	Ext.define('Admin_activitystatus', {
    extend: 'Ext.data.Model',
	fields:['activitystatus_id','activitystatus_name','activitystatus_status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_activitystatus',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_activitystatus',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Activitystatus Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'activitystatus_id'
		 },
		 {
		text     : ' Activitystatus Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'activitystatus_name'
		 },
		 {
		text     : ' Activitystatus Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'activitystatus_status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_activitystatusForm('detailinfo','updateload',rec.get('activitystatus_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Activitystatus',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_activitystatus function


// admin adminuser

function gridViewadmin_adminuser(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_adminuser = Ext.get('gridViewadmin_adminuser');	

	Ext.define('Admin_adminuser', {
    extend: 'Ext.data.Model',
	fields:['adminuser_id','person_name','username','password','status','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_adminuser',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_adminuser',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Adminuser Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'adminuser_id'
		 },
		 {
		text     : ' Person Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : ' Username ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'username'
		 },
		 {
		text     : ' Password ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'password'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_adminuserForm('detailinfo','updateload',rec.get('adminuser_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Adminuser',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_adminuser function


// admin aggrigate

function gridViewadmin_aggrigate(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_aggrigate = Ext.get('gridViewadmin_aggrigate');	

	Ext.define('Admin_aggrigate', {
    extend: 'Ext.data.Model',
	fields:['aggrigate_id','aggrigate_name','aggrigate_description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_aggrigate',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_aggrigate',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Aggrigate Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'aggrigate_id'
		 },
		 {
		text     : ' Aggrigate Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'aggrigate_name'
		 },
		 {
		text     : ' Aggrigate Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'aggrigate_description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_aggrigateForm('detailinfo','updateload',rec.get('aggrigate_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Aggrigate',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_aggrigate function


// admin alert

function gridViewadmin_alert(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_alert = Ext.get('gridViewadmin_alert');	

	Ext.define('Admin_alert', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_alert',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_alert',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_alertForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Alert',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_alert function


// admin alertactivity

function gridViewadmin_alertactivity(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_alertactivity = Ext.get('gridViewadmin_alertactivity');	

	Ext.define('Admin_alertactivity', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_alertactivity',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_alertactivity',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_alertactivityForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Alertactivity',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_alertactivity function


// admin autofill

function gridViewadmin_autofill(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_autofill = Ext.get('gridViewadmin_autofill');	

	Ext.define('Admin_autofill', {
    extend: 'Ext.data.Model',
	fields:['autofill_id','autofill_name','primary_tablelist','is_visible','regex','editable','min_len','max_len','caption','fieldname','prefix','surfix','digit_number','fill_combination','inf']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_autofill',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_autofill',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Autofill Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'autofill_id'
		 },
		 {
		text     : ' Autofill Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'autofill_name'
		 },
		 {
		text     : ' Primary Tablelist ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'primary_tablelist'
		 },
		 {
		text     : ' Is Visible ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'is_visible'
		 },
		 {
		text     : ' Regex ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'regex'
		 },
		 {
		text     : ' Editable ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'editable'
		 },
		 {
		text     : ' Min Len ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'min_len'
		 },
		 {
		text     : ' Max Len ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'max_len'
		 },
		 {
		text     : ' Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'caption'
		 },
		 {
		text     : ' Fieldname ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fieldname'
		 },
		 {
		text     : ' Prefix ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'prefix'
		 },
		 {
		text     : ' Surfix ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'surfix'
		 },
		 {
		text     : ' Digit Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'digit_number'
		 },
		 {
		text     : ' Fill Combination ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fill_combination'
		 },
		 {
		text     : ' Inf ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'inf'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_autofillForm('detailinfo','updateload',rec.get('autofill_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Autofill',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_autofill function


// admin company

function gridViewadmin_company(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_company = Ext.get('gridViewadmin_company');	

	Ext.define('Admin_company', {
    extend: 'Ext.data.Model',
	fields:['company_id','company_name','pin_number','vat_number','incorp_date','building','location_description','street','mobile','tel','fax','postal_address','postal_code','town','email_address2','email_address','website','comment']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_company',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_company',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Company Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'company_id'
		 },
		 {
		text     : ' Company Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'company_name'
		 },
		 {
		text     : ' Pin Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'pin_number'
		 },
		 {
		text     : ' Vat Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'vat_number'
		 },
		 {
		text     : ' Incorp Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'incorp_date'
		 },
		 {
		text     : ' Building ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'building'
		 },
		 {
		text     : ' Location Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'location_description'
		 },
		 {
		text     : ' Street ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'street'
		 },
		 {
		text     : ' Mobile ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'mobile'
		 },
		 {
		text     : ' Tel ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tel'
		 },
		 {
		text     : ' Fax ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fax'
		 },
		 {
		text     : ' Postal Address ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'postal_address'
		 },
		 {
		text     : ' Postal Code ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'postal_code'
		 },
		 {
		text     : ' Town ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'town'
		 },
		 {
		text     : ' Email Address2 ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'email_address2'
		 },
		 {
		text     : ' Email Address ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'email_address'
		 },
		 {
		text     : ' Website ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'website'
		 },
		 {
		text     : ' Comment ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'comment'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_companyForm('detailinfo','updateload',rec.get('company_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Company',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_company function


// admin companycontact

function gridViewadmin_companycontact(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_companycontact = Ext.get('gridViewadmin_companycontact');	

	Ext.define('Admin_companycontact', {
    extend: 'Ext.data.Model',
	fields:['companycontact_id','company_name','person_name','preferred','status','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_companycontact',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_companycontact',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Companycontact Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'companycontact_id'
		 },
		 {
		text     : ' Company Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'company_name'
		 },
		 {
		text     : ' Person Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : ' Preferred ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'preferred'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_companycontactForm('detailinfo','updateload',rec.get('companycontact_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Companycontact',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_companycontact function


// admin companydept

function gridViewadmin_companydept(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_companydept = Ext.get('gridViewadmin_companydept');	

	Ext.define('Admin_companydept', {
    extend: 'Ext.data.Model',
	fields:['companydept_id','company_name','dept_name','location_name','description','Status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_companydept',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_companydept',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Companydept Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'companydept_id'
		 },
		 {
		text     : ' Company Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'company_name'
		 },
		 {
		text     : ' Dept Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'dept_name'
		 },
		 {
		text     : ' Location Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'location_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_companydeptForm('detailinfo','updateload',rec.get('companydept_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Companydept',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_companydept function


// admin contactdetails

function gridViewadmin_contactdetails(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_contactdetails = Ext.get('gridViewadmin_contactdetails');	

	Ext.define('Admin_contactdetails', {
    extend: 'Ext.data.Model',
	fields:['contactdetails_id','syowner','syownerid','email_address','mobile_number','postal_address','physical_address','fax','telephone','preferred']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_contactdetails',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_contactdetails',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Contactdetails Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'contactdetails_id'
		 },
		 {
		text     : ' Syowner ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'syowner'
		 },
		 {
		text     : ' Syownerid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syownerid'
		 },
		 {
		text     : ' Email Address ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'email_address'
		 },
		 {
		text     : ' Mobile Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'mobile_number'
		 },
		 {
		text     : ' Postal Address ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'postal_address'
		 },
		 {
		text     : ' Physical Address ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'physical_address'
		 },
		 {
		text     : ' Fax ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fax'
		 },
		 {
		text     : ' Telephone ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'telephone'
		 },
		 {
		text     : ' Preferred ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'preferred'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_contactdetailsForm('detailinfo','updateload',rec.get('contactdetails_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Contactdetails',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_contactdetails function


// admin controller

function gridViewadmin_controller(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_controller = Ext.get('gridViewadmin_controller');	

	Ext.define('Admin_controller', {
    extend: 'Ext.data.Model',
	fields:['controller_id','tablename','groupfolder','displaygroup','displaysubgroup','infsubgroup','showgroup','infgroup','showgroupposition','defaultgrouptable','tablecaption','fieldname','gridwidth','fieldcaption','detailsvisiblepdf','pdfvisible','position','menuposition','colnwidth','dataformat','dispaytype','required','caption_position','control_position','infwidth','infhieght','infpos','infshow','displaysize','primarykeyidentifier','isautoincrement','accessrights']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_controller',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_controller',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Controller Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'controller_id'
		 },
		 {
		text     : ' Tablename ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'tablename'
		 },
		 {
		text     : ' Groupfolder ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'groupfolder'
		 },
		 {
		text     : ' Displaygroup ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'displaygroup'
		 },
		 {
		text     : ' Displaysubgroup ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'displaysubgroup'
		 },
		 {
		text     : ' Infsubgroup ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'infsubgroup'
		 },
		 {
		text     : ' Showgroup ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'showgroup'
		 },
		 {
		text     : ' Infgroup ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'infgroup'
		 },
		 {
		text     : ' Showgroupposition ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'showgroupposition'
		 },
		 {
		text     : ' Defaultgrouptable ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'defaultgrouptable'
		 },
		 {
		text     : ' Tablecaption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tablecaption'
		 },
		 {
		text     : ' Fieldname ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fieldname'
		 },
		 {
		text     : ' Gridwidth ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'gridwidth'
		 },
		 {
		text     : ' Fieldcaption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fieldcaption'
		 },
		 {
		text     : ' Detailsvisiblepdf ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'detailsvisiblepdf'
		 },
		 {
		text     : ' Pdfvisible ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'pdfvisible'
		 },
		 {
		text     : ' Position ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'position'
		 },
		 {
		text     : ' Menuposition ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'menuposition'
		 },
		 {
		text     : ' Colnwidth ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'colnwidth'
		 },
		 {
		text     : ' Dataformat ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'dataformat'
		 },
		 {
		text     : ' Dispaytype ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'dispaytype'
		 },
		 {
		text     : ' Required ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'required'
		 },
		 {
		text     : ' Caption Position ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'caption_position'
		 },
		 {
		text     : ' Control Position ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'control_position'
		 },
		 {
		text     : ' Infwidth ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'infwidth'
		 },
		 {
		text     : ' Infhieght ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'infhieght'
		 },
		 {
		text     : ' Infpos ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'infpos'
		 },
		 {
		text     : ' Infshow ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'infshow'
		 },
		 {
		text     : ' Displaysize ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'displaysize'
		 },
		 {
		text     : ' Primarykeyidentifier ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'primarykeyidentifier'
		 },
		 {
		text     : ' Isautoincrement ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'isautoincrement'
		 },
		 {
		text     : ' Accessrights ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accessrights'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_controllerForm('detailinfo','updateload',rec.get('controller_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Controller',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_controller function


// admin country

function gridViewadmin_country(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_country = Ext.get('gridViewadmin_country');	

	Ext.define('Admin_country', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_country',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_country',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_countryForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Country',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_country function


// admin custom

function gridViewadmin_custom(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_custom = Ext.get('gridViewadmin_custom');	

	Ext.define('Admin_custom', {
    extend: 'Ext.data.Model',
	fields:['custom_id','tablename','fieldname','stored_value','display_caption','displaytype']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_custom',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_custom',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Custom Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'custom_id'
		 },
		 {
		text     : ' Tablename ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'tablename'
		 },
		 {
		text     : ' Fieldname ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fieldname'
		 },
		 {
		text     : ' Stored Value ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'stored_value'
		 },
		 {
		text     : ' Display Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'display_caption'
		 },
		 {
		text     : ' Displaytype ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'displaytype'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_customForm('detailinfo','updateload',rec.get('custom_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Custom',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_custom function


// admin customer

function gridViewadmin_customer(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_customer = Ext.get('gridViewadmin_customer');	

	Ext.define('Admin_customer', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_customer',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_customer',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_customerForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Customer',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_customer function


// admin dept

function gridViewadmin_dept(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_dept = Ext.get('gridViewadmin_dept');	

	Ext.define('Admin_dept', {
    extend: 'Ext.data.Model',
	fields:['dept_id','dept_name','location_name','description','effective_dt']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_dept',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_dept',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Dept Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'dept_id'
		 },
		 {
		text     : ' Dept Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'dept_name'
		 },
		 {
		text     : ' Location Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'location_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
		text     : ' Effective Dt ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'effective_dt'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_deptForm('detailinfo','updateload',rec.get('dept_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Dept',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_dept function


// admin displaytype

function gridViewadmin_displaytype(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_displaytype = Ext.get('gridViewadmin_displaytype');	

	Ext.define('Admin_displaytype', {
    extend: 'Ext.data.Model',
	fields:['displaytype_id','displaytype_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_displaytype',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_displaytype',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Displaytype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'displaytype_id'
		 },
		 {
		text     : ' Displaytype Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'displaytype_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_displaytypeForm('detailinfo','updateload',rec.get('displaytype_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Displaytype',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_displaytype function


// admin generaview

function gridViewadmin_generaview(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_generaview = Ext.get('gridViewadmin_generaview');	

	Ext.define('Admin_generaview', {
    extend: 'Ext.data.Model',
	fields:['generaview_id','sview_name','role_name','tblgroup_name','menu_caption','status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_generaview',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_generaview',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Generaview Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'generaview_id'
		 },
		 {
		text     : ' Sview Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'sview_name'
		 },
		 {
		text     : ' Role Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'role_name'
		 },
		 {
		text     : ' Tblgroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tblgroup_name'
		 },
		 {
		text     : ' Menu Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'menu_caption'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_generaviewForm('detailinfo','updateload',rec.get('generaview_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Generaview',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_generaview function


// admin groupcategory

function gridViewadmin_groupcategory(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_groupcategory = Ext.get('gridViewadmin_groupcategory');	

	Ext.define('Admin_groupcategory', {
    extend: 'Ext.data.Model',
	fields:['groupcategory_id','groupcategory_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_groupcategory',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_groupcategory',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Groupcategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'groupcategory_id'
		 },
		 {
		text     : ' Groupcategory Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'groupcategory_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_groupcategoryForm('detailinfo','updateload',rec.get('groupcategory_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Groupcategory',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_groupcategory function


// admin groupnotification

function gridViewadmin_groupnotification(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_groupnotification = Ext.get('gridViewadmin_groupnotification');	

	Ext.define('Admin_groupnotification', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_groupnotification',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_groupnotification',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_groupnotificationForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Groupnotification',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_groupnotification function


// admin groupnotificationhist

function gridViewadmin_groupnotificationhist(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_groupnotificationhist = Ext.get('gridViewadmin_groupnotificationhist');	

	Ext.define('Admin_groupnotificationhist', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_groupnotificationhist',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_groupnotificationhist',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_groupnotificationhistForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Groupnotificationhist',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_groupnotificationhist function


// admin location

function gridViewadmin_location(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_location = Ext.get('gridViewadmin_location');	

	Ext.define('Admin_location', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_location',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_location',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_locationForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Location',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_location function


// admin locationhistory

function gridViewadmin_locationhistory(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_locationhistory = Ext.get('gridViewadmin_locationhistory');	

	Ext.define('Admin_locationhistory', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_locationhistory',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_locationhistory',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_locationhistoryForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Locationhistory',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_locationhistory function


// admin locations

function gridViewadmin_locations(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_locations = Ext.get('gridViewadmin_locations');	

	Ext.define('Admin_locations', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_locations',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_locations',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_locationsForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Locations',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_locations function


// admin log

function gridViewadmin_log(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_log = Ext.get('gridViewadmin_log');	

	Ext.define('Admin_log', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_log',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_log',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_logForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Log',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_log function


// admin minmax

function gridViewadmin_minmax(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_minmax = Ext.get('gridViewadmin_minmax');	

	Ext.define('Admin_minmax', {
    extend: 'Ext.data.Model',
	fields:['minmax_id','tablename','fieldname','minvalue','maxvalue','currentvalue','notificationCreteria']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_minmax',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_minmax',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Minmax Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'minmax_id'
		 },
		 {
		text     : ' Tablename ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'tablename'
		 },
		 {
		text     : ' Fieldname ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fieldname'
		 },
		 {
		text     : ' Minvalue ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'minvalue'
		 },
		 {
		text     : ' Maxvalue ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'maxvalue'
		 },
		 {
		text     : ' Currentvalue ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'currentvalue'
		 },
		 {
		text     : ' NotificationCreteria ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'notificationCreteria'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_minmaxForm('detailinfo','updateload',rec.get('minmax_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Minmax',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_minmax function


// admin ntg

function gridViewadmin_ntg(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_ntg = Ext.get('gridViewadmin_ntg');	

	Ext.define('Admin_ntg', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_ntg',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_ntg',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_ntgForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Ntg',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_ntg function


// admin person

function gridViewadmin_person(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_person = Ext.get('gridViewadmin_person');	

	Ext.define('Admin_person', {
    extend: 'Ext.data.Model',
	fields:['person_id','person_name','first_name','middle_name','last_name','idorpassport_number','dob','pin','gender','status','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_person',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_person',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Person Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_id'
		 },
		 {
		text     : ' Employee Number ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : ' First Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'first_name'
		 },
		 {
		text     : ' Middle Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'middle_name'
		 },
		 {
		text     : ' Last Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'last_name'
		 },
		 {
		text     : ' Idorpassport Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'idorpassport_number'
		 },
		 {
		text     : ' Dob ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'dob'
		 },
		 {
		text     : ' Pin ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'pin'
		 },
		 {
		text     : ' Gender ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'gender'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_personForm('detailinfo','updateload',rec.get('person_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Person',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_person function


// admin persondept

function gridViewadmin_persondept(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_persondept = Ext.get('gridViewadmin_persondept');	

	Ext.define('Admin_persondept', {
    extend: 'Ext.data.Model',
	fields:['persondept_id','dept_name','person_name','start_dt','end_dt','is_active','comments','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_persondept',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_persondept',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Persondept Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'persondept_id'
		 },
		 {
		text     : ' Dept Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'dept_name'
		 },
		 {
		text     : ' Person Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : ' Start Dt ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'start_dt'
		 },
		 {
		text     : ' End Dt ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'end_dt'
		 },
		 {
		text     : ' Is Active ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'is_active'
		 },
		 {
		text     : ' Comments ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'comments'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_persondeptForm('detailinfo','updateload',rec.get('persondept_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Persondept',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_persondept function


// admin persongroup

function gridViewadmin_persongroup(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_persongroup = Ext.get('gridViewadmin_persongroup');	

	Ext.define('Admin_persongroup', {
    extend: 'Ext.data.Model',
	fields:['persongroup_id','persongroup_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_persongroup',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_persongroup',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Persongroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'persongroup_id'
		 },
		 {
		text     : ' Persongroup Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'persongroup_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_persongroupForm('detailinfo','updateload',rec.get('persongroup_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Persongroup',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_persongroup function


// admin persongroupcategory

function gridViewadmin_persongroupcategory(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_persongroupcategory = Ext.get('gridViewadmin_persongroupcategory');	

	Ext.define('Admin_persongroupcategory', {
    extend: 'Ext.data.Model',
	fields:['persongroupcategory_id','persongroupcategory_name','groupcategory_name','persongroup_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_persongroupcategory',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_persongroupcategory',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Persongroupcategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'persongroupcategory_id'
		 },
		 {
		text     : ' Persongroupcategory Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'persongroupcategory_name'
		 },
		 {
		text     : ' Groupcategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'groupcategory_name'
		 },
		 {
		text     : ' Persongroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'persongroup_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_persongroupcategoryForm('detailinfo','updateload',rec.get('persongroupcategory_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Persongroupcategory',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_persongroupcategory function


// admin personpersontype

function gridViewadmin_personpersontype(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_personpersontype = Ext.get('gridViewadmin_personpersontype');	

	Ext.define('Admin_personpersontype', {
    extend: 'Ext.data.Model',
	fields:['personpersontype_id','personpersontype_name','personttypecategory_name','person_name','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_personpersontype',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_personpersontype',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Personpersontype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'personpersontype_id'
		 },
		 {
		text     : ' Personpersontype Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'personpersontype_name'
		 },
		 {
		text     : ' Personttypecategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'personttypecategory_name'
		 },
		 {
		text     : ' Person Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_personpersontypeForm('detailinfo','updateload',rec.get('personpersontype_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Personpersontype',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_personpersontype function


// admin personttypecategory

function gridViewadmin_personttypecategory(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_personttypecategory = Ext.get('gridViewadmin_personttypecategory');	

	Ext.define('Admin_personttypecategory', {
    extend: 'Ext.data.Model',
	fields:['personttypecategory_id','personttypecategory_name','status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_personttypecategory',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_personttypecategory',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Personttypecategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'personttypecategory_id'
		 },
		 {
		text     : ' Personttypecategory Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'personttypecategory_name'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_personttypecategoryForm('detailinfo','updateload',rec.get('personttypecategory_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Personttypecategory',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_personttypecategory function


// admin photo

function gridViewadmin_photo(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_photo = Ext.get('gridViewadmin_photo');	

	Ext.define('Admin_photo', {
    extend: 'Ext.data.Model',
	fields:['photo_id','photo_name','source_tablelist','source_ref','prefered']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_photo',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_photo',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Photo Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'photo_id'
		 },
		 {
		text     : ' Photo Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'photo_name'
		 },
		 {
		text     : ' Source Tablelist ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'source_tablelist'
		 },
		 {
		text     : ' Source Ref ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'source_ref'
		 },
		 {
		text     : ' Prefered ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'prefered'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_photoForm('detailinfo','updateload',rec.get('photo_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Photo',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_photo function


// admin privilege

function gridViewadmin_privilege(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_privilege = Ext.get('gridViewadmin_privilege');	

	Ext.define('Admin_privilege', {
    extend: 'Ext.data.Model',
	fields:['privilege_id','privilege_name','statestetus_name','section','refid']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_privilege',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_privilege',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Privilege Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'privilege_id'
		 },
		 {
		text     : ' Privilege Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'privilege_name'
		 },
		 {
		text     : ' Statestetus Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'statestetus_name'
		 },
		 {
		text     : ' Section ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'section'
		 },
		 {
		text     : ' Refid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'refid'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_privilegeForm('detailinfo','updateload',rec.get('privilege_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Privilege',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_privilege function


// admin rangetype

function gridViewadmin_rangetype(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_rangetype = Ext.get('gridViewadmin_rangetype');	

	Ext.define('Admin_rangetype', {
    extend: 'Ext.data.Model',
	fields:['rangetype_id','rangetype_name','type_description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_rangetype',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_rangetype',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Rangetype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rangetype_id'
		 },
		 {
		text     : ' Rangetype Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'rangetype_name'
		 },
		 {
		text     : ' Type Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'type_description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_rangetypeForm('detailinfo','updateload',rec.get('rangetype_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Rangetype',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_rangetype function


// admin rights

function gridViewadmin_rights(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_rights = Ext.get('gridViewadmin_rights');	

	Ext.define('Admin_rights', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_rights',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_rights',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_rightsForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Rights',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_rights function


// admin role

function gridViewadmin_role(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_role = Ext.get('gridViewadmin_role');	

	Ext.define('Admin_role', {
    extend: 'Ext.data.Model',
	fields:['role_id','role_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_role',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_role',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Role Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'role_id'
		 },
		 {
		text     : ' Role Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'role_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_roleForm('detailinfo','updateload',rec.get('role_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Role',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_role function


// admin rolenotification

function gridViewadmin_rolenotification(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_rolenotification = Ext.get('gridViewadmin_rolenotification');	

	Ext.define('Admin_rolenotification', {
    extend: 'Ext.data.Model',
	fields:['rolenotification_id','role_name','rolenotificationevent_name','table_name','notificationtype','notification_order','awaits_activity','success','failure','undetermined','comments']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_rolenotification',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_rolenotification',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Rolenotification Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rolenotification_id'
		 },
		 {
		text     : ' Role Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'role_name'
		 },
		 {
		text     : ' Rolenotificationevent Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rolenotificationevent_name'
		 },
		 {
		text     : ' Table Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'table_name'
		 },
		 {
		text     : ' Notificationtype ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'notificationtype'
		 },
		 {
		text     : ' Notification Order ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'notification_order'
		 },
		 {
		text     : ' Awaits Activity ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'awaits_activity'
		 },
		 {
		text     : ' Success ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'success'
		 },
		 {
		text     : ' Failure ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'failure'
		 },
		 {
		text     : ' Undetermined ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'undetermined'
		 },
		 {
		text     : ' Comments ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'comments'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_rolenotificationForm('detailinfo','updateload',rec.get('rolenotification_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Rolenotification',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_rolenotification function


// admin rolenotificationevent

function gridViewadmin_rolenotificationevent(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_rolenotificationevent = Ext.get('gridViewadmin_rolenotificationevent');	

	Ext.define('Admin_rolenotificationevent', {
    extend: 'Ext.data.Model',
	fields:['rolenotificationevent_id','rolenotificationevent_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_rolenotificationevent',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_rolenotificationevent',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Rolenotificationevent Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rolenotificationevent_id'
		 },
		 {
		text     : ' Rolenotificationevent Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'rolenotificationevent_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_rolenotificationeventForm('detailinfo','updateload',rec.get('rolenotificationevent_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Rolenotificationevent',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_rolenotificationevent function


// admin rolenotificationhist

function gridViewadmin_rolenotificationhist(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_rolenotificationhist = Ext.get('gridViewadmin_rolenotificationhist');	

	Ext.define('Admin_rolenotificationhist', {
    extend: 'Ext.data.Model',
	fields:['rolenotificationhist_id','rolenotificationhist_name','rolenotificationevent_name','notification_details','actioned_by','action','primary_tablelist','table_name','recordid','status','comment']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_rolenotificationhist',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_rolenotificationhist',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Rolenotificationhist Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rolenotificationhist_id'
		 },
		 {
		text     : ' Rolenotificationhist Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'rolenotificationhist_name'
		 },
		 {
		text     : ' Rolenotificationevent Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rolenotificationevent_name'
		 },
		 {
		text     : ' Notification Details ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'notification_details'
		 },
		 {
		text     : ' Actioned By ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'actioned_by'
		 },
		 {
		text     : ' Action ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'action'
		 },
		 {
		text     : ' Primary Tablelist ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'primary_tablelist'
		 },
		 {
		text     : ' Table Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'table_name'
		 },
		 {
		text     : ' Recordid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'recordid'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
		text     : ' Comment ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'comment'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_rolenotificationhistForm('detailinfo','updateload',rec.get('rolenotificationhist_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Rolenotificationhist',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_rolenotificationhist function


// admin roleperson

function gridViewadmin_roleperson(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_roleperson = Ext.get('gridViewadmin_roleperson');	

	Ext.define('Admin_roleperson', {
    extend: 'Ext.data.Model',
	fields:['roleperson_id','person_name','role_name','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_roleperson',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_roleperson',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Roleperson Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'roleperson_id'
		 },
		 {
		text     : ' Person Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : ' Role Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'role_name'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_rolepersonForm('detailinfo','updateload',rec.get('roleperson_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Roleperson',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_roleperson function


// admin roleprivilege

function gridViewadmin_roleprivilege(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_roleprivilege = Ext.get('gridViewadmin_roleprivilege');	

	Ext.define('Admin_roleprivilege', {
    extend: 'Ext.data.Model',
	fields:['roleprivilege_id','role_name','privilegeid','activity']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_roleprivilege',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_roleprivilege',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Roleprivilege Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'roleprivilege_id'
		 },
		 {
		text     : ' Role Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'role_name'
		 },
		 {
		text     : ' Privilegeid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'privilegeid'
		 },
		 {
		text     : ' Activity ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'activity'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_roleprivilegeForm('detailinfo','updateload',rec.get('roleprivilege_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Roleprivilege',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_roleprivilege function


// admin rolerole

function gridViewadmin_rolerole(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_rolerole = Ext.get('gridViewadmin_rolerole');	

	Ext.define('Admin_rolerole', {
    extend: 'Ext.data.Model',
	fields:['rolerole_id','role_name','parent_role']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_rolerole',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_rolerole',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Rolerole Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rolerole_id'
		 },
		 {
		text     : ' Role Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'role_name'
		 },
		 {
		text     : ' Parent Role ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'parent_role'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_roleroleForm('detailinfo','updateload',rec.get('rolerole_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Rolerole',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_rolerole function


// admin schart

function gridViewadmin_schart(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_schart = Ext.get('gridViewadmin_schart');	

	Ext.define('Admin_schart', {
    extend: 'Ext.data.Model',
	fields:['schart_id','charttype_name','schart_name','chart_position','tablelist','fieldlist_xaxis','xaxiscaption','fieldlist_yaxis','aggrigate_name','rangetype_name','range_begin','yaxiscaption','range_end','viewmode_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_schart',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_schart',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Schart Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'schart_id'
		 },
		 {
		text     : ' Charttype Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'charttype_name'
		 },
		 {
		text     : ' Schart Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'schart_name'
		 },
		 {
		text     : ' Chart Position ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'chart_position'
		 },
		 {
		text     : ' Tablelist ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tablelist'
		 },
		 {
		text     : ' Fieldlist Xaxis ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fieldlist_xaxis'
		 },
		 {
		text     : ' Xaxiscaption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'xaxiscaption'
		 },
		 {
		text     : ' Fieldlist Yaxis ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fieldlist_yaxis'
		 },
		 {
		text     : ' Aggrigate Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'aggrigate_name'
		 },
		 {
		text     : ' Rangetype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rangetype_name'
		 },
		 {
		text     : ' Range Begin ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'range_begin'
		 },
		 {
		text     : ' Yaxiscaption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'yaxiscaption'
		 },
		 {
		text     : ' Range End ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'range_end'
		 },
		 {
		text     : ' Viewmode Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'viewmode_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_schartForm('detailinfo','updateload',rec.get('schart_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Schart',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_schart function


// admin systemvariable

function gridViewadmin_systemvariable(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_systemvariable = Ext.get('gridViewadmin_systemvariable');	

	Ext.define('Admin_systemvariable', {
    extend: 'Ext.data.Model',
	fields:['systemvariable_id','systemvariable_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_systemvariable',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_systemvariable',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Systemvariable Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'systemvariable_id'
		 },
		 {
		text     : ' Systemvariable Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'systemvariable_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_systemvariableForm('detailinfo','updateload',rec.get('systemvariable_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Systemvariable',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_systemvariable function


// admin table

function gridViewadmin_table(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_table = Ext.get('gridViewadmin_table');	

	Ext.define('Admin_table', {
    extend: 'Ext.data.Model',
	fields:['table_id','table_name','table_caption','statement_caption','flexcolumn','gridwidth','gridhieght','formheight','orderpos']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_table',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_table',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Table Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'table_id'
		 },
		 {
		text     : ' Table Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'table_name'
		 },
		 {
		text     : ' Table Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'table_caption'
		 },
		 {
		text     : ' Statement Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'statement_caption'
		 },
		 {
		text     : ' Flexcolumn ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'flexcolumn'
		 },
		 {
		text     : ' Gridwidth ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'gridwidth'
		 },
		 {
		text     : ' Gridhieght ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'gridhieght'
		 },
		 {
		text     : ' Formheight ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formheight'
		 },
		 {
		text     : ' Orderpos ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'orderpos'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_tableForm('detailinfo','updateload',rec.get('table_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Table',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_table function


// admin trail

function gridViewadmin_trail(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_trail = Ext.get('gridViewadmin_trail');	

	Ext.define('Admin_trail', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_trail',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_trail',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_trailForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Trail',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_trail function


// admin user

function gridViewadmin_user(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_user = Ext.get('gridViewadmin_user');	

	Ext.define('Admin_user', {
    extend: 'Ext.data.Model',
	fields:['id','employee_name','userid','user_password','UserName','user_priviledge','security_question','security_q_answer','usergroup_name','user_active_status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_user',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_user',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'id'
		 },
		 {
		text     : ' Employee Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'employee_name'
		 },
		 {
		text     : ' Userid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'userid'
		 },
		 {
		text     : ' User Password ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'user_password'
		 },
		 {
		text     : ' UserName ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'UserName'
		 },
		 {
		text     : ' User Priviledge ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'user_priviledge'
		 },
		 {
		text     : ' Security Question ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'security_question'
		 },
		 {
		text     : ' Security Q Answer ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'security_q_answer'
		 },
		 {
		text     : ' Usergroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'usergroup_name'
		 },
		 {
		text     : ' User Active Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'user_active_status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_userForm('detailinfo','updateload',rec.get('user_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin User',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_user function


// admin useremp

function gridViewadmin_useremp(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_useremp = Ext.get('gridViewadmin_useremp');	

	Ext.define('Admin_useremp', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_useremp',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_useremp',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_userempForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Useremp',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_useremp function


// admin usergroup

function gridViewadmin_usergroup(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_usergroup = Ext.get('gridViewadmin_usergroup');	

	Ext.define('Admin_usergroup', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_usergroup',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_usergroup',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_usergroupForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Usergroup',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_usergroup function


// admin usergrouprole

function gridViewadmin_usergrouprole(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_usergrouprole = Ext.get('gridViewadmin_usergrouprole');	

	Ext.define('Admin_usergrouprole', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_usergrouprole',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_usergrouprole',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_usergrouproleForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Usergrouprole',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_usergrouprole function


// com batchemail

function gridViewcom_batchemail(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtncom_batchemail = Ext.get('gridViewcom_batchemail');	

	Ext.define('Com_batchemail', {
    extend: 'Ext.data.Model',
	fields:['batchemail_id','batchemail_name','persongroup_name','subject','body','transaction_date']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Com_batchemail',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=com_batchemail',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Batchemail Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'batchemail_id'
		 },
		 {
		text     : ' Batchemail Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'batchemail_name'
		 },
		 {
		text     : ' Persongroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'persongroup_name'
		 },
		 {
		text     : ' Subject ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'subject'
		 },
		 {
		text     : ' Body ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'body'
		 },
		 {
		text     : ' Transaction Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_date'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

com_batchemailForm('detailinfo','updateload',rec.get('batchemail_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Com Batchemail',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewcom_batchemail function


// com emailsettings

function gridViewcom_emailsettings(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtncom_emailsettings = Ext.get('gridViewcom_emailsettings');	

	Ext.define('Com_emailsettings', {
    extend: 'Ext.data.Model',
	fields:['emailsettings_id','email_address','password','port','host','send_from','SMT_secure','SMPT_authentication','preferred','comment']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Com_emailsettings',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=com_emailsettings',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Emailsettings Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'emailsettings_id'
		 },
		 {
		text     : ' Email Address ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'email_address'
		 },
		 {
		text     : ' Password ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'password'
		 },
		 {
		text     : ' Port ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'port'
		 },
		 {
		text     : ' Host ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'host'
		 },
		 {
		text     : ' Send From ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'send_from'
		 },
		 {
		text     : ' SMT Secure ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'SMT_secure'
		 },
		 {
		text     : ' SMPT Authentication ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'SMPT_authentication'
		 },
		 {
		text     : ' Preferred ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'preferred'
		 },
		 {
		text     : ' Comment ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'comment'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

com_emailsettingsForm('detailinfo','updateload',rec.get('emailsettings_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Com Emailsettings',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewcom_emailsettings function


// com sendemail

function gridViewcom_sendemail(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtncom_sendemail = Ext.get('gridViewcom_sendemail');	

	Ext.define('Com_sendemail', {
    extend: 'Ext.data.Model',
	fields:['sendemail_id','syowner','syownerid','email_subject','email_body','attachments']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Com_sendemail',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=com_sendemail',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Sendemail Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'sendemail_id'
		 },
		 {
		text     : ' Syowner ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'syowner'
		 },
		 {
		text     : ' Syownerid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syownerid'
		 },
		 {
		text     : ' Email Subject ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'email_subject'
		 },
		 {
		text     : ' Email Body ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'email_body'
		 },
		 {
		text     : ' Attachments ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'attachments'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

com_sendemailForm('detailinfo','updateload',rec.get('sendemail_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Com Sendemail',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewcom_sendemail function


// designer aggrigate

function gridViewdesigner_aggrigate(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_aggrigate = Ext.get('gridViewdesigner_aggrigate');	

	Ext.define('Designer_aggrigate', {
    extend: 'Ext.data.Model',
	fields:['aggrigate_id','aggrigate_name','aggrigate_description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_aggrigate',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_aggrigate',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Aggrigate Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'aggrigate_id'
		 },
		 {
		text     : ' Aggrigate Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'aggrigate_name'
		 },
		 {
		text     : ' Aggrigate Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'aggrigate_description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_aggrigateForm('detailinfo','updateload',rec.get('aggrigate_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Aggrigate',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_aggrigate function


// designer aggrigatetype

function gridViewdesigner_aggrigatetype(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_aggrigatetype = Ext.get('gridViewdesigner_aggrigatetype');	

	Ext.define('Designer_aggrigatetype', {
    extend: 'Ext.data.Model',
	fields:['aggrigatetype_id','aggrigatetype_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_aggrigatetype',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_aggrigatetype',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Aggrigatetype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'aggrigatetype_id'
		 },
		 {
		text     : ' Aggrigatetype Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'aggrigatetype_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_aggrigatetypeForm('detailinfo','updateload',rec.get('aggrigatetype_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Aggrigatetype',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_aggrigatetype function


// designer categorizeother

function gridViewdesigner_categorizeother(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_categorizeother = Ext.get('gridViewdesigner_categorizeother');	

	Ext.define('Designer_categorizeother', {
    extend: 'Ext.data.Model',
	fields:['categorizeother_id','categorizeother_name','othercategory_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_categorizeother',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_categorizeother',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Categorizeother Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'categorizeother_id'
		 },
		 {
		text     : ' Categorizeother Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'categorizeother_name'
		 },
		 {
		text     : ' Othercategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'othercategory_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_categorizeotherForm('detailinfo','updateload',rec.get('categorizeother_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Categorizeother',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_categorizeother function


// designer charttype

function gridViewdesigner_charttype(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_charttype = Ext.get('gridViewdesigner_charttype');	

	Ext.define('Designer_charttype', {
    extend: 'Ext.data.Model',
	fields:['charttype_id','charttype_name','charttype_description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_charttype',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_charttype',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Charttype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'charttype_id'
		 },
		 {
		text     : ' Charttype Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'charttype_name'
		 },
		 {
		text     : ' Charttype Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'charttype_description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_charttypeForm('detailinfo','updateload',rec.get('charttype_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Charttype',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_charttype function


// designer combocustomization

function gridViewdesigner_combocustomization(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_combocustomization = Ext.get('gridViewdesigner_combocustomization');	

	Ext.define('Designer_combocustomization', {
    extend: 'Ext.data.Model',
	fields:['combocustomization_id','combo_tablelist','fieldvalue','othervalues']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_combocustomization',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_combocustomization',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Combocustomization Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'combocustomization_id'
		 },
		 {
		text     : ' Combo Tablelist ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'combo_tablelist'
		 },
		 {
		text     : ' Fieldvalue ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fieldvalue'
		 },
		 {
		text     : ' Othervalues ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'othervalues'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_combocustomizationForm('detailinfo','updateload',rec.get('combocustomization_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Combocustomization',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_combocustomization function


// designer crdbdeterminant

function gridViewdesigner_crdbdeterminant(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_crdbdeterminant = Ext.get('gridViewdesigner_crdbdeterminant');	

	Ext.define('Designer_crdbdeterminant', {
    extend: 'Ext.data.Model',
	fields:['crdbdeterminant_id','credit_tablelist','debit_tablelist']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_crdbdeterminant',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_crdbdeterminant',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Crdbdeterminant Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'crdbdeterminant_id'
		 },
		 {
		text     : ' Credit Tablelist ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'credit_tablelist'
		 },
		 {
		text     : ' Debit Tablelist ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'debit_tablelist'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_crdbdeterminantForm('detailinfo','updateload',rec.get('crdbdeterminant_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Crdbdeterminant',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_crdbdeterminant function


// designer custfunc

function gridViewdesigner_custfunc(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_custfunc = Ext.get('gridViewdesigner_custfunc');	

	Ext.define('Designer_custfunc', {
    extend: 'Ext.data.Model',
	fields:['custfunc_id','custfunc_name','func_tablelist']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_custfunc',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_custfunc',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Custfunc Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'custfunc_id'
		 },
		 {
		text     : ' Custfunc Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'custfunc_name'
		 },
		 {
		text     : ' Func Tablelist ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'func_tablelist'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_custfuncForm('detailinfo','updateload',rec.get('custfunc_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Custfunc',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_custfunc function


// designer datatype

function gridViewdesigner_datatype(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_datatype = Ext.get('gridViewdesigner_datatype');	

	Ext.define('Designer_datatype', {
    extend: 'Ext.data.Model',
	fields:['datatype_id','datatype_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_datatype',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_datatype',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Datatype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'datatype_id'
		 },
		 {
		text     : ' Datatype Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'datatype_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_datatypeForm('detailinfo','updateload',rec.get('datatype_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Datatype',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_datatype function


// designer fasttbldesign

function gridViewdesigner_fasttbldesign(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_fasttbldesign = Ext.get('gridViewdesigner_fasttbldesign');	

	Ext.define('Designer_fasttbldesign', {
    extend: 'Ext.data.Model',
	fields:['fasttbldesign_id','sview_name','primary_tablelist','secondary_tablelist','tabcaption','tab_index']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_fasttbldesign',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_fasttbldesign',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Fasttbldesign Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fasttbldesign_id'
		 },
		 {
		text     : ' Sview Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'sview_name'
		 },
		 {
		text     : ' Primary Tablelist ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'primary_tablelist'
		 },
		 {
		text     : ' Secondary Tablelist ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'secondary_tablelist'
		 },
		 {
		text     : ' Tabcaption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tabcaption'
		 },
		 {
		text     : ' Tab Index ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tab_index'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_fasttbldesignForm('detailinfo','updateload',rec.get('fasttbldesign_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Fasttbldesign',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_fasttbldesign function


// designer fieldcustomization

function gridViewdesigner_fieldcustomization(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_fieldcustomization = Ext.get('gridViewdesigner_fieldcustomization');	

	Ext.define('Designer_fieldcustomization', {
    extend: 'Ext.data.Model',
	fields:['fieldcustomization_id','field_tablelist','current_fieldname','displaytype_name','caption','is_visible','num_cols','options']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_fieldcustomization',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_fieldcustomization',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Fieldcustomization Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fieldcustomization_id'
		 },
		 {
		text     : ' Field Tablelist ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'field_tablelist'
		 },
		 {
		text     : ' Current Fieldname ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'current_fieldname'
		 },
		 {
		text     : ' Displaytype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'displaytype_name'
		 },
		 {
		text     : ' Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'caption'
		 },
		 {
		text     : ' Is Visible ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'is_visible'
		 },
		 {
		text     : ' Num Cols ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'num_cols'
		 },
		 {
		text     : ' Options ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'options'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_fieldcustomizationForm('detailinfo','updateload',rec.get('fieldcustomization_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Fieldcustomization',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_fieldcustomization function


// designer flexcolumn

function gridViewdesigner_flexcolumn(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_flexcolumn = Ext.get('gridViewdesigner_flexcolumn');	

	Ext.define('Designer_flexcolumn', {
    extend: 'Ext.data.Model',
	fields:['flexcolum_name','primary_tablelist','options_tablelist','orderby','default_section']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_flexcolumn',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_flexcolumn',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Flexcolum Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'flexcolum_name'
		 },
		 {
		text     : ' Primary Tablelist ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'primary_tablelist'
		 },
		 {
		text     : ' Options Tablelist ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'options_tablelist'
		 },
		 {
		text     : ' Orderby ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'orderby'
		 },
		 {
		text     : ' Default Section ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'default_section'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_flexcolumnForm('detailinfo','updateload',rec.get('flexcolumn_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Flexcolumn',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_flexcolumn function


// designer gender

function gridViewdesigner_gender(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_gender = Ext.get('gridViewdesigner_gender');	

	Ext.define('Designer_gender', {
    extend: 'Ext.data.Model',
	fields:['gender_id','gender_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_gender',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_gender',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Gender Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'gender_id'
		 },
		 {
		text     : ' Gender Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'gender_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_genderForm('detailinfo','updateload',rec.get('gender_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Gender',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_gender function


// designer grouptbls

function gridViewdesigner_grouptbls(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_grouptbls = Ext.get('gridViewdesigner_grouptbls');	

	Ext.define('Designer_grouptbls', {
    extend: 'Ext.data.Model',
	fields:['grouptbls_id','tblgroup_name','tblgroup_tablelist','orderpos','table_caption','menu','statement']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_grouptbls',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_grouptbls',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Grouptbls Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'grouptbls_id'
		 },
		 {
		text     : ' Tblgroup Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'tblgroup_name'
		 },
		 {
		text     : ' Tblgroup Tablelist ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tblgroup_tablelist'
		 },
		 {
		text     : ' Orderpos ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'orderpos'
		 },
		 {
		text     : ' Table Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'table_caption'
		 },
		 {
		text     : ' Menu ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'menu'
		 },
		 {
		text     : ' Statement ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'statement'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_grouptblsForm('detailinfo','updateload',rec.get('grouptbls_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Grouptbls',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_grouptbls function


// designer othercategory

function gridViewdesigner_othercategory(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_othercategory = Ext.get('gridViewdesigner_othercategory');	

	Ext.define('Designer_othercategory', {
    extend: 'Ext.data.Model',
	fields:['othercategory_id','othercategory_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_othercategory',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_othercategory',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Othercategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'othercategory_id'
		 },
		 {
		text     : ' Othercategory Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'othercategory_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_othercategoryForm('detailinfo','updateload',rec.get('othercategory_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Othercategory',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_othercategory function


// designer othermenu

function gridViewdesigner_othermenu(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_othermenu = Ext.get('gridViewdesigner_othermenu');	

	Ext.define('Designer_othermenu', {
    extend: 'Ext.data.Model',
	fields:['othermenu_id','othercategory_name','role_name','tblgroup_name','menu_caption','status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_othermenu',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_othermenu',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Othermenu Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'othermenu_id'
		 },
		 {
		text     : ' Othercategory Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'othercategory_name'
		 },
		 {
		text     : ' Role Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'role_name'
		 },
		 {
		text     : ' Tblgroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tblgroup_name'
		 },
		 {
		text     : ' Menu Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'menu_caption'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_othermenuForm('detailinfo','updateload',rec.get('othermenu_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Othermenu',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_othermenu function


// designer preaggrigate

function gridViewdesigner_preaggrigate(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_preaggrigate = Ext.get('gridViewdesigner_preaggrigate');	

	Ext.define('Designer_preaggrigate', {
    extend: 'Ext.data.Model',
	fields:['preaggrigate_id','preaggrigate_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_preaggrigate',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_preaggrigate',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Preaggrigate Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'preaggrigate_id'
		 },
		 {
		text     : ' Preaggrigate Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'preaggrigate_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_preaggrigateForm('detailinfo','updateload',rec.get('preaggrigate_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Preaggrigate',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_preaggrigate function


// designer queryfield

function gridViewdesigner_queryfield(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_queryfield = Ext.get('gridViewdesigner_queryfield');	

	Ext.define('Designer_queryfield', {
    extend: 'Ext.data.Model',
	fields:['queryfield_id','reportview_name','report_caption','section_caption','column_width','query']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_queryfield',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_queryfield',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Queryfield Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'queryfield_id'
		 },
		 {
		text     : ' Reportview Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'reportview_name'
		 },
		 {
		text     : ' Report Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'report_caption'
		 },
		 {
		text     : ' Section Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'section_caption'
		 },
		 {
		text     : ' Column Width ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'column_width'
		 },
		 {
		text     : ' Query ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'query'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_queryfieldForm('detailinfo','updateload',rec.get('queryfield_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Queryfield',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_queryfield function


// designer relationship

function gridViewdesigner_relationship(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_relationship = Ext.get('gridViewdesigner_relationship');	

	Ext.define('Designer_relationship', {
    extend: 'Ext.data.Model',
	fields:['relationship_id','relationship_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_relationship',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_relationship',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Relationship Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'relationship_id'
		 },
		 {
		text     : ' Relationship Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'relationship_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_relationshipForm('detailinfo','updateload',rec.get('relationship_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Relationship',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_relationship function


// designer relationshipstatus

function gridViewdesigner_relationshipstatus(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_relationshipstatus = Ext.get('gridViewdesigner_relationshipstatus');	

	Ext.define('Designer_relationshipstatus', {
    extend: 'Ext.data.Model',
	fields:['relationshipstatus_id','relationshipstatus_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_relationshipstatus',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_relationshipstatus',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Relationshipstatus Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'relationshipstatus_id'
		 },
		 {
		text     : ' Relationshipstatus Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'relationshipstatus_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_relationshipstatusForm('detailinfo','updateload',rec.get('relationshipstatus_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Relationshipstatus',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_relationshipstatus function


// designer resultdisplay

function gridViewdesigner_resultdisplay(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_resultdisplay = Ext.get('gridViewdesigner_resultdisplay');	

	Ext.define('Designer_resultdisplay', {
    extend: 'Ext.data.Model',
	fields:['resultdisplay_id','resultdisplay_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_resultdisplay',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_resultdisplay',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Resultdisplay Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'resultdisplay_id'
		 },
		 {
		text     : ' Resultdisplay Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'resultdisplay_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_resultdisplayForm('detailinfo','updateload',rec.get('resultdisplay_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Resultdisplay',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_resultdisplay function


// designer sectparent

function gridViewdesigner_sectparent(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_sectparent = Ext.get('gridViewdesigner_sectparent');	

	Ext.define('Designer_sectparent', {
    extend: 'Ext.data.Model',
	fields:['sectparent_id','sectparent_tablelist','child_tablelist']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_sectparent',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_sectparent',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Sectparent Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'sectparent_id'
		 },
		 {
		text     : ' Sectparent Tablelist ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'sectparent_tablelist'
		 },
		 {
		text     : ' Child Tablelist ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'child_tablelist'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_sectparentForm('detailinfo','updateload',rec.get('sectparent_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Sectparent',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_sectparent function


// designer sform

function gridViewdesigner_sform(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_sform = Ext.get('gridViewdesigner_sform');	

	Ext.define('Designer_sform', {
    extend: 'Ext.data.Model',
	fields:['sform_id','sform_name','active','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_sform',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_sform',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Sform Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'sform_id'
		 },
		 {
		text     : ' Sform Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'sform_name'
		 },
		 {
		text     : ' Active ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'active'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_sformForm('detailinfo','updateload',rec.get('sform_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Sform',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_sform function


// designer sview

function gridViewdesigner_sview(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_sview = Ext.get('gridViewdesigner_sview');	

	Ext.define('Designer_sview', {
    extend: 'Ext.data.Model',
	fields:['sview_id','sview_name','context_menu','main_caption']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_sview',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_sview',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Sview Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'sview_id'
		 },
		 {
		text     : ' Sview Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'sview_name'
		 },
		 {
		text     : ' Context Menu ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'context_menu'
		 },
		 {
		text     : ' Main Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'main_caption'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_sviewForm('detailinfo','updateload',rec.get('sview_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Sview',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_sview function


// designer sysaction

function gridViewdesigner_sysaction(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_sysaction = Ext.get('gridViewdesigner_sysaction');	

	Ext.define('Designer_sysaction', {
    extend: 'Ext.data.Model',
	fields:['sysaction_id','sysaction_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_sysaction',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_sysaction',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Sysaction Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'sysaction_id'
		 },
		 {
		text     : ' Sysaction Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'sysaction_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_sysactionForm('detailinfo','updateload',rec.get('sysaction_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Sysaction',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_sysaction function


// designer sysmodules

function gridViewdesigner_sysmodules(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_sysmodules = Ext.get('gridViewdesigner_sysmodules');	

	Ext.define('Designer_sysmodules', {
    extend: 'Ext.data.Model',
	fields:['sysmodules_id','sysmodules_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_sysmodules',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_sysmodules',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Sysmodules Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'sysmodules_id'
		 },
		 {
		text     : ' Sysmodules Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'sysmodules_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_sysmodulesForm('detailinfo','updateload',rec.get('sysmodules_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Sysmodules',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_sysmodules function


// designer systemclass

function gridViewdesigner_systemclass(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_systemclass = Ext.get('gridViewdesigner_systemclass');	

	Ext.define('Designer_systemclass', {
    extend: 'Ext.data.Model',
	fields:['systemclass_id','systemclass_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_systemclass',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_systemclass',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Systemclass Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'systemclass_id'
		 },
		 {
		text     : ' Systemclass Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'systemclass_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_systemclassForm('detailinfo','updateload',rec.get('systemclass_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Systemclass',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_systemclass function


// designer sytable

function gridViewdesigner_sytable(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_sytable = Ext.get('gridViewdesigner_sytable');	

	Ext.define('Designer_sytable', {
    extend: 'Ext.data.Model',
	fields:['sytable_id','sytable_tablelist','invisible']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_sytable',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_sytable',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Sytable Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'sytable_id'
		 },
		 {
		text     : ' Sytable Tablelist ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'sytable_tablelist'
		 },
		 {
		text     : ' Invisible ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'invisible'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_sytableForm('detailinfo','updateload',rec.get('sytable_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Sytable',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_sytable function


// designer tableaction

function gridViewdesigner_tableaction(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_tableaction = Ext.get('gridViewdesigner_tableaction');	

	Ext.define('Designer_tableaction', {
    extend: 'Ext.data.Model',
	fields:['tableaction_id','primary_tablelist','sysaction_name','resultdisplay_name','activity_stage']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_tableaction',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_tableaction',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Tableaction Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tableaction_id'
		 },
		 {
		text     : ' Primary Tablelist ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'primary_tablelist'
		 },
		 {
		text     : ' Sysaction Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'sysaction_name'
		 },
		 {
		text     : ' Resultdisplay Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'resultdisplay_name'
		 },
		 {
		text     : ' Activity Stage ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'activity_stage'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_tableactionForm('detailinfo','updateload',rec.get('tableaction_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Tableaction',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_tableaction function


// designer tabmngr

function gridViewdesigner_tabmngr(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_tabmngr = Ext.get('gridViewdesigner_tabmngr');	

	Ext.define('Designer_tabmngr', {
    extend: 'Ext.data.Model',
	fields:['tabmngr_id','sform_name','sview_name','displaycolumns','collapsible','hideLabel','collapsed','is_primary','tablelist_secondary','secondary_position','display_caption','viewmode_name','viewicon_name','fieldlist_visible']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_tabmngr',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_tabmngr',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Tabmngr Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tabmngr_id'
		 },
		 {
		text     : ' Sform Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'sform_name'
		 },
		 {
		text     : ' Sview Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'sview_name'
		 },
		 {
		text     : ' Displaycolumns ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'displaycolumns'
		 },
		 {
		text     : ' Collapsible ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'collapsible'
		 },
		 {
		text     : ' HideLabel ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'hideLabel'
		 },
		 {
		text     : ' Collapsed ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'collapsed'
		 },
		 {
		text     : ' Is Primary ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'is_primary'
		 },
		 {
		text     : ' Tablelist Secondary ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tablelist_secondary'
		 },
		 {
		text     : ' Secondary Position ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'secondary_position'
		 },
		 {
		text     : ' Display Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'display_caption'
		 },
		 {
		text     : ' Viewmode Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'viewmode_name'
		 },
		 {
		text     : ' Viewicon Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'viewicon_name'
		 },
		 {
		text     : ' Fieldlist Visible ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fieldlist_visible'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_tabmngrForm('detailinfo','updateload',rec.get('tabmngr_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Tabmngr',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_tabmngr function


// designer tbgrplsubgrp

function gridViewdesigner_tbgrplsubgrp(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_tbgrplsubgrp = Ext.get('gridViewdesigner_tbgrplsubgrp');	

	Ext.define('Designer_tbgrplsubgrp', {
    extend: 'Ext.data.Model',
	fields:['tbgrplsubgrp_id','tblsubgrp_name','tblgroup_name','position','caption']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_tbgrplsubgrp',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_tbgrplsubgrp',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Tbgrplsubgrp Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tbgrplsubgrp_id'
		 },
		 {
		text     : ' Tblsubgrp Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'tblsubgrp_name'
		 },
		 {
		text     : ' Tblgroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tblgroup_name'
		 },
		 {
		text     : ' Position ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'position'
		 },
		 {
		text     : ' Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'caption'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_tbgrplsubgrpForm('detailinfo','updateload',rec.get('tbgrplsubgrp_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Tbgrplsubgrp',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_tbgrplsubgrp function


// designer tblgroup

function gridViewdesigner_tblgroup(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_tblgroup = Ext.get('gridViewdesigner_tblgroup');	

	Ext.define('Designer_tblgroup', {
    extend: 'Ext.data.Model',
	fields:['tblgroup_id','tblgroup_name','caption']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_tblgroup',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_tblgroup',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Tblgroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tblgroup_id'
		 },
		 {
		text     : ' Tblgroup Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'tblgroup_name'
		 },
		 {
		text     : ' Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'caption'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_tblgroupForm('detailinfo','updateload',rec.get('tblgroup_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Tblgroup',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_tblgroup function


// designer tblrelation

function gridViewdesigner_tblrelation(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_tblrelation = Ext.get('gridViewdesigner_tblrelation');	

	Ext.define('Designer_tblrelation', {
    extend: 'Ext.data.Model',
	fields:['tblrelation_id','person_name','personrelated_to','relationship_name','relationshipstatus_name','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_tblrelation',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_tblrelation',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Tblrelation Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tblrelation_id'
		 },
		 {
		text     : ' Person Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : ' Personrelated To ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'personrelated_to'
		 },
		 {
		text     : ' Relationship Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'relationship_name'
		 },
		 {
		text     : ' Relationshipstatus Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'relationshipstatus_name'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_tblrelationForm('detailinfo','updateload',rec.get('tblrelation_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Tblrelation',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_tblrelation function


// designer tblsubgrp

function gridViewdesigner_tblsubgrp(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_tblsubgrp = Ext.get('gridViewdesigner_tblsubgrp');	

	Ext.define('Designer_tblsubgrp', {
    extend: 'Ext.data.Model',
	fields:['tblsubgrp_id','tblsubgrp_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_tblsubgrp',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_tblsubgrp',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Tblsubgrp Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tblsubgrp_id'
		 },
		 {
		text     : ' Tblsubgrp Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'tblsubgrp_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_tblsubgrpForm('detailinfo','updateload',rec.get('tblsubgrp_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Tblsubgrp',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_tblsubgrp function


// designer tblsummary

function gridViewdesigner_tblsummary(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_tblsummary = Ext.get('gridViewdesigner_tblsummary');	

	Ext.define('Designer_tblsummary', {
    extend: 'Ext.data.Model',
	fields:['tblsummary_id','aggrigate_tablelist','aggrigate_field','aggrigate_caption','aggrigatetype_name','preaggrigate_name','is_visible']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_tblsummary',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_tblsummary',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Tblsummary Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tblsummary_id'
		 },
		 {
		text     : ' Aggrigate Tablelist ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'aggrigate_tablelist'
		 },
		 {
		text     : ' Aggrigate Field ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'aggrigate_field'
		 },
		 {
		text     : ' Aggrigate Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'aggrigate_caption'
		 },
		 {
		text     : ' Aggrigatetype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'aggrigatetype_name'
		 },
		 {
		text     : ' Preaggrigate Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'preaggrigate_name'
		 },
		 {
		text     : ' Is Visible ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'is_visible'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_tblsummaryForm('detailinfo','updateload',rec.get('tblsummary_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Tblsummary',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_tblsummary function


// designer viewicon

function gridViewdesigner_viewicon(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_viewicon = Ext.get('gridViewdesigner_viewicon');	

	Ext.define('Designer_viewicon', {
    extend: 'Ext.data.Model',
	fields:['viewicon_id','viewicon_name','viewicon_image']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_viewicon',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_viewicon',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Viewicon Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'viewicon_id'
		 },
		 {
		text     : ' Viewicon Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'viewicon_name'
		 },
		 {
		text     : ' Viewicon Image ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'viewicon_image'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_viewiconForm('detailinfo','updateload',rec.get('viewicon_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Viewicon',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_viewicon function


// designer viewmode

function gridViewdesigner_viewmode(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_viewmode = Ext.get('gridViewdesigner_viewmode');	

	Ext.define('Designer_viewmode', {
    extend: 'Ext.data.Model',
	fields:['viewmode_id','viewmode_name','viewmode_status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_viewmode',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_viewmode',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Viewmode Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'viewmode_id'
		 },
		 {
		text     : ' Viewmode Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'viewmode_name'
		 },
		 {
		text     : ' Viewmode Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'viewmode_status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_viewmodeForm('detailinfo','updateload',rec.get('viewmode_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Viewmode',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_viewmode function


// designer viewphoto

function gridViewdesigner_viewphoto(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtndesigner_viewphoto = Ext.get('gridViewdesigner_viewphoto');	

	Ext.define('Designer_viewphoto', {
    extend: 'Ext.data.Model',
	fields:['viewphoto_id','sview_name','show_photo']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Designer_viewphoto',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=designer_viewphoto',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Viewphoto Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'viewphoto_id'
		 },
		 {
		text     : ' Sview Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'sview_name'
		 },
		 {
		text     : ' Show Photo ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'show_photo'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

designer_viewphotoForm('detailinfo','updateload',rec.get('viewphoto_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Designer Viewphoto',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewdesigner_viewphoto function


// form amrsconcepts

function gridViewform_amrsconcepts(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_amrsconcepts = Ext.get('gridViewform_amrsconcepts');	

	Ext.define('Form_amrsconcepts', {
    extend: 'Ext.data.Model',
	fields:['amrsconcepts_id','amrsconceptid','amrsconceptname','Description','Synonyms','Answers','Set_Members','Class','Datatype','Creator']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_amrsconcepts',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_amrsconcepts',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Amrsconcepts Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amrsconcepts_id'
		 },
		 {
		text     : ' Amrsconceptid ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'amrsconceptid'
		 },
		 {
		text     : ' Amrsconceptname ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amrsconceptname'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Description'
		 },
		 {
		text     : ' Synonyms ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Synonyms'
		 },
		 {
		text     : ' Answers ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Answers'
		 },
		 {
		text     : ' Set Members ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Set_Members'
		 },
		 {
		text     : ' Class ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Class'
		 },
		 {
		text     : ' Datatype ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Datatype'
		 },
		 {
		text     : ' Creator ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Creator'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_amrsconceptsForm('detailinfo','updateload',rec.get('amrsconcepts_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Amrsconcepts',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_amrsconcepts function


// form amrsdefault

function gridViewform_amrsdefault(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_amrsdefault = Ext.get('gridViewform_amrsdefault');	

	Ext.define('Form_amrsdefault', {
    extend: 'Ext.data.Model',
	fields:['amrsdefault_id','amrsdefault_name','caption','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_amrsdefault',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_amrsdefault',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Amrsdefault Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amrsdefault_id'
		 },
		 {
		text     : ' Amrsdefault Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'amrsdefault_name'
		 },
		 {
		text     : ' Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'caption'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_amrsdefaultForm('detailinfo','updateload',rec.get('amrsdefault_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Amrsdefault',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_amrsdefault function


// form amrsdefaultformfield

function gridViewform_amrsdefaultformfield(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_amrsdefaultformfield = Ext.get('gridViewform_amrsdefaultformfield');	

	Ext.define('Form_amrsdefaultformfield', {
    extend: 'Ext.data.Model',
	fields:['amrsdefaultformfield_id','amrsdefault_name','form_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_amrsdefaultformfield',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_amrsdefaultformfield',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Amrsdefaultformfield Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amrsdefaultformfield_id'
		 },
		 {
		text     : ' Amrsdefault Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'amrsdefault_name'
		 },
		 {
		text     : ' Form Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'form_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_amrsdefaultformfieldForm('detailinfo','updateload',rec.get('amrsdefaultformfield_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Amrsdefaultformfield',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_amrsdefaultformfield function


// form amrsformquestion

function gridViewform_amrsformquestion(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_amrsformquestion = Ext.get('gridViewform_amrsformquestion');	

	Ext.define('Form_amrsformquestion', {
    extend: 'Ext.data.Model',
	fields:['amrsformquestion_id','form_name','amrsgroup_name','group_name','subgroup_name','displaytype_name','stype','scnname','part','openmrs_column','relevance','assign_score','scncaption','amrsconceptid','amrsconceptname','screenposition','Datatype']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_amrsformquestion',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_amrsformquestion',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Amrsformquestion Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amrsformquestion_id'
		 },
		 {
		text     : ' Form Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'form_name'
		 },
		 {
		text     : ' Amrsgroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amrsgroup_name'
		 },
		 {
		text     : ' Group Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'group_name'
		 },
		 {
		text     : ' Subgroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'subgroup_name'
		 },
		 {
		text     : ' Displaytype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'displaytype_name'
		 },
		 {
		text     : ' Stype ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'stype'
		 },
		 {
		text     : ' Scnname ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'scnname'
		 },
		 {
		text     : ' Part ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'part'
		 },
		 {
		text     : ' Openmrs Column ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'openmrs_column'
		 },
		 {
		text     : ' Relevance ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'relevance'
		 },
		 {
		text     : ' Assign Score ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'assign_score'
		 },
		 {
		text     : ' Scncaption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'scncaption'
		 },
		 {
		text     : ' Amrsconceptid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amrsconceptid'
		 },
		 {
		text     : ' Amrsconceptname ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amrsconceptname'
		 },
		 {
		text     : ' Screenposition ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'screenposition'
		 },
		 {
		text     : ' Datatype ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Datatype'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_amrsformquestionForm('detailinfo','updateload',rec.get('amrsformquestion_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Amrsformquestion',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_amrsformquestion function


// form change

function gridViewform_change(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_change = Ext.get('gridViewform_change');	

	Ext.define('Form_change', {
    extend: 'Ext.data.Model',
	fields:['change_id','form_name','change_description','status','changedby','change_date']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_change',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_change',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Change Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'change_id'
		 },
		 {
		text     : ' Form Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'form_name'
		 },
		 {
		text     : ' Change Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'change_description'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
		text     : ' Changedby ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'changedby'
		 },
		 {
		text     : ' Change Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'change_date'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_changeForm('detailinfo','updateload',rec.get('change_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Change',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_change function


// form createform

function gridViewform_createform(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_createform = Ext.get('gridViewform_createform');	

	Ext.define('Form_createform', {
    extend: 'Ext.data.Model',
	fields:['createform_id','createform_name','form_name','formquestion_name','formquestionanswer_name','group_name','subgroup_name','snp_status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_createform',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_createform',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Createform Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'createform_id'
		 },
		 {
		text     : ' Createform Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'createform_name'
		 },
		 {
		text     : ' Form Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'form_name'
		 },
		 {
		text     : ' Formquestion Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formquestion_name'
		 },
		 {
		text     : ' Formquestionanswer Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formquestionanswer_name'
		 },
		 {
		text     : ' Group Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'group_name'
		 },
		 {
		text     : ' Subgroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'subgroup_name'
		 },
		 {
		text     : ' Snp Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'snp_status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_createformForm('detailinfo','updateload',rec.get('createform_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Createform',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_createform function


// form formbind

function gridViewform_formbind(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_formbind = Ext.get('gridViewform_formbind');	

	Ext.define('Form_formbind', {
    extend: 'Ext.data.Model',
	fields:['formbind_id','form_name','amrsgroup_name','formquestion_name','formquestionanswer_name','constraint_name','enforce_creteria']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_formbind',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_formbind',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Formbind Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formbind_id'
		 },
		 {
		text     : ' Form Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'form_name'
		 },
		 {
		text     : ' Amrsgroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amrsgroup_name'
		 },
		 {
		text     : ' Formquestion Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formquestion_name'
		 },
		 {
		text     : ' Formquestionanswer Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formquestionanswer_name'
		 },
		 {
		text     : ' Constraint Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'constraint_name'
		 },
		 {
		text     : ' Enforce Creteria ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'enforce_creteria'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_formbindForm('detailinfo','updateload',rec.get('formbind_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Formbind',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_formbind function


// form formitem

function gridViewform_formitem(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_formitem = Ext.get('gridViewform_formitem');	

	Ext.define('Form_formitem', {
    extend: 'Ext.data.Model',
	fields:['formitem_id','form_name','formquestion_name','formquestionanswer_name','constraint_name','enforce_creteria']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_formitem',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_formitem',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Formitem Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formitem_id'
		 },
		 {
		text     : ' Form Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'form_name'
		 },
		 {
		text     : ' Formquestion Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formquestion_name'
		 },
		 {
		text     : ' Formquestionanswer Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formquestionanswer_name'
		 },
		 {
		text     : ' Constraint Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'constraint_name'
		 },
		 {
		text     : ' Enforce Creteria ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'enforce_creteria'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_formitemForm('detailinfo','updateload',rec.get('formitem_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Formitem',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_formitem function


// form formquestion

function gridViewform_formquestion(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_formquestion = Ext.get('gridViewform_formquestion');	

	Ext.define('Form_formquestion', {
    extend: 'Ext.data.Model',
	fields:['formquestion_id','formquestion_name','question_concept_id','question_concept_name','question_concept_display']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_formquestion',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_formquestion',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Formquestion Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formquestion_id'
		 },
		 {
		text     : ' Formquestion Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'formquestion_name'
		 },
		 {
		text     : ' Question Concept Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'question_concept_id'
		 },
		 {
		text     : ' Question Concept Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'question_concept_name'
		 },
		 {
		text     : ' Question Concept Display ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'question_concept_display'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_formquestionForm('detailinfo','updateload',rec.get('formquestion_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Formquestion',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_formquestion function


// form formquestionanswer

function gridViewform_formquestionanswer(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_formquestionanswer = Ext.get('gridViewform_formquestionanswer');	

	Ext.define('Form_formquestionanswer', {
    extend: 'Ext.data.Model',
	fields:['formquestionanswer_id','formquestion_name','formquestionanswer_name','conceptID','conceptName','displayconceptcaption']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_formquestionanswer',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_formquestionanswer',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Formquestionanswer Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formquestionanswer_id'
		 },
		 {
		text     : ' Formquestion Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'formquestion_name'
		 },
		 {
		text     : ' Formquestionanswer Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formquestionanswer_name'
		 },
		 {
		text     : ' ConceptID ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'conceptID'
		 },
		 {
		text     : ' ConceptName ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'conceptName'
		 },
		 {
		text     : ' Displayconceptcaption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'displayconceptcaption'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_formquestionanswerForm('detailinfo','updateload',rec.get('formquestionanswer_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Formquestionanswer',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_formquestionanswer function


// form item

function gridViewform_item(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_item = Ext.get('gridViewform_item');	

	Ext.define('Form_item', {
    extend: 'Ext.data.Model',
	fields:['item_id','item_name','item_description','date_purchased']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_item',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_item',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Item Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'item_id'
		 },
		 {
		text     : ' Item Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'item_name'
		 },
		 {
		text     : ' Item Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'item_description'
		 },
		 {
		text     : ' Date Purchased ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_purchased'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_itemForm('detailinfo','updateload',rec.get('item_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Item',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_item function


// mobile form

function gridViewmobile_form(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnmobile_form = Ext.get('gridViewmobile_form');	

	Ext.define('Mobile_form', {
    extend: 'Ext.data.Model',
	fields:['form_id','form_name','formid','form_title','xmlns_openmrs','xmlns_xd','form_version','program_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Mobile_form',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=mobile_form',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Form Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'form_id'
		 },
		 {
		text     : ' Form Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'form_name'
		 },
		 {
		text     : ' Formid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formid'
		 },
		 {
		text     : ' Form Title ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'form_title'
		 },
		 {
		text     : ' Xmlns Openmrs ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'xmlns_openmrs'
		 },
		 {
		text     : ' Xmlns Xd ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'xmlns_xd'
		 },
		 {
		text     : ' Form Version ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'form_version'
		 },
		 {
		text     : ' Program Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'program_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

mobile_formForm('detailinfo','updateload',rec.get('form_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Mobile Form',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewmobile_form function


// mobile program

function gridViewmobile_program(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnmobile_program = Ext.get('gridViewmobile_program');	

	Ext.define('Mobile_program', {
    extend: 'Ext.data.Model',
	fields:['program_id','program_name','program_description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Mobile_program',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=mobile_program',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Program Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'program_id'
		 },
		 {
		text     : ' Program Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'program_name'
		 },
		 {
		text     : ' Program Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'program_description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

mobile_programForm('detailinfo','updateload',rec.get('program_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Mobile Program',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewmobile_program function


// structure amrsgroup

function gridViewstructure_amrsgroup(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnstructure_amrsgroup = Ext.get('gridViewstructure_amrsgroup');	

	Ext.define('Structure_amrsgroup', {
    extend: 'Ext.data.Model',
	fields:['amrsgroup_id','amrsgroup_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Structure_amrsgroup',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=structure_amrsgroup',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Amrsgroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amrsgroup_id'
		 },
		 {
		text     : ' Amrsgroup Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'amrsgroup_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

structure_amrsgroupForm('detailinfo','updateload',rec.get('amrsgroup_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Structure Amrsgroup',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewstructure_amrsgroup function


// structure constraint

function gridViewstructure_constraint(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnstructure_constraint = Ext.get('gridViewstructure_constraint');	

	Ext.define('Structure_constraint', {
    extend: 'Ext.data.Model',
	fields:['constraint_id','constraint_name','constraint_condition','constraint_description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Structure_constraint',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=structure_constraint',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Constraint Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'constraint_id'
		 },
		 {
		text     : ' Constraint Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'constraint_name'
		 },
		 {
		text     : ' Constraint Condition ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'constraint_condition'
		 },
		 {
		text     : ' Constraint Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'constraint_description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

structure_constraintForm('detailinfo','updateload',rec.get('constraint_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Structure Constraint',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewstructure_constraint function


// structure datatype

function gridViewstructure_datatype(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnstructure_datatype = Ext.get('gridViewstructure_datatype');	

	Ext.define('Structure_datatype', {
    extend: 'Ext.data.Model',
	fields:['datatype_id','datatype_name','datatype_code','datatype_description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Structure_datatype',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=structure_datatype',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Datatype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'datatype_id'
		 },
		 {
		text     : ' Datatype Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'datatype_name'
		 },
		 {
		text     : ' Datatype Code ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'datatype_code'
		 },
		 {
		text     : ' Datatype Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'datatype_description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

structure_datatypeForm('detailinfo','updateload',rec.get('datatype_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Structure Datatype',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewstructure_datatype function


// structure displaytype

function gridViewstructure_displaytype(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnstructure_displaytype = Ext.get('gridViewstructure_displaytype');	

	Ext.define('Structure_displaytype', {
    extend: 'Ext.data.Model',
	fields:['displaytype_id','displaytype_name','displaytype_description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Structure_displaytype',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=structure_displaytype',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Displaytype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'displaytype_id'
		 },
		 {
		text     : ' Displaytype Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'displaytype_name'
		 },
		 {
		text     : ' Displaytype Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'displaytype_description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

structure_displaytypeForm('detailinfo','updateload',rec.get('displaytype_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Structure Displaytype',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewstructure_displaytype function


// structure formconstraint

function gridViewstructure_formconstraint(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnstructure_formconstraint = Ext.get('gridViewstructure_formconstraint');	

	Ext.define('Structure_formconstraint', {
    extend: 'Ext.data.Model',
	fields:['formconstraint_id','form_name','formitem_name','constraint_name','formconstraint_name','formconstraint_condition','formconstraint_success','formconstraint_failure','formconstraint_description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Structure_formconstraint',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=structure_formconstraint',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Formconstraint Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formconstraint_id'
		 },
		 {
		text     : ' Form Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'form_name'
		 },
		 {
		text     : ' Formitem Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formitem_name'
		 },
		 {
		text     : ' Constraint Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'constraint_name'
		 },
		 {
		text     : ' Formconstraint Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formconstraint_name'
		 },
		 {
		text     : ' Formconstraint Condition ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formconstraint_condition'
		 },
		 {
		text     : ' Formconstraint Success ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formconstraint_success'
		 },
		 {
		text     : ' Formconstraint Failure ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formconstraint_failure'
		 },
		 {
		text     : ' Formconstraint Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'formconstraint_description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

structure_formconstraintForm('detailinfo','updateload',rec.get('formconstraint_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Structure Formconstraint',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewstructure_formconstraint function


// structure group

function gridViewstructure_group(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnstructure_group = Ext.get('gridViewstructure_group');	

	Ext.define('Structure_group', {
    extend: 'Ext.data.Model',
	fields:['group_id','group_name','group_description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Structure_group',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=structure_group',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Group Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'group_id'
		 },
		 {
		text     : ' Group Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'group_name'
		 },
		 {
		text     : ' Group Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'group_description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

structure_groupForm('detailinfo','updateload',rec.get('group_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Structure Group',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewstructure_group function


// structure subgroup

function gridViewstructure_subgroup(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnstructure_subgroup = Ext.get('gridViewstructure_subgroup');	

	Ext.define('Structure_subgroup', {
    extend: 'Ext.data.Model',
	fields:['subgroup_id','subgroup_name','subgroup_description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Structure_subgroup',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=structure_subgroup',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Subgroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'subgroup_id'
		 },
		 {
		text     : ' Subgroup Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'subgroup_name'
		 },
		 {
		text     : ' Subgroup Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'subgroup_description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

structure_subgroupForm('detailinfo','updateload',rec.get('subgroup_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Structure Subgroup',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewstructure_subgroup function


// form migratedform

function gridViewform_migratedform(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_migratedform = Ext.get('gridViewform_migratedform');	

	Ext.define('Form_migratedform', {
    extend: 'Ext.data.Model',
	fields:['migratedform_id','migratedform_name','form_date','description','attachments']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_migratedform',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_migratedform',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Migratedform Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'migratedform_id'
		 },
		 {
		text     : ' Migratedform Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'migratedform_name'
		 },
		 {
		text     : ' Form Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'form_date'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
		text     : ' Attachments ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'attachments'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_migratedformForm('detailinfo','updateload',rec.get('migratedform_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Migratedform',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_migratedform function


// form migratedforminfo

function gridViewform_migratedforminfo(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnform_migratedforminfo = Ext.get('gridViewform_migratedforminfo');	

	Ext.define('Form_migratedforminfo', {
    extend: 'Ext.data.Model',
	fields:['migratedforminfo_id','migratedform_name','type','binding','parent_binding','text','help_text']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Form_migratedforminfo',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=form_migratedforminfo',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Migratedforminfo Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'migratedforminfo_id'
		 },
		 {
		text     : ' Migratedform Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'migratedform_name'
		 },
		 {
		text     : ' Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'type'
		 },
		 {
		text     : ' Binding ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'binding'
		 },
		 {
		text     : ' Parent Binding ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'parent_binding'
		 },
		 {
		text     : ' Text ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'text'
		 },
		 {
		text     : ' Help Text ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'help_text'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

form_migratedforminfoForm('detailinfo','updateload',rec.get('migratedforminfo_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Form Migratedforminfo',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewform_migratedforminfo function


// reports report

function gridViewreports_report(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnreports_report = Ext.get('gridViewreports_report');	

	Ext.define('Reports_report', {
    extend: 'Ext.data.Model',
	fields:['report_id','report_name','report_tablelist','role_name','status_view','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Reports_report',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=reports_report',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Report Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'report_id'
		 },
		 {
		text     : ' Report Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'report_name'
		 },
		 {
		text     : ' Report Tablelist ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'report_tablelist'
		 },
		 {
		text     : ' Role Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'role_name'
		 },
		 {
		text     : ' Status View ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status_view'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

reports_reportForm('detailinfo','updateload',rec.get('report_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Reports Report',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewreports_report function


// admin workticket

function gridViewadmin_workticket(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_workticket = Ext.get('gridViewadmin_workticket');	

	Ext.define('Admin_workticket', {
    extend: 'Ext.data.Model',
	fields:['workticket_id','workticket_name','rolenotificationhist_name','person_name','description','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_workticket',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_workticket',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Workticket Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'workticket_id'
		 },
		 {
		text     : ' Workticket Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'workticket_name'
		 },
		 {
		text     : ' Rolenotificationhist Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rolenotificationhist_name'
		 },
		 {
		text     : ' Person Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_workticketForm('detailinfo','updateload',rec.get('workticket_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Workticket',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_workticket function


// insurance dbnotetransact

function gridViewinsurance_dbnotetransact(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_dbnotetransact = Ext.get('gridViewinsurance_dbnotetransact');	

	Ext.define('Insurance_dbnotetransact', {
    extend: 'Ext.data.Model',
	fields:['dbnotetransact_id','insurancedebitnote_name','dbnotetransact_name','receipt_number','receipt_amount','receipt_date']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_dbnotetransact',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_dbnotetransact',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Dbnotetransact Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'dbnotetransact_id'
		 },
		 {
		text     : ' Insurancedebitnote Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'insurancedebitnote_name'
		 },
		 {
		text     : ' Dbnotetransact Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'dbnotetransact_name'
		 },
		 {
		text     : ' Receipt Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'receipt_number'
		 },
		 {
		text     : ' Receipt Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'receipt_amount'
		 },
		 {
		text     : ' Receipt Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'receipt_date'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_dbnotetransactForm('detailinfo','updateload',rec.get('dbnotetransact_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Dbnotetransact',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_dbnotetransact function


// insurance insuranceclass

function gridViewinsurance_insuranceclass(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_insuranceclass = Ext.get('gridViewinsurance_insuranceclass');	

	Ext.define('Insurance_insuranceclass', {
    extend: 'Ext.data.Model',
	fields:['insuranceclass_id','insuranceclass_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_insuranceclass',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_insuranceclass',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Insuranceclass Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'insuranceclass_id'
		 },
		 {
		text     : ' Insuranceclass Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'insuranceclass_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_insuranceclassForm('detailinfo','updateload',rec.get('insuranceclass_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Insuranceclass',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_insuranceclass function


// insurance insurancedebitnote

function gridViewinsurance_insurancedebitnote(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_insurancedebitnote = Ext.get('gridViewinsurance_insurancedebitnote');	

	Ext.define('Insurance_insurancedebitnote', {
    extend: 'Ext.data.Model',
	fields:['insurancedebitnote_id','insurancedebitnote_name','policy_number','underwriter_name','person_name','other_details','currency_name','pcf','training_levy','stamp_duty','wtax','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_insurancedebitnote',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_insurancedebitnote',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Insurancedebitnote Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'insurancedebitnote_id'
		 },
		 {
		text     : ' Insurancedebitnote Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'insurancedebitnote_name'
		 },
		 {
		text     : ' Policy Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policy_number'
		 },
		 {
		text     : ' Underwriter Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'underwriter_name'
		 },
		 {
		text     : ' Person Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : ' Other Details ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'other_details'
		 },
		 {
		text     : ' Currency Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'currency_name'
		 },
		 {
		text     : ' Pcf ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'pcf'
		 },
		 {
		text     : ' Training Levy ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'training_levy'
		 },
		 {
		text     : ' Stamp Duty ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'stamp_duty'
		 },
		 {
		text     : ' Wtax ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'wtax'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_insurancedebitnoteForm('detailinfo','updateload',rec.get('insurancedebitnote_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Insurancedebitnote',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_insurancedebitnote function


// insurance insurancedebitnoteitems

function gridViewinsurance_insurancedebitnoteitems(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_insurancedebitnoteitems = Ext.get('gridViewinsurance_insurancedebitnoteitems');	

	Ext.define('Insurance_insurancedebitnoteitems', {
    extend: 'Ext.data.Model',
	fields:['insurancedebitnoteitems_id','insuranceclass_name','insurancedebitnote_name','policyscope_name','period_from','period_to','description','basic_premium','commission','amount_insured']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_insurancedebitnoteitems',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_insurancedebitnoteitems',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Insurancedebitnoteitems Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'insurancedebitnoteitems_id'
		 },
		 {
		text     : ' Insuranceclass Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'insuranceclass_name'
		 },
		 {
		text     : ' Insurancedebitnote Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'insurancedebitnote_name'
		 },
		 {
		text     : ' Policyscope Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policyscope_name'
		 },
		 {
		text     : ' Period From ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'period_from'
		 },
		 {
		text     : ' Period To ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'period_to'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
		text     : ' Basic Premium ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'basic_premium'
		 },
		 {
		text     : ' Commission ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'commission'
		 },
		 {
		text     : ' Amount Insured ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount_insured'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_insurancedebitnoteitemsForm('detailinfo','updateload',rec.get('insurancedebitnoteitems_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Insurancedebitnoteitems',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_insurancedebitnoteitems function


// insurance underwriter

function gridViewinsurance_underwriter(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_underwriter = Ext.get('gridViewinsurance_underwriter');	

	Ext.define('Insurance_underwriter', {
    extend: 'Ext.data.Model',
	fields:['underwriter_id','underwriter_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_underwriter',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_underwriter',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Underwriter Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'underwriter_id'
		 },
		 {
		text     : ' Underwriter Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'underwriter_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_underwriterForm('detailinfo','updateload',rec.get('underwriter_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Underwriter',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_underwriter function


// bank bankaccount

function gridViewbank_bankaccount(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnbank_bankaccount = Ext.get('gridViewbank_bankaccount');	

	Ext.define('Bank_bankaccount', {
    extend: 'Ext.data.Model',
	fields:['bankaccount_id','syowner','syownerid','bankaccount_name','bank','branch','currency_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Bank_bankaccount',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=bank_bankaccount',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Bankaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bankaccount_id'
		 },
		 {
		text     : ' Syowner ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'syowner'
		 },
		 {
		text     : ' Syownerid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syownerid'
		 },
		 {
		text     : ' Bankaccount Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bankaccount_name'
		 },
		 {
		text     : ' Bank ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bank'
		 },
		 {
		text     : ' Branch ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'branch'
		 },
		 {
		text     : ' Currency Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'currency_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

bank_bankaccountForm('detailinfo','updateload',rec.get('bankaccount_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Bank Bankaccount',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewbank_bankaccount function


// bank bankstatement

function gridViewbank_bankstatement(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnbank_bankstatement = Ext.get('gridViewbank_bankstatement');	

	Ext.define('Bank_bankstatement', {
    extend: 'Ext.data.Model',
	fields:['bankstatement_id','bankaccount_name','bankstatement_name','from_date','to_date','amount','status','attachment']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Bank_bankstatement',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=bank_bankstatement',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Bankstatement Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bankstatement_id'
		 },
		 {
		text     : ' Bankaccount Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'bankaccount_name'
		 },
		 {
		text     : ' Bankstatement Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bankstatement_name'
		 },
		 {
		text     : ' From Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'from_date'
		 },
		 {
		text     : ' To Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'to_date'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
		text     : ' Attachment ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'attachment'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

bank_bankstatementForm('detailinfo','updateload',rec.get('bankstatement_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Bank Bankstatement',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewbank_bankstatement function


// bank bankstmntitems

function gridViewbank_bankstmntitems(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnbank_bankstmntitems = Ext.get('gridViewbank_bankstmntitems');	

	Ext.define('Bank_bankstmntitems', {
    extend: 'Ext.data.Model',
	fields:['bankstmntitems_id','bankstatement_name','transaction_date','transaction_type','amount','status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Bank_bankstmntitems',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=bank_bankstmntitems',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Bankstmntitems Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bankstmntitems_id'
		 },
		 {
		text     : ' Bankstatement Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'bankstatement_name'
		 },
		 {
		text     : ' Transaction Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_date'
		 },
		 {
		text     : ' Transaction Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_type'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

bank_bankstmntitemsForm('detailinfo','updateload',rec.get('bankstmntitems_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Bank Bankstmntitems',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewbank_bankstmntitems function


// insurance claimstatus

function gridViewinsurance_claimstatus(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_claimstatus = Ext.get('gridViewinsurance_claimstatus');	

	Ext.define('Insurance_claimstatus', {
    extend: 'Ext.data.Model',
	fields:['claimstatus_id','claimstatus_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_claimstatus',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_claimstatus',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Claimstatus Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'claimstatus_id'
		 },
		 {
		text     : ' Claimstatus Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'claimstatus_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_claimstatusForm('detailinfo','updateload',rec.get('claimstatus_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Claimstatus',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_claimstatus function


// insurance lossstatus

function gridViewinsurance_lossstatus(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_lossstatus = Ext.get('gridViewinsurance_lossstatus');	

	Ext.define('Insurance_lossstatus', {
    extend: 'Ext.data.Model',
	fields:['lossstatus_id','lossstatus_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_lossstatus',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_lossstatus',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Lossstatus Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'lossstatus_id'
		 },
		 {
		text     : ' Lossstatus Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'lossstatus_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_lossstatusForm('detailinfo','updateload',rec.get('lossstatus_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Lossstatus',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_lossstatus function


// insurance policy

function gridViewinsurance_policy(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policy = Ext.get('gridViewinsurance_policy');	

	Ext.define('Insurance_policy', {
    extend: 'Ext.data.Model',
	fields:['policy_id','underwriter_name','syowner','syownerid','Business','policy_name','BasicPremium','TrainingLevy','PCF','CommissionRate','s_duty','status','w_tax','GeographicalArea','Scope','document_no','cover_from','cover_to']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policy',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policy',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Policy Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policy_id'
		 },
		 {
		text     : ' Underwriter Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'underwriter_name'
		 },
		 {
		text     : ' Syowner ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syowner'
		 },
		 {
		text     : ' Syownerid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syownerid'
		 },
		 {
		text     : ' Business ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Business'
		 },
		 {
		text     : ' Policy Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policy_name'
		 },
		 {
		text     : ' BasicPremium ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'BasicPremium'
		 },
		 {
		text     : ' TrainingLevy ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'TrainingLevy'
		 },
		 {
		text     : ' PCF ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'PCF'
		 },
		 {
		text     : ' CommissionRate ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'CommissionRate'
		 },
		 {
		text     : ' S Duty ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 's_duty'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
		text     : ' W Tax ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'w_tax'
		 },
		 {
		text     : ' GeographicalArea ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'GeographicalArea'
		 },
		 {
		text     : ' Scope ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Scope'
		 },
		 {
		text     : ' Document No ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'document_no'
		 },
		 {
		text     : ' Cover From ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'cover_from'
		 },
		 {
		text     : ' Cover To ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'cover_to'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policyForm('detailinfo','updateload',rec.get('policy_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policy',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policy function


// insurance policyclaims

function gridViewinsurance_policyclaims(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policyclaims = Ext.get('gridViewinsurance_policyclaims');	

	Ext.define('Insurance_policyclaims', {
    extend: 'Ext.data.Model',
	fields:['policyclaims_id','policyclaims_name','policy_name','lossstatus_name','NatureOfLoss','DateOfLoss']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policyclaims',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policyclaims',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Policyclaims Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policyclaims_id'
		 },
		 {
		text     : ' Policyclaims Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'policyclaims_name'
		 },
		 {
		text     : ' Policy Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policy_name'
		 },
		 {
		text     : ' Lossstatus Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'lossstatus_name'
		 },
		 {
		text     : ' NatureOfLoss ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'NatureOfLoss'
		 },
		 {
		text     : ' DateOfLoss ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'DateOfLoss'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policyclaimsForm('detailinfo','updateload',rec.get('policyclaims_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policyclaims',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policyclaims function


// insurance policyclaimstatus

function gridViewinsurance_policyclaimstatus(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policyclaimstatus = Ext.get('gridViewinsurance_policyclaimstatus');	

	Ext.define('Insurance_policyclaimstatus', {
    extend: 'Ext.data.Model',
	fields:['policyclaimstatus_id','policyclaims_name','claimstatus_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policyclaimstatus',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policyclaimstatus',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Policyclaimstatus Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policyclaimstatus_id'
		 },
		 {
		text     : ' Policyclaims Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'policyclaims_name'
		 },
		 {
		text     : ' Claimstatus Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'claimstatus_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policyclaimstatusForm('detailinfo','updateload',rec.get('policyclaimstatus_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policyclaimstatus',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policyclaimstatus function


// insurance policycompensation

function gridViewinsurance_policycompensation(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policycompensation = Ext.get('gridViewinsurance_policycompensation');	

	Ext.define('Insurance_policycompensation', {
    extend: 'Ext.data.Model',
	fields:['compensation_name','policyclaims_name','Amount','status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policycompensation',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policycompensation',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Compensation Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'compensation_name'
		 },
		 {
		text     : ' Policyclaims Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'policyclaims_name'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Amount'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policycompensationForm('detailinfo','updateload',rec.get('policycompensation_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policycompensation',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policycompensation function


// insurance policydoc

function gridViewinsurance_policydoc(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policydoc = Ext.get('gridViewinsurance_policydoc');	

	Ext.define('Insurance_policydoc', {
    extend: 'Ext.data.Model',
	fields:['policydoc_id','policy_name','policydoc_name','doc_type']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policydoc',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policydoc',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Policydoc Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policydoc_id'
		 },
		 {
		text     : ' Policy Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'policy_name'
		 },
		 {
		text     : ' Policydoc Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policydoc_name'
		 },
		 {
		text     : ' Doc Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'doc_type'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policydocForm('detailinfo','updateload',rec.get('policydoc_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policydoc',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policydoc function


// insurance policygroup

function gridViewinsurance_policygroup(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policygroup = Ext.get('gridViewinsurance_policygroup');	

	Ext.define('Insurance_policygroup', {
    extend: 'Ext.data.Model',
	fields:['policygroup_id','policygroup_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policygroup',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policygroup',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Policygroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policygroup_id'
		 },
		 {
		text     : ' Policygroup Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'policygroup_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policygroupForm('detailinfo','updateload',rec.get('policygroup_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policygroup',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policygroup function


// insurance policygroupperson

function gridViewinsurance_policygroupperson(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policygroupperson = Ext.get('gridViewinsurance_policygroupperson');	

	Ext.define('Insurance_policygroupperson', {
    extend: 'Ext.data.Model',
	fields:['policygroupperson_id','policygroup_name','person_name','description','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policygroupperson',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policygroupperson',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Policygroupperson Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policygroupperson_id'
		 },
		 {
		text     : ' Policygroup Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'policygroup_name'
		 },
		 {
		text     : ' Person Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policygrouppersonForm('detailinfo','updateload',rec.get('policygroupperson_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policygroupperson',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policygroupperson function


// insurance policyrenewal

function gridViewinsurance_policyrenewal(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policyrenewal = Ext.get('gridViewinsurance_policyrenewal');	

	Ext.define('Insurance_policyrenewal', {
    extend: 'Ext.data.Model',
	fields:['policyrenewal_id','policy_name','Business','policy_name','BasicPremium','TrainingLevy','PCF','CommissionRate','s_duty','status','w_tax','GeographicalArea','Scope','document_no','cover_from','cover_to']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policyrenewal',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policyrenewal',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Policyrenewal Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policyrenewal_id'
		 },
		 {
		text     : ' Policy Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'policy_name'
		 },
		 {
		text     : ' Business ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Business'
		 },
		 {
		text     : ' Policy Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policy_name'
		 },
		 {
		text     : ' BasicPremium ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'BasicPremium'
		 },
		 {
		text     : ' TrainingLevy ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'TrainingLevy'
		 },
		 {
		text     : ' PCF ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'PCF'
		 },
		 {
		text     : ' CommissionRate ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'CommissionRate'
		 },
		 {
		text     : ' S Duty ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 's_duty'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
		text     : ' W Tax ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'w_tax'
		 },
		 {
		text     : ' GeographicalArea ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'GeographicalArea'
		 },
		 {
		text     : ' Scope ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Scope'
		 },
		 {
		text     : ' Document No ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'document_no'
		 },
		 {
		text     : ' Cover From ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'cover_from'
		 },
		 {
		text     : ' Cover To ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'cover_to'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policyrenewalForm('detailinfo','updateload',rec.get('policyrenewal_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policyrenewal',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policyrenewal function


// insurance policyrisk

function gridViewinsurance_policyrisk(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policyrisk = Ext.get('gridViewinsurance_policyrisk');	

	Ext.define('Insurance_policyrisk', {
    extend: 'Ext.data.Model',
	fields:['policyrisk_id','risk_name','policy_name','Insured_Value','comment','attachment']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policyrisk',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policyrisk',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Policyrisk Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policyrisk_id'
		 },
		 {
		text     : ' Risk Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'risk_name'
		 },
		 {
		text     : ' Policy Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policy_name'
		 },
		 {
		text     : ' Insured Value ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Insured_Value'
		 },
		 {
		text     : ' Comment ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'comment'
		 },
		 {
		text     : ' Attachment ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'attachment'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policyriskForm('detailinfo','updateload',rec.get('policyrisk_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policyrisk',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policyrisk function


// insurance policyscope

function gridViewinsurance_policyscope(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policyscope = Ext.get('gridViewinsurance_policyscope');	

	Ext.define('Insurance_policyscope', {
    extend: 'Ext.data.Model',
	fields:['policyscope_id','policyscope_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policyscope',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policyscope',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Policyscope Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policyscope_id'
		 },
		 {
		text     : ' Policyscope Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'policyscope_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policyscopeForm('detailinfo','updateload',rec.get('policyscope_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policyscope',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policyscope function


// insurance policytype

function gridViewinsurance_policytype(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policytype = Ext.get('gridViewinsurance_policytype');	

	Ext.define('Insurance_policytype', {
    extend: 'Ext.data.Model',
	fields:['policytype_id','policytype_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policytype',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policytype',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Policytype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policytype_id'
		 },
		 {
		text     : ' Policytype Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'policytype_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policytypeForm('detailinfo','updateload',rec.get('policytype_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policytype',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policytype function


// insurance underwriterpolicytype

function gridViewinsurance_underwriterpolicytype(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_underwriterpolicytype = Ext.get('gridViewinsurance_underwriterpolicytype');	

	Ext.define('Insurance_underwriterpolicytype', {
    extend: 'Ext.data.Model',
	fields:['underwriterpolicytype_id','underwriter_name','policytype_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_underwriterpolicytype',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_underwriterpolicytype',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Underwriterpolicytype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'underwriterpolicytype_id'
		 },
		 {
		text     : ' Underwriter Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'underwriter_name'
		 },
		 {
		text     : ' Policytype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policytype_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_underwriterpolicytypeForm('detailinfo','updateload',rec.get('underwriterpolicytype_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Underwriterpolicytype',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_underwriterpolicytype function


// payment bank

function gridViewpayment_bank(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnpayment_bank = Ext.get('gridViewpayment_bank');	

	Ext.define('Payment_bank', {
    extend: 'Ext.data.Model',
	fields:['bank_id','bank_name','code']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Payment_bank',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=payment_bank',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Bank Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bank_id'
		 },
		 {
		text     : ' Bank Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'bank_name'
		 },
		 {
		text     : ' Code ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'code'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

payment_bankForm('detailinfo','updateload',rec.get('bank_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Payment Bank',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewpayment_bank function


// payment currency

function gridViewpayment_currency(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnpayment_currency = Ext.get('gridViewpayment_currency');	

	Ext.define('Payment_currency', {
    extend: 'Ext.data.Model',
	fields:['currency_id','currency_code','currency_name','exchange_rate']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Payment_currency',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=payment_currency',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Currency Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'currency_id'
		 },
		 {
		text     : ' Currency Code ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'currency_code'
		 },
		 {
		text     : ' Currency Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'currency_name'
		 },
		 {
		text     : ' Exchange Rate ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'exchange_rate'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

payment_currencyForm('detailinfo','updateload',rec.get('currency_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Payment Currency',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewpayment_currency function


// accounts accaccount

function gridViewaccounts_accaccount(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_accaccount = Ext.get('gridViewaccounts_accaccount');	

	Ext.define('Accounts_accaccount', {
    extend: 'Ext.data.Model',
	fields:['accaccount_id','accaccount_name','accountname','syowner','syownerid','opening_balance','closing_balance','credit_limit','nature','balance_type']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_accaccount',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_accaccount',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Accaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accaccount_id'
		 },
		 {
		text     : ' A/C ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'accaccount_name'
		 },
		 {
		text     : ' Accountname ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accountname'
		 },
		 {
		text     : ' Syowner ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syowner'
		 },
		 {
		text     : ' Syownerid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syownerid'
		 },
		 {
		text     : ' Opening Balance ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'opening_balance'
		 },
		 {
		text     : ' Closing Balance ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'closing_balance'
		 },
		 {
		text     : ' Credit Limit ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'credit_limit'
		 },
		 {
		text     : ' Nature ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'nature'
		 },
		 {
		text     : ' Balance Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'balance_type'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_accaccountForm('detailinfo','updateload',rec.get('accaccount_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Accaccount',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_accaccount function


// accounts accountactivity

function gridViewaccounts_accountactivity(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_accountactivity = Ext.get('gridViewaccounts_accountactivity');	

	Ext.define('Accounts_accountactivity', {
    extend: 'Ext.data.Model',
	fields:['accountactivity_id','accountactivity_name','accountscategory_name','accaccount_name','currency_name','amount','transaction_type','transaction_date','naration']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_accountactivity',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_accountactivity',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Accountactivity Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accountactivity_id'
		 },
		 {
		text     : ' Accountactivity Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'accountactivity_name'
		 },
		 {
		text     : ' Accountscategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accountscategory_name'
		 },
		 {
		text     : ' Accaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accaccount_name'
		 },
		 {
		text     : ' Currency Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'currency_name'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Transaction Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_type'
		 },
		 {
		text     : ' Transaction Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_date'
		 },
		 {
		text     : ' Naration ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'naration'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_accountactivityForm('detailinfo','updateload',rec.get('accountactivity_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Accountactivity',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_accountactivity function


// accounts accountactivitymaster

function gridViewaccounts_accountactivitymaster(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_accountactivitymaster = Ext.get('gridViewaccounts_accountactivitymaster');	

	Ext.define('Accounts_accountactivitymaster', {
    extend: 'Ext.data.Model',
	fields:['accountactivitymaster_id','accountactivitymaster_name','voucher_number','voucher_type','delivery_date','total_quantity','total_amount','grant_total','currency_name','rate','naration']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_accountactivitymaster',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_accountactivitymaster',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Accountactivitymaster Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accountactivitymaster_id'
		 },
		 {
		text     : ' Accountactivitymaster Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'accountactivitymaster_name'
		 },
		 {
		text     : ' Voucher Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'voucher_number'
		 },
		 {
		text     : ' Voucher Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'voucher_type'
		 },
		 {
		text     : ' Delivery Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'delivery_date'
		 },
		 {
		text     : ' Total Quantity ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'total_quantity'
		 },
		 {
		text     : ' Total Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'total_amount'
		 },
		 {
		text     : ' Grant Total ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'grant_total'
		 },
		 {
		text     : ' Currency Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'currency_name'
		 },
		 {
		text     : ' Rate ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rate'
		 },
		 {
		text     : ' Naration ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'naration'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_accountactivitymasterForm('detailinfo','updateload',rec.get('accountactivitymaster_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Accountactivitymaster',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_accountactivitymaster function


// accounts accountscategory

function gridViewaccounts_accountscategory(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_accountscategory = Ext.get('gridViewaccounts_accountscategory');	

	Ext.define('Accounts_accountscategory', {
    extend: 'Ext.data.Model',
	fields:['accountscategory_id','chartofaccounts_name','accountscategory_name','code_number','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_accountscategory',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_accountscategory',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Accountscategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accountscategory_id'
		 },
		 {
		text     : ' Chartofaccounts Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'chartofaccounts_name'
		 },
		 {
		text     : ' Accountscategory Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accountscategory_name'
		 },
		 {
		text     : ' Code Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'code_number'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_accountscategoryForm('detailinfo','updateload',rec.get('accountscategory_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Accountscategory',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_accountscategory function


// accounts acsetting

function gridViewaccounts_acsetting(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_acsetting = Ext.get('gridViewaccounts_acsetting');	

	Ext.define('Accounts_acsetting', {
    extend: 'Ext.data.Model',
	fields:['acsetting_id','acsetting_name','acsetting_description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_acsetting',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_acsetting',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Acsetting Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'acsetting_id'
		 },
		 {
		text     : ' Acsetting Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'acsetting_name'
		 },
		 {
		text     : ' Acsetting Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'acsetting_description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_acsettingForm('detailinfo','updateload',rec.get('acsetting_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Acsetting',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_acsetting function


// accounts banktrans

function gridViewaccounts_banktrans(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_banktrans = Ext.get('gridViewaccounts_banktrans');	

	Ext.define('Accounts_banktrans', {
    extend: 'Ext.data.Model',
	fields:['banktrans_id','accaccount_name','banktrans_name','voucher_number','check_number','check_date','bankaccount_name','accountscategory_name','currency_name','amount','transaction_type','naration']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_banktrans',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_banktrans',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Banktrans Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'banktrans_id'
		 },
		 {
		text     : ' Accaccount Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'accaccount_name'
		 },
		 {
		text     : ' Banktrans Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'banktrans_name'
		 },
		 {
		text     : ' Voucher Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'voucher_number'
		 },
		 {
		text     : ' Check Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'check_number'
		 },
		 {
		text     : ' Check Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'check_date'
		 },
		 {
		text     : ' Bankaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bankaccount_name'
		 },
		 {
		text     : ' Accountscategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accountscategory_name'
		 },
		 {
		text     : ' Currency Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'currency_name'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Transaction Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_type'
		 },
		 {
		text     : ' Naration ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'naration'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_banktransForm('detailinfo','updateload',rec.get('banktrans_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Banktrans',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_banktrans function


// accounts cashtrans

function gridViewaccounts_cashtrans(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_cashtrans = Ext.get('gridViewaccounts_cashtrans');	

	Ext.define('Accounts_cashtrans', {
    extend: 'Ext.data.Model',
	fields:['cashtrans_id','accaccount_name','cashtrans_name','vouchernumber','voucher_number','accountscategory_name','currency_name','amount','transaction_type','naration']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_cashtrans',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_cashtrans',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Cashtrans Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'cashtrans_id'
		 },
		 {
		text     : ' Accaccount Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'accaccount_name'
		 },
		 {
		text     : ' Cashtrans Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'cashtrans_name'
		 },
		 {
		text     : ' Vouchernumber ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'vouchernumber'
		 },
		 {
		text     : ' Voucher Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'voucher_number'
		 },
		 {
		text     : ' Accountscategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accountscategory_name'
		 },
		 {
		text     : ' Currency Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'currency_name'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Transaction Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_type'
		 },
		 {
		text     : ' Naration ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'naration'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_cashtransForm('detailinfo','updateload',rec.get('cashtrans_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Cashtrans',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_cashtrans function


// accounts chartofaccounts

function gridViewaccounts_chartofaccounts(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_chartofaccounts = Ext.get('gridViewaccounts_chartofaccounts');	

	Ext.define('Accounts_chartofaccounts', {
    extend: 'Ext.data.Model',
	fields:['chartofaccounts_id','chartofaccounts_name','code_number','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_chartofaccounts',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_chartofaccounts',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Chartofaccounts Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'chartofaccounts_id'
		 },
		 {
		text     : ' Chartofaccounts Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'chartofaccounts_name'
		 },
		 {
		text     : ' Code Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'code_number'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_chartofaccountsForm('detailinfo','updateload',rec.get('chartofaccounts_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Chartofaccounts',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_chartofaccounts function


// accounts invoice

function gridViewaccounts_invoice(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_invoice = Ext.get('gridViewaccounts_invoice');	

	Ext.define('Accounts_invoice', {
    extend: 'Ext.data.Model',
	fields:['invoice_id','syowner','accaccount_name','syownerid','invoice_name','description','invoice_date']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_invoice',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_invoice',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Invoice Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'invoice_id'
		 },
		 {
		text     : ' Syowner ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'syowner'
		 },
		 {
		text     : ' Accaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accaccount_name'
		 },
		 {
		text     : ' Syownerid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syownerid'
		 },
		 {
		text     : ' Invoice Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'invoice_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
		text     : ' Invoice Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'invoice_date'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_invoiceForm('detailinfo','updateload',rec.get('invoice_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Invoice',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_invoice function


// accounts invoiceitems

function gridViewaccounts_invoiceitems(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_invoiceitems = Ext.get('gridViewaccounts_invoiceitems');	

	Ext.define('Accounts_invoiceitems', {
    extend: 'Ext.data.Model',
	fields:['invoiceitems_id','invoice_name','item_name','transaction_date','Qty','description','rate','vat','tablename','credit','debit','enty_type']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_invoiceitems',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_invoiceitems',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' # ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'invoiceitems_id'
		 },
		 {
		text     : ' Invoice Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'invoice_name'
		 },
		 {
		text     : ' Item Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'item_name'
		 },
		 {
		text     : ' Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_date'
		 },
		 {
		text     : ' Qty ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Qty'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
		text     : ' Rate ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rate'
		 },
		 {
		text     : ' Vat ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'vat'
		 },
		 {
		text     : ' Tablename ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tablename'
		 },
		 {
		text     : ' Credit ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'credit'
		 },
		 {
		text     : ' Debit ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'debit'
		 },
		 {
		text     : ' Enty Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'enty_type'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_invoiceitemsForm('detailinfo','updateload',rec.get('invoiceitems_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Invoiceitems',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_invoiceitems function


// admin month

function gridViewadmin_month(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_month = Ext.get('gridViewadmin_month');	

	Ext.define('Admin_month', {
    extend: 'Ext.data.Model',
	fields:['month_id','month_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_month',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_month',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Month Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'month_id'
		 },
		 {
		text     : ' Month Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'month_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_monthForm('detailinfo','updateload',rec.get('month_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Month',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_month function


// admin statement

function gridViewadmin_statement(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_statement = Ext.get('gridViewadmin_statement');	

	Ext.define('Admin_statement', {
    extend: 'Ext.data.Model',
	fields:['statement_id','tablename','statement_caption','statement_link','show_identifier','first_only','pdfvisible','position']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_statement',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_statement',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Statement Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'statement_id'
		 },
		 {
		text     : ' Tablename ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'tablename'
		 },
		 {
		text     : ' Statement Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'statement_caption'
		 },
		 {
		text     : ' Statement Link ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'statement_link'
		 },
		 {
		text     : ' Show Identifier ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'show_identifier'
		 },
		 {
		text     : ' First Only ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'first_only'
		 },
		 {
		text     : ' Pdfvisible ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'pdfvisible'
		 },
		 {
		text     : ' Position ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'position'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_statementForm('detailinfo','updateload',rec.get('statement_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Statement',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_statement function


// asset assetitem

function gridViewasset_assetitem(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnasset_assetitem = Ext.get('gridViewasset_assetitem');	

	Ext.define('Asset_assetitem', {
    extend: 'Ext.data.Model',
	fields:['assetitem_id','assetitem_name','item_name','itemmaincategory_name','itemcategory_name','location','syowner','syownerid','serial_number','barcode','purchase_date','depreciation_startdate','po_reference','timeperiodtype_name','waranty_period','original_cost','depreciationmethod_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Asset_assetitem',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=asset_assetitem',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Assetitem Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'assetitem_id'
		 },
		 {
		text     : ' Assetitem Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'assetitem_name'
		 },
		 {
		text     : ' Item Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'item_name'
		 },
		 {
		text     : ' Itemmaincategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'itemmaincategory_name'
		 },
		 {
		text     : ' Itemcategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'itemcategory_name'
		 },
		 {
		text     : ' Location ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'location'
		 },
		 {
		text     : ' Syowner ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syowner'
		 },
		 {
		text     : ' Syownerid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syownerid'
		 },
		 {
		text     : ' Serial Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'serial_number'
		 },
		 {
		text     : ' Barcode ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'barcode'
		 },
		 {
		text     : ' Purchase Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'purchase_date'
		 },
		 {
		text     : ' Depreciation Startdate ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'depreciation_startdate'
		 },
		 {
		text     : ' Po Reference ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'po_reference'
		 },
		 {
		text     : ' Timeperiodtype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'timeperiodtype_name'
		 },
		 {
		text     : ' Waranty Period ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'waranty_period'
		 },
		 {
		text     : ' Original Cost ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'original_cost'
		 },
		 {
		text     : ' Depreciationmethod Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'depreciationmethod_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

asset_assetitemForm('detailinfo','updateload',rec.get('assetitem_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Asset Assetitem',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewasset_assetitem function


// bank chequeissue

function gridViewbank_chequeissue(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnbank_chequeissue = Ext.get('gridViewbank_chequeissue');	

	Ext.define('Bank_chequeissue', {
    extend: 'Ext.data.Model',
	fields:['chequeissue_id','syowner','syownerid','chequedetails','chequeissue_name','cheque_number','cheque_date','amount','status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Bank_chequeissue',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=bank_chequeissue',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Chequeissue Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'chequeissue_id'
		 },
		 {
		text     : ' Syowner ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'syowner'
		 },
		 {
		text     : ' Syownerid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syownerid'
		 },
		 {
		text     : ' Chequedetails ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'chequedetails'
		 },
		 {
		text     : ' Chequeissue Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'chequeissue_name'
		 },
		 {
		text     : ' Cheque Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'cheque_number'
		 },
		 {
		text     : ' Cheque Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'cheque_date'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

bank_chequeissueForm('detailinfo','updateload',rec.get('chequeissue_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Bank Chequeissue',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewbank_chequeissue function


// housing housinglandlord

function gridViewhousing_housinglandlord(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnhousing_housinglandlord = Ext.get('gridViewhousing_housinglandlord');	

	Ext.define('Housing_housinglandlord', {
    extend: 'Ext.data.Model',
	fields:['housinglandlord_id','housinglandlord_name','person_name','contract_day','month_name','contract_year','term_period','term_months','commission','commission_alternative','excess_amount','payment_day','property','contract_dated','rentperiod_name','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Housing_housinglandlord',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=housing_housinglandlord',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Housinglandlord Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'housinglandlord_id'
		 },
		 {
		text     : ' Housinglandlord Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'housinglandlord_name'
		 },
		 {
		text     : ' Person Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : ' Contract Day ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'contract_day'
		 },
		 {
		text     : ' Month Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'month_name'
		 },
		 {
		text     : ' Contract Year ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'contract_year'
		 },
		 {
		text     : ' Term Period ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'term_period'
		 },
		 {
		text     : ' Term Months ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'term_months'
		 },
		 {
		text     : ' Commission ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'commission'
		 },
		 {
		text     : ' Commission Alternative ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'commission_alternative'
		 },
		 {
		text     : ' Excess Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'excess_amount'
		 },
		 {
		text     : ' Payment Day ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'payment_day'
		 },
		 {
		text     : ' Property ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'property'
		 },
		 {
		text     : ' Contract Dated ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'contract_dated'
		 },
		 {
		text     : ' Rentperiod Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rentperiod_name'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

housing_housinglandlordForm('detailinfo','updateload',rec.get('housinglandlord_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Housing Housinglandlord',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewhousing_housinglandlord function


// housing housinglandlordgrp

function gridViewhousing_housinglandlordgrp(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnhousing_housinglandlordgrp = Ext.get('gridViewhousing_housinglandlordgrp');	

	Ext.define('Housing_housinglandlordgrp', {
    extend: 'Ext.data.Model',
	fields:['housinglandlordgrp_id','housinglandlordgrp_name','persongroup_name','contract_day','month_name','contract_year','term_period','term_months','commission','commission_alternative','excess_amount','payment_day','property','contract_dated','rentperiod_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Housing_housinglandlordgrp',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=housing_housinglandlordgrp',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Housinglandlordgrp Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'housinglandlordgrp_id'
		 },
		 {
		text     : ' Housinglandlordgrp Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'housinglandlordgrp_name'
		 },
		 {
		text     : ' Persongroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'persongroup_name'
		 },
		 {
		text     : ' Contract Day ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'contract_day'
		 },
		 {
		text     : ' Month Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'month_name'
		 },
		 {
		text     : ' Contract Year ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'contract_year'
		 },
		 {
		text     : ' Term Period ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'term_period'
		 },
		 {
		text     : ' Term Months ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'term_months'
		 },
		 {
		text     : ' Commission ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'commission'
		 },
		 {
		text     : ' Commission Alternative ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'commission_alternative'
		 },
		 {
		text     : ' Excess Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'excess_amount'
		 },
		 {
		text     : ' Payment Day ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'payment_day'
		 },
		 {
		text     : ' Property ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'property'
		 },
		 {
		text     : ' Contract Dated ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'contract_dated'
		 },
		 {
		text     : ' Rentperiod Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rentperiod_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

housing_housinglandlordgrpForm('detailinfo','updateload',rec.get('housinglandlordgrp_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Housing Housinglandlordgrp',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewhousing_housinglandlordgrp function


// housing housingtenant

function gridViewhousing_housingtenant(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnhousing_housingtenant = Ext.get('gridViewhousing_housingtenant');	

	Ext.define('Housing_housingtenant', {
    extend: 'Ext.data.Model',
	fields:['housingtenant_id','housingtenant_name','person_name','housinglandlord_name','contract_day','month_name','contract_year','property_description','rent','deposit','electricity_water','rentperiod_name','deposit_description','tenancy_period','period_starts','period_startdate','period_months','contract_dated','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Housing_housingtenant',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=housing_housingtenant',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Housingtenant Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'housingtenant_id'
		 },
		 {
		text     : ' Housingtenant Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'housingtenant_name'
		 },
		 {
		text     : ' Person Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : ' Housinglandlord Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'housinglandlord_name'
		 },
		 {
		text     : ' Contract Day ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'contract_day'
		 },
		 {
		text     : ' Month Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'month_name'
		 },
		 {
		text     : ' Contract Year ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'contract_year'
		 },
		 {
		text     : ' Property Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'property_description'
		 },
		 {
		text     : ' Rent ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rent'
		 },
		 {
		text     : ' Deposit ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'deposit'
		 },
		 {
		text     : ' Electricity Water ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'electricity_water'
		 },
		 {
		text     : ' Rentperiod Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rentperiod_name'
		 },
		 {
		text     : ' Deposit Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'deposit_description'
		 },
		 {
		text     : ' Tenancy Period ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tenancy_period'
		 },
		 {
		text     : ' Period Starts ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'period_starts'
		 },
		 {
		text     : ' Period Startdate ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'period_startdate'
		 },
		 {
		text     : ' Period Months ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'period_months'
		 },
		 {
		text     : ' Contract Dated ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'contract_dated'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

housing_housingtenantForm('detailinfo','updateload',rec.get('housingtenant_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Housing Housingtenant',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewhousing_housingtenant function


// housing landlordadvance

function gridViewhousing_landlordadvance(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnhousing_landlordadvance = Ext.get('gridViewhousing_landlordadvance');	

	Ext.define('Housing_landlordadvance', {
    extend: 'Ext.data.Model',
	fields:['landlordadvance_id','housinglandlord_name','vourcher_number','amount','date_advanced']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Housing_landlordadvance',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=housing_landlordadvance',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Landlordadvance Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'landlordadvance_id'
		 },
		 {
		text     : ' Housinglandlord Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'housinglandlord_name'
		 },
		 {
		text     : ' Vourcher Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'vourcher_number'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Date Advanced ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_advanced'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

housing_landlordadvanceForm('detailinfo','updateload',rec.get('landlordadvance_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Housing Landlordadvance',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewhousing_landlordadvance function


// housing property

function gridViewhousing_property(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnhousing_property = Ext.get('gridViewhousing_property');	

	Ext.define('Housing_property', {
    extend: 'Ext.data.Model',
	fields:['property_id','property_name','Description','Location','Initial_Value']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Housing_property',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=housing_property',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Property Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'property_id'
		 },
		 {
		text     : ' Property Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'property_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Description'
		 },
		 {
		text     : ' Location ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Location'
		 },
		 {
		text     : ' Initial Value ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'Initial_Value'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

housing_propertyForm('detailinfo','updateload',rec.get('property_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Housing Property',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewhousing_property function


// housing propertyexpenses

function gridViewhousing_propertyexpenses(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnhousing_propertyexpenses = Ext.get('gridViewhousing_propertyexpenses');	

	Ext.define('Housing_propertyexpenses', {
    extend: 'Ext.data.Model',
	fields:['propertyexpenses_id','housingtenant_name','expense_description','amount','expense_date']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Housing_propertyexpenses',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=housing_propertyexpenses',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Propertyexpenses Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'propertyexpenses_id'
		 },
		 {
		text     : ' Housingtenant Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'housingtenant_name'
		 },
		 {
		text     : ' Expense Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'expense_description'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Expense Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'expense_date'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

housing_propertyexpensesForm('detailinfo','updateload',rec.get('propertyexpenses_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Housing Propertyexpenses',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewhousing_propertyexpenses function


// housing propertyperson

function gridViewhousing_propertyperson(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnhousing_propertyperson = Ext.get('gridViewhousing_propertyperson');	

	Ext.define('Housing_propertyperson', {
    extend: 'Ext.data.Model',
	fields:['propertyperson_id','propertyunitcategorytype_name','person_name','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Housing_propertyperson',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=housing_propertyperson',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Propertyperson Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'propertyperson_id'
		 },
		 {
		text     : ' Propertyunitcategorytype Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'propertyunitcategorytype_name'
		 },
		 {
		text     : ' Person Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

housing_propertypersonForm('detailinfo','updateload',rec.get('propertyperson_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Housing Propertyperson',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewhousing_propertyperson function


// housing propertyunit

function gridViewhousing_propertyunit(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnhousing_propertyunit = Ext.get('gridViewhousing_propertyunit');	

	Ext.define('Housing_propertyunit', {
    extend: 'Ext.data.Model',
	fields:['propertyunit_id','propertyunit_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Housing_propertyunit',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=housing_propertyunit',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Propertyunit Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'propertyunit_id'
		 },
		 {
		text     : ' Propertyunit Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'propertyunit_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

housing_propertyunitForm('detailinfo','updateload',rec.get('propertyunit_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Housing Propertyunit',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewhousing_propertyunit function


// housing propertyunitcategorytype

function gridViewhousing_propertyunitcategorytype(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnhousing_propertyunitcategorytype = Ext.get('gridViewhousing_propertyunitcategorytype');	

	Ext.define('Housing_propertyunitcategorytype', {
    extend: 'Ext.data.Model',
	fields:['propertyunitcategorytype_id','property_name','propertyunitcategorytype_name','timeperiodtype_name','interval','rent','deposit','brooms','water','electricity','toilet','bathroom','kitchen','security','description','vacant']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Housing_propertyunitcategorytype',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=housing_propertyunitcategorytype',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Propertyunitcategorytype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'propertyunitcategorytype_id'
		 },
		 {
		text     : ' Property Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'property_name'
		 },
		 {
		text     : ' Propertyunitcategorytype Name ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'propertyunitcategorytype_name'
		 },
		 {
		text     : ' Timeperiodtype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'timeperiodtype_name'
		 },
		 {
		text     : ' Interval ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'interval'
		 },
		 {
		text     : ' Rent ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rent'
		 },
		 {
		text     : ' Deposit ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'deposit'
		 },
		 {
		text     : ' Brooms ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'brooms'
		 },
		 {
		text     : ' Water ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'water'
		 },
		 {
		text     : ' Electricity ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'electricity'
		 },
		 {
		text     : ' Toilet ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'toilet'
		 },
		 {
		text     : ' Bathroom ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bathroom'
		 },
		 {
		text     : ' Kitchen ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'kitchen'
		 },
		 {
		text     : ' Security ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'security'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
		text     : ' Vacant ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'vacant'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

housing_propertyunitcategorytypeForm('detailinfo','updateload',rec.get('propertyunitcategorytype_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Housing Propertyunitcategorytype',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewhousing_propertyunitcategorytype function


// housing propertyunitcategorytypehist

function gridViewhousing_propertyunitcategorytypehist(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnhousing_propertyunitcategorytypehist = Ext.get('gridViewhousing_propertyunitcategorytypehist');	

	Ext.define('Housing_propertyunitcategorytypehist', {
    extend: 'Ext.data.Model',
	fields:['propertyunitcategorytypehist_id','property_name','propertyunitcategorytype_name','timeperiodtype_name','interval','rent','deposit','brooms','water','electricity','toilet','bathroom','kitchen','security','description','vacant']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Housing_propertyunitcategorytypehist',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=housing_propertyunitcategorytypehist',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Propertyunitcategorytypehist Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'propertyunitcategorytypehist_id'
		 },
		 {
		text     : ' Property Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'property_name'
		 },
		 {
		text     : ' Propertyunitcategorytype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'propertyunitcategorytype_name'
		 },
		 {
		text     : ' Timeperiodtype Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'timeperiodtype_name'
		 },
		 {
		text     : ' Interval ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'interval'
		 },
		 {
		text     : ' Rent ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rent'
		 },
		 {
		text     : ' Deposit ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'deposit'
		 },
		 {
		text     : ' Brooms ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'brooms'
		 },
		 {
		text     : ' Water ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'water'
		 },
		 {
		text     : ' Electricity ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'electricity'
		 },
		 {
		text     : ' Toilet ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'toilet'
		 },
		 {
		text     : ' Bathroom ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bathroom'
		 },
		 {
		text     : ' Kitchen ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'kitchen'
		 },
		 {
		text     : ' Security ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'security'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
		text     : ' Vacant ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'vacant'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

housing_propertyunitcategorytypehistForm('detailinfo','updateload',rec.get('propertyunitcategorytypehist_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Housing Propertyunitcategorytypehist',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewhousing_propertyunitcategorytypehist function


// housing rentperiod

function gridViewhousing_rentperiod(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnhousing_rentperiod = Ext.get('gridViewhousing_rentperiod');	

	Ext.define('Housing_rentperiod', {
    extend: 'Ext.data.Model',
	fields:['rentperiod_id','rentperiod_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Housing_rentperiod',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=housing_rentperiod',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Rentperiod Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'rentperiod_id'
		 },
		 {
		text     : ' Rentperiod Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'rentperiod_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

housing_rentperiodForm('detailinfo','updateload',rec.get('rentperiod_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Housing Rentperiod',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewhousing_rentperiod function


// housing tenancytermnotice

function gridViewhousing_tenancytermnotice(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnhousing_tenancytermnotice = Ext.get('gridViewhousing_tenancytermnotice');	

	Ext.define('Housing_tenancytermnotice', {
    extend: 'Ext.data.Model',
	fields:['tenancytermnotice_id','housinglandlord_name','housingtenant_name','termination_reason','termination_date']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Housing_tenancytermnotice',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=housing_tenancytermnotice',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Tenancytermnotice Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'tenancytermnotice_id'
		 },
		 {
		text     : ' Housinglandlord Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'housinglandlord_name'
		 },
		 {
		text     : ' Housingtenant Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'housingtenant_name'
		 },
		 {
		text     : ' Termination Reason ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'termination_reason'
		 },
		 {
		text     : ' Termination Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'termination_date'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

housing_tenancytermnoticeForm('detailinfo','updateload',rec.get('tenancytermnotice_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Housing Tenancytermnotice',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewhousing_tenancytermnotice function


// journals receipt

function gridViewjournals_receipt(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnjournals_receipt = Ext.get('gridViewjournals_receipt');	

	Ext.define('Journals_receipt', {
    extend: 'Ext.data.Model',
	fields:['receipt_id','receipt_name','account_name','description','amount']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Journals_receipt',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=journals_receipt',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Receipt Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'receipt_id'
		 },
		 {
		text     : ' Receipt Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'receipt_name'
		 },
		 {
		text     : ' Account Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'account_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

journals_receiptForm('detailinfo','updateload',rec.get('receipt_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Journals Receipt',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewjournals_receipt function


// reports reportgroup

function gridViewreports_reportgroup(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnreports_reportgroup = Ext.get('gridViewreports_reportgroup');	

	Ext.define('Reports_reportgroup', {
    extend: 'Ext.data.Model',
	fields:['reportgroup_id','reportgroup_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Reports_reportgroup',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=reports_reportgroup',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Reportgroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'reportgroup_id'
		 },
		 {
		text     : ' Reportgroup Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'reportgroup_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

reports_reportgroupForm('detailinfo','updateload',rec.get('reportgroup_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Reports Reportgroup',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewreports_reportgroup function


// reports reportsbygroup

function gridViewreports_reportsbygroup(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnreports_reportsbygroup = Ext.get('gridViewreports_reportsbygroup');	

	Ext.define('Reports_reportsbygroup', {
    extend: 'Ext.data.Model',
	fields:['reportsbygroup_id','reportgroup_name','reportview_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Reports_reportsbygroup',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=reports_reportsbygroup',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Reportsbygroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'reportsbygroup_id'
		 },
		 {
		text     : ' Reportgroup Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'reportgroup_name'
		 },
		 {
		text     : ' Reportview Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'reportview_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

reports_reportsbygroupForm('detailinfo','updateload',rec.get('reportsbygroup_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Reports Reportsbygroup',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewreports_reportsbygroup function


// reports reportview

function gridViewreports_reportview(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnreports_reportview = Ext.get('gridViewreports_reportview');	

	Ext.define('Reports_reportview', {
    extend: 'Ext.data.Model',
	fields:['reportview_id','reportview_name','menu_caption','report_caption','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Reports_reportview',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=reports_reportview',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Reportview Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'reportview_id'
		 },
		 {
		text     : ' Reportview Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'reportview_name'
		 },
		 {
		text     : ' Menu Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'menu_caption'
		 },
		 {
		text     : ' Report Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'report_caption'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

reports_reportviewForm('detailinfo','updateload',rec.get('reportview_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Reports Reportview',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewreports_reportview function


// reports reportviewdefinition

function gridViewreports_reportviewdefinition(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnreports_reportviewdefinition = Ext.get('gridViewreports_reportviewdefinition');	

	Ext.define('Reports_reportviewdefinition', {
    extend: 'Ext.data.Model',
	fields:['reportviewdefinition_id','reportviewdefinition_name','reportview_name','table_name','queryfield_name','report_caption','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Reports_reportviewdefinition',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=reports_reportviewdefinition',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Reportviewdefinition Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'reportviewdefinition_id'
		 },
		 {
		text     : ' Reportviewdefinition Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'reportviewdefinition_name'
		 },
		 {
		text     : ' Reportview Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'reportview_name'
		 },
		 {
		text     : ' Table Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'table_name'
		 },
		 {
		text     : ' Queryfield Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'queryfield_name'
		 },
		 {
		text     : ' Report Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'report_caption'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

reports_reportviewdefinitionForm('detailinfo','updateload',rec.get('reportviewdefinition_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Reports Reportviewdefinition',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewreports_reportviewdefinition function


// insurance dnpolicyfinance

function gridViewinsurance_dnpolicyfinance(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_dnpolicyfinance = Ext.get('gridViewinsurance_dnpolicyfinance');	

	Ext.define('Insurance_dnpolicyfinance', {
    extend: 'Ext.data.Model',
	fields:['dnpolicyfinance_id','policyfinance_name','insurancedebitnote_name','bank','check_number','amount','check_date']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_dnpolicyfinance',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_dnpolicyfinance',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Dnpolicyfinance Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'dnpolicyfinance_id'
		 },
		 {
		text     : ' Policyfinance Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'policyfinance_name'
		 },
		 {
		text     : ' Insurancedebitnote Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'insurancedebitnote_name'
		 },
		 {
		text     : ' Bank ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bank'
		 },
		 {
		text     : ' Check Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'check_number'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Check Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'check_date'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_dnpolicyfinanceForm('detailinfo','updateload',rec.get('dnpolicyfinance_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Dnpolicyfinance',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_dnpolicyfinance function


// insurance motorisk

function gridViewinsurance_motorisk(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_motorisk = Ext.get('gridViewinsurance_motorisk');	

	Ext.define('Insurance_motorisk', {
    extend: 'Ext.data.Model',
	fields:['motorrisk_name','insurancedebitnote_name','registration_number','year_manufactured','chasis_number','engine_number','make','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_motorisk',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_motorisk',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Motorrisk Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'motorrisk_name'
		 },
		 {
		text     : ' Insurancedebitnote Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'insurancedebitnote_name'
		 },
		 {
		text     : ' Registration Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'registration_number'
		 },
		 {
		text     : ' Year Manufactured ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'year_manufactured'
		 },
		 {
		text     : ' Chasis Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'chasis_number'
		 },
		 {
		text     : ' Engine Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'engine_number'
		 },
		 {
		text     : ' Make ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'make'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_motoriskForm('detailinfo','updateload',rec.get('motorisk_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Motorisk',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_motorisk function


// insurance policepaymentmode

function gridViewinsurance_policepaymentmode(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policepaymentmode = Ext.get('gridViewinsurance_policepaymentmode');	

	Ext.define('Insurance_policepaymentmode', {
    extend: 'Ext.data.Model',
	fields:[]
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policepaymentmode',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policepaymentmode',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policepaymentmodeForm('detailinfo','updateload',rec.get(''));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policepaymentmode',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policepaymentmode function


// insurance policyfinance

function gridViewinsurance_policyfinance(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policyfinance = Ext.get('gridViewinsurance_policyfinance');	

	Ext.define('Insurance_policyfinance', {
    extend: 'Ext.data.Model',
	fields:['policyfinance_id','policyfinance_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policyfinance',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policyfinance',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Policyfinance Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policyfinance_id'
		 },
		 {
		text     : ' Policyfinance Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'policyfinance_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policyfinanceForm('detailinfo','updateload',rec.get('policyfinance_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policyfinance',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policyfinance function


// insurance policypaymentmode

function gridViewinsurance_policypaymentmode(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_policypaymentmode = Ext.get('gridViewinsurance_policypaymentmode');	

	Ext.define('Insurance_policypaymentmode', {
    extend: 'Ext.data.Model',
	fields:['policypaymentmode_id','policypaymentmode_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_policypaymentmode',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_policypaymentmode',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Policypaymentmode Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'policypaymentmode_id'
		 },
		 {
		text     : ' Policypaymentmode Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'policypaymentmode_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_policypaymentmodeForm('detailinfo','updateload',rec.get('policypaymentmode_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Policypaymentmode',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_policypaymentmode function


// accounts checkdeposit

function gridViewaccounts_checkdeposit(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_checkdeposit = Ext.get('gridViewaccounts_checkdeposit');	

	Ext.define('Accounts_checkdeposit', {
    extend: 'Ext.data.Model',
	fields:['checkdeposit_id','checkdeposit_name','checkregister_name','date_banked','bankaccount_name','date_cleared']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_checkdeposit',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_checkdeposit',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Checkdeposit Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'checkdeposit_id'
		 },
		 {
		text     : ' Checkdeposit Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'checkdeposit_name'
		 },
		 {
		text     : ' Checkregister Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'checkregister_name'
		 },
		 {
		text     : ' Date Banked ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_banked'
		 },
		 {
		text     : ' Bankaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bankaccount_name'
		 },
		 {
		text     : ' Date Cleared ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_cleared'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_checkdepositForm('detailinfo','updateload',rec.get('checkdeposit_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Checkdeposit',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_checkdeposit function


// accounts checkregister

function gridViewaccounts_checkregister(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_checkregister = Ext.get('gridViewaccounts_checkregister');	

	Ext.define('Accounts_checkregister', {
    extend: 'Ext.data.Model',
	fields:['checkregister_id','checkregister_name','accaccount_name','bank','branch','check_details','check_number','check_date','currency_name','amount','transaction_type','naration']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_checkregister',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_checkregister',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Checkregister Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'checkregister_id'
		 },
		 {
		text     : ' Checkregister Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'checkregister_name'
		 },
		 {
		text     : ' Accaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accaccount_name'
		 },
		 {
		text     : ' Bank ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bank'
		 },
		 {
		text     : ' Branch ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'branch'
		 },
		 {
		text     : ' Check Details ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'check_details'
		 },
		 {
		text     : ' Check Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'check_number'
		 },
		 {
		text     : ' Check Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'check_date'
		 },
		 {
		text     : ' Currency Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'currency_name'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Transaction Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_type'
		 },
		 {
		text     : ' Naration ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'naration'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_checkregisterForm('detailinfo','updateload',rec.get('checkregister_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Checkregister',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_checkregister function


// admin pcategoryattribute

function gridViewadmin_pcategoryattribute(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_pcategoryattribute = Ext.get('gridViewadmin_pcategoryattribute');	

	Ext.define('Admin_pcategoryattribute', {
    extend: 'Ext.data.Model',
	fields:['pcategoryattribute_id','pcategoryattribute_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_pcategoryattribute',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_pcategoryattribute',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Pcategoryattribute Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'pcategoryattribute_id'
		 },
		 {
		text     : ' Pcategoryattribute Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'pcategoryattribute_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_pcategoryattributeForm('detailinfo','updateload',rec.get('pcategoryattribute_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Pcategoryattribute',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_pcategoryattribute function


// admin personattribute

function gridViewadmin_personattribute(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_personattribute = Ext.get('gridViewadmin_personattribute');	

	Ext.define('Admin_personattribute', {
    extend: 'Ext.data.Model',
	fields:['persontypeattribute_name','pcategoryattribute_name','attribute_value','person_name','person_fullname']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_personattribute',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_personattribute',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Persontypeattribute Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'persontypeattribute_name'
		 },
		 {
		text     : ' Pcategoryattribute Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'pcategoryattribute_name'
		 },
		 {
		text     : ' Attribute Value ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'attribute_value'
		 },
		 {
		text     : ' Person Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_name'
		 },
		 {
		text     : '  ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'person_fullname'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_personattributeForm('detailinfo','updateload',rec.get('personattribute_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Personattribute',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_personattribute function


// admin personcategoryattribute

function gridViewadmin_personcategoryattribute(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnadmin_personcategoryattribute = Ext.get('gridViewadmin_personcategoryattribute');	

	Ext.define('Admin_personcategoryattribute', {
    extend: 'Ext.data.Model',
	fields:['personcategoryattribute_id','pcategoryattribute_name','personttypecategory_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Admin_personcategoryattribute',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=admin_personcategoryattribute',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Personcategoryattribute Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'personcategoryattribute_id'
		 },
		 {
		text     : ' Pcategoryattribute Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'pcategoryattribute_name'
		 },
		 {
		text     : ' Personttypecategory Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'personttypecategory_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

admin_personcategoryattributeForm('detailinfo','updateload',rec.get('personcategoryattribute_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Admin Personcategoryattribute',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewadmin_personcategoryattribute function


// accounts receipt

function gridViewaccounts_receipt(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_receipt = Ext.get('gridViewaccounts_receipt');	

	Ext.define('Accounts_receipt', {
    extend: 'Ext.data.Model',
	fields:['receipt_id','receipt_name','accaccount_name','receipt_date','trans_ref']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_receipt',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_receipt',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Receipt Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'receipt_id'
		 },
		 {
		text     : ' Receipt Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'receipt_name'
		 },
		 {
		text     : ' Accaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accaccount_name'
		 },
		 {
		text     : ' Receipt Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'receipt_date'
		 },
		 {
		text     : ' Trans Ref ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'trans_ref'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_receiptForm('detailinfo','updateload',rec.get('receipt_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Receipt',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_receipt function


// accounts receiptitems

function gridViewaccounts_receiptitems(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_receiptitems = Ext.get('gridViewaccounts_receiptitems');	

	Ext.define('Accounts_receiptitems', {
    extend: 'Ext.data.Model',
	fields:['receiptitems_id','receipt_name','amount','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_receiptitems',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_receiptitems',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Receiptitems Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'receiptitems_id'
		 },
		 {
		text     : ' Receipt Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'receipt_name'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_receiptitemsForm('detailinfo','updateload',rec.get('receiptitems_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Receiptitems',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_receiptitems function


// insurance approvedbnote

function gridViewinsurance_approvedbnote(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtninsurance_approvedbnote = Ext.get('gridViewinsurance_approvedbnote');	

	Ext.define('Insurance_approvedbnote', {
    extend: 'Ext.data.Model',
	fields:['approveDBNote_name','insurancedebitnote_name','action_date','comment','is_approved']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Insurance_approvedbnote',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=insurance_approvedbnote',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' ApproveDBNote Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'approveDBNote_name'
		 },
		 {
		text     : ' Insurancedebitnote Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'insurancedebitnote_name'
		 },
		 {
		text     : ' Action Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'action_date'
		 },
		 {
		text     : ' Comment ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'comment'
		 },
		 {
		text     : ' Is Approved ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'is_approved'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

insurance_approvedbnoteForm('detailinfo','updateload',rec.get('approvedbnote_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Insurance Approvedbnote',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewinsurance_approvedbnote function


// accounts checkissue

function gridViewaccounts_checkissue(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_checkissue = Ext.get('gridViewaccounts_checkissue');	

	Ext.define('Accounts_checkissue', {
    extend: 'Ext.data.Model',
	fields:['checkissue_id','checkissue_name','checkpayment_name','date_issued','issue_mode','issue_details','issued_by']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_checkissue',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_checkissue',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Checkissue Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'checkissue_id'
		 },
		 {
		text     : ' Checkissue Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'checkissue_name'
		 },
		 {
		text     : ' Checkpayment Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'checkpayment_name'
		 },
		 {
		text     : ' Date Issued ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_issued'
		 },
		 {
		text     : ' Issue Mode ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'issue_mode'
		 },
		 {
		text     : ' Issue Details ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'issue_details'
		 },
		 {
		text     : ' Issued By ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'issued_by'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_checkissueForm('detailinfo','updateload',rec.get('checkissue_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Checkissue',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_checkissue function


// accounts checkissueschedule

function gridViewaccounts_checkissueschedule(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_checkissueschedule = Ext.get('gridViewaccounts_checkissueschedule');	

	Ext.define('Accounts_checkissueschedule', {
    extend: 'Ext.data.Model',
	fields:['checkissueschedule_id','checkissueschedule_name','checkpayment_name','planned_issuedate']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_checkissueschedule',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_checkissueschedule',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Checkissueschedule Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'checkissueschedule_id'
		 },
		 {
		text     : ' Checkissueschedule Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'checkissueschedule_name'
		 },
		 {
		text     : ' Checkpayment Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'checkpayment_name'
		 },
		 {
		text     : ' Planned Issuedate ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'planned_issuedate'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_checkissuescheduleForm('detailinfo','updateload',rec.get('checkissueschedule_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Checkissueschedule',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_checkissueschedule function


// accounts checkpayment

function gridViewaccounts_checkpayment(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_checkpayment = Ext.get('gridViewaccounts_checkpayment');	

	Ext.define('Accounts_checkpayment', {
    extend: 'Ext.data.Model',
	fields:['checkpayment_id','checkpayment_name','account_name','bankaccount_name','amount','check_date','narration']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_checkpayment',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_checkpayment',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Checkpayment Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'checkpayment_id'
		 },
		 {
		text     : ' Checkpayment Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'checkpayment_name'
		 },
		 {
		text     : ' Account Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'account_name'
		 },
		 {
		text     : ' Bankaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bankaccount_name'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Check Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'check_date'
		 },
		 {
		text     : ' Narration ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'narration'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_checkpaymentForm('detailinfo','updateload',rec.get('checkpayment_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Checkpayment',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_checkpayment function


// accounts checkreplacement

function gridViewaccounts_checkreplacement(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_checkreplacement = Ext.get('gridViewaccounts_checkreplacement');	

	Ext.define('Accounts_checkreplacement', {
    extend: 'Ext.data.Model',
	fields:['checkreplacement_id','checkreplacement_name','checkregister_name','date_replaced','replacement_reason']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_checkreplacement',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_checkreplacement',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Checkreplacement Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'checkreplacement_id'
		 },
		 {
		text     : ' Checkreplacement Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'checkreplacement_name'
		 },
		 {
		text     : ' Checkregister Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'checkregister_name'
		 },
		 {
		text     : ' Date Replaced ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_replaced'
		 },
		 {
		text     : ' Replacement Reason ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'replacement_reason'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_checkreplacementForm('detailinfo','updateload',rec.get('checkreplacement_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Checkreplacement',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_checkreplacement function


// accounts checkreplacementout

function gridViewaccounts_checkreplacementout(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_checkreplacementout = Ext.get('gridViewaccounts_checkreplacementout');	

	Ext.define('Accounts_checkreplacementout', {
    extend: 'Ext.data.Model',
	fields:['checkreplacementout_id','checkreplacementout_name','checkpayment_name','date_replaced','replacement_reason']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_checkreplacementout',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_checkreplacementout',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Checkreplacementout Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'checkreplacementout_id'
		 },
		 {
		text     : ' Checkreplacementout Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'checkreplacementout_name'
		 },
		 {
		text     : ' Checkpayment Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'checkpayment_name'
		 },
		 {
		text     : ' Date Replaced ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_replaced'
		 },
		 {
		text     : ' Replacement Reason ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'replacement_reason'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_checkreplacementoutForm('detailinfo','updateload',rec.get('checkreplacementout_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Checkreplacementout',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_checkreplacementout function


// accounts custcheckdeposit

function gridViewaccounts_custcheckdeposit(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_custcheckdeposit = Ext.get('gridViewaccounts_custcheckdeposit');	

	Ext.define('Accounts_custcheckdeposit', {
    extend: 'Ext.data.Model',
	fields:['custcheckdeposit_id','custcheckdeposit_name','custcheckregister_name','date_banked','bankaccount_name','date_cleared']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_custcheckdeposit',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_custcheckdeposit',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Custcheckdeposit Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'custcheckdeposit_id'
		 },
		 {
		text     : ' Custcheckdeposit Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'custcheckdeposit_name'
		 },
		 {
		text     : ' Custcheckregister Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'custcheckregister_name'
		 },
		 {
		text     : ' Date Banked ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_banked'
		 },
		 {
		text     : ' Bankaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bankaccount_name'
		 },
		 {
		text     : ' Date Cleared ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_cleared'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_custcheckdepositForm('detailinfo','updateload',rec.get('custcheckdeposit_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Custcheckdeposit',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_custcheckdeposit function


// accounts custcheckregister

function gridViewaccounts_custcheckregister(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_custcheckregister = Ext.get('gridViewaccounts_custcheckregister');	

	Ext.define('Accounts_custcheckregister', {
    extend: 'Ext.data.Model',
	fields:['custcheckregister_id','custcheckregister_name','accaccount_name','bankaccount_name','check_details','check_number','check_date','amount','transaction_type','naration']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_custcheckregister',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_custcheckregister',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Custcheckregister Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'custcheckregister_id'
		 },
		 {
		text     : ' Custcheckregister Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'custcheckregister_name'
		 },
		 {
		text     : ' Accaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accaccount_name'
		 },
		 {
		text     : ' Bankaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bankaccount_name'
		 },
		 {
		text     : ' Check Details ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'check_details'
		 },
		 {
		text     : ' Check Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'check_number'
		 },
		 {
		text     : ' Check Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'check_date'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Transaction Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_type'
		 },
		 {
		text     : ' Naration ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'naration'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_custcheckregisterForm('detailinfo','updateload',rec.get('custcheckregister_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Custcheckregister',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_custcheckregister function


// accounts compcashdeposit

function gridViewaccounts_compcashdeposit(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_compcashdeposit = Ext.get('gridViewaccounts_compcashdeposit');	

	Ext.define('Accounts_compcashdeposit', {
    extend: 'Ext.data.Model',
	fields:['compcashdeposit_id','compcashdeposit_name','accaccount_name','bankaccount_name','amount','date_banked','transaction_type','naration']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_compcashdeposit',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_compcashdeposit',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Compcashdeposit Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'compcashdeposit_id'
		 },
		 {
		text     : ' Compcashdeposit Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'compcashdeposit_name'
		 },
		 {
		text     : ' Accaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accaccount_name'
		 },
		 {
		text     : ' Bankaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bankaccount_name'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Date Banked ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_banked'
		 },
		 {
		text     : ' Transaction Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_type'
		 },
		 {
		text     : ' Naration ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'naration'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_compcashdepositForm('detailinfo','updateload',rec.get('compcashdeposit_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Compcashdeposit',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_compcashdeposit function


// accounts custcashdeposit

function gridViewaccounts_custcashdeposit(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_custcashdeposit = Ext.get('gridViewaccounts_custcashdeposit');	

	Ext.define('Accounts_custcashdeposit', {
    extend: 'Ext.data.Model',
	fields:['custcashdeposit_id','custcashdeposit_name','accaccount_name','amount','bankaccount_name','date_banked','transaction_type','naration']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_custcashdeposit',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_custcashdeposit',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Custcashdeposit Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'custcashdeposit_id'
		 },
		 {
		text     : ' Custcashdeposit Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'custcashdeposit_name'
		 },
		 {
		text     : ' Accaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accaccount_name'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Bankaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bankaccount_name'
		 },
		 {
		text     : ' Date Banked ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_banked'
		 },
		 {
		text     : ' Transaction Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_type'
		 },
		 {
		text     : ' Naration ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'naration'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_custcashdepositForm('detailinfo','updateload',rec.get('custcashdeposit_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Custcashdeposit',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_custcashdeposit function


// sms autoresponse

function gridViewsms_autoresponse(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_autoresponse = Ext.get('gridViewsms_autoresponse');	

	Ext.define('Sms_autoresponse', {
    extend: 'Ext.data.Model',
	fields:['autoresponse_id','message_from','request_type','message_message']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_autoresponse',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_autoresponse',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Autoresponse Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'autoresponse_id'
		 },
		 {
		text     : ' Message From ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'message_from'
		 },
		 {
		text     : ' Request Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'request_type'
		 },
		 {
		text     : ' Message Message ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'message_message'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_autoresponseForm('detailinfo','updateload',rec.get('autoresponse_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Autoresponse',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_autoresponse function


// sms indsms

function gridViewsms_indsms(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_indsms = Ext.get('gridViewsms_indsms');	

	Ext.define('Sms_indsms', {
    extend: 'Ext.data.Model',
	fields:['indsms_id','reciepient','message']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_indsms',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_indsms',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Indsms Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'indsms_id'
		 },
		 {
		text     : ' Reciepient ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'reciepient'
		 },
		 {
		text     : ' Message ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'message'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_indsmsForm('detailinfo','updateload',rec.get('indsms_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Indsms',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_indsms function


// sms messagereived

function gridViewsms_messagereived(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_messagereived = Ext.get('gridViewsms_messagereived');	

	Ext.define('Sms_messagereived', {
    extend: 'Ext.data.Model',
	fields:['messagereceived_name','message_from','message_message']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_messagereived',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_messagereived',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Messagereceived Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'messagereceived_name'
		 },
		 {
		text     : ' Message From ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'message_from'
		 },
		 {
		text     : ' Message Message ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'message_message'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_messagereivedForm('detailinfo','updateload',rec.get('messagereived_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Messagereived',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_messagereived function


// sms messagesend

function gridViewsms_messagesend(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_messagesend = Ext.get('gridViewsms_messagesend');	

	Ext.define('Sms_messagesend', {
    extend: 'Ext.data.Model',
	fields:['messagesend_id','messagesend_name','reciepient','message','status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_messagesend',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_messagesend',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Messagesend Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'messagesend_id'
		 },
		 {
		text     : ' Messagesend Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'messagesend_name'
		 },
		 {
		text     : ' Reciepient ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'reciepient'
		 },
		 {
		text     : ' Message ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'message'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_messagesendForm('detailinfo','updateload',rec.get('messagesend_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Messagesend',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_messagesend function


// sms processedsms

function gridViewsms_processedsms(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_processedsms = Ext.get('gridViewsms_processedsms');	

	Ext.define('Sms_processedsms', {
    extend: 'Ext.data.Model',
	fields:['processedSMS_name','phone_number','connection_number','message']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_processedsms',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_processedsms',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' ProcessedSMS Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'processedSMS_name'
		 },
		 {
		text     : ' Phone Number ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'phone_number'
		 },
		 {
		text     : ' Connection Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'connection_number'
		 },
		 {
		text     : ' Message ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'message'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_processedsmsForm('detailinfo','updateload',rec.get('processedsms_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Processedsms',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_processedsms function


// sms processedsmsoaf

function gridViewsms_processedsmsoaf(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_processedsmsoaf = Ext.get('gridViewsms_processedsmsoaf');	

	Ext.define('Sms_processedsmsoaf', {
    extend: 'Ext.data.Model',
	fields:['processedsmsoaf_id','fname','fid','phone_number','amount_paid','balance']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_processedsmsoaf',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_processedsmsoaf',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Processedsmsoaf Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'processedsmsoaf_id'
		 },
		 {
		text     : ' Fname ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'fname'
		 },
		 {
		text     : ' Fid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fid'
		 },
		 {
		text     : ' Phone Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'phone_number'
		 },
		 {
		text     : ' Amount Paid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount_paid'
		 },
		 {
		text     : ' Balance ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'balance'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_processedsmsoafForm('detailinfo','updateload',rec.get('processedsmsoaf_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Processedsmsoaf',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_processedsmsoaf function


// sms receivedrqts

function gridViewsms_receivedrqts(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_receivedrqts = Ext.get('gridViewsms_receivedrqts');	

	Ext.define('Sms_receivedrqts', {
    extend: 'Ext.data.Model',
	fields:['receivedrqts_id','message_from','request_type','message_message']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_receivedrqts',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_receivedrqts',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Receivedrqts Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'receivedrqts_id'
		 },
		 {
		text     : ' Message From ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'message_from'
		 },
		 {
		text     : ' Request Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'request_type'
		 },
		 {
		text     : ' Message Message ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'message_message'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_receivedrqtsForm('detailinfo','updateload',rec.get('receivedrqts_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Receivedrqts',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_receivedrqts function


// sms receptresp

function gridViewsms_receptresp(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_receptresp = Ext.get('gridViewsms_receptresp');	

	Ext.define('Sms_receptresp', {
    extend: 'Ext.data.Model',
	fields:['receptresp_id','phone_number','receipt_number','status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_receptresp',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_receptresp',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Receptresp Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'receptresp_id'
		 },
		 {
		text     : ' Phone Number ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'phone_number'
		 },
		 {
		text     : ' Receipt Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'receipt_number'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_receptrespForm('detailinfo','updateload',rec.get('receptresp_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Receptresp',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_receptresp function


// sms schedule

function gridViewsms_schedule(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_schedule = Ext.get('gridViewsms_schedule');	

	Ext.define('Sms_schedule', {
    extend: 'Ext.data.Model',
	fields:['schedule_id','schedule_name','schedule_description','bill_date','due_after','file_brouwse']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_schedule',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_schedule',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Schedule Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'schedule_id'
		 },
		 {
		text     : ' Schedule Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'schedule_name'
		 },
		 {
		text     : ' Schedule Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'schedule_description'
		 },
		 {
		text     : ' Bill Date ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'bill_date'
		 },
		 {
		text     : ' Due After ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'due_after'
		 },
		 {
		text     : ' File Brouwse ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'file_brouwse'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_scheduleForm('detailinfo','updateload',rec.get('schedule_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Schedule',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_schedule function


// sms sendsmstogrp

function gridViewsms_sendsmstogrp(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_sendsmstogrp = Ext.get('gridViewsms_sendsmstogrp');	

	Ext.define('Sms_sendsmstogrp', {
    extend: 'Ext.data.Model',
	fields:['sendsmstogrp_id','smsgroup_name','sms_message','comment']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_sendsmstogrp',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_sendsmstogrp',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Sendsmstogrp Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'sendsmstogrp_id'
		 },
		 {
		text     : ' Smsgroup Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'smsgroup_name'
		 },
		 {
		text     : ' Sms Message ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'sms_message'
		 },
		 {
		text     : ' Comment ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'comment'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_sendsmstogrpForm('detailinfo','updateload',rec.get('sendsmstogrp_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Sendsmstogrp',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_sendsmstogrp function


// sms smscaptions

function gridViewsms_smscaptions(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_smscaptions = Ext.get('gridViewsms_smscaptions');	

	Ext.define('Sms_smscaptions', {
    extend: 'Ext.data.Model',
	fields:['smscaptions_id','sms_tablelist','caption']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_smscaptions',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_smscaptions',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Smscaptions Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'smscaptions_id'
		 },
		 {
		text     : ' Sms Tablelist ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'sms_tablelist'
		 },
		 {
		text     : ' Caption ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'caption'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_smscaptionsForm('detailinfo','updateload',rec.get('smscaptions_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Smscaptions',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_smscaptions function


// sms smsgroup

function gridViewsms_smsgroup(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_smsgroup = Ext.get('gridViewsms_smsgroup');	

	Ext.define('Sms_smsgroup', {
    extend: 'Ext.data.Model',
	fields:['smsgroup_id','smsgroup_name','description']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_smsgroup',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_smsgroup',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Smsgroup Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'smsgroup_id'
		 },
		 {
		text     : ' Smsgroup Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'smsgroup_name'
		 },
		 {
		text     : ' Description ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'description'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_smsgroupForm('detailinfo','updateload',rec.get('smsgroup_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Smsgroup',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_smsgroup function


// sms smsgroupmember

function gridViewsms_smsgroupmember(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_smsgroupmember = Ext.get('gridViewsms_smsgroupmember');	

	Ext.define('Sms_smsgroupmember', {
    extend: 'Ext.data.Model',
	fields:['smsgroupmember_id','smsgroup_name','syowner','syownerid']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_smsgroupmember',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_smsgroupmember',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Smsgroupmember Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'smsgroupmember_id'
		 },
		 {
		text     : ' Smsgroup Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'smsgroup_name'
		 },
		 {
		text     : ' Syowner ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syowner'
		 },
		 {
		text     : ' Syownerid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'syownerid'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_smsgroupmemberForm('detailinfo','updateload',rec.get('smsgroupmember_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Smsgroupmember',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_smsgroupmember function


// sms smshandle

function gridViewsms_smshandle(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_smshandle = Ext.get('gridViewsms_smshandle');	

	Ext.define('Sms_smshandle', {
    extend: 'Ext.data.Model',
	fields:['smshandle_id','connection_number','amount','phone_number','pay_before']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_smshandle',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_smshandle',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Smshandle Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'smshandle_id'
		 },
		 {
		text     : ' Connection Number ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'connection_number'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Phone Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'phone_number'
		 },
		 {
		text     : ' Pay Before ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'pay_before'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_smshandleForm('detailinfo','updateload',rec.get('smshandle_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Smshandle',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_smshandle function


// sms smshandleoaf

function gridViewsms_smshandleoaf(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_smshandleoaf = Ext.get('gridViewsms_smshandleoaf');	

	Ext.define('Sms_smshandleoaf', {
    extend: 'Ext.data.Model',
	fields:['smshandleoaf_id','fname','fid','phone_number','amount_paid','balance','as_at']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_smshandleoaf',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_smshandleoaf',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Smshandleoaf Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'smshandleoaf_id'
		 },
		 {
		text     : ' Fname ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'fname'
		 },
		 {
		text     : ' Fid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fid'
		 },
		 {
		text     : ' Phone Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'phone_number'
		 },
		 {
		text     : ' Amount Paid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount_paid'
		 },
		 {
		text     : ' Balance ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'balance'
		 },
		 {
		text     : ' As At ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'as_at'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_smshandleoafForm('detailinfo','updateload',rec.get('smshandleoaf_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Smshandleoaf',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_smshandleoaf function


// sms smsinvalid

function gridViewsms_smsinvalid(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_smsinvalid = Ext.get('gridViewsms_smsinvalid');	

	Ext.define('Sms_smsinvalid', {
    extend: 'Ext.data.Model',
	fields:['smshandle_name','connection_number','amount','phone_number','pay_before']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_smsinvalid',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_smsinvalid',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Smshandle Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'smshandle_name'
		 },
		 {
		text     : ' Connection Number ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'connection_number'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Phone Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'phone_number'
		 },
		 {
		text     : ' Pay Before ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'pay_before'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_smsinvalidForm('detailinfo','updateload',rec.get('smsinvalid_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Smsinvalid',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_smsinvalid function


// sms smsinvalidoaf

function gridViewsms_smsinvalidoaf(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_smsinvalidoaf = Ext.get('gridViewsms_smsinvalidoaf');	

	Ext.define('Sms_smsinvalidoaf', {
    extend: 'Ext.data.Model',
	fields:['smsinvalidoaf_id','fname','fid','phone_number','amount_paid','balance']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_smsinvalidoaf',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_smsinvalidoaf',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Smsinvalidoaf Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'smsinvalidoaf_id'
		 },
		 {
		text     : ' Fname ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'fname'
		 },
		 {
		text     : ' Fid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'fid'
		 },
		 {
		text     : ' Phone Number ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'phone_number'
		 },
		 {
		text     : ' Amount Paid ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount_paid'
		 },
		 {
		text     : ' Balance ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'balance'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_smsinvalidoafForm('detailinfo','updateload',rec.get('smsinvalidoaf_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Smsinvalidoaf',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_smsinvalidoaf function


// sms smsmsgcust

function gridViewsms_smsmsgcust(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_smsmsgcust = Ext.get('gridViewsms_smsmsgcust');	

	Ext.define('Sms_smsmsgcust', {
    extend: 'Ext.data.Model',
	fields:['smsmsgcust_id','message','status']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_smsmsgcust',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_smsmsgcust',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Smsmsgcust Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'smsmsgcust_id'
		 },
		 {
		text     : ' Message ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'message'
		 },
		 {
		text     : ' Status ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'status'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_smsmsgcustForm('detailinfo','updateload',rec.get('smsmsgcust_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Smsmsgcust',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_smsmsgcust function


// sms smsresponsefreq

function gridViewsms_smsresponsefreq(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_smsresponsefreq = Ext.get('gridViewsms_smsresponsefreq');	

	Ext.define('Sms_smsresponsefreq', {
    extend: 'Ext.data.Model',
	fields:['smsresponsefreq_id','smsresponsefreq_name','period']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_smsresponsefreq',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_smsresponsefreq',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Smsresponsefreq Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'smsresponsefreq_id'
		 },
		 {
		text     : ' Smsresponsefreq Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'smsresponsefreq_name'
		 },
		 {
		text     : ' Period ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'period'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_smsresponsefreqForm('detailinfo','updateload',rec.get('smsresponsefreq_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Smsresponsefreq',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_smsresponsefreq function


// sms systemlock

function gridViewsms_systemlock(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_systemlock = Ext.get('gridViewsms_systemlock');	

	Ext.define('Sms_systemlock', {
    extend: 'Ext.data.Model',
	fields:['systemlock_id','status_name']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_systemlock',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_systemlock',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Systemlock Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'systemlock_id'
		 },
		 {
		text     : ' Status Id ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'status_name'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_systemlockForm('detailinfo','updateload',rec.get('systemlock_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Systemlock',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_systemlock function


// sms systemmode

function gridViewsms_systemmode(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnsms_systemmode = Ext.get('gridViewsms_systemmode');	

	Ext.define('Sms_systemmode', {
    extend: 'Ext.data.Model',
	fields:['systemmode_id','current_mode']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Sms_systemmode',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=sms_systemmode',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Systemmode Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'systemmode_id'
		 },
		 {
		text     : ' Current Mode ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'current_mode'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

sms_systemmodeForm('detailinfo','updateload',rec.get('systemmode_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Sms Systemmode',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewsms_systemmode function


// accounts directtransferin

function gridViewaccounts_directtransferin(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_directtransferin = Ext.get('gridViewaccounts_directtransferin');	

	Ext.define('Accounts_directtransferin', {
    extend: 'Ext.data.Model',
	fields:['directtransferin_id','directtransferin_name','accaccount_name','company_account','client_account','amount','date_transferred','transaction_type','naration']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_directtransferin',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_directtransferin',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Directtransferin Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'directtransferin_id'
		 },
		 {
		text     : ' Directtransferin Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'directtransferin_name'
		 },
		 {
		text     : ' Accaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accaccount_name'
		 },
		 {
		text     : ' Company Account ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'company_account'
		 },
		 {
		text     : ' Client Account ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'client_account'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Date Transferred ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_transferred'
		 },
		 {
		text     : ' Transaction Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_type'
		 },
		 {
		text     : ' Naration ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'naration'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_directtransferinForm('detailinfo','updateload',rec.get('directtransferin_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Directtransferin',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_directtransferin function


// accounts directtransferout

function gridViewaccounts_directtransferout(){
var viewdiv=document.getElementById('detailinfo');
viewdiv.innerHTML='';
Ext.QuickTips.init();
var closebtn= Ext.get('close-btn');
	var  viewgrbtnaccounts_directtransferout = Ext.get('gridViewaccounts_directtransferout');	

	Ext.define('Accounts_directtransferout', {
    extend: 'Ext.data.Model',
	fields:['directtransferout_id','directtransferout_name','accaccount_name','company_account','client_account','amount','date_transferred','transaction_type','naration']
	});
	var store = Ext.create('Ext.data.Store', {
    model: 'Accounts_directtransferout',
    proxy: {
        type: 'ajax',
        url : 'buidgrid.php?t=accounts_directtransferout',
        reader: {
            type: 'json'
        }
    }
});
  store.load();
    var grid = Ext.create('Ext.grid.Panel', {
						  
        store: store,
        stateful: true,
        //collapsible: true,
        multiSelect: true,
		iconCls: 'icon-grid',
        stateId: 'stateGrid',
		animCollapse:false,
        constrainHeader:true,
        layout: 'fit',
		columnLines: true,
		//headerPosition :'left',
		bbar:{height: 20},
		columns:[
		new Ext.grid.RowNumberer(),{
		text     : ' Directtransferout Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'directtransferout_id'
		 },
		 {
		text     : ' Directtransferout Name ' , 
		 flex : 1 , 
		 sortable : true , 
		 dataIndex : 'directtransferout_name'
		 },
		 {
		text     : ' Accaccount Id ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'accaccount_name'
		 },
		 {
		text     : ' Company Account ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'company_account'
		 },
		 {
		text     : ' Client Account ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'client_account'
		 },
		 {
		text     : ' Amount ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'amount'
		 },
		 {
		text     : ' Date Transferred ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'date_transferred'
		 },
		 {
		text     : ' Transaction Type ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'transaction_type'
		 },
		 {
		text     : ' Naration ' , 
		 width : 80 , 
		 sortable : true , 
		 dataIndex : 'naration'
		 },
		 {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    icon   : '../shared/icons/fam/delete.gif',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);
                        alert('Sell ' + rec.get('alert_name'));
                    }
                }, {
                    getClass: function(v, meta, rec) { 
                        if (rec.get('alert_name') < 0) {
                            this.items[1].tooltip = 'Hold stock';
                            return 'alert-col';
                        } else {
                            this.items[1].tooltip = 'Buy stock';
                            return 'buy-col';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = store.getAt(rowIndex);

accounts_directtransferoutForm('detailinfo','updateload',rec.get('directtransferout_id'));
alert("Hidddddddddddddddd");
                    }
                }]
            }
        ]
		
		,
		maxHeight: 600,
        width: 600,
		resizable:true,
        title: ' Accounts Directtransferout',
        renderTo: 'detailinfo',
        viewConfig: {
            stripeRows: true,
            enableTextSelection: true
		},
		tbar:[{
                    text:'Add Record',
                    tooltip:'Add a new row',
                    iconCls:'add',
					handler:function(){
						alert('something');
					}
                }, '-', {
                    text:'Options',
                    tooltip:'Blah blah blah blaht',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
		
    });
	
	/*var win = Ext.create('Ext.Window', {
		extend: 'Ext.ux.desktop.Module',				  
        title: 'Grid Filters Example',
		collapsable:true,
		autoScroll :true,
        layout: 'fit',
		items: grid
    }).show();*/
	
}//end of gridViewaccounts_directtransferout function
