
function createTabbed1(){
/*var obj=document.getElementById('dynamicviewdetailinfo');
obj.innerHTML='';*/
   loadtype='Save';
   //**************************************************************************************
  

Ext.define('cmbAdmin_role', {
    extend: 'Ext.data.Model',
	fields:['role_id','role_name']
	});

var admin_roledata = Ext.create('Ext.data.Store', {
    model: 'cmbAdmin_role',
    proxy: {
        type: 'ajax',
        url : 'cmb.php?tbp=admin_role',
        reader: {
            type: 'json'
        }
    }
});

admin_roledata.load();


Ext.define('cmbAdmin_dept', {
    extend: 'Ext.data.Model',
	fields:['dept_id','dept_name']
	});

var admin_deptdata = Ext.create('Ext.data.Store', {
    model: 'cmbAdmin_dept',
    proxy: {
        type: 'ajax',
        url : 'cmb.php?tbp=admin_dept',
        reader: {
            type: 'json'
        }
    }
});

admin_deptdata.load();

  //*************************************************************************************
   
   admin_contactdata='kwasdasd';
   

Ext.define('cmbAdmin_role', {
    extend: 'Ext.data.Model',
	fields:['role_id','role_name']
	});

var admin_roledata = Ext.create('Ext.data.Store', {
    model: 'cmbAdmin_role',
    proxy: {
        type: 'ajax',
        url : 'cmb.php?tbp=admin_role',
        reader: {
            type: 'json'
        }
    }
});

admin_roledata.load();


Ext.define('cmbAdmin_dept', {
    extend: 'Ext.data.Model',
	fields:['dept_id','dept_name']
	});

var admin_deptdata = Ext.create('Ext.data.Store', {
    model: 'cmbAdmin_dept',
    proxy: {
        type: 'ajax',
        url : 'cmb.php?tbp=admin_dept',
        reader: {
            type: 'json'
        }
    }
});

admin_deptdata.load();

   Ext.create('Ext.panel.Panel', {
    renderTo: 'dynamicviewdetailinfo',
	closable:true,
    width: 700,
	bodyPadding:10,
    title: 'Person Registration',
    items: [
			     {
	layout:'column',
    items: [{
        title: false,
        columnWidth: .65,
		bodyPadding: 10,
		border:false,
		items:[{
						xtype: 'fieldset',
						title: 'Personal Details',
						width:380,
						collapsible:true,
						
						
						iconCls:'usergroup',
						items: [{xtype:'hidden',
             name:'t',
			 value:'admin_person '
			 },
			 {xtype:'hidden',
             name:'tttact',
			 value:loadtype
			 },{
            xtype: 'textfield',
			readOnly:true,value:'EMP/00002402/2012',
			
            name: 'person_name',
            fieldLabel: 'Employee Number',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'textfield',
			readOnly:true,value:'sdsad',
			
            name: 'first_name',
            fieldLabel: 'First Name ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'textfield',
			readOnly:true,value:'sdsds',
			
            name: 'middle_name',
            fieldLabel: 'Middle Name ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'textfield',
			readOnly:true,value:'sdsds',
			
            name: 'last_name',
            fieldLabel: 'Last Name ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'textfield',
			readOnly:true,value:'sdsds',
			
            name: 'idorpassport_number',
            fieldLabel: 'Idorpassport Number ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'datefield',
			readOnly:true,value:'1970-01-01',
			
            name: 'dob',
            fieldLabel: 'Dob ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'textfield',
			readOnly:true,value:'sdsds',
			
            name: 'pin',
            fieldLabel: 'Pin ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'numberfield',
			readOnly:true,value:'',
			
            name: 'gender',
            fieldLabel: 'Gender ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'textfield',
			readOnly:true,value:'Active',
			
            name: 'status',
            fieldLabel: 'Status ',
            allowBlank: false,
            minLength: 1
        
		}]
		      }]
    },{
        title:false,
		margin: '5 5 5 5',
		
        columnWidth: 0.27,
		border:false,
		bodyPadding: 10,
		
		
		items:[{
		        xtype: 'fieldset',
				collapsible:true,
				title:'Photo',
				width:160,
				
				html:'<div id="currentImage" style="width: 150px; height: auto; overflow: hidden;">'
+'<div id="cngphotodiv"></div>'
    +'<center>'
        +'<a href="#" onClick="'
		+'showPhotoMenu(\'admin_person \',2414,\'241434033\',1);">'
		 +' <img visibility="visible" alt="Employee Photo" '
		 +' src="../template/images/default_employee_image.gif" id="empPic"'
		 +' style="width:100%;" border="0"'
		 +'height="150" width="150">'
       +' </a><span class="smallHelpText"><strong>'
	   +'</strong></span>'
    +'</center>'
+'</div>'
				}
		/*{
            html: '<div id="personpicture">'
			+'</div>'
        },{
            xtype: 'button',
            name: 'addphoto',
            text: 'Add Photo',
            allowBlank: false,
            minLength: 1,
			handler:function(){
			
			}
        
		}*/]
    }]
			/////////////////////////////////////////////////
					},
				 //
				 {xtype:'tabpanel',
				 title:false,
				 bodyPadding: 10,
				 items:[
        {
        xtype: 'form',
		tbar:[{
                    text:'Add new',
                    tooltip:'Add a new row',
                    iconCls:'add'
                }, '-', {
                    text:'Options',
                    tooltip:'Configure options',
                    iconCls:'option'
                },'-',{
                    text:'Search',
                    tooltip:'Delete selected item',
                    iconCls:'search'
                },'-',{
                    text:'View',
                    tooltip:'View table Grid',
                    iconCls:'grid',
					handler:function(buttonObj, eventObj) { 
									createFormGrid('Save','NOID','admin_roleperson','g')
									}
                },'-',],
		resizable:true,
        frame: true,
		url:'bodysave.php',
        width: 550,
        bodyPadding: 10,
        bodyBorder: true,
		wallpaper: '../sview/desktop/wallpapers/desk.jpg',
        wallpaperStretch: false,
        title: 'Role',

        defaults: {
            anchor: '100%'
        },
        fieldDefaults: {
            labelAlign: 'left',
            msgTarget: 'none',
            /*invalidCls: '' 
			unset the invalidCls so individual fields do not get styled as invalid*/
        },

        /*
         * Listen for validity change on the entire form and update the combined error icon
         */
        listeners: {
            fieldvaliditychange: function() {
                this.updateErrorState();
            },
            fielderrorchange: function() {
                this.updateErrorState();
            }
        },

        updateErrorState: function() {
            var me = this,
                errorCmp, fields, errors;

            if (me.hasBeenDirty || me.getForm().isDirty()) { 
                errorCmp = me.down('#formErrorState');
                fields = me.getForm().getFields();
                errors = [];
                fields.each(function(field) {
                    Ext.Array.forEach(field.getErrors(), function(error) {
                        errors.push({name: field.getFieldLabel(), error: error});
                    });
                });
                errorCmp.setErrors(errors);
                me.hasBeenDirty = true;
            }
        },

        items: [
		
		{xtype:'hidden',
             name:'t',
			 value:'admin_roleperson'
			 },
			 {xtype:'hidden',
             name:'tttact',
			 value:loadtype
			 },{
            xtype: 'hidden',
			
			 value:'2414',
            name: 'person_id',
            fieldLabel: 'Person Id ',
            allowBlank: false,
            minLength: 1
        
		},
   {
    xtype: 'combobox',
	name:'role_id',
	forceSelection:true,
	
    fieldLabel: 'Role Id ',
    store: admin_roledata,
	
    queryMode: 'remote',
    displayField: 'role_name',
    valueField: 'role_id'
	}],dockedItems: [{
            xtype: 'container',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            padding: '10 10 5',

            items: [{
                xtype: 'component',
                id: 'formErrorState',
                baseCls: 'form-error-state',
                flex: 1,
                validText: 'Form is valid',
                invalidText: 'Form has errors',
                tipTpl: Ext.create('Ext.XTemplate', '<ul><tpl for=><li><span class="field-name">{name}</span>: '
				+ '<span class="error">{error}</span></li></tpl></ul>'),

                getTip: function() {
                    var tip = this.tip;
                    if (!tip) {
                        tip = this.tip = Ext.widget('tooltip', {
                            target: this.el,
                            title: 'Error Details:',
                            autoHide: false,
                            anchor: 'top',
                            mouseOffset: [-11, -2],
                            closable: true,
                            constrainPosition: false,
                            cls: 'errors-tip'
                        });
                        tip.show();
                    }
                    return tip;
                },

                setErrors: function(errors) {
                    var me = this,
                        baseCls = me.baseCls,
                        tip = me.getTip();

                    errors = Ext.Array.from(errors);

                    
                    if (errors.length) {
                        me.addCls(baseCls + '-invalid');
                        me.removeCls(baseCls + '-valid');
                        me.update(me.invalidText);
                        tip.setDisabled(false);
                        tip.update(me.tipTpl.apply(errors));
                    } else {
                        me.addCls(baseCls + '-valid');
                        me.removeCls(baseCls + '-invalid');
                        me.update(me.validText);
                        tip.setDisabled(true);
                        tip.hide();
                    }
                }
            }, 
			
			
	/*now submit*/
	{
		xtype: 'button',
        text: 'Submit Data',
        handler: function() {
            var form = this.up('form').getForm();
            if(form.isValid()){
                form.submit({
                    url: 'bodysave.php',
                    waitMsg: 'saving changes...',
                    success: function(fp, o) {
                       // Ext.Msg.alert('Success', '' + o.result.savemsg + '"');
					   eval(o.result.savemsg);
                    }
                });
            }
        }
    }
	
		]
        }]
   
						
						}
		
	,
        {
        xtype: 'form',
		tbar:[{
                    text:'Add new',
                    tooltip:'Add a new row',
                    iconCls:'add'
                }, '-', {
                    text:'Options',
                    tooltip:'Configure options',
                    iconCls:'option'
                },'-',{
                    text:'Search',
                    tooltip:'Delete selected item',
                    iconCls:'search'
                },'-',{
                    text:'View',
                    tooltip:'View table Grid',
                    iconCls:'grid',
					handler:function(buttonObj, eventObj) { 
									createFormGrid('Save','NOID','admin_adminuser','g')
									}
                },'-',],
		resizable:true,
        frame: true,
		url:'bodysave.php',
        width: 550,
        bodyPadding: 10,
        bodyBorder: true,
		wallpaper: '../sview/desktop/wallpapers/desk.jpg',
        wallpaperStretch: false,
        title: 'Users',

        defaults: {
            anchor: '100%'
        },
        fieldDefaults: {
            labelAlign: 'left',
            msgTarget: 'none',
            /*invalidCls: '' 
			unset the invalidCls so individual fields do not get styled as invalid*/
        },

        /*
         * Listen for validity change on the entire form and update the combined error icon
         */
        listeners: {
            fieldvaliditychange: function() {
                this.updateErrorState();
            },
            fielderrorchange: function() {
                this.updateErrorState();
            }
        },

        updateErrorState: function() {
            var me = this,
                errorCmp, fields, errors;

            if (me.hasBeenDirty || me.getForm().isDirty()) { 
                errorCmp = me.down('#formErrorState');
                fields = me.getForm().getFields();
                errors = [];
                fields.each(function(field) {
                    Ext.Array.forEach(field.getErrors(), function(error) {
                        errors.push({name: field.getFieldLabel(), error: error});
                    });
                });
                errorCmp.setErrors(errors);
                me.hasBeenDirty = true;
            }
        },

        items: [
		
		{xtype:'hidden',
             name:'t',
			 value:'admin_adminuser'
			 },
			 {xtype:'hidden',
             name:'tttact',
			 value:loadtype
			 },{
            xtype: 'hidden',
			
			 value:'2414',
            name: 'person_id',
            fieldLabel: 'Person Id ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'textfield',
			
			
            name: 'username',
            fieldLabel: 'Username ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'textfield',
            name: 'password',
			
			
            fieldLabel: 'Password ',
			 inputType: 'password',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'checkbox',
			
			
            name: 'status',
			inputValue:'Active',
            fieldLabel: 'Activate',
            allowBlank: false,
            minLength: 1
        
		}],dockedItems: [{
            xtype: 'container',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            padding: '10 10 5',

            items: [{
                xtype: 'component',
                id: 'formErrorState',
                baseCls: 'form-error-state',
                flex: 1,
                validText: 'Form is valid',
                invalidText: 'Form has errors',
                tipTpl: Ext.create('Ext.XTemplate', '<ul><tpl for=><li><span class="field-name">{name}</span>: '
				+ '<span class="error">{error}</span></li></tpl></ul>'),

                getTip: function() {
                    var tip = this.tip;
                    if (!tip) {
                        tip = this.tip = Ext.widget('tooltip', {
                            target: this.el,
                            title: 'Error Details:',
                            autoHide: false,
                            anchor: 'top',
                            mouseOffset: [-11, -2],
                            closable: true,
                            constrainPosition: false,
                            cls: 'errors-tip'
                        });
                        tip.show();
                    }
                    return tip;
                },

                setErrors: function(errors) {
                    var me = this,
                        baseCls = me.baseCls,
                        tip = me.getTip();

                    errors = Ext.Array.from(errors);

                    
                    if (errors.length) {
                        me.addCls(baseCls + '-invalid');
                        me.removeCls(baseCls + '-valid');
                        me.update(me.invalidText);
                        tip.setDisabled(false);
                        tip.update(me.tipTpl.apply(errors));
                    } else {
                        me.addCls(baseCls + '-valid');
                        me.removeCls(baseCls + '-invalid');
                        me.update(me.validText);
                        tip.setDisabled(true);
                        tip.hide();
                    }
                }
            }, 
			
			
	/*now submit*/
	{
		xtype: 'button',
        text: 'Submit Data',
        handler: function() {
            var form = this.up('form').getForm();
            if(form.isValid()){
                form.submit({
                    url: 'bodysave.php',
                    waitMsg: 'saving changes...',
                    success: function(fp, o) {
                       // Ext.Msg.alert('Success', '' + o.result.savemsg + '"');
					   eval(o.result.savemsg);
                    }
                });
            }
        }
    }
	
		]
        }]
   
						
						}
		
	,
        {
        xtype: 'form',
		tbar:[{
                    text:'Add new',
                    tooltip:'Add a new row',
                    iconCls:'add'
                }, '-', {
                    text:'Options',
                    tooltip:'Configure options',
                    iconCls:'option'
                },'-',{
                    text:'Search',
                    tooltip:'Delete selected item',
                    iconCls:'search'
                },'-',{
                    text:'View',
                    tooltip:'View table Grid',
                    iconCls:'grid',
					handler:function(buttonObj, eventObj) { 
									createFormGrid('Save','NOID','admin_persondept','g')
									}
                },'-',],
		resizable:true,
        frame: true,
		url:'bodysave.php',
        width: 550,
        bodyPadding: 10,
        bodyBorder: true,
		wallpaper: '../sview/desktop/wallpapers/desk.jpg',
        wallpaperStretch: false,
        title: 'Department',

        defaults: {
            anchor: '100%'
        },
        fieldDefaults: {
            labelAlign: 'left',
            msgTarget: 'none',
            /*invalidCls: '' 
			unset the invalidCls so individual fields do not get styled as invalid*/
        },

        /*
         * Listen for validity change on the entire form and update the combined error icon
         */
        listeners: {
            fieldvaliditychange: function() {
                this.updateErrorState();
            },
            fielderrorchange: function() {
                this.updateErrorState();
            }
        },

        updateErrorState: function() {
            var me = this,
                errorCmp, fields, errors;

            if (me.hasBeenDirty || me.getForm().isDirty()) { 
                errorCmp = me.down('#formErrorState');
                fields = me.getForm().getFields();
                errors = [];
                fields.each(function(field) {
                    Ext.Array.forEach(field.getErrors(), function(error) {
                        errors.push({name: field.getFieldLabel(), error: error});
                    });
                });
                errorCmp.setErrors(errors);
                me.hasBeenDirty = true;
            }
        },

        items: [
		
		{xtype:'hidden',
             name:'t',
			 value:'admin_persondept'
			 },
			 {xtype:'hidden',
             name:'tttact',
			 value:loadtype
			 },
   {
    xtype: 'combobox',
	name:'dept_id',
	forceSelection:true,
	
    fieldLabel: 'Dept Id ',
    store: admin_deptdata,
	
    queryMode: 'remote',
    displayField: 'dept_name',
    valueField: 'dept_id'
	},{
            xtype: 'hidden',
			
			 value:'2414',
            name: 'person_id',
            fieldLabel: 'Person Id ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'datefield',
			
			
            name: 'start_dt',
            fieldLabel: 'Start Dt ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'datefield',
			
			
            name: 'end_dt',
            fieldLabel: 'End Dt ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'textfield',
			
			
            name: 'is_active',
            fieldLabel: 'Is Active ',
            allowBlank: false,
            minLength: 1
        
		},{
            xtype: 'textareafield',
			
			
            name: 'comments',
            fieldLabel: 'Comments ',
            allowBlank: false,
            minLength: 1
        
		}],dockedItems: [{
            xtype: 'container',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            padding: '10 10 5',

            items: [{
                xtype: 'component',
                id: 'formErrorState',
                baseCls: 'form-error-state',
                flex: 1,
                validText: 'Form is valid',
                invalidText: 'Form has errors',
                tipTpl: Ext.create('Ext.XTemplate', '<ul><tpl for=><li><span class="field-name">{name}</span>: '
				+ '<span class="error">{error}</span></li></tpl></ul>'),

                getTip: function() {
                    var tip = this.tip;
                    if (!tip) {
                        tip = this.tip = Ext.widget('tooltip', {
                            target: this.el,
                            title: 'Error Details:',
                            autoHide: false,
                            anchor: 'top',
                            mouseOffset: [-11, -2],
                            closable: true,
                            constrainPosition: false,
                            cls: 'errors-tip'
                        });
                        tip.show();
                    }
                    return tip;
                },

                setErrors: function(errors) {
                    var me = this,
                        baseCls = me.baseCls,
                        tip = me.getTip();

                    errors = Ext.Array.from(errors);

                    
                    if (errors.length) {
                        me.addCls(baseCls + '-invalid');
                        me.removeCls(baseCls + '-valid');
                        me.update(me.invalidText);
                        tip.setDisabled(false);
                        tip.update(me.tipTpl.apply(errors));
                    } else {
                        me.addCls(baseCls + '-valid');
                        me.removeCls(baseCls + '-invalid');
                        me.update(me.validText);
                        tip.setDisabled(true);
                        tip.hide();
                    }
                }
            }, 
			
			
	/*now submit*/
	{
		xtype: 'button',
        text: 'Submit Data',
        handler: function() {
            var form = this.up('form').getForm();
            if(form.isValid()){
                form.submit({
                    url: 'bodysave.php',
                    waitMsg: 'saving changes...',
                    success: function(fp, o) {
                       // Ext.Msg.alert('Success', '' + o.result.savemsg + '"');
					   eval(o.result.savemsg);
                    }
                });
            }
        }
    }
	
		]
        }]
   
						
						}]
				 }
				 ]}
				 );

 
 }
 createTabbed1();