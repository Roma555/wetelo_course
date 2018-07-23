<script>
var that_coping = { key1: "PamPam",
  					key2: 1
                  };
function clone_object(object){
	// новий пустий об*єкт
	var clone = {}; 
	// копіюєм
	for (var key in that_coping){
		clone[key] = that_coping[key];
	}
	alert("Скопійований об'єкт:", clone);
}
alert("Обєкт що копіюєм:", that_coping.key1);
clone_object(that_coping);

//цикл for(var i=0; i<arr.length; i++){}; працює швидше
//for(var key in that_coping){
//  console.log(that_coping[key]);
//}
</script>