#include<stdio.h>
int main(){
     
     int col,row;
      
      
      for(row=1;row<=5;row++){
          for(col=1;col<=row;col++){
              printf("%d",col);
          }
          printf("\n");
      }
      
      return 0;
}

