$("#image-selector").change(function () {
    let reader = new FileReader();
    reader.onload = function () {
        let dataURL = reader.result;
        $("#selected-image").attr("src", dataURL);
        $("#prediction-list").empty();
    }
    let file = $("#image-selector").prop("files")[0];
    reader.readAsDataURL(file);
}); 

let model;
(async function () {
    model = await tf.loadLayersModel('http://127.0.0.1:81/model_87/model.json');
    $(".progress-bar").hide();
})();

$("#predict-button").click(async function(){
	let image = $("#selected-image").get(0);
	let tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([224,224])
	.toFloat();


	let offset = tf.scalar(127.5);
	
	tensor = tensor.sub(offset)
	.div(offset)
	.expandDims();

	let predictions = await model.predict(tensor).data();
	let top = Array.from(predictions)
		.map(function (p, i){
			return {
				probability: p,
				className: XRAY_CLASSES[i]

			};
		}).sort(function(a, b){
			return b.probability - a.probability;
		});

	$("#prediction-list").empty();
	top.forEach(function (p) {
    	$("#prediction-list").append(`<li>${p.className}: ${p.probability.toFixed(6)}</li>`);
		});

});
