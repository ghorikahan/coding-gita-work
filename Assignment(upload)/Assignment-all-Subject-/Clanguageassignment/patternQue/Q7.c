#include<stdio.h>
int main(){
      
      int col,row;
      char star='*';
      
      for(row=1;row<=5;row++){
          for(col=1;col<=row;col++){
              printf("%c",star);
          }
          printf("\n");
      }
      
      return 0;
}
