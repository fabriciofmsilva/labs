//
//  ViewController.h
//  AgendaDeContatos
//
//  Created by Fabrício Silva on 1/14/16.
//  Copyright © 2016 Fabrício Silva. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ContatoDao.h"

@interface ViewController : UIViewController

@property IBOutlet UITextField *nome;
@property IBOutlet UITextField *telefone;
@property IBOutlet UITextField *endereco;
@property IBOutlet UITextField *site;
@property IBOutlet UITextField *email;

@property ContatoDao *dao;
@property Contato *contato;

@end

