using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class EmpresaFacadeSingleton
  {
    private static EmpresaFacade facade = new EmpresaFacade();

    public EmpresaFacade Instancia
    {
      get {
        return facade;
      }
    }
  }
}
