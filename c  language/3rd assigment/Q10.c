/*Q10.
Write a program to input an integer and check if it is within the range 100 to 200.
ans:-*/#include <stdio.h>

int main()
{ int a;
scanf("%d",&a);
if(a>100 && a<200){
    printf("%d is in the range of 100 to 200",a);
}
else{
    printf("%d in not in the range of 100 to 200",a);
}




	return 0;
}