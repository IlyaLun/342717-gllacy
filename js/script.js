// Скрипт вызывает модальное окно обратной связи

// Объявление всех переменных
var btn = document.querySelector(".feedback_btn"); // Выбрали кнопку Обратная связь
var overlay = document.querySelector(".modal_overlay"); // Выбрали оверлэй
var popup = document.querySelector(".modal_feedback"); // Выбрали модальное окно
var close = document.querySelector(".feedback_close");// Выбрали кнопку Закрыть (крестик)
var form = popup.querySelector("form");//Выбрали форму внутри модалки
var name = popup.querySelector("[name=name]");//Выбрали имя, которое будет вводиться в форму.
var email = popup.querySelector("[name=email]");

btn.addEventListener("click", function(event) { // При клике на кнопку ОС выполняются события:
	event.preventDefault(); //Сбрасываются дефолтные действия при нажатии.
	popup.classList.add("modal_feedback_show");//Модальному окну прописывается класс с display:block. 3.
	overlay.classList.add("modal_overlay_show");//Оверлэю тоже прописывается доп. класс с position:fixed.
})

close.addEventListener("click", function(event) { // При клике на крестик закрыть:
	event.preventDefault();//Сбрасываются дефолтные действия при нажатии.
	popup.classList.remove("modal_feedback_show");//У модалки удаляется ранее прописанный класс с display:block
	overlay.classList.remove("modal_overlay_show");//У оверлея тоже удаляется ранее прописанный класс.
});

// form.addEventListener("submit", function(event) {
// 	event.preventDefault();
// 	console.log(name.value);
// 	console.log(email.value);
// });
