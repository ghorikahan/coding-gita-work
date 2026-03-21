/*Q9.
Write a program to input your monthly salary and calculate yearly salary.
Check if yearly salary is above ₹500,000.
ans:-*/
#include <stdio.h>

int main()
{	  int a;
printf("enter your monthly salary:-");

scanf("%d",&a);
int c = 12*a;
if(c>500000){
    printf("your salary is more than 500000");
}
else{
    printf("your salary is less then 500000");
}





	return 0;
}