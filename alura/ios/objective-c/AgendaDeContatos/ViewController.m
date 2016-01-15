//
//  ViewController.m
//  AgendaDeContatos
//
//  Created by Fabrício Silva on 1/14/16.
//  Copyright © 2016 Fabrício Silva. All rights reserved.
//

#import "ViewController.h"
#import "Contato.h"

@implementation ViewController

-(IBAction) adiciona {
    Contato *contato = [Contato new];
    contato.nome = self.nome.text;
    contato.endereco = self.endereco.text;
    contato.site = self.site.text;
    contato.telefone = self.telefone.text;
    contato.email = self.email.text;

    NSLog(@"Dados do Contato: %@ %@ %@ %@ %@",
          contato.nome, contato.endereco, contato.site,
          contato.telefone, contato.email);
}

@end
