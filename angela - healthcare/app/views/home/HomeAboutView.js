App.views.HomeAbout = Ext.extend(Ext.Panel, {
    html: '<h2>About</h2> <p>About Pitt Healthcare stuff</p>',
    scroll: 'vertical',
    styleHtmlContent: true,
    style: 'background: #d8efed',
});
Ext.reg('HomeAbout', App.views.HomeAbout);