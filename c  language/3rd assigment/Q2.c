/*Q2.
Write a program to input your temperature in Celsius and check if it is fever (≥ 37.5).
ans:-*/
#include <stdio.h>

int main()
{
     int a;
     scanf("%d",&a);
     if(a>37.5){
         printf("you have %d degree celsius fever , rest for some days",a);
         
     }
     else{
         printf("you have %d degree celsius fever",a);
     }
    return 0;
}
 