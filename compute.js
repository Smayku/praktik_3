export function Calcualte(a, b, answer, check) {
  if(!check){
  answer = (a*b)/2
  }else{
  answer = 1/2*(a*b)
  }
  return answer;
}
export default Calcualte;
