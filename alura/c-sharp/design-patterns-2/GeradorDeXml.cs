using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns2
{
  class GeradorDeXml
  {
    public String GeraXml(object o)
    {
      XmlSerializer serializer = new XmlSerializer(o.GetType());
      StringWriter writer = new StringWriter();
      serializer.Serialize(writer, o);
      return writer.ToString();
    }
  }
}
