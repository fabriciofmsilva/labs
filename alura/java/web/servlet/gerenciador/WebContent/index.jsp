<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<body>
Bem vindo ao nosso gerenciador de empresas!<br/>

<c:if test="${not empty usuarioLogado}">
	Logado como ${usuarioLogado.email}<br/>
</c:if>

<form action="novaEmpresa" method="POST">
	Nome: <input type="text" name="nome">
	<input type="submit" value="Enviar">
</form>

<form action="login" method="POST">
	Email: <input name="email" type="email" />
	Senha: <input name="senha" type="password" />
	<input type="submit" value="Enviar" />
</form>

<form action="logout" method="POST">
	<input type="submit" value="Deslogar" />
</form>

</body>
</html>