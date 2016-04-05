/**
 *
 * pert.js
 * PERT三点見積もり
 * @author Atsushi Yonenaga <a.yonenaga@gmail.com>
 */


$(document).ready(function() {
});

$('input[type="button"]').on('click', updatePert);
$(document).on('change','input', updatePert);


// TODO: ３つの値全部が入っている時だけ計算するようにする
// TODO: 三角分布モード実装

/**
 * 再計算してinputに出力
 */ 

function updatePert() {
		var saihin = 0;
		var hikan  = 0;
		var rakkan = 0;

		saihin = numInput('saihin');
		hikan = numInput('hikan');
		rakkan = numInput('rakkan');

		$('#estimated').val(calcPert(saihin, hikan, rakkan));
}

/**
 * β分布での加重平均を求める
 */
function calcPert(saihin, hikan, rakkan){
	var retval = (saihin*4 + hikan + rakkan)/6;
	return retval; 
	
}

/**
 * inputを数値として取得する
 */
function numInput(name) {
	var val = $('input[name="' + name + '"]').val();
	var intVal = val === "" ? 0 : val ;
	return parseInt(intVal, 10);
}
