$(document).ready(function() {
	// Variável para armazenar a lista de tarefas
	var taskList = $('#task-list');

	// Função para adicionar uma tarefa à lista
	function addTask(taskName) {
		// Cria um novo elemento li com o nome da tarefa
		var newTask = $('<li>').text(taskName);

		// Adiciona um evento click ao elemento li
		newTask.click(function() {
			// Adiciona ou remove a classe "completed" do elemento li
			$(this).toggleClass('completed');
		});

		// Adiciona o elemento li à lista de tarefas
		taskList.append(newTask);
	}

	// Evento de submit do formulário
	$('form').submit(function(event) {
		// Impede que a página seja recarregada
		event.preventDefault();

		// Obtém o nome da nova tarefa do campo de texto
		var taskName = $('#new-task').val();

		// Adiciona a nova tarefa à lista
		addTask(taskName);

		// Limpa o campo de texto
		$('#new-task').val('');
	});
});