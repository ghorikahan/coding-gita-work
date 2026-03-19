 #include<stdio.h>
int main(){
     
     int col,row;
     
      
      
      for(row=65;row<=69;row++){
          for(col=65;col<=row;col++){
              printf("%c",col);
          }
          printf("\n");
      }
      
      return 0;
}
