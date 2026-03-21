/*Q15.
Write a program to input two integers and check if both are divisible by 3.
ans:-*/
# include <stdio.h>

int main()
{
     int a,b;
     scanf("%d %d",&a,&b);
     if(a%3==0 && b%3==0){
         printf("both are  divisible by 3");
     }
     else {
         printf("both are not divisible by 3");
     }
     
     

    return 0;
}