/*Q5.
Write a program to input your age and check:

"Child" if < 13
"Teen" if 13 to 19
"Adult" if 20 to 59
"Senior" if ≥ 60
ans:-*/
#include <stdio.h>

int main()
{	int a;
printf("enter your  age :-");
	scanf("%d",&a);
	if(a<13){
	    printf("Child");
	}
	else if(a>13 && a<19){
	    printf("Teen");
	}
	else if(a>20 && a<59){
	    printf("Adult");
	}
	else{
	    printf(" Senior");
	}
	


	return 0;
}