/*Q12. Write a program using a for loop to calculate the factorial of a given number.*/
#include <stdio.h>
int main()
{
    int a, b;
    int fac = 1;
    scanf("%d", &a);
    for (b = 1; b <= a; b++)
    {
        fac = fac * b;
    }
    printf("factorial of %d is %d\n", a, fac);
    return 0;
}