#include <stdio.h>

int main() {
    
    int i,j;
   
    char star = '*';
    
    for(i=1;i<=5;i++){
        for(j=1;j<=5;j++){
            if(i+j > 5 ){
                printf(" ");
            }
            else{
                 printf("%c",star);
            }
        }
        printf("\n");
    }

    return 0;
}