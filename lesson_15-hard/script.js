var name, age, mailing;

function access() {
	alert("Доступ к сайту разрешен");
	console.log("Пользователь допущен");
}

name = prompt("Как вас зовут?", '');
age = prompt("Сколько вам лет?", '');
mailing = confirm("Вы подписаны на рассылку?");

if (age > 18 && mailing) {
	access();
} else {
	alert("Доступ запрещен");
}