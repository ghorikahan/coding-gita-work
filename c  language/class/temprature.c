#include<stdio.h>
int main(){
    float a;
    scanf("%f",&a);
    if(a>=35.0){
        printf("very hot");
    }
    else if(a>=25.0){
         printf("warm and sunny");
    }
    else if(a>=15.0){
         printf("cold today");
    }
    else{
         printf("it's cold");
    }
    return 0;
}