/*
ID: german.1
PROG: gift1
LANG: C++
*/
#include <map>
#include <iostream>
#include <fstream>
#include <string>
 
using namespace std;   
 
int main() {  
    ofstream fout("gift1.out"); 
    ifstream fin("gift1.in");
    std::map<std::string,int> users;
    int np,i, amount, gifts, mod;
    string name;
     
    fin >> np;
    string usersFinal[np];
    for(i=0;i<np;i++){
      fin >> name;
      users[name] = 0;
      usersFinal[i] = name;
    }
    
    while(!fin.eof()){
      fin>>name;
      fin>>amount>>gifts;
      if(gifts != 0){    
          users[name] += -1*amount;
          mod = amount%gifts;
          
          if(mod != 0) users[name] += mod;
          
          for(i=0;i<gifts;i++){
            fin>>name;
            users[name] += amount/gifts;
          }
      }
    }
    
    for(i=0;i<np;i++){
      fout<<usersFinal[i]<<" "<<users[usersFinal[i]]<<endl;
    }
     
    return 0; 
}
