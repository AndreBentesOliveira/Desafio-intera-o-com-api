import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent implements OnInit {

  cadastro!: Cadastro;

  constructor(private cadastroService: CadastroService,
              private router: Router,
              private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.cadastroService.readById(+id).subscribe(cadastro =>{
      this.cadastro = cadastro
    })
  }

  deleteCadastro(): void {
    const id: number = this.cadastro.id as number
    
    this.cadastroService.deleteCadastro(id).subscribe(()=>{
      this.cadastroService.showMessage('Cadastro Deletado')
    });
  }
}
