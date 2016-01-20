<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
<title>Listagem de produtos</title>
</head>
<body>
	<h1>Listagem de produtos</h1>
	
	<table class="table table-striped table-hover table-bordered">
		<thead>
			<tr>
				<th>Nome</th>
				<th>Valor</th>
				<th>Quantidade</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${produtoList}" var="produto">
			<tr>
				<td>${produto.nome}</td>
				<td>${produto.valor}</td>
				<td>${produto.quantidade}</td>
				<td>
				   <a href="<c:url value='/produto/remove?produto.id=${produto.id}'/>">Remover</a>
				</td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
	
<c:if test="${not empty mensagem}">
    <div class="alert alert-success">${mensagem}</div>
</c:if>


<a href="<c:url value='/produto/formulario'/>">
    Adicionar mais produtos!
</a>

<a href="<c:url value='/produto/listaXML'/>">
    Acesse essa lista em XML!
</a>

</body>
</html>