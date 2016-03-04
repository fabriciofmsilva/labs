//
//  ListaContatosViewController.h
//  AgendaDeContatos
//
//  Created by Fabrício Silva on 1/21/16.
//  Copyright © 2016 Fabrício Silva. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ContatoDao.h"

@interface ListaContatosViewController : UITableViewController

@property ContatoDao *dao;
@property Contato *contatoSelecionado;

@end
