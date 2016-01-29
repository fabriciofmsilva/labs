package caelum.com.br.olamundo;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

/**
 * Created by fabriciosilva on 1/29/16.
 */
public class CopiarActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_copiar);

        Button copiar = (Button) findViewById(R.id.btnCopiar);
        final TextView destino = (TextView) findViewById(R.id.destino);
        final EditText origem = (EditText) findViewById(R.id.origem);

        copiar.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                Log.i("OlaMundo", "Botão clicado");

                destino.setText(origem.getText());
            }
        });
    }

}
