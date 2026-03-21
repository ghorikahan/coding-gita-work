/*Q 13)
Write a program to input your marks in 5 subjects and calculate percentage.
Use if-else-if to print grades:

A for ≥ 80%
B for ≥ 60%
C for ≥ 40%
F for < 40%
ans:-*/ 
#include <stdio.h>

int main()
{	int a,b,c,d,e;
	scanf("%d %d %d %d %d",&a,&b,&c,&d,&e);
	 int percentage=(a+b+c+d+e)/500;
	 if(percentage>=80){
	     printf("you got A grade");
	 }
	 else if(percentage>=60){
	     printf("you got B grade");
	     
	 }
	  else if(percentage>=40){
	     printf("you got C grade");
	     
	 }
	 else{
	     printf("you got F grade");
	     
	 }
	 
	





	return 0;
}