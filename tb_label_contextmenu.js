// Generated by CoffeeScript 1.9.3
rcmail.addEventListener('contextmenu_init', function(menu) {
  console.log(menu.menu_name);
  if (menu.menu_name === 'messagelist') {
    return console.log(menu);
  }
});

$(function() {
  var menu = rcm_callbackmenu_init({menu_name: 'messagelist', menu_source: ['#messagetoolbar', '#tb_label_ctxm_mainmenu', ]});
  console.log(menu);
});
