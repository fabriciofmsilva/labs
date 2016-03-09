//
//  ContatoDao.m
//  AgendaDeContatos
//
//  Created by Fabrício Silva on 2/18/16.
//  Copyright © 2016 Fabrício Silva. All rights reserved.
//

#import "ContatoDao.h"

@implementation ContatoDao

static ContatoDao *defaultDao = nil;

- (id) init {
    self = [super init];
    
    if(self) {
        self.contatos = [NSMutableArray new];
    }
    return self;
}

+ (ContatoDao *) contatoDaoInstance {
    if (!defaultDao) {
        defaultDao = [ContatoDao new];
    }
    return defaultDao;
}

- (void) adicionaContato:(Contato *) contato {
    [self.contatos addObject:contato];
}

- (void) removeContato:(Contato *)contato {
    [self.contatos removeObject:contato];
}

- (NSInteger) total {
    return self.contatos.count;
}

- (Contato *) contatoDoIndice:(NSInteger) indice {
    return self.contatos[indice];
}

@end