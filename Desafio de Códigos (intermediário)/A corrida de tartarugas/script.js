for(let j = 0; j<3;j++)
{
  let number = parseInt(gets());
  let velocity = gets().split(" ");
  let max = 0;
  let level = 0;

  //pegar a velocidade máxima
  for(i = 0 ; i < number; i++){
    if(max < parseInt(velocity[i])){
      max = parseInt(velocity[i]);
    }
  }
  
  if(max < 10){
    level = 1;
  }
  else if(max >= 10  && max < 20){
    level = 2;
  } 
  else{
    level = 3;
  }
  print(level);
}