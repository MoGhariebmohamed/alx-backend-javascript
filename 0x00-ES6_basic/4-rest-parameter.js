export default function returnHowManyArguments(...MyParams) {
let allparam = 1;
  for (allparam in MyParams) {
    allparam ++;
}
return allparam;
}