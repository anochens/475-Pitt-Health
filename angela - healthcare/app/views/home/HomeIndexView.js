App.views.HomeIndex = Ext.extend(Ext.Panel, {
	html: '<a href="#Home/about" class="menu-item">About</a> <a href="#Home/recent" class="menu-item">Recent</a> <a href="#Home/patientTypes" class="menu-item">Patient Types</a>',
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
});
Ext.reg('HomeIndex', App.views.HomeIndex);