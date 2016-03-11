//
//  ContatoDao.h
//  AgendaDeContatos
//
//  Created by Fabrício Silva on 2/18/16.
//  Copyright © 2016 Fabrício Silva. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Contato.h"

@interface ContatoDao : NSObject

@property NSMutableArray *contatos;

- (void) adicionaContato: (Contato *) contato;
- (NSInteger) total;
- (Contato *) contatoDoIndice: (NSInteger) indice;
- (NSInteger) indiceDoContato: (Contato *) contato;
+ (ContatoDao *) contatoDaoInstance;
- (void) removeContato: (Contato *) contato;

@end
