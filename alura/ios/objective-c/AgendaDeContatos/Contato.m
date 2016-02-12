//
//  Contato.m
//  AgendaDeContatos
//
//  Created by Fabrício Silva on 1/14/16.
//  Copyright © 2016 Fabrício Silva. All rights reserved.
//

#import "Contato.h"

@implementation Contato

- (NSString *)description {
    NSString *dados = [NSString stringWithFormat:@"Nome: %@ Endereço: %@ E-mail: %@ Site: %@ Telefone: %@", self.nome, self.endereco, self.email, self.site, self.telefone];
    return dados;
}

@end
