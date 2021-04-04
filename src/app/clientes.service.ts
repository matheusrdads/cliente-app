import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //respponsavel por fazer as requisiçoes pro back end
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar(cliente : Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.nome = 'fulano de tal';
    cliente.cpf = '5558899';
    return cliente;
  }
}
