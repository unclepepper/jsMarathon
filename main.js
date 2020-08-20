// const firstRow = prompt('Введите слово');
// const secondRow = prompt('Введите второе слово');



// function getRow(firstRow, secondRow) {
// 	let s = 0;
// 	let j = 0;
// 	let result;
// 	for (let i = 0; i <= firstRow.length-1; i++) {
		
// 		if(firstRow.charAt(i)=='а'){
// 			j = j + 1;
// 		}
// 		if(secondRow.charAt(i)=='а'){
// 			s = s + 1;
// 		}

// 	}
// 	let message;
// 	if(j !== 0 || s !== 0){
// 		if(j > s){
// 			message = 'В  ' + firstRow + ' количество букв "А" больше, чем в  ' + secondRow;
		
// 		}else if(j < s){
// 			message = 'В  ' + secondRow + ' количество букв "А" больше, чем в  ' + firstRow;
// 	}else {
// 			message = 'В  ' + firstRow + ' и ' + secondRow + ' количество букв "А" одинаковое';
// 		}
// 	}else{
// 		message = 'В этих словах нет буквы "А"';
// 	}
// 	return message;
	
// }

// console.log(getRow(firstRow, secondRow));


const phone = prompt('Введите номер телефона');


function formattedPhone(phone) {
	
	if(phone.charAt(0) !== '+'){
			return '+7 (' + phone.charAt(1)+ phone.charAt(2)+ phone.charAt(3) + ') ' + phone.charAt(4)+ phone.charAt(5)+ phone.charAt(6) + '-'+ phone.charAt(7)+ phone.charAt(8)+ '-'+ phone.charAt(9)+ phone.charAt(10);	
		}else

		return phone.charAt(0) + phone.charAt(1) + ' (' + phone.charAt(2)+ phone.charAt(3)+ phone.charAt(4) + ') ' + phone.charAt(5)+ phone.charAt(6)+ phone.charAt(7) + '-'+ phone.charAt(8)+ phone.charAt(9)+ '-'+ phone.charAt(10)+ phone.charAt(11);
}

alert(formattedPhone(phone)); // +7 (123) 456-78-90
