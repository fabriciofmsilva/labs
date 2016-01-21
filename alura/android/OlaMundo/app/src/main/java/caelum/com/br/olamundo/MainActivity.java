package caelum.com.br.olamundo;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Log.i("OlaMundo", "onCreate");
    }

    @Override
    protected void onStart() {
        super.onStart();

        Log.i("OlaMundo", "onStart");
    }

    @Override
    protected void onResume() {
        super.onResume();

        Log.i("OlaMundo", "onResume");
    }

    @Override
    protected void onPause() {
        super.onPause();

        Log.i("OlaMundo", "onPause");
    }

    @Override
    protected void onStop() {
        super.onStop();

        Log.i("OlaMundo", "onStop");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        Log.i("OlaMundo", "onDestroy");
    }
}
