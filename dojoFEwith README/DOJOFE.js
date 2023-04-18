require([
  "dijit/registry",
  "dojo/_base/lang",
  "dijit/form/Button",
  "dojo/dom",
  "app/Main",
  "ecm/model/Desktop",
  "dojo/domReady!",
], function (
  registry,
  lang,
  Button,
  dom,
  Main,
  Desktop
 


) {

  
  console.log(localStorage.getItem("langu"));
  const _Main = new Main();
  document.getElementById("APP").innerHTML = (_Main.templateString);
  // Desktop.userId="malmazyn";
  // Desktop.loadDesktop("moamalat",(data)=>{
  //   alert(data);
  // });
  // console.log(loadDesktop);

});
