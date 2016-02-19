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

-(id) initWithCoder: (NSCoder *) aDecoder {
    self = [super initWithCoder:aDecoder];
    if (self) {
        UIBarButtonItem *botao = [[UIBarButtonItem alloc] initWithTitle:@"Adicionar" style:UIBarButtonItemStylePlain target:self action:@selector(adiciona)];
        self.navigationItem.rightBarButtonItem = botao;
        self.navigationItem.title = @"Novo Contato";
        self.dao = [ContatoDao contatoDaoInstance];
    }
    
    return self;
}

-(void) adiciona {
    Contato *contato = [Contato new];
    contato.nome = self.nome.text;
    contato.endereco = self.endereco.text;
    contato.site = self.site.text;
    contato.telefone = self.telefone.text;
    contato.email = self.email.text;
    
    [self.dao adicionaContato:contato];
    
    NSLog(@"%@", self.dao.contatos);

    [self.navigationController popViewControllerAnimated:YES];
}

@end
