var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.BingMaps({
              imagerySet: 'AerialWithLabels',
              key: 'AtLadSYYesV1tzAdgTIanbFG9CtUHgVkyYKesVeN2skIBk0rdWG5e5BIb80LVgoA'
            })
          })
        ],
        view: new ol.View({
          center: [0,1500000],
          zoom: 2.3,
          maxZoom: 19,
          minZoom:2.3
        })
      })
var x = document.getElementById("mapPopUp");
setInterval(function(){
  if(map.getView().getZoom() >= 17){
    x.style.display = "none";
  }
  else{
    x.style.display = "block";
  }
}, 100)
  

document.getElementById("takeScreenshotBtn").onclick = function(){
    if (map.getView().getZoom() >= 17)
    {
      var element = $("#map");
      html2canvas(element,{
        background:'#ffffff',
        onrendered:function(canvas){
          var imgData = canvas.toDataURL('image/jpeg');
          $.ajax({
            url:'save.php',  
            type:'post',
            dataType:'text',
            data:{
              base64data:imgData
            }
          })
        }
      });
    }
}