function Agendamento() {

  var clazz = {

    para: function(consulta) {
      var umDiaEmMillisegundo = 1000 * 60 * 60 * 24;
      var vindeDiasEmMillisegundos = umDiaEmMillisegundo * 20;

      var novaData = new Date(consulta.getData().getTime() + vindeDiasEmMillisegundos);
      while(novaData.getDay() == 0 || novaData.getDay() == 6) {
        novaData = new Date(novaData.getTime() + umDiaEmMillisegundo);
      }

      var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.isParticular(), true, novaData);
      return novaConsulta;
    }

  };

  return clazz;

}
