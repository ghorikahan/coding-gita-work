/*Q6.
Write a program to input two numbers and check if first is divisible by second.
ans:-*/
#include <stdio.h>

int main()
{	 int a,b;
     scanf("%d %d",&a,&b);
     if(a%b==0){
         printf("%d is divisible by %d",a,b);
     }
     else{
         printf("%d is not divisible by %d",a,b);
     }

	


	return 0;
}
