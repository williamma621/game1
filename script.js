current_qi = 0
max_qi = 1
current_age = 0
max_age = 100
qi_steps = ["练气","筑基","金丹","元婴"]
base_max_ages_step = [100,200,500,1000]
levels = ["一层","二层","三层","四层","五层","六层","七层","八层","九层","十层","十一层","十二层","十三层","小圆满","大圆满"]
current_step = 0
current_levels = 0
current_qi_increase_factor = 1
max_qi_increase_factor = 1
max_age_increase_factor = 10

function set_basic_stats(){
    document.getElementById("current_qi").innerHTML = current_qi
    document.getElementById("max_qi").innerHTML = max_qi
    document.getElementById("current_age").innerHTML = current_age
    document.getElementById("max_age").innerHTML = max_age
    document.getElementById("steps").innerHTML = qi_steps[current_step]
    document.getElementById("levels").innerHTML = levels[current_levels]
}
function adjust_factors(){

    current_qi_increase_factor = (current_levels+1)*(10**current_step)
    max_qi_increase_factor = max_qi
}


function levelup(){
  if (current_qi >= max_qi){
    adjust_factors()
    current_qi -= max_qi
    max_qi+=max_qi_increase_factor
    current_levels+=1
    set_basic_stats()
  }
}

function cultivate(){
  adjust_factors()
  current_qi += current_qi_increase_factor
  current_age +=1
  set_basic_stats()

}

function travel(){
  current_age +=1

  switch(Math.floor(Math.random()*1)){
  case 0:
    adjust_factors()
    current_qi += (current_step+1)*(10-Math.floor(Math.log2(Math.random()*1024)))
    set_basic_stats()
    break
  case 1:
    break
  }
}

function breakthrough(){
  if (current_levels >= 9){
    current_step +=1
    max_qi = 1000**current_step
    max_age += base_max_ages_step[current_step] - base_max_ages_step[current_step-1]

    current_levels = 0
    current_qi = 0
  }
  set_basic_stats()
}