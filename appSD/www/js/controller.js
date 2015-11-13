angular.module('leitor.controllers', ['ionic', 'ngCordova'])
	.controller('leitorController', function($scope, $cordovaBarcodeScanner, $state){
		$scope.lerCodigo = function(){
			$cordovaBarcodeScanner.scan().then( function(imagemEscaneada){
				//alert("teste "+JSON.stringify(imagemEscaneada));
				alert(imagemEscaneada.text);
				$state.go('forgotpassword', { mesa: "2" });
			}, function(error){
				alert("Ocorreu um erro: " + error);
			});
		}

		$scope.mudar_tela = function(){
			$state.go('forgotpassword', { mesa: "2" });
		}

	})

	.controller('cardapioController', function($scope, $state, $stateParams){
		$scope.mesa = $stateParams.mesa;

		$scope.obj_retorno_servidor = {
			'restaurante': {
				'nome': "Título 1",
				'logo': "img/servicosLogoFiora.png"
				},
			'comanda': {
				'id': 12
				},
			'cardapio': {
				'1': {
						'id': 1,
						'titulo': "Título 1",
						'descricao': "Descrição 1",
						'preco': "R$ 50,00",
						'foto': "img/feijoada.jpg"
					},
				'2': {
						'id': 2,
						'titulo': "Título 2",
						'descricao': "Descrição 2",
						'preco': "R$ 50,00",
						'foto': "img/feijoada.jpg"
					},
				'3': {
						'id': 3,
						'titulo': "Título 3",
						'descricao': "Descrição 3",
						'preco': "R$ 50,00",
						'foto': "img/feijoada.jpg"
					}
				}
		};

		$scope.realizar_pedido = function(id_produto){
			var qtd = document.getElementById('qtd_produto' + id_produto);
			var qtd_pedida = document.getElementById('qtd_pedida' + id_produto);
			alert("id: " + id_produto + " qtd: " + qtd.value);
			qtd_pedida.innerText = qtd.value;
		}
		
	});