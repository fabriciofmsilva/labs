package caelum.com.br.cadastro;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.media.MediaPlayer;
import android.provider.MediaStore;
import android.telephony.SmsMessage;
import android.widget.Toast;

import caelum.com.br.cadastro.dao.AlunoDAO;

/**
 * Created by fabriciosilva on 3/17/16.
 */
public class SMSReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        Object[] mensagens = (Object[]) intent.getExtras().get("pdus");
        byte[] mensagem = (byte[]) mensagens[0];

        SmsMessage sms = SmsMessage.createFromPdu(mensagem);
        String telefone = sms.getOriginatingAddress();

        boolean smsEhDeAluno = new AlunoDAO(context).ehAluno(telefone);
        if (smsEhDeAluno) {
            MediaPlayer musica = MediaPlayer.create(context, R.raw.msg);
            musica.start();
        }
    }
}
