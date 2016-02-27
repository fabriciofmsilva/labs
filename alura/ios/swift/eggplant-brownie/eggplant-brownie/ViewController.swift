//
//  ViewController.swift
//  eggplant-brownie
//
//  Created by Fabrício Silva on 2/18/16.
//  Copyright © 2016 Fabrício Silva. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet var nameField:UITextField!;
    @IBOutlet var happinessField:UITextField!;

    @IBAction func add() {
        var name = nameField.text;
        var happiness = happinessField.text;
        print("eaten: \(name) \(happiness)");
    }

}

