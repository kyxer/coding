/*
ID: german.1
PROG: friday
LANG: C++
*/
#include <iostream>
#include <fstream>
 
using namespace std;
 
int daysinmonth(int month, int year){
 
 year += 1900;
 
 switch(month){
  case 1:
       return ((year % 4) || (!(year%100) && (year%400))) ? 28 : 29;
  case 8:
  case 3:
  case 5:
  case 10:
   return 30;
  default:
   return 31;
 }
}
 
int main() {
 ofstream fout ("friday.out");
 ifstream fin ("friday.in");

 int N, i, m, days = 0, result[7] = {0};

 fin >> N;
 
 for(i = 0; i < N; i++){
  for(m = 0; m < 12; m++){
   result[((days + 13) % 7)]++;
   days = days + daysinmonth(m, i);
  }
 }
 for(int i = 0; i < 7; ++i){
  fout << result[(i+6)%7];
  if(i == 6) fout << endl;
  else fout << " ";
 }
 return 0;
}
