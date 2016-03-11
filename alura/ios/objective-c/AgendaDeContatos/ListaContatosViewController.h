//
//  ListaContatosViewController.h
//  AgendaDeContatos
//
//  Created by Fabrício Silva on 1/21/16.
//  Copyright © 2016 Fabrício Silva. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ContatoDao.h"
#import "ViewController.h"

@interface ListaContatosViewController : UITableViewController<ViewControllerDelegate>

@property ContatoDao *dao;
@property Contato *contatoSelecionado;
@property NSInteger linhaSelecionada;

@end
