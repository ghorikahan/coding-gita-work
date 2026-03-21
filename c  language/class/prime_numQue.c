/*arnstrong series 
srmstrong series
febonachinachi series*/
#include<stdio.h>
int main(){
    int num;
    scanf("%d",&num);
    int track=0;
    for ( int a = 0; a <= num-1; a++){
       if(num%a==0){
        track=1;
        break;
       }
    }
    if(track==0){
        printf("PRIME NUMBER");
    }
    else{
        printf("is not a prime number");
    }
    
    return 0;
}