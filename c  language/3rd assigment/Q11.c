/*Q11.
Write a program to input two integers and check whether their sum is even or odd.
ans:-*/
#include <stdio.h>

int main()
{ int a,b;
scanf("%d %d",&a,&b);
 int c=a+b;
 if(c%2==0){
     printf("%d is a even number",c);
 }
 else{
     printf("%d is a odd number",c);
 }




	return 0;
}