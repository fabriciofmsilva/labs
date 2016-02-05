//
//  ListaContatosViewController.m
//  AgendaDeContatos
//
//  Created by Fabrício Silva on 1/21/16.
//  Copyright © 2016 Fabrício Silva. All rights reserved.
//

#import "ListaContatosViewController.h"
#import "ViewController.h"

@implementation ListaContatosViewController

-(id) init {
    
    self = [super init];
   
    UIBarButtonItem *botaoForm = [[UIBarButtonItem alloc] initWithBarButtonSystemItem:UIBarButtonSystemItemAdd target:self action:@selector(exibeFormulario)];
    
    self.navigationItem.rightBarButtonItem = botaoForm;
    self.navigationItem.title = @"Contatos";
    
    return self;
    
}

-(void) exibeFormulario {
    UIStoryboard *storyBoard = [UIStoryboard storyboardWithName:@"Main" bundle:nil];
    UIViewController *form = [storyBoard instantiateViewControllerWithIdentifier:@"Form-Contato"];
    [self.navigationController pushViewController:form animated:YES];
}

@end
