idade = prompt("Digite dua idade: ")
if(idade < 18){
  alert("Você não pode jogar")
  }else {
  escolhaJogador = prompt("Escolha: 1-Pedra, 2-Papel, 3-Tesoura: ")
  escolhaComputador = Math.floor(Math.random() *3) + 1;
  
  if(escolhaJogador == escolhaComputador){
    alert("Empate!")
  }
  
  if(escolhaJogador == 1){
    if(escolhaComputador == 2){
      alert("Computador Ganhou! Escolheu papel")
    }
    if(escolhaComputador == 3){
      alert("Você ganhou! Computador escolheu tesoura")
    }
  }
  
  if(escolhaJogador == 2){
    if(escolhaComputador == 3){
      alert("Computador Ganhou! Escolheu tesoura")
    }
    if(escolhaComputador == 1){
      alert("Você ganhou! Computador escolheu Pedra")
    }
  }
  if(escolhaJogador == 3){
    if(escolhaComputador == 1){
      alert("Computador Ganhou! Escolheu pedra")
    }
    if(escolhaComputador == 2){
      alert("Você ganhou! Computador escolheu papel")
    }
  }
}
