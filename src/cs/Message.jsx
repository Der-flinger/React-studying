// Развернуть новый проект с использованием create-react-app.
// Создать компонент Message, отображающий переданный ему props текст.
// Стилизовать компоненты через css (при желании можно использовать less или sass).
// Дополнительное задание: Установить расширение React Devtools.
function Message(props) {
	return (
		<div>
			<h2>here massage: {props.text}</h2>
		</div>
	);
}

export default Message;
