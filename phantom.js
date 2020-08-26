var phantom = require('phantomjs');
 
phantom.create().then(function(ph) {
 ph.createPage().then(function(page) {
  page.open("https://www.oracle.com/index.html").then(function(status) {
   page.property('viewportSize',{width: 10000, height: 500});
   page.render('/oracle10000.pdf').then(function(){
    console.log('Page rendered');
    ph.exit();
   });
  });
 });
});