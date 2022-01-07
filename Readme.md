## API FAKE 
## Simula um controle de agendamentos de voos
<br/>

### Tecnologias usadas
* Javascript
* Nodejs
* Expressjs
* PostegreSQL
<br/>

### Estrutura do projeto
    root
        |_/ src
              |_/ controller 
                           |_ 
              |_/ model 
              |_/ router 
              |_/ services 
<br/>

### APIs endpoint
<table>
 
  <theader>
    <tr>
    <th>method</th>
    <th>endpoint</th>
    <th>description</th>
    </tr>
  </theader>

  <tbody>
    <tr>
       <td><strong>base_url:</strong></td>
       <td><strong>http://localhost:3001/api</strong></td>
       <td><strong>API</strong></td>
    </tr> 
     <tr>
       <td>GET</td>
       <td>/todos-os-voos</td>
       <td>consulta todos os voos</td>
    </tr>
     <tr>
       <td>GET</td>
       <td>/voos-de-partida</td>
       <td>seleciona apenas voos de partida</td>
    </tr>
    <tr>
       <td>POST</td>
       <td>/agendar-voo</td>
       <td>insere novos voos</td>
    </tr>
    <tr>
       <td>PUT</td>
       <td>/atualizar/${id}</td>
       <td>atualiza dados de voos</td>
    </tr><tr>
       <td>DELETE</td>
       <td>/delete/${id}</td>
       <td>cancela voos agendados</td>
    </tr>
  </tbody>

</table>