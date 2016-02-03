<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Novo Produto</title>
<link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="../base.css">
</head>
<body>
<div class="container">
	<h1>Adicionar Produto</h1>
	
	<form action="<c:url value='/produto/adiciona' />" method="POST">
		Nome: <input class="form-control" name="produto.nome" type="text">
		Valor: <input class="form-control" name="produto.valor" type="text">
		Quantidade: <input class="form-control" name="produto.quantidade" type="text">
		<input class="btn btn-primary" type="submit" value="Adicionar">
	</form>
</div>

<c:forEach items="${errors}" var="erro">
	${erro.category} - ${erro.message} <br>
</c:forEach>

</body>
</html>