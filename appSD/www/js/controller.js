angular.module('leitor.controllers', ['ionic', 'ngCordova'])
	.controller('leitorController', function($scope, $cordovaBarcodeScanner){
		$scope.lerCodigo = function(){
			$cordovaBarcodeScanner.scan().then( function(imagemEscaneada){
				alert(imagemEscaneada.text)
			}, function(error){
				alert("Ocorreu um erro: " + error)
			});
		}
	});